import type {AnyEnumerableConstructor, EnumerableConstructor}           from "enumerable/EnumerableConstructor.type"
import type {CollectionHolder}                                          from "collection/CollectionHolder"
import type {Enumerable}                                                from "enumerable/Enumerable"
import type {EnumerableName}                                            from "enumerable/Enumerable.types"
import type {Nullable, NullOr, PossibleString, PossibleStringOrNumeric} from "../../type"

import {GenericCollectionHolder}                     from "../collection/GenericCollectionHolder"
import {InvalidEnumerableException}                  from "./exception/InvalidEnumerableException"
import {InvalidInstanceException}                    from "./exception/InvalidInstanceException"
import {NullEnumerableException}                     from "./exception/NullEnumerableException"
import {NullInstanceException}                       from "./exception/NullInstanceException"
import {UnhandledValueException}                     from "./exception/UnhandledValueException"
import {ForbiddenNumericException}                   from "./exception/ForbiddenNumericException"
import {IndexOutOfBoundException}                    from "./exception/IndexOutOfBoundException"
import {ForbiddenEnumFunctionException}              from "./exception/ForbiddenEnumFunctionException"
import {ForbiddenInheritedEnumerableMemberException} from "./exception/ForbiddenInheritedEnumerableMemberException"
import {InvalidEnumerableReferenceException}         from "./exception/InvalidEnumerableReferenceException"
import {NonExistantReferenceException}               from "./exception/NonExistantReferenceException"

const {POSITIVE_INFINITY, NEGATIVE_INFINITY, MAX_VALUE, isNaN,} = Number,
    MAX_VALUE_AS_BIGINT = BigInt(MAX_VALUE,)

