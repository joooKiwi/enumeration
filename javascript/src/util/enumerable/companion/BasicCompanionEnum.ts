/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, NullOr, NullOrUndefined, PossibleBigInt, PossibleNumber, PossibleNumeric, PossibleString}                                                                                                                                                                                                                                                                from "../../../general type"
import type {CollectionHolder}                                                                                                                                                                                                                                                                                                                                                  from "../../collection/CollectionHolder"
import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {BasicCompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                     from "./BasicCompanionEnum.declaration"
import type {CompanionEnumName}                                                                                                                                                                                                                                                                                                                                                 from "./types"

import {GenericCollectionHolder}                     from "../../collection/GenericCollectionHolder"
import {EnumConstants}                               from "../EnumConstants"
import {EnumHelper}                                  from "../EnumHelper"
import {ForbiddenNumericException}                   from "../exception/ForbiddenNumericException"
import {ForbiddenInheritedEnumerableMemberException} from "../exception/ForbiddenInheritedEnumerableMemberException"
import {ImpossibleOrdinalException}                  from "../exception/ImpossibleOrdinalException"
import {InvalidEnumerableException}                  from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}                    from "../exception/InvalidInstanceException"
import {NullReferenceException}                      from "../exception/NullReferenceException"
import {NullEnumerableException}                     from "../exception/NullEnumerableException"
import {NullInstanceException}                       from "../exception/NullInstanceException"
import {UnhandledValueException}                     from "../exception/UnhandledValueException"

const {POSITIVE_INFINITY, NEGATIVE_INFINITY, MAX_VALUE, isNaN,} = Number,
    MAX_VALUE_AS_BIGINT = BigInt(MAX_VALUE,),
    {get, has,} = Reflect,
    {entries, freeze, getOwnPropertyDescriptors,} = Object

