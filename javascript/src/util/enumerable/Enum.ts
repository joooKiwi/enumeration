import type {AnyEnumerableConstructor, EnumerableConstructor}                                                             from "enumerable/EnumerableConstructor.type"
import type {CollectionHolder}                                                                                            from "collection/CollectionHolder"
import type {Enumerable}                                                                                                  from "enumerable/Enumerable"
import type {EnumerableName, EnumerableToPrimitive, PossibleEnumerableConstructorByEnumerable, PossibleValueByEnumerable} from "enumerable/Enumerable.types"
import type {Nullable, NullOr, PossiblePrimitiveHint, PossibleString, PossibleStringOrNumeric}                            from "../../type"

import {GenericCollectionHolder}                     from "../collection/GenericCollectionHolder"
import {ForbiddenNumericException}                   from "./exception/ForbiddenNumericException"
import {ForbiddenEnumFunctionException}              from "./exception/ForbiddenEnumFunctionException"
import {ForbiddenInheritedEnumerableMemberException} from "./exception/ForbiddenInheritedEnumerableMemberException"
import {IndexOutOfBoundException}                    from "./exception/IndexOutOfBoundException"
import {InvalidEnumerableException}                  from "./exception/InvalidEnumerableException"
import {InvalidEnumerableReferenceException}         from "./exception/InvalidEnumerableReferenceException"
import {InvalidInstanceException}                    from "./exception/InvalidInstanceException"
import {NonExistantReferenceException}               from "./exception/NonExistantReferenceException"
import {NullEnumerableException}                     from "./exception/NullEnumerableException"
import {NullInstanceException}                       from "./exception/NullInstanceException"
import {UnhandledValueException}                     from "./exception/UnhandledValueException"