export abstract class Enum<ORDINAL extends number = number, NAME extends string = string, >
    implements Enumerable<ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    /**
     * The excluded names that are an instance of the current instance.
     *
     * Note that giving an invalid name will result in an exception on the first time it is initialised.
     * From either {@link Enum.name get name}, {@link EnumerableConstructor.getValue static getValue()},
     * {@link EnumerableConstructor.values static get values}, {@link EnumerableConstructor.ordinals static get ordinals} or
     * {@link EnumerableConstructor.names static get names}
     */
    protected static readonly _EXCLUDED_NAMES: readonly string[] = []
    /**
     * The default name stored for the current instance at the initialisation.
     *
     * Note that this instance will not be counted in the
     * {@link EnumerableConstructor.values static get values} of the current instance.
     */
    protected static readonly _DEFAULT_NAME = "_DEFAULT"
    /**
     * The parent of the current instance.
     *
     * This value is referred when a <u>child enum class</u> extends another <u>enum class</u>.
     *
     * @see Enum.getValueOn
     */
    protected static readonly _PARENT = Enum as unknown as EnumerableConstructor<any, any>


    static readonly #LAST_ORDINAL_MAP = new Map<EnumerableConstructor, number>()
    static readonly #NAME_MAP = new Map<Enumerable, string>()
    static readonly #DEFAULT_MAP = new Map<EnumerableConstructor, NullOr<Enumerable>>()
    static readonly #VALUES_MAP = new Map<EnumerableConstructor, CollectionHolder<Enumerable>>()
    static readonly #NAMES_MAP = new Map<EnumerableConstructor, CollectionHolder<string>>()
    static readonly #ORDINALS_MAP = new Map<EnumerableConstructor, CollectionHolder<number>>()

    static readonly #NUMBER_ONLY_REGEX = /^-?\d+(\.\d+)?$/
    static readonly #INTEGER_ONLY_REGEX = /^-?\d+$/
    static readonly #PROTOTYPE_NAME = "prototype"
    // static readonly #RESERVED_JAVASCRIPT_FUNCTION_NAMES = ["prototype", "name", "length", "apply", "call", "bind", "caller",] as const
    // static readonly #RESERVED_JAVASCRIPT_OBJECT_NAMES = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf",] as const
    // static readonly #FORBIDDEN_ENUM_MEMBERS = ["_EXCLUDED_NAMES", "_DEFAULT_NAME", "_PARENT",] as const
    static readonly #FORBIDDEN_NUMERIC_NAME = ["NaN", "-Infinity", "Infinity",] as const
    static readonly #FORBIDDEN_ENUM_FUNCTION = ["getDefaultOn", "setDefaultOn", "getValueOn", "getValuesOn", "getNamesOn", "getOrdinalsOn",] as const
    static readonly #FORBIDDEN_INHERITED_MEMBERS = ["default", "setDefault", "values", "names", "ordinals",] as const
    static readonly #TO_STRING_TAG: EnumerableName = "Enum"

    #name?: NAME
    readonly #ordinal: ORDINAL

    //#endregion -------------------- Fields --------------------

    /**
     * Create a new {@link Enum} instance with an {@link Enum.ordinal} defined at the construction.
     *
     * Note that the use of {@link Enum._static} is present so it <b>reflectively</b> set the instance received to <b>this</b>.
     */
    protected constructor() {
        // @ts-ignore
        const staticReference = this._static
        Reflect.set(staticReference, this.#ordinal = Enum.#getLastOrdinalOn(staticReference,), this,)
    }

    //#region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name ??= Enum.#getNameOn(this,)
    }

    public get ordinal(): ORDINAL {
        return this.#ordinal
    }

    /**
     * Get the constructor instance for the {@link Enumerable} as an anchor point.
     * This reference should <b>never</b> change during the code execution (in the browser).
     *
     * But, it does not restrain inheritance of a base class.
     *
     * <code>
     *     class ChildEnum extends Enum {
     *         _static = ChildEnum
     *     }
     * </code>
     *
     * <code>
     *     class SecondChildEnum extends ChildEnum {
     *         _static = SecondChildEnum
     *     }
     * </code>
     *
     * Of course, using typescript, the signature should be:
     *
     * <code>
     *     _static: {@link EnumerableConstructor}&#60;Ordinal, Name>
     * </code>
     */
    protected abstract get _static(): EnumerableConstructor<ORDINAL, NAME>

    public readonly [Symbol.toStringTag]: EnumerableName = Enum.#TO_STRING_TAG

    public static get valuesMap() {
        return this.#VALUES_MAP
    }

    public static get namesMap() {
        return this.#NAMES_MAP
    }

    public static get ordinalsMap() {
        return this.#ORDINALS_MAP
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Methods (initialisation) --------------------

    /**
     * Initialise every map based on the instance received.
     * It does not validate if the elements are already existant.
     * So, no calls could be made twice in the same instance.
     *
     * The initialisation includes:
     *  - default <i>(mutable)</i>
     *  - values <i>(final)</i>
     *  - names <i>(final)</i>
     *  - ordinals <i>(final)</i>
     *
     * @param instance The instance to initialise its maps
     */
    static #initialiseMapsOn(instance: EnumerableConstructor,): void
    static #initialiseMapsOn(instance: EnumerableConstructor & typeof Enum,): void {
        //TODO add Object.freeze to the collection in the initialisation
        //TODO add validation to some forbidden names
        const nameMap = this.#NAME_MAP,
            everyFields = Object.entries(Object.getOwnPropertyDescriptors(instance,),)
                .filter(([, property,],) => property.get == null && property.set == null,)//No getter & setter
                .filter(([name,],) => name !== this.#PROTOTYPE_NAME,)//No prototype
                .filter(([name,],) => !instance._EXCLUDED_NAMES.includes(name,),)//No instance from the custom excluded name
                .filter(([name,],) => !this.#NUMBER_ONLY_REGEX.test(name,),)//No instance from the ordinal
                .filter(([, property,],) => property.value instanceof instance,)//The value is an instance of the Enum (specified)
                .map(([name, property,]) => [name, property.value as Enumerable,] as const,),
            instanceDefaultName = instance._DEFAULT_NAME

        const defaultFieldIndex = everyFields.findIndex(([name,],) => name === instanceDefaultName,),
            defaultElement = defaultFieldIndex === -1 ? null : everyFields.splice(defaultFieldIndex, 1,)[0]![1] ?? null

        this.#VALUES_MAP.set(instance, new GenericCollectionHolder(everyFields.map(([, enumerable,],) => enumerable,),),)
        this.#NAMES_MAP.set(instance, new GenericCollectionHolder(everyFields.map(([name,],) => name,),),)
        this.#ORDINALS_MAP.set(instance, new GenericCollectionHolder(everyFields.map((_, index,) => index,),),)
        this.#DEFAULT_MAP.set(instance, defaultElement,)

        everyFields.forEach(([name, enumerable,],) => nameMap.set(enumerable, name,),)
    }

    static #getValueOnMapByEnumerable<T, >(key: Enumerable & Enum, map: Map<Enumerable, T>,): T {
        if (!map.has(key,))
            this.#initialiseMapsOn(key._static,)
        return map.get(key)!
    }

    static #getValueOnMapByEnumerableConstructor<T, >(key: Nullable<EnumerableConstructor>, map: ReadonlyMap<EnumerableConstructor, T>,): T {
        this.#validateEnumerableConstructor(key,)
        if (!map.has(key,))
            this.#initialiseMapsOn(key,)
        return map.get(key)!
    }

    //#endregion -------------------- Methods (initialisation) --------------------
    //#region -------------------- Methods (validation) --------------------

    /**
     * Validate that the instance is
     *  - not null
     *  - is not {@link Enum}
     *  - is an instance of {@link Enum.constructor}
     *
     * @param instance The instance to validate
     */
    static #validateEnumerableConstructor(instance: Nullable<EnumerableConstructor>,): asserts instance is EnumerableConstructor {
        if (instance == null)
            throw new NullInstanceException()
        // @ts-ignore
        if (instance == Enum)
            throw new InvalidInstanceException("Invalid instance. The instance received cannot be \"Enum.constructor\". Use an enum child instead.", instance,)
        if (!(instance instanceof Enum.constructor))
            throw new InvalidInstanceException("Invalid instance. The instance received is not of type \"Enum.constructor\".", instance,)
        // return this
    }

    static #validateSameStaticOnEnumerable<ENUMERABLE extends Enumerable, >(instance: EnumerableConstructor, value: Enum,): ENUMERABLE {
        if (value._static !== instance)
            throw new InvalidEnumerableException(`The value received is not the same instance (${value._static.constructor.name}) as the one expected (${instance.name}).`, instance, value,)
        return value as unknown as ENUMERABLE
    }

    static #validateStringOrNumber(value: PossibleStringOrNumeric,): | string | number {
        const primitiveValue = value.valueOf()
        switch (typeof primitiveValue) {
            case "string":
                if (this.#FORBIDDEN_NUMERIC_NAME.includes(primitiveValue as never,))
                    throw new ForbiddenNumericException(`Forbidden numeric. The string value "${value}" cannot have any reference in (${this.#FORBIDDEN_NUMERIC_NAME.join(", ")}).`, value,)
                if (this.#FORBIDDEN_ENUM_FUNCTION.includes(primitiveValue as never,))
                    throw new ForbiddenEnumFunctionException(`Forbidden name. The value "${value}" cannot be a reference of the Enum static methods (${this.#FORBIDDEN_ENUM_FUNCTION.map(it => `"${it}()"`).join(", ")}).`, value as PossibleString,)
                if (this.#FORBIDDEN_INHERITED_MEMBERS.includes(primitiveValue as never,))
                    throw new ForbiddenInheritedEnumerableMemberException(`Forbidden inherited member. The value "${value}" cannot be an inherited member of the inherited Enum static methods (${this.#FORBIDDEN_INHERITED_MEMBERS.map(it => `"${it}"`).join(", ")}).`, value as PossibleString,)

                if (!this.#NUMBER_ONLY_REGEX.test(primitiveValue,))
                    break //Validations are finished (no possible number)

                if (this.#INTEGER_ONLY_REGEX.test(primitiveValue,)) {
                    const bigIntValue = BigInt(primitiveValue,)
                    if (bigIntValue.toString() == primitiveValue) {
                        if (bigIntValue < 0n)
                            throw new IndexOutOfBoundException(`The string value "${value}" interpreted cannot be under 0.`, value,)
                        if (bigIntValue > MAX_VALUE_AS_BIGINT)
                            throw new IndexOutOfBoundException(`The string value "${value}" interpreted cannot be over the maximum value of a number.`, value,)
                    }
                }

                const numberValue = Number(primitiveValue,)
                if (numberValue.toString() == primitiveValue) {
                    if (numberValue % 1 != 0)
                        throw new UnhandledValueException(`The string value "${value}" interpreted cannot be a floating value.`, value,)
                    if (numberValue < 0)
                        throw new IndexOutOfBoundException(`The string value "${value}" interpreted cannot be under 0.`, value,)
                }

                break
            case "number":
                if (isNaN(primitiveValue,))
                    throw new ForbiddenNumericException("Forbidden numeric. The value cannot be a NaN.", value,)
                if (primitiveValue == NEGATIVE_INFINITY)
                    throw new ForbiddenNumericException("Forbidden numeric. The value cannot be the negative infinity.", value,)
                if (primitiveValue == POSITIVE_INFINITY)
                    throw new ForbiddenNumericException("Forbidden numeric. The value cannot be the positive infinity.", value,)
                if (primitiveValue % 1 != 0)
                    throw new UnhandledValueException(`The number value "${value}" cannot be a floating value.`, value,)
                if (primitiveValue < 0)
                    throw new IndexOutOfBoundException(`The number value "${value}" cannot be under 0.`, value,)
                break
            case "bigint":
                if (primitiveValue < 0n)
                    throw new IndexOutOfBoundException(`The bigint value "${value}" cannot be under 0.`, value,)
                if (primitiveValue > MAX_VALUE_AS_BIGINT)
                    throw new IndexOutOfBoundException(`The bigint "${value}" cannot be over the maximum value of a number.`, value,)
                break
        }
        return typeof primitiveValue == "bigint" ? Number(primitiveValue) : primitiveValue
    }

    static #validateIsEnumerable<ENUMERABLE extends Enumerable, >(instance: EnumerableConstructor, key: | string | number, value: | PossibleStringOrNumeric | Enumerable,): ENUMERABLE {
        if (!Reflect.has(instance, key,))
            throw new NonExistantReferenceException(`No value exist in "${instance.name}.${value}".`, value,)
        const returnedValue = Reflect.get(instance, key,)
        if (!(returnedValue instanceof Enum))
            throw new InvalidEnumerableReferenceException(`The value "${instance.name}.${value}" is not an instance of "${instance.name}"`, value,)
        if (returnedValue._static !== instance)
            throw new InvalidEnumerableException(`The value is not the same instance (${returnedValue._static.constructor.name}) as the one expected (${instance.name}).`, instance, returnedValue,)
        return returnedValue as unknown as ENUMERABLE
    }

    static #throwInvalidScenarios(instance: EnumerableConstructor, value: unknown,): never {
        if (this.#isABoolean(value,))
            throw new UnhandledValueException(`A boolean value cannot be received in "${instance.name}.getValue(value)".`, value,)
        if (this.#isASymbol(value,))
            throw new UnhandledValueException(`A symbol value cannot be received in "${instance.name}.getValue(value)".`, value,)
        throw new UnhandledValueException(`The value received is not of type string, number, bigint or enumerable. It cannot be received in "${instance.name}.getValue(value)".`, value,)
    }

    //#endregion -------------------- Methods (validation) --------------------
    //#region -------------------- Methods (is) --------------------

    /**
     * Validate that the value is either a {@link String}, {@link Number} or {@link BigInt} as a primitive of an object
     *
     * @param value The value to validate its type
     */
    static #isAStringOrNumeric(value: unknown,): value is PossibleStringOrNumeric {
        return typeof value == "string" || typeof value == "number" || typeof value == "bigint" || value instanceof String || value instanceof Number || value instanceof BigInt
    }

    /**
     * Validate that the value is either a {@link Boolean} (primitive or object)
     *
     * @param value The value to validate its type
     */
    static #isABoolean(value: unknown,): value is (| boolean | Boolean) {
        return typeof value == "boolean" || value instanceof Boolean
    }

    /**
     * Validate that the value is either a {@link Symbol} (primitive or object)
     *
     * @param value The value to validate its type
     */
    static #isASymbol(value: unknown,): value is(| symbol | Symbol) {
        return typeof value == "symbol" || value as any instanceof Symbol
    }

    //#endregion -------------------- Methods (is) --------------------

    /**
     * Get the last ordinal From a specified instance (plus 1).
     * Or 0 if it is the first element.
     *
     * @param instance The instance (as the key) for the map
     * @see Enum.ordinal
     * @see Enumerable.ordinal
     */
    static #getLastOrdinalOn<ORDINAL extends Enumerable["ordinal"], >(instance: EnumerableConstructor<ORDINAL>,): ORDINAL
    static #getLastOrdinalOn(instance: EnumerableConstructor,) {
        const map = this.#LAST_ORDINAL_MAP
        return map.has(instance,)
            ? map.set(instance, map.get(instance)! + 1,).get(instance,)
            : map.set(instance, 0,).get(instance,)
    }

    /**
     * Get the name of the current instance (stored in the declaration file).
     *
     * @param instance The instance (as the key) for the map
     * @see Enum.name
     * @see Enumerable.name
     * @canInitialiseMaps
     */
    static #getNameOn<ENUMERABLE extends Enumerable, >(instance: ENUMERABLE,): ENUMERABLE["name"]
    static #getNameOn(instance: Enum,) {
        return this.#getValueOnMapByEnumerable(instance, this.#NAME_MAP,)
    }


    public static getDefaultOn<ENUMERABLE extends Enumerable, >(instance: PossibleEnumerableConstructorByEnumerable<ENUMERABLE>,): ENUMERABLE
    public static getDefaultOn(instance: Nullable<EnumerableConstructor & typeof Enum>,) {
        const defaultValue = this.#getValueOnMapByEnumerableConstructor(instance, this.#DEFAULT_MAP)
        if (defaultValue == null)
            throw new NullEnumerableException(`Unable to get the default value. There is no default stored for "${instance!.name}".\n\tTry using the the "${instance!._DEFAULT_NAME}" (at declaration), call "${instance!.name}.default = value" or call "Enum.setDefaultOn(instance, value)" beforehand.`,)
        return defaultValue
    }

    public static setDefaultOn<ENUMERABLE extends Enumerable, ENUMERABLE_CONSTRUCTOR extends PossibleEnumerableConstructorByEnumerable<ENUMERABLE> = PossibleEnumerableConstructorByEnumerable<ENUMERABLE>, >(instance: ENUMERABLE_CONSTRUCTOR, value: PossibleValueByEnumerable<ENUMERABLE>,): ENUMERABLE_CONSTRUCTOR
    public static setDefaultOn(instance: Nullable<EnumerableConstructor>, value: PossibleValueReceived,) {
        this.#validateEnumerableConstructor(instance,)
        if (value == null) {
            this.#DEFAULT_MAP.set(instance, null,)
            return instance
        }
        if (value instanceof Enum) {
            this.#DEFAULT_MAP.set(instance, this.#validateSameStaticOnEnumerable(instance, value,),)
            return instance
        }
        this.#DEFAULT_MAP.set(instance, instance.getValue(this.#validateStringOrNumber(value,),),)
        return instance
    }

    public static getValueOn<ENUMERABLE extends Enumerable, >(instance: PossibleEnumerableConstructorByEnumerable<ENUMERABLE>, value: PossibleValueByEnumerable<ENUMERABLE>,): ENUMERABLE
    public static getValueOn<ENUMERABLE extends Enum, >(instance: Nullable<EnumerableConstructor & typeof Enum>, value: PossibleValueReceived,): ENUMERABLE {
        this.#validateEnumerableConstructor(instance,)
        if (value == null)
            throw new NullEnumerableException(`Unable to get the value. The value received for the instance ${instance.name} cannot be null (or undefined).`,)
        const parent = instance._PARENT as EnumerableConstructor & typeof Enum

        return parent !== Enum
            ? Enum.getValueOn(parent, value,)
            : value instanceof Enum
                ? this.#validateSameStaticOnEnumerable(instance, value,)
                : this.#isAStringOrNumeric(value,)
                    ? this.#validateIsEnumerable(instance, this.#validateStringOrNumber(value,), value,)
                    : this.#throwInvalidScenarios(instance, value,)
    }

    public static getValuesOn<ENUMERABLE_CONSTRUCTOR extends AnyEnumerableConstructor, >(instance: Nullable<ENUMERABLE_CONSTRUCTOR>,): ENUMERABLE_CONSTRUCTOR["values"]
    public static getValuesOn(instance: Nullable<EnumerableConstructor>,) {
        return this.#getValueOnMapByEnumerableConstructor(instance, this.#VALUES_MAP,)
    }

    public static getNamesOn<ENUMERABLE_CONSTRUCTOR extends AnyEnumerableConstructor, >(instance: Nullable<ENUMERABLE_CONSTRUCTOR>,): ENUMERABLE_CONSTRUCTOR["names"]
    public static getNamesOn(instance: Nullable<EnumerableConstructor>,) {
        return this.#getValueOnMapByEnumerableConstructor(instance, this.#NAMES_MAP,)
    }

    public static getOrdinalsOn<ENUMERABLE_CONSTRUCTOR extends AnyEnumerableConstructor, >(instance: Nullable<ENUMERABLE_CONSTRUCTOR>,): ENUMERABLE_CONSTRUCTOR["ordinals"]
    public static getOrdinalsOn(instance: Nullable<EnumerableConstructor>,) {
        return this.#getValueOnMapByEnumerableConstructor(instance, this.#ORDINALS_MAP,)
    }

    public toString(): string {
        return this.name
    }

    //#endregion -------------------- Methods --------------------

}

type PossibleValueReceived = Nullable<| PossibleStringOrNumeric | Enum>
export type PossibleEnumerableConstructorByEnumerable<ENUMERABLE extends Enumerable, > = Nullable<EnumerableConstructor<ENUMERABLE["ordinal"], ENUMERABLE["name"], any>>
export type PossibleValueByEnumerable<ENUMERABLE extends Enumerable, > = Nullable<| PossibleStringOrNumeric | Enumerable<ENUMERABLE["ordinal"], ENUMERABLE["name"]>>