/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder, CollectionIterator}      from "@joookiwi/collection"
import {EmptyCollectionHolder, GenericCollectionHolder} from "@joookiwi/collection"

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                          from "./CompanionEnum.declaration"
import type {CompanionEnumName, ImpossibleNames}                                                                                                                                                                                                                                                                                                                                from "./types"
import type {Nullable, NullOr, NullOrUndefined, PossibleBigInt, PossibleNumber, PossibleNumeric, PossibleString}                                                                                                                                                                                                                                                                from "../general type"

import {EnumConstants}                               from "../EnumConstants"
import {ForbiddenNumericException}                   from "../exception/ForbiddenNumericException"
import {ForbiddenInheritedEnumerableMemberException} from "../exception/ForbiddenInheritedEnumerableMemberException"
import {ImpossibleOrdinalException}                  from "../exception/ImpossibleOrdinalException"
import {InvalidEnumerableException}                  from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}                    from "../exception/InvalidInstanceException"
import {NullReferenceException}                      from "../exception/NullReferenceException"
import {NullEnumerableException}                     from "../exception/NullEnumerableException"
import {NullInstanceException}                       from "../exception/NullInstanceException"
import {UnhandledValueException}                     from "../exception/UnhandledValueException"
import {getLastPrototype}                            from "../helper/getLastPrototype"
import {isEnum}                                      from "../helper/isEnum"
import {isEnumByStructure}                           from "../helper/isEnumByStructure"