export class BasicCompanionEnum<const ENUMERABLE extends Enumerable,
    const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, BasicCompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>, >
    implements BasicCompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #instance
    #values?: CollectionHolder<ENUMERABLE>
    #names?: CollectionHolder<NameOf<ENUMERABLE>>
    #ordinals?: CollectionHolder<OrdinalOf<ENUMERABLE>>
    #default?: NullOr<ENUMERABLE>

    /**
     * The excluded names that are an instance of the current instance.
     *
     * Note that giving an invalid name will result in an exception on the first time it is initialised.
     * From either {@link Enumerable.name get name},
     * {@link BasicCompanionEnum.getValue getValue()}, {@link BasicCompanionEnum.values get values},
     * {@link BasicCompanionEnum.getOrdinal getOrdinal()}, {@link BasicCompanionEnum.ordinals get ordinals}
     * {@link BasicCompanionEnum.getName getName()} or {@link BasicCompanionEnum.names get names}
     */
    protected readonly _EXCLUDED_NAMES?: Nullable<readonly Nullable<string>[]>
    /** The default value stored for the current instance at the initialization */
    protected readonly _DEFAULT?: Nullable<ENUMERABLE>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUMERABLE_CONSTRUCTOR,) {
        if (instance == null)
            throw new NullInstanceException()
        if (!(instance instanceof Function))
            throw new InvalidInstanceException(`The instance received in "${this.constructor.name}" is not a function type.`, instance,)
        this.#instance = instance
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get instance(): ENUMERABLE_CONSTRUCTOR {
        return this.#instance
    }


    public get default(): ENUMERABLE {
        if (this.#default != null)
            return this.#default

        if (this.#default === null)
            throw new NullEnumerableException(`The default value was set to null or removed for "${this.instance.name}".\n\tTry a calling "${this.instance.name}.CompanionEnum.get.default = value" or "EnumRetriever.get.setDefaultOn(instance, value)".`,)

        const defaultValue = this._DEFAULT
        if (defaultValue == null)
            throw new NullEnumerableException(`Unable to get the default value. There is no default stored for "${this.instance.name}".\n\tTry using the the "_DEFAULT" (at declaration), call "${this.instance.name}.default = value" or call "Enum.setDefaultOn(instance, value)" beforehand.`,)
        return this.#default = this._getValue(defaultValue)
    }

    public set default(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,) {
        this.#default = value == null ? null : this._getValue(value)
    }

    public setDefault(value: NullOrUndefined,): this
    public setDefault(enumerable: Nullable<ENUMERABLE>,): this
    public setDefault(value: Nullable<PossibleEnumerableValueBy<ENUMERABLE>>,): this
    public setDefault(ordinal: Nullable<PossibleNumeric>,): this
    public setDefault(name: Nullable<PossibleString>,): this
    public setDefault(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this
    public setDefault(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this {
        this.default = value
        return this
    }


    public get values(): CollectionHolder<ENUMERABLE> {
        if (this.#values == null && !EnumConstants.VALUES_MAP.has(this))
            this.#initializeMaps()
        return this.#values!
    }

    public get names(): CollectionHolder<NameOf<ENUMERABLE>> {
        if (this.#names == null && !EnumConstants.NAMES_MAP.has(this))
            this.#initializeMaps()
        return this.#names!
    }

    public get ordinals(): CollectionHolder<OrdinalOf<ENUMERABLE>> {
        if (this.#ordinals == null && !EnumConstants.ORDINALS_MAP.has(this))
            this.#initializeMaps()
        return this.#ordinals!
    }

    public get iterator(): IterableIterator<ENUMERABLE> {
        return this.values[Symbol.iterator]()
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Initialization methods --------------------

    /**
     * Initialize every map for the current {@link instance instance} stored.
     *
     *
     * The initialization includes:
     *  - {@link values} <i>(final)</i>
     *  - {@link names} <i>(final)</i>
     *  - {@link ordinals} <i>(final)</i>
     *
     * It also initialize the individual {@link Enumerable.ordinal ordinals} & {@link Enumerable.name names} on each {@link instance instance}
     *
     * @see EnumConstants.VALUES_MAP
     * @see EnumConstants.NAME_MAP
     * @see EnumConstants.NAMES_MAP
     * @see EnumConstants.ORDINAL_MAP
     * @see EnumConstants.ORDINALS_MAP
     */
    #initializeMaps(): void {
        const instance = this.instance,
            prototypeName = EnumConstants.PROTOTYPE_NAME,
            numberOnlyRegex = EnumConstants.NUMBER_ONLY_REGEX,
            ordinalMap = EnumConstants.ORDINAL_MAP,
            nameMap = EnumConstants.NAME_MAP,
            excludedNames = this._EXCLUDED_NAMES,
            everyFields = entries(getOwnPropertyDescriptors(instance,),),
            everyOrdinals = [] as number[],
            everyNames = [] as string[],
            everyEnumerable = [] as Enumerable[]

        const everyFieldsSize = everyFields.length
        let currentOrdinal = 0
        let everyFieldsIndex = -1
        while (++everyFieldsIndex < everyFieldsSize) {
            const [name, property,] = everyFields[everyFieldsIndex]!
            if (property.get != null)
                continue
            if (property.set != null)
                continue
            if (name === prototypeName)
                continue
            if (excludedNames?.includes(name))
                continue
            if (numberOnlyRegex.test(name))
                continue

            const {value,} = property
            if (!(value instanceof instance))
                continue

            ordinalMap.set(value as Enumerable, currentOrdinal,)
            nameMap.set(value as Enumerable, name,)

            everyOrdinals.push(currentOrdinal++,)
            everyNames.push(name,)
            everyEnumerable.push(value as Enumerable,)
        }


        EnumConstants.ORDINALS_MAP.set(this, this.#ordinals = new GenericCollectionHolder(freeze(everyOrdinals,),) as CollectionHolder<OrdinalOf<ENUMERABLE>>,)
        EnumConstants.NAMES_MAP.set(this, this.#names = new GenericCollectionHolder(freeze(everyNames,),) as CollectionHolder<NameOf<ENUMERABLE>>,)
        EnumConstants.VALUES_MAP.set(this, this.#values = new GenericCollectionHolder(freeze(everyEnumerable,),) as unknown as CollectionHolder<ENUMERABLE>,)
    }

    //#endregion -------------------- Initialization methods --------------------
    //#region -------------------- Validation & conversion methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal name or ordinal received} is not <b>null</b> and has the structure of an {@link Enumerable}
     *
     * @param nameOrOrdinal The name or ordinal to retrieve
     * @param valueType The type of value to retrieve (from either {@link _getValue}, {@link _getName} or {@link _getOrdinal})
     * @throws {NullReferenceException} The {@link nameOrOrdinal name or ordinal received} is not present in the {@link instance}
     * @throws {NullReferenceException} The value from reflection is <b>null</b>
     * @throws {InvalidInstanceException} The value is not in the structure of an {@link Enumerable}
     */
    #validateIsEnumerableFromReflection(nameOrOrdinal: | string | number, valueType: ValueType,): Enumerable {
        if (!has(this.instance, nameOrOrdinal,))
            throw new NullReferenceException(`No ${valueType} exist in "${this.instance.name}.${nameOrOrdinal}".`, nameOrOrdinal,)
        const value = get(this.instance, nameOrOrdinal,)
        if (value == null)
            throw new NullReferenceException(`The ${valueType} "${this.instance.name}.${nameOrOrdinal}" cannot be a null reference."`, nameOrOrdinal,)
        if (!EnumHelper.isEnum(value) || !EnumHelper.isEnumerableByStructure(value))
            throw new InvalidInstanceException(`The reference "${this.instance.name}.${nameOrOrdinal}" is not instance of Enumerable.`, nameOrOrdinal,)
        return value as Enumerable
    }


    /**
     * Validate that the {@link value value received} is a valid {@link String} to be used as either
     * a {@link Enumerable enumerable} {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal}
     *
     * @param value The value to validate
     * @param originalValue The original value received in a method ({@link _getValue}, {@link _getName} or {@link _getOrdinal})
     * @throws {ForbiddenNumericException} The {@link value} is one of the {@link EnumConstants.EDGE_CASE_NUMERIC_NAME}
     * @throws {ForbiddenInheritedEnumerableMemberException} The {@link value} is one of the {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS}
     * @throws {ImpossibleOrdinalException} The {@link value} is under 0, over {@link Number.MAX_VALUE} or a floating {@link Number}
     */
    #getValidStringValue(value: string, originalValue: PossibleString,): string {
        if (EnumConstants.EDGE_CASE_NUMERIC_NAME.includes(value as never,))
            throw new ForbiddenNumericException(`Forbidden numeric. The string value "${originalValue}" cannot have any reference in (${EnumConstants.EDGE_CASE_NUMERIC_NAME.join(", ")}).`, originalValue,)
        if (EnumConstants.INHERITED_ENUMERABLE_MEMBERS.includes(value as never,))
            throw new ForbiddenInheritedEnumerableMemberException(`Forbidden inherited enumerable member. The string value "${originalValue}" cannot be an inherited member of the inherited Enum static methods (${EnumConstants.INHERITED_ENUMERABLE_MEMBERS.map(it => `"${it}"`).join(", ")}).`, originalValue,)

        if (!EnumConstants.NUMBER_ONLY_REGEX.test(value,))
            return value // Validations are finished (no possible number)

        if (EnumConstants.INTEGER_ONLY_REGEX.test(value,)) {
            const bigIntValue = BigInt(value,)
            if (bigIntValue.toString() === value) {
                if (bigIntValue < 0n)
                    throw new ImpossibleOrdinalException(`The string value "${originalValue}" cannot be under 0.`, originalValue,)
                if (bigIntValue > MAX_VALUE_AS_BIGINT)
                    throw new ImpossibleOrdinalException(`The string value "${originalValue}" cannot be over the maximum value of a number.`, originalValue,)
            }
        }

        const numberValue = Number(value,)
        if (numberValue.toString() !== value)
            return value // It is not a number string value or the cast was not a possible number
        if (numberValue % 1 != 0)
            throw new ImpossibleOrdinalException(`The string value "${originalValue}" cannot be a floating value.`, originalValue,)
        if (numberValue < 0)
            throw new ImpossibleOrdinalException(`The string value "${originalValue}" cannot be under 0.`, originalValue,)
        return value
    }

    /**
     * Validate that the {@link Number} is a valid value for the {@link Enumerable enumerable} {@link Enumerable.ordinal ordinal}
     *
     * @param value The value to validate (as a primitive only)
     * @param originalValue The original {@link Number} or {@link BigInt} value
     * @throws {ForbiddenNumericException} The number is {@link Number.NaN NaN} or ±∞
     * @throws {ImpossibleOrdinalException} The number is negative or a floating value
     */
    #getValidNumericValue(value: number, originalValue: PossibleNumeric,): number {
        if (isNaN(value,))
            throw new ForbiddenNumericException("Forbidden numeric. The number value cannot be a NaN.", originalValue,)
        if (value == NEGATIVE_INFINITY)
            throw new ForbiddenNumericException("Forbidden numeric. The number value cannot be the negative infinity.", originalValue,)
        if (value == POSITIVE_INFINITY)
            throw new ForbiddenNumericException("Forbidden numeric. The number value cannot be the positive infinity.", originalValue,)
        if (value % 1 != 0)
            throw new ImpossibleOrdinalException(`The number value "${value}" cannot be a floating value.`, originalValue,)
        if (value < 0)
            throw new ImpossibleOrdinalException(`The number value "${value}" cannot be under 0.`, originalValue,)
        return value
    }

    /**
     * Validate that the {@link BigInt} is a valid value for the {@link Enumerable enumerable} {@link Enumerable.ordinal ordinal}
     *
     * @param value The value to validate its {@link BigInt} limit
     * @param originalValue The original {@link BigInt}
     * @throws {ImpossibleOrdinalException} The number is negative or over the {@link Number.MAX_VALUE}
     */
    #getValidBigIntValue(value: bigint, originalValue: PossibleBigInt,): bigint {
        if (value < 0n)
            throw new ImpossibleOrdinalException(`The bigint value "${value}" cannot be under 0.`, originalValue,)
        if (value > MAX_VALUE_AS_BIGINT)
            throw new ImpossibleOrdinalException(`The bigint value "${value}" cannot be over the maximum value of a number.`, originalValue,)
        return value
    }

    /**
     * Throw a specific error message to give a user-friendly feedback on what they sent as an invalid value
     *
     * @param value The value that is not a {@link String}, {@link Number}, {@link BigInt} or {@link Enumerable}
     * @param methodCalled The method calling it
     * @throws {UnhandledValueException} An exception with a personalized message depending on the invalid type
     */
    #throwInvalidCases(value: unknown, methodCalled: MethodCalledName,): never {
        if (typeof value == "boolean" || value instanceof Boolean)
            throw new UnhandledValueException(`A boolean value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (typeof value == "symbol" || value instanceof Symbol)
            throw new UnhandledValueException(`A symbol value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (typeof value == "function" || value instanceof Function)
            throw new UnhandledValueException(`A function value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof RegExp)
            throw new UnhandledValueException(`A regex value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        throw new UnhandledValueException(`The value received is not of type string, number, bigint or enumerable. It cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
    }

    //#endregion -------------------- Validation & conversion methods --------------------
    //#region -------------------- "Get value" methods --------------------

    public getValue                                                                                              (value: NullOrUndefined,):                                                                         never
    public getValue<const ORDINAL extends number, >                                                              (ordinal: Nullable<ORDINAL>,):                                                                     ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getValue<const ORDINAL extends number, >                                                              (ordinal: Nullable<`${ORDINAL}`>,):                                                                ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getValue<const ORDINAL extends number, >                                                              (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                    ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getValue<const NAME extends string, >                                                                 (name: Nullable<NAME>,):                                                                           ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public getValue<const INSTANCE extends ENUMERABLE, >                                                         (instance: Nullable<INSTANCE>,):                                                                   INSTANCE
    public getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | NAME | String | Number | PossibleBigInt | INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE
    public getValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): ENUMERABLE {
        return this._getValue(value,)
    }

    /**
     * Get an {@link Enumerable} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     */
    protected _getValue(value: Nullable<PossibleEnumerableValue>,): ENUMERABLE {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the value. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)

        if (typeof value == "string")
            return this._getValueByString(value, value)
        if (typeof value == "number")
            return this._getValueByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getValueByBigInt(value, value,)
        if (EnumHelper.isEnum(value) || EnumHelper.isEnumerableByStructure(value,))
            return this._getValueByEnumerable(value,)
        if (value instanceof String)
            return this._getValueByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getValueByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getValueByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getValue",)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated to a {@link String}
     *
     * @param name The name to find a {@link Enumerable}
     * @param originalName The original value of the {@link name} received in the {@link getValue} method
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getValueByString(name: string, originalName: PossibleString,): ENUMERABLE {
        return this._getValueByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,), "value",),)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated to a {@link Number}
     *
     * @param ordinal The ordinal to find a {@link Enumerable}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getValue} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getValueByNumber(ordinal: number, originalOrdinal: PossibleNumber,): ENUMERABLE {
        return this._getValueByNumeric(ordinal, originalOrdinal,)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated to a {@link BigInt}
     *
     * @param ordinal The ordinal to find a {@link Enumerable}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getValue} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getValueByBigInt(ordinal: bigint, originalOrdinal: PossibleBigInt,): ENUMERABLE {
        return this._getValueByNumeric(Number(this.#getValidBigIntValue(ordinal, originalOrdinal,),), originalOrdinal,)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated
     * to a numeric value (either {@link Number} or {@link BigInt})
     *
     * @param ordinal The ordinal to find a {@link Enumerable}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getValue} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getValueByNumeric(ordinal: number, originalOrdinal: PossibleNumeric,): ENUMERABLE {
        return this._getValueByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,), "value",),)
    }

    /**
     * Get a {@link Enumerable enumerable} by validating it is the {@link instance} (enumerable constructor)
     *
     * @param value The value to compare its class type to the type ({@link instance})
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getValueByEnumerable(value: Enumerable,): ENUMERABLE {
        const instance = this.instance

        if (value instanceof instance)
            return this._getValueFromValues(value,)

        throw new InvalidEnumerableException(`The enumerable "${EnumHelper.getLastPrototype(value).name}.${value.name}" is not an instance of "${instance.name}".`, value, [instance,],)
    }

    /**
     * Get an {@link Enumerable enumerable} from the {@link values} by the instance directly
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link Enumerable enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValues(value: Enumerable,): ENUMERABLE {
        const valueFound = this.values.find(it => it === value)
        if (valueFound == null)
            throw new NullReferenceException(`No "${value.name}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    public getName                                                                                                           (value: NullOrUndefined,):                                                                       never
    public getName<const ORDINAL extends number, >                                                                           (ordinal: Nullable<ORDINAL>,):                                                                   EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getName<const ORDINAL extends number, >                                                                           (ordinal: Nullable<`${ORDINAL}`>,):                                                              EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getName<const ORDINAL extends number, >                                                                           (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                  EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getName<const NAME extends string, >                                                                              (name: Nullable<NAME>,):                                                                         SpecificNameOf<NAME, ENUMERABLE>
    public getName<const INSTANCE extends ENUMERABLE, >                                                                      (instance: Nullable<INSTANCE>,):                                                                 NameOf<INSTANCE>
    public getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE>
    public getName(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): NameOf<ENUMERABLE> {
        return this._getName(value,)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.name name} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance} {@link Enumerable.name name}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     */
    protected _getName(value: Nullable<PossibleEnumerableValue>,) {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the name. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)

        if (typeof value == "string")
            return this._getNameByString(value, value)
        if (typeof value == "number")
            return this._getNameByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getNameByBigInt(value, value,)
        if (EnumHelper.isEnum(value) || EnumHelper.isEnumerableByStructure(value,))
            return this._getNameByEnumerable(value,)
        if (value instanceof String)
            return this._getNameByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getNameByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getNameByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getName",)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated to a {@link String}
     *
     * @param name The name to find a {@link Enumerable}
     * @param originalName The original value of the {@link name} received in the {@link getName} method
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getNameByString(name: string, originalName: PossibleString,) {
        return this._getNameByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,), "name",),)
    }

    /**
     * Get a {@link Enumerable} from the current {@link instance} with validation associated to a {@link Number}
     *
     * @param ordinal The ordinal to find a {@link Enumerable}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getName} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getNameByNumber(ordinal: number, originalOrdinal: PossibleNumber,) {
        return this._getNameByNumeric(ordinal, originalOrdinal,)
    }

    /**
     * Get a {@link Enumerable} {@link Enumerable.name name} from the current {@link instance} with validation associated to a {@link BigInt}
     *
     * @param ordinal The ordinal to find a {@link Enumerable} {@link Enumerable.name name}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getName} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getNameByBigInt(ordinal: bigint, originalOrdinal: PossibleBigInt,) {
        return this._getNameByNumeric(Number(this.#getValidBigIntValue(ordinal, originalOrdinal,),), originalOrdinal,)
    }

    /**
     * Get a {@link Enumerable} {@link Enumerable.name name} from the current {@link instance} with validation associated
     * to a numeric value (either {@link Number} or {@link BigInt})
     *
     * @param ordinal The ordinal to find a {@link Enumerable} {@link Enumerable.name name}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getName} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getNameByNumeric(ordinal: number, originalOrdinal: PossibleNumeric,) {
        return this._getNameByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,), "name",),)
    }

    /**
     * Get a {@link Enumerable} {@link Enumerable.name name} by validating it is the {@link instance} (enumerable constructor)
     *
     * @param value The value to compare its class type to the {@link instance instance type}
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getNameByEnumerable(value: Enumerable,): NameOf<ENUMERABLE> {
        return this._getValueByEnumerable(value,).name
    }

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    public getOrdinal                                                                                                           (value: NullOrUndefined,):                                                                       never
    public getOrdinal<const ORDINAL extends number, >                                                                           (ordinal: Nullable<ORDINAL>,):                                                                   SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public getOrdinal<const ORDINAL extends number, >                                                                           (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                  SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public getOrdinal<const ORDINAL extends number, >                                                                           (ordinal: Nullable<`${ORDINAL}`>,):                                                              SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public getOrdinal<const NAME extends string, >                                                                              (name: Nullable<NAME>,):                                                                         EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                      (instance: Nullable<INSTANCE>,):                                                                 OrdinalOf<INSTANCE>
    public getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE>
    public getOrdinal(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinal(value,)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.ordinal ordinal} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance} {@link Enumerable.ordinal ordinal}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     */
    protected _getOrdinal(value: Nullable<PossibleEnumerableValue>,): OrdinalOf<ENUMERABLE> {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the ordinal. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)

        if (typeof value == "string")
            return this._getOrdinalByString(value, value)
        if (typeof value == "number")
            return this._getOrdinalByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getOrdinalByBigInt(value, value,)
        if (EnumHelper.isEnum(value) || EnumHelper.isEnumerableByStructure(value,))
            return this._getOrdinalByEnumerable(value,)
        if (value instanceof String)
            return this._getOrdinalByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getOrdinalByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getOrdinalByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getOrdinal",)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.ordinal ordinal} from the current {@link instance} with validation associated to a {@link String}
     *
     * @param name The {@link String} value to retrieve an {@link Enumerable} {@link Enumerable.ordinal ordinal}
     * @param originalName The original {@link String} value received in the {@link getOrdinal} method
     * @throws ForbiddenInheritedEnumerableMemberException
     * @throws ForbiddenNumericException
     * @throws ImpossibleOrdinalException
     * @throws InvalidEnumerableException
     * @throws InvalidInstanceException
     * @throws NullReferenceException
     */
    protected _getOrdinalByString(name: string, originalName: PossibleString,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinalByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,), "name",),)
    }

    /**
     * Get a {@link Enumerable} {@link Enumerable.ordinal ordinal} from the current {@link instance} with validation associated to a {@link Number}
     *
     * @param ordinal The ordinal to find a {@link Enumerable} {@link Enumerable.ordinal ordinal}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getValue} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getOrdinalByNumber(ordinal: number, originalOrdinal: PossibleNumber,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinalByNumeric(ordinal, originalOrdinal,)
    }

    /**
     * Get a {@link Enumerable} {@link Enumerable.ordinal ordinal} from the current {@link instance} with validation associated to a {@link BigInt}
     *
     * @param ordinal The ordinal to find a {@link Enumerable} {@link Enumerable.ordinal ordinal}
     * @param originalOrdinal The original value of the {@link ordinal} received in the {@link getValue} method
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getOrdinalByBigInt(ordinal: bigint, originalOrdinal: PossibleBigInt,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinalByNumeric(Number(this.#getValidBigIntValue(ordinal, originalOrdinal,),), originalOrdinal,)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.ordinal ordinal} from the current {@link instance} with validation associated to a {@link Number}
     *
     * @param ordinal The {@link Number} value to retrieve an {@link Enumerable} {@link Enumerable.ordinal ordinal}
     * @param originalOrdinal The original {@link ordinal} value
     * @throws ForbiddenNumericException
     * @throws ImpossibleOrdinalException
     * @throws InvalidEnumerableException
     * @throws InvalidInstanceException
     * @throws NullReferenceException
     */
    protected _getOrdinalByNumeric(ordinal: number, originalOrdinal: PossibleNumeric,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinalByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,), "name",),)
    }

    /**
     * Get {@link Enumerable} {@link Enumerable.ordinal ordinal} from a {@link Enumerable} directly
     *
     * @param value The value to retrieve its {@link Enumerable.ordinal ordinal}
     * @throws InvalidEnumerableException
     */
    protected _getOrdinalByEnumerable(value: Enumerable,): OrdinalOf<ENUMERABLE> {
        return this._getValueByEnumerable(value,).ordinal
    }

    //#endregion -------------------- "Get ordinal" methods --------------------

    public* [Symbol.iterator](): IterableIterator<ENUMERABLE> {
        yield* this.values
    }

    public get [Symbol.toStringTag](): CompanionEnumName {
        return EnumConstants.COMPANION_ENUM_TO_STRING_TAG
    }


    //#endregion -------------------- Methods --------------------

}

type ValueType = | "value" | "name" | "ordinal"
type MethodCalledName = `get${| "Value" | "Name" | "Ordinal"}`