const {POSITIVE_INFINITY, NEGATIVE_INFINITY, MAX_VALUE, isNaN,} = Number,
    MAX_VALUE_AS_BIGINT = BigInt(MAX_VALUE,),
    {get, getPrototypeOf, has, set,} = Reflect

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

    static readonly #LAST_ORDINAL_MAP = new Map<EnumerableConstructor, number>()
    static readonly #NAME_MAP = new Map<Enumerable, string>()
    static readonly #DEFAULT_MAP = new Map<EnumerableConstructor, NullOr<Enumerable>>()
    static readonly #VALUES_MAP = new Map<EnumerableConstructor, CollectionHolder<Enumerable>>()
    static readonly #NAMES_MAP = new Map<EnumerableConstructor, CollectionHolder<string>>()
    static readonly #ORDINALS_MAP = new Map<EnumerableConstructor, CollectionHolder<number>>()

    static readonly #NUMBER_ONLY_REGEX = /^-?\d+(\.\d+)?$/
    static readonly #INTEGER_ONLY_REGEX = /^-?\d+$/
    static readonly #TO_PRIMITIVE_VALUES = /string|number|default/
    static readonly #PROTOTYPE_NAME = "prototype"
    // static readonly #RESERVED_JAVASCRIPT_FUNCTION_NAMES = ["prototype", "name", "length", "apply", "call", "bind", "caller",] as const
    // static readonly #RESERVED_JAVASCRIPT_OBJECT_NAMES = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf",] as const
    // static readonly #FORBIDDEN_ENUM_MEMBERS = ["_EXCLUDED_NAMES", "_DEFAULT_NAME",] as const
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
        set(staticReference, this.#ordinal = Enum.#getLastOrdinalOn(staticReference,), this,)
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
     * <p>But, it does not restrain inheritance of a base class.<br/>
     *
     * <code>
     *     class ChildEnum extends Enum {
     *         get _static() {
     *             return ChildEnum
     *         }
     *     }
     * </code><br/>
     *
     * <code>
     *     class SecondChildEnum extends ChildEnum {
     *         get _static() {
     *             return SecondChildEnum
     *         }
     *     }
     * </code>
     *
     * <p>Of course, using typescript, the signature should be:<br/>
     *
     * <code>
     *     get _static(): {@link EnumerableConstructor}&#60;Ordinal, Name>
     * </code>
     */
    protected abstract get _static(): EnumerableConstructor<ORDINAL, NAME>

    public [Symbol.toPrimitive]<HINT extends PossiblePrimitiveHint, >(hint: Nullable<HINT>,): EnumerableToPrimitive<HINT, this>
    public [Symbol.toPrimitive](hint: Nullable<PossibleString>,): EnumerableToPrimitive<PossiblePrimitiveHint, this>
    public [Symbol.toPrimitive](hint: Nullable<PossibleString>,): EnumerableToPrimitive<PossiblePrimitiveHint, this> {
        if (hint == null)
            throw new TypeError(`Invalid null hint: The ${this._static.name} cannot be converted to a primitive`)
        if (hint instanceof String)
            return this[Symbol.toPrimitive](hint.valueOf())
        if (!Enum.#TO_PRIMITIVE_VALUES.test(hint))
            throw new TypeError(`Invalid hint "${hint}": The ${this._static.name} cannot be converted to a primitive`)
        return hint == "number" ? this.ordinal : this.name
    }

    public get [Symbol.toStringTag](): EnumerableName {
        return Enum.#TO_STRING_TAG
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

    /**
     * Get (or initialise) the value by the key received
     *
     * @param key the key
     * @param map The map to get or initialise by the key
     */
    static #getValueOnMapByEnumerable<T, >(key: Enumerable & Enum, map: ReadonlyMap<Enumerable, T>,): T {
        if (!map.has(key,))
            this.#initialiseMapsOn(key._static,)
        return map.get(key)!
    }

    /**
     * Get (or initialise) the value by the key received
     *
     * @param key the key
     * @param map The map to get or initialise by the key
     * @throws {InvalidInstanceException} The key is not an {@link EnumerableConstructor}
     * @throws {NullInstanceException} The key is <b>null</b>
     */
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
     *  - not <b>null</b>
     *  - is not {@link Enum}
     *  - is an instance of {@link Enum.constructor}
     *
     * @param instance The instance to validate
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NullInstanceException} The instance is <b>null</b>
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

    /**
     * Validate that the instance received is the type of {@link Enum} received
     * (from either the child or parent {@link Enum})
     *
     * @param instance The compared instance
     * @param value The value to compare {@link Enum._static} with the instance
     * @throws {InvalidEnumerableException} The value {@link Enum._static _static} is not the same type as the instance
     */
    static #validateSameStaticOnEnumerable<ENUMERABLE extends Enumerable, >(instance: EnumerableConstructor, value: Enum,): ENUMERABLE {
        if (value._static !== instance) {
            if (value instanceof instance)
                return get(instance, value.name,)//Get the value by a possible child//TODO gives an error that the child instance doesn't exist on the parent instance.
            let parent = (getPrototypeOf(instance,) as Enum & EnumerableConstructor)
            const valueConstructor = value._static
            // @ts-ignore
            while (parent !== Enum) {
                if (parent === valueConstructor)
                    return get(instance, value.name,)
                parent = (getPrototypeOf(parent,) as Enum & EnumerableConstructor)
            }
            throw new InvalidEnumerableException(`The value received is not the same instance (${value._static.name}) as the one expected (${instance.name}).`, instance, value,)
        }
        return value as unknown as ENUMERABLE
    }

    /**
     * Validate that the value (interpolated included) is not
     *  - {@link Number.NaN NaN}
     *  - {@link Number.POSITIVE_INFINITY +∞}
     *  - {@link Number.NEGATIVE_INFINITY -∞}
     *  - a floating {@link Number numeric}
     *  - a negative {@link Number numeric}
     *  - under 0
     *  - over the {@link Number.MAX_VALUE maximum value}
     *
     * @param value The value to validate
     * @throws {ForbiddenEnumFunctionException} The {@link String} value is a function in an {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenInheritedEnumerableMemberException} The {@link String} value is a reserved word for a {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenNumericException} The {@link String} value is a predefined value (NaN, ±∞)
     * @throws {IndexOutOfBoundException} The value is over the {@link Number.MAX_VALUE maximum} or under 0
     * @throws {UnhandledValueException} The value is a floating {@link Number}
     */
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

    /**
     * Validate that the key received is an instance of {@link Enum}.
     *
     * It also validate that the {@link Enum._static} is the type of the instance received.
     *
     * @param instance The instance to test the key
     * @param key The key to get
     * @param value The value received from a method
     * @throws {InvalidEnumerableException} The {@link Enum._static _static} is not the same type as the instance received
     * @throws {InvalidEnumerableReferenceException} The value from the key is not a {@link Enum}
     * @throws {NonExistantReferenceException} There is nothing in the instance at the specified key
     */
    static #validateIsEnumerable<ENUMERABLE extends Enumerable, >(instance: EnumerableConstructor, key: | string | number, value: | PossibleStringOrNumeric | Enumerable,): ENUMERABLE {
        if (!has(instance, key,))
            throw new NonExistantReferenceException(`No value exist in "${instance.name}.${value}".`, value,)
        const returnedValue = get(instance, key,)
        if (!(returnedValue instanceof Enum))
            throw new InvalidEnumerableReferenceException(`The value "${instance.name}.${value}" is not an instance of "${instance.name}"`, value,)
        if (returnedValue._static !== instance)
            throw new InvalidEnumerableException(`The value is not the same instance (${returnedValue._static.constructor.name}) as the one expected (${instance.name}).`, instance, returnedValue,)
        return returnedValue as unknown as ENUMERABLE
    }

    /**
     * Throws an exception for the invalid scenario (not {@link String}, {@link Number}, {@link BigInt} or {@link Enum})
     *
     * @param instance The instance of the scenario
     * @param value The invalid value
     * @throws {UnhandledValueException}
     */
    static #throwInvalidScenarios(instance: EnumerableConstructor, value: unknown,): never {
        if (this.#isABoolean(value,))
            throw new UnhandledValueException(`A boolean value cannot be received in "${instance.name}.getValue(value)".`, value,)
        if (this.#isASymbol(value,))
            throw new UnhandledValueException(`A symbol value cannot be received in "${instance.name}.getValue(value)".`, value,)
        if (value instanceof RegExp)
            throw new UnhandledValueException(`A regex value cannot be received in "${instance.name}.getValue(value)".`, value,)
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
        return typeof value == "symbol" || value as unknown instanceof Symbol
    }

    //#endregion -------------------- Methods (is) --------------------

    /**
     * Get the last ordinal From a specified instance (plus 1).
     * Or 0 if it is the first element.
     *
     * @param instance The instance (as the key) for the map
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


    /**
     * Get the default value on the instance received
     *
     * @param instance The instance to retrieve the default value
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NullEnumerableException} The instance is <b>null</b>
     * @throws {NullInstanceException} There is no default value, or it has been set to <b>null</b>
     * @see EnumerableConstructorWithDefault.default
     * @canInitialiseMaps
     */
    public static getDefaultOn<ENUMERABLE extends Enumerable, >(instance: PossibleEnumerableConstructorByEnumerable<ENUMERABLE>,): ENUMERABLE
    public static getDefaultOn(instance: Nullable<EnumerableConstructor & typeof Enum>,) {
        const defaultValue = this.#getValueOnMapByEnumerableConstructor(instance, this.#DEFAULT_MAP)
        if (defaultValue == null)
            throw new NullEnumerableException(`Unable to get the default value. There is no default stored for "${instance!.name}".\n\tTry using the the "${instance!._DEFAULT_NAME}" (at declaration), call "${instance!.name}.default = value" or call "Enum.setDefaultOn(instance, value)" beforehand.`,)
        return defaultValue
    }

    /**
     * Set the default value based on the instance received.
     *
     * It also calls the {@link EnumerableConstructor.getValue getValue()} with an already validated value ({@link String} or {@link Number}).
     *
     * If a forbidden exception is thrown ({@link ForbiddenEnumFunctionException enum function}, {@link ForbiddenInheritedEnumerableMemberException inherited member} or {@link ForbiddenNumericException numeric}),
     * it is because the {@link String} value reference to something that is not supposed to be accessed.
     *
     *
     *
     * @param instance The instance to set its default value
     * @param value The value to set the default
     * @throws {ForbiddenEnumFunctionException} The {@link String} value is a function in an {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenInheritedEnumerableMemberException}The {@link String} value is a reserved word for a {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenNumericException} The {@link String} value is a predefined value (NaN, ±∞)
     * @throws {IndexOutOfBoundException} The value is over the {@link Number.MAX_VALUE maximum} or under 0
     * @throws {InvalidEnumerableException} The {@link Enumerable} value is incompatible with the instance received
     * @throws {InvalidEnumerableReferenceException} The value (via reflection) is not a {@link Enumerable}
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NonExistantReferenceException} The value is not existant in the instance received (via reflection)
     * @throws {NullInstanceException} The instance is <b>null</b>
     * @throws {UnhandledValueException} The value is either a floating {@link Number} or not a valid value ({@link String}, {@link Number}, {@link BigInt} or {@link Enum})
     * @see EnumerableConstructorWithDefault.default
     * @see EnumerableConstructorWithDefault.setDefault
     * @see Enum.getValueOn
     * @canInitialiseMaps
     */
    public static setDefaultOn<ENUMERABLE extends Enumerable, ENUMERABLE_CONSTRUCTOR extends PossibleEnumerableConstructorByEnumerable<ENUMERABLE> = PossibleEnumerableConstructorByEnumerable<ENUMERABLE>, >(instance: ENUMERABLE_CONSTRUCTOR, value: PossibleValueByEnumerable<ENUMERABLE>,): ENUMERABLE_CONSTRUCTOR
    public static setDefaultOn(instance: Nullable<EnumerableConstructor>, value: PossibleValueReceived,) {
        this.#validateEnumerableConstructor(instance,)
        this.#DEFAULT_MAP.set(
            instance,
            value == null
                ? null
                : value instanceof Enum
                    ? this.#validateSameStaticOnEnumerable(instance, value,)
                    : Enum.getValueOn(instance, this.#validateStringOrNumber(value,),),
        )
        return instance
    }

    /**
     * Get the value to retrieve in the instance received (via reflection)
     *
     * @param instance The {@link EnumerableConstructor} instance to retrieve the value
     * @param value The value to retrieve ({@link String}, {@link Number}, {@link BigInt} or {@link Enum})
     * @throws {ForbiddenEnumFunctionException} The {@link String} value is a function in an {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenInheritedEnumerableMemberException}The {@link String} value is a reserved word for a {@link EnumerableConstructor}
     * (with {@link EnumerableConstructorWithDefault default}, {@link EnumerableConstructorWithNamesAndOrdinals name or ordinal})
     * @throws {ForbiddenNumericException} The {@link String} value is a predefined value (NaN, ±∞)
     * @throws {IndexOutOfBoundException} The value is over the {@link Number.MAX_VALUE maximum} or under 0
     * @throws {InvalidEnumerableException} The {@link Enumerable} value is incompatible with the instance received
     * @throws {InvalidEnumerableReferenceException} The value (via reflection) is not a {@link Enumerable}
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NonExistantReferenceException} The value is not existant in the instance received (via reflection)
     * @throws {NullEnumerableException} The value is <b>null</b>
     * @throws {NullInstanceException} The instance is <b>null</b>
     * @throws {UnhandledValueException} The value is either a floating {@link Number} or not a valid value ({@link String}, {@link Number}, {@link BigInt} or {@link Enum})
     * @see Reflect.get
     * @canInitialiseMaps
     */
    public static getValueOn<ENUMERABLE extends Enumerable, >(instance: PossibleEnumerableConstructorByEnumerable<ENUMERABLE>, value: PossibleValueByEnumerable<ENUMERABLE>,): ENUMERABLE
    public static getValueOn<ENUMERABLE extends Enum, >(instance: Nullable<EnumerableConstructor & typeof Enum>, value: PossibleValueReceived,): ENUMERABLE {
        this.#validateEnumerableConstructor(instance,)
        if (value == null)
            throw new NullEnumerableException(`Unable to get the value. The value received for the instance ${instance.name} cannot be null (or undefined).`,)

        return value instanceof Enum
            ? this.#validateSameStaticOnEnumerable(instance, value,)
            : this.#isAStringOrNumeric(value,)
                ? this.#validateIsEnumerable(instance, this.#validateStringOrNumber(value,), value,)
                : this.#throwInvalidScenarios(instance, value,)
    }

    /**
     * Get every value from the instance
     *
     * @param instance The instance to retrieve the values
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NullInstanceException} The instance is <b>null</b>
     * @see BasicEnumerableConstructor.values
     * @canInitialiseMaps
     */
    public static getValuesOn<ENUMERABLE_CONSTRUCTOR extends AnyEnumerableConstructor, >(instance: Nullable<ENUMERABLE_CONSTRUCTOR>,): ENUMERABLE_CONSTRUCTOR["values"]
    public static getValuesOn(instance: Nullable<EnumerableConstructor>,) {
        return this.#getValueOnMapByEnumerableConstructor(instance, this.#VALUES_MAP,)
    }

    /**
     * Get every {@link Enumerable.name name} of an instance
     *
     * @param instance The instance to retrieve the names
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NullInstanceException} The instance is <b>null</b>
     * @see BasicEnumerableConstructorWithNamesAndOrdinals.names
     * @canInitialiseMaps
     */
    public static getNamesOn<ENUMERABLE_CONSTRUCTOR extends AnyEnumerableConstructor, >(instance: Nullable<ENUMERABLE_CONSTRUCTOR>,): ENUMERABLE_CONSTRUCTOR["names"]
    public static getNamesOn(instance: Nullable<EnumerableConstructor>,) {
        return this.#getValueOnMapByEnumerableConstructor(instance, this.#NAMES_MAP,)
    }

    /**
     * Get every {@link Enumerable.ordinal ordinal} of an instance
     *
     * @param instance The instance to retrieve the ordinals
     * @throws {InvalidInstanceException} The instance is not an {@link EnumerableConstructor}
     * @throws {NullInstanceException} The instance is <b>null</b>
     * @see BasicEnumerableConstructorWithNamesAndOrdinals.ordinals
     * @canInitialiseMaps
     */
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