export class CompanionEnum<const ENUMERABLE extends Enumerable,
    const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>, >
    implements CompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #instance
    #values?: CollectionHolder<ENUMERABLE>
    #names?: CollectionHolder<NameOf<ENUMERABLE>>
    #ordinals?: CollectionHolder<OrdinalOf<ENUMERABLE>>
    #defaultValue?: NullOr<ENUMERABLE>
    #excludedNames?: CollectionHolder<string>


    /**
     * The excluded names that are an instance of the current instance.
     *
     * Note that giving an invalid name will result in an exception on the first time it is initialised.
     * From either {@link Enumerable.name get name},
     * {@link CompanionEnum.getValue getValue()}, {@link CompanionEnum.values get values},
     * {@link CompanionEnum.getOrdinal getOrdinal()}, {@link CompanionEnum.ordinals get ordinals}
     * {@link CompanionEnum.getName getName()} or {@link CompanionEnum.names get names}
     */
    protected readonly _EXCLUDED_NAMES?: Nullable<Iterable<Nullable<string>>>

    /**
     * The default {@link Enumerable enumerable value} stored for the current instance at the initialization
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT?: Nullable<ENUMERABLE>
    /**
     * The default {@link Enumerable.name name value} stored for the current instance at the initialization
     * (is ignored if there is a value on the {@link _DEFAULT})
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT_NAME?: Nullable<PossibleString>
    /**
     * The default {@link Enumerable.ordinal ordinal value} stored for the current instance at the initialization
     * (is ignored if there is a value on the {@link _DEFAULT_NAME})
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT_ORDINAL?: Nullable<PossibleNumeric>

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


    protected get _excludedNames(): CollectionHolder<string> {
        return this.#excludedNames ??= this.#__excludedNames
    }

    get #__excludedNames(): CollectionHolder<string> {
        const excludedNames = this._EXCLUDED_NAMES
        if (excludedNames == null)
            return EmptyCollectionHolder.get
        return new GenericCollectionHolder(excludedNames,).filterNotNull()
    }


    public get defaultValue(): ENUMERABLE {
        if (this.#defaultValue === undefined && !EnumConstants.DEFAULT_MAP.has(this,))
            this.#initializeDefault()

        const defaultValue = this.#defaultValue
        if (defaultValue == null)
            throw new NullEnumerableException(`The default value was set to null or removed on "${this.instance.name}".\n\tTry a calling "${this.instance.name}.CompanionEnum.get.default = value" or "${this.instance.name}.CompanionEnum.get.setDefault(value)".`,)
        return defaultValue
    }

    public set defaultValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,) {
        if (value == null)
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = null,)
        else
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValue(value),)
    }

    public setDefaultValue(value: NullOrUndefined,): this
    public setDefaultValue(value: ImpossibleNames,): never
    public setDefaultValue(enumerable: Nullable<ENUMERABLE>,): this
    public setDefaultValue(value: Nullable<PossibleEnumerableValueBy<ENUMERABLE>>,): this
    public setDefaultValue(ordinal: Nullable<PossibleNumeric>,): this
    public setDefaultValue(name: Nullable<PossibleString>,): this
    public setDefaultValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this
    public setDefaultValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this {
        this.defaultValue = value
        return this
    }


    public get values(): CollectionHolder<ENUMERABLE> {
        const values = this.#values
        if (values == null && !EnumConstants.VALUES_MAP.has(this))
            this.#initializeMaps()
        if (values == null)
            throw new NullReferenceException(`The values in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.VALUES_MAP.`, this,)
        return values
    }

    public get names(): CollectionHolder<NameOf<ENUMERABLE>> {
        const names = this.#names
        if (names == null && !EnumConstants.NAMES_MAP.has(this))
            this.#initializeMaps()
        if (names == null)
            throw new NullReferenceException(`The names in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.NAMES_MAP.`, this,)
        return names
    }

    public get ordinals(): CollectionHolder<OrdinalOf<ENUMERABLE>> {
        const ordinals = this.#ordinals
        if (ordinals == null && !EnumConstants.ORDINALS_MAP.has(this))
            this.#initializeMaps()
        if (ordinals == null)
            throw new NullReferenceException(`The ordinals in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.ORDINALS_MAP.`, this,)
        return ordinals
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
            excludedNames = this._excludedNames,
            everyFields = Object.entries(Object.getOwnPropertyDescriptors(instance,),),
            everyOrdinals = [] as OrdinalOf<ENUMERABLE>[],
            everyNames = [] as NameOf<ENUMERABLE>[],
            everyEnumerable = [] as ENUMERABLE[]

        const everyFieldSize = everyFields.length
        let currentOrdinal = 0
        let everyFieldIndex = -1
        while (++everyFieldIndex < everyFieldSize) {
            const field = everyFields[everyFieldIndex]!
            const property = field[1]
            if (property.get != null)
                continue
            if (property.set != null)
                continue

            const name = field[0]
            if (name === prototypeName)
                continue
            if(excludedNames.hasOne(name))
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
            everyEnumerable.push(value as ENUMERABLE,)
        }

        EnumConstants.ORDINALS_MAP.set(this, this.#ordinals = new GenericCollectionHolder(Object.freeze(everyOrdinals,),) as CollectionHolder<OrdinalOf<ENUMERABLE>>,)
        EnumConstants.NAMES_MAP.set(this, this.#names = new GenericCollectionHolder(Object.freeze(everyNames,),) as CollectionHolder<NameOf<ENUMERABLE>>,)
        EnumConstants.VALUES_MAP.set(this, this.#values = new GenericCollectionHolder(Object.freeze(everyEnumerable,),) as CollectionHolder<ENUMERABLE>,)
    }


    /**
     * Initialize the default value by retrieving the {@link _DEFAULT} first,
     * then the {@link _DEFAULT_NAME} and finally the {@link _DEFAULT_ORDINAL}.
     *
     * If all of them are <b>null</b>, then a {@link NullEnumerableException} will be thrown.
     *
     * And if the values expected ({@link _DEFAULT}, {@link _DEFAULT_NAME} or {@link _DEFAULT_ORDINAL})
     * are not in the expected type, then an {@link InvalidEnumerableException} is thrown.
     *
     * @see EnumConstants.DEFAULT_MAP
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    #initializeDefault(): void {
        if (this.#initializeDefaultByEnumerable())
            return
        if (this.#initializeDefaultByName())
            return
        if (this.#initializeDefaultByOrdinal())
            return

        throw new NullEnumerableException(`Unable to get the default value. There is no default stored for "${this.instance.name}".\n\tTry using the the "_DEFAULT", "_DEFAULT_NAME" or "_DEFAULT_ORDINAL" (at declaration)\n\tor call "${this.instance.name}.default = value".`,)
    }

    /**
     * Initialize the default value from {@link _DEFAULT}
     *
     * @returns {boolean} The default value has been initialized
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    #initializeDefaultByEnumerable(): boolean {
        let defaultValue: Nullable<ENUMERABLE>
        try {
            defaultValue = this._DEFAULT
        } catch (exception) {
            throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT". An exception was thrown when attempting to retrieve the value.`, exception as never,)
        }
        if (defaultValue == null)
            return false

        if (!isEnum(defaultValue) && !isEnumByStructure(defaultValue))
            throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT) was not an Enum or in the structure of an Enumerable.`, defaultValue,)
        try {
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByEnumerable(defaultValue as Enumerable,),)
            return true
        } catch (exception) {
            if (exception instanceof InvalidEnumerableException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT". The value ${defaultValue} is not a valid instance received by the companion enum.`, exception,)
            throw exception
        }
    }

    /**
     * Initialize the default value from {@link _DEFAULT_NAME}
     *
     * @returns {boolean} The default value has been initialized
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    #initializeDefaultByName(): boolean {
        let defaultName: Nullable<PossibleString>
        try {
            defaultName = this._DEFAULT_NAME
        } catch (exception) {
            throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". An exception was thrown when attempting to retrieve the value.`, exception as never,)
        }

        if (defaultName == null)
            return false

        if (typeof defaultName != "string" && !(defaultName instanceof String))
            throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT_NAME) was not an string (primitive or object).`, defaultName,)
        try {
            if (typeof defaultName == "string") {
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByString(defaultName, defaultName,),)
                return true
            }
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByString(defaultName.valueOf(), defaultName,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenInheritedEnumerableMemberException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is one possible value of the inherited field name (${EnumConstants.INHERITED_ENUMERABLE_MEMBERS.map(it => `"${it}"`).join(", ")}).`, exception,)
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is equivalent to ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is an impossible ordinal value.`, exception,)
            if (exception instanceof InvalidEnumerableException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${this.instance.name}.${defaultName}" is not a valid instance for the companion enum.`, exception,)
            throw exception
        }
    }

    /**
     * Initialize the default value from {@link _DEFAULT_ORDINAL}
     *
     * @returns {boolean} The default value has been initialized
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    #initializeDefaultByOrdinal(): boolean {
        let defaultOrdinal: Nullable<PossibleNumeric>
        try {
            defaultOrdinal = this._DEFAULT_ORDINAL
        } catch (exception) {
            throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". An exception was thrown when attempting to retrieve the value.`, exception as never,)
        }

        if (defaultOrdinal == null)
            return false

        if (typeof defaultOrdinal != "number" && typeof defaultOrdinal != "bigint" && !(defaultOrdinal instanceof Number) && !(defaultOrdinal instanceof BigInt))
            throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL) was not an number or bigint (primitive or object).`, defaultOrdinal,)
        try {
            if (typeof defaultOrdinal == "number") {
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByNumber(defaultOrdinal, defaultOrdinal,),)
                return true
            }
            if (typeof defaultOrdinal == "bigint") {
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByBigInt(defaultOrdinal, defaultOrdinal,),)
                return true
            }
            if (defaultOrdinal instanceof Number) {
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByNumber(defaultOrdinal.valueOf(), defaultOrdinal,),)
                return true
            }
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByBigInt(defaultOrdinal.valueOf(), defaultOrdinal,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${defaultOrdinal}" is ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${defaultOrdinal}" is negative, over the Number.MAX_VALUE or a floating value.`, exception,)
            if (exception instanceof InvalidEnumerableException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${this.instance.name}.${defaultOrdinal}" is not a valid instance for the companion enum.`, exception,)
            if (exception instanceof InvalidInstanceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${this.instance.name}.${defaultOrdinal}" is not an Enumerable valid for the companion enum.`, exception,)
            throw exception
        }
    }

    //#endregion -------------------- Initialization methods --------------------
    //#region -------------------- Validation & conversion methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal name or ordinal received} is not <b>null</b> and has the structure of an {@link Enumerable}
     *
     * @param nameOrOrdinal The name or ordinal to retrieve
     * @throws {NullReferenceException} The {@link nameOrOrdinal name or ordinal received} is not present in the {@link instance}
     * @throws {NullReferenceException} The value from reflection is <b>null</b>
     * @throws {InvalidInstanceException} The value is not in the structure of an {@link Enumerable}
     */
    #validateIsEnumerableFromReflection(nameOrOrdinal: | string | number,): Enumerable {
        const instance = this.instance
        if (!Reflect.has(instance, nameOrOrdinal,))
            throw new NullReferenceException(`No value exist in "${instance.name}.${nameOrOrdinal}".`, nameOrOrdinal,)

        const value = Reflect.get(instance, nameOrOrdinal,)
        if (value == null)
            throw new NullReferenceException(`The value "${instance.name}.${nameOrOrdinal}" cannot be a null reference."`, nameOrOrdinal,)

        if (isEnum(value))
            return value
        if (isEnumByStructure(value))
            return value as Enumerable
        throw new InvalidInstanceException(`The reference "${instance.name}.${nameOrOrdinal}" is not instance of Enumerable.`, nameOrOrdinal,)
    }


    /**
     * Validate that the {@link value value received} is a valid {@link String} to be used as either
     * a {@link Enumerable enumerable} {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal}
     *
     * @param value The value to validate
     * @param originalValue The original value received in a method ({@link _getValue}, {@link _getName} or {@link _getOrdinal})
     * @throws {ForbiddenNumericException} The {@link value} is one of the {@link EnumConstants.EDGE_CASE_NUMERIC_NAME edge-case numeric name}
     * @throws {ForbiddenInheritedEnumerableMemberException} The {@link value} is one of the {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS inherited enumerable member}
     * @throws {ImpossibleOrdinalException} The {@link value} is under 0, over {@link Number.MAX_VALUE max value} or a floating {@link Number}
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
        if (Number.isNaN(value,))
            throw new ForbiddenNumericException("Forbidden numeric. The number value cannot be a NaN.", originalValue,)
        if (value == Number.NEGATIVE_INFINITY)
            throw new ForbiddenNumericException("Forbidden numeric. The number value cannot be the negative infinity.", originalValue,)
        if (value == Number.POSITIVE_INFINITY)
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
        if (value > EnumConstants.MAX_VALUE_AS_BIGINT)
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

    //#region -------------------- "Get non null value" methods --------------------

    /**
     * Get the {@link NonNullable} {@link value} or throw a {@link NullEnumerableException}
     * from a {@link getValue} method
     *
     * @param value The value to validate
     * @throws NullEnumerableException
     */
    protected _getNonNullValueFromGetValue<const T, >(value: Nullable<T>,): T {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the value. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)
        return value
    }

    /**
     * Get the {@link NonNullable} {@link value} or throw a {@link NullEnumerableException}
     * from a {@link getName} method
     *
     * @param value The value to validate
     * @throws NullEnumerableException
     */
    protected _getNonNullValueFromGetName<const T, >(value: Nullable<T>,): T {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the name. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)
        return value
    }

    /**
     * Get the {@link NonNullable} {@link value} or throw a {@link NullEnumerableException}
     * from a {@link getOrdinal} method
     *
     * @param value The value to validate
     * @throws NullEnumerableException
     */
    protected _getNonNullValueFromGetOrdinal<const T, >(value: Nullable<T>,): T {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the ordinal. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)
        return value
    }


    //#endregion -------------------- "Get non null value" methods --------------------
    //#region -------------------- "Get value" methods --------------------

    public getValue                                                                                              (value: Nullable<ImpossibleNames>,):                                                               never
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
     * <i><b>Note:</b><br/>
     * This method is only here in order to provide a way to distinguish the type of the value.
     * It should not be overridden in normal circumstances.</i>
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
     * @readonly
     */
    protected _getValue(value: Nullable<PossibleEnumerableValue>,): ENUMERABLE {
        value = this._getNonNullValueFromGetValue(value,)

        if (typeof value == "string")
            return this._getValueByString(value, value)
        if (typeof value == "number")
            return this._getValueByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getValueByBigInt(value, value,)
        if (isEnum(value))
            return this._getValueByEnumerable(value,)
        if (isEnumByStructure(value,))
            return this._getValueByEnumerable(value,)
        if (value instanceof String)
            return this._getValueByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getValueByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getValueByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getValue",)
    }

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Open get value" methods --------------------

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
        return this._getValueByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,),),)
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
        return this._getValueByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,),),)
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

        throw new InvalidEnumerableException(`The enumerable "${getLastPrototype(value).name}.${value.name}" is not an instance of "${instance.name}".`, value, [instance,],)
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

    //#endregion -------------------- "Open get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    public getName                                                                                                           (value: Nullable<ImpossibleNames>,):                                                             never
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
     * <i><b>Note:</b><br/>
     * This method is only here in order to provide a way to distinguish the type of the value.
     * It should not be overridden in normal circumstances.</i>
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
     * @readonly
     */
    protected _getName(value: Nullable<PossibleEnumerableValue>,) {
        value = this._getNonNullValueFromGetName(value,)

        if (typeof value == "string")
            return this._getNameByString(value, value)
        if (typeof value == "number")
            return this._getNameByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getNameByBigInt(value, value,)
        if (isEnum(value))
            return this._getNameByEnumerable(value,)
        if (isEnumByStructure(value,))
            return this._getNameByEnumerable(value,)
        if (value instanceof String)
            return this._getNameByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getNameByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getNameByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getName",)
    }

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Open get name" methods --------------------

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
        return this._getNameByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,),),)
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
        return this._getNameByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,),),)
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

    //#endregion -------------------- "Open get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    public getOrdinal                                                                                                           (value: Nullable<ImpossibleNames>,):                                                             never
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
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable}).
     *
     * <i><b>Note:</b><br/>
     * This method is only here in order to provide a way to distinguish the type of the value.
     * It should not be overridden in normal circumstances.</i>
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
     * @readonly
     */
    protected _getOrdinal(value: Nullable<PossibleEnumerableValue>,): OrdinalOf<ENUMERABLE> {
        value = this._getNonNullValueFromGetOrdinal(value,)

        if (typeof value == "string")
            return this._getOrdinalByString(value, value)
        if (typeof value == "number")
            return this._getOrdinalByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getOrdinalByBigInt(value, value,)
        if (isEnum(value))
            return this._getOrdinalByEnumerable(value,)
        if (isEnumByStructure(value,))
            return this._getOrdinalByEnumerable(value,)
        if (value instanceof String)
            return this._getOrdinalByString(value.valueOf(), value,)
        if (value instanceof Number)
            return this._getOrdinalByNumber(value.valueOf(), value,)
        if (value instanceof BigInt)
            return this._getOrdinalByBigInt(value.valueOf(), value,)

        this.#throwInvalidCases(value, "getOrdinal",)
    }

    //#endregion -------------------- "Get ordinal" methods --------------------
    //#region -------------------- "Open get ordinal" methods --------------------

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
        return this._getOrdinalByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidStringValue(name, originalName,),),)
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
        return this._getOrdinalByEnumerable(this.#validateIsEnumerableFromReflection(this.#getValidNumericValue(ordinal, originalOrdinal,),),)
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

    //#endregion -------------------- "Open get ordinal" methods --------------------

    public [Symbol.iterator](): CollectionIterator<ENUMERABLE> {
        return this.values[Symbol.iterator]()
    }

    public get [Symbol.toStringTag](): CompanionEnumName {
        return EnumConstants.COMPANION_ENUM_TO_STRING_TAG
    }


    //#endregion -------------------- Methods --------------------

}

type MethodCalledName = `get${| "Value" | "Name" | "Ordinal"}`
