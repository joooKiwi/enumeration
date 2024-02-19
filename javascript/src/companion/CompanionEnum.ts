/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CollectionHolder, CollectionIterator}      from "@joookiwi/collection"
import {EmptyCollectionHolder, GenericCollectionHolder} from "@joookiwi/collection"

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                          from "./CompanionEnum.declaration"
import type {CompanionEnumName, ImpossibleNames}                                                                                                                                                                                                                                                                                                                                from "./types"
import type {Nullable, NullOr, NullOrUndefined, NumberTemplate, PossibleBigInt, PossibleNumber, PossibleNumberOrTemplate, PossibleNumeric, PossibleNumericOrTemplate, PossibleString}                                                                                                                                                                                           from "../general type"

import {EnumConstants}                               from "../EnumConstants"
import {ForbiddenNameException}                      from "../exception/ForbiddenNameException"
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
        if (this.#values === undefined && !EnumConstants.VALUES_MAP.has(this))
            this.#initializeMaps()

        const values = this.#values
        if (values == null)
            throw new NullReferenceException(`The values in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.VALUES_MAP.`, this,)
        return values
    }

    public get names(): CollectionHolder<NameOf<ENUMERABLE>> {
        if (this.#names === undefined && !EnumConstants.NAMES_MAP.has(this))
            this.#initializeMaps()

        const names = this.#names
        if (names == null)
            throw new NullReferenceException(`The names in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.NAMES_MAP.`, this,)
        return names
    }

    public get ordinals(): CollectionHolder<OrdinalOf<ENUMERABLE>> {
        if (this.#ordinals === undefined && !EnumConstants.ORDINALS_MAP.has(this))
            this.#initializeMaps()

        const ordinals = this.#ordinals
        if (ordinals == null)
            throw new NullReferenceException(`The ordinals in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.ORDINALS_MAP.`, this,)
        return ordinals
    }

    public get iterator(): CollectionIterator<ENUMERABLE> {
        return this.values[Symbol.iterator]()
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Initialization methods --------------------

    /**
     * Initialize every map for the current {@link instance} stored
     * for each individual {@link Enumerable.name name} and {@link Enumerable.ordinal ordinal}.
     * It also initializes the group of variables ({@link values}, {@link names} & {@link ordinals}).
     *
     * @see EnumConstants.VALUES_MAP
     * @see EnumConstants.NAME_MAP
     * @see EnumConstants.NAMES_MAP
     * @see EnumConstants.ORDINAL_MAP
     * @see EnumConstants.ORDINALS_MAP
     */
    #initializeMaps(): void {
        const instance = this.instance
        const excludedNames = this._excludedNames
        const everyFields = Object.entries(Object.getOwnPropertyDescriptors(instance,),)
        const everyOrdinals = [] as OrdinalOf<ENUMERABLE>[]
        const everyNames = [] as NameOf<ENUMERABLE>[]
        const everyEnumerable = [] as ENUMERABLE[]

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
            if (name === EnumConstants.PROTOTYPE_NAME)
                continue
            if(excludedNames.hasOne(name,))
                continue
            if (EnumConstants.DECIMAL_REGEX.test(name,))
                continue

            const {value,} = property
            if (!(value instanceof instance))
                continue

            EnumConstants.ORDINAL_MAP.set(value as Enumerable, currentOrdinal,)
            EnumConstants.NAME_MAP.set(value as Enumerable, name,)

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
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByEnumerable(defaultValue,),)
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
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this.#getValueFromGenericName(defaultName,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenInheritedEnumerableMemberException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is one possible value of the inherited field name (\"name\", \"ordinal\", \"parent\", \"grandParent\", \"greatGrandParent\", \"[Symbol.toPrimitive]\", \"[Symbol.toStringTag]\").`, exception,)
            if (exception instanceof ForbiddenNameException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is an excluded name ${this._excludedNames.join(", ", '(', ')', null, null, it => `"${it}"`,)}.`, exception,)
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is equivalent to ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${defaultName}" is an impossible ordinal value.`, exception,)
            if (exception instanceof InvalidInstanceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${this.instance.name}.${defaultName}" is not a valid instance for the companion enum.`, exception,)
            if (exception instanceof NullReferenceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_NAME". The value "${this.instance.name}.${defaultName}" does not exist.`, exception,)
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
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this.#getValueFromGenericOrdinal(defaultOrdinal,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${defaultOrdinal}" is ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${defaultOrdinal}" is negative, over the Number.MAX_VALUE or a floating value.`, exception,)
            if (exception instanceof NullReferenceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the "${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL". The value "${this.instance.name}.${defaultOrdinal}" does not exist.`, exception,)
            throw exception
        }
    }


    /**
     * Get the {@link Enumerable} from a name,
     * but not directly related to the {@link _getValue} method
     *
     * @param name The {@link Enumerable.name name} to search
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    #getValueFromGenericName(name: PossibleString,): ENUMERABLE {
        if (typeof name == "string")
            return this._getValueByString(name, name,)
        return this._getValueByString(name.valueOf(), name,)
    }

    /**
     * Get the {@link Enumerable} from an ordinal,
     * but not directly related to the {@link _getValue} method
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to search
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullReferenceException}
     */
    #getValueFromGenericOrdinal(ordinal: PossibleNumeric,): ENUMERABLE {
        if (typeof ordinal == "number")
            return this._getValueByNumber(ordinal, ordinal,)
        if (typeof ordinal == "bigint")
            return this._getValueByBigInt(ordinal, ordinal,)
        if (ordinal instanceof Number)
            return this._getValueByNumber(ordinal.valueOf(), ordinal,)
        return this._getValueByBigInt(ordinal.valueOf(), ordinal,)
    }

    //#endregion -------------------- Initialization methods --------------------
    //#region -------------------- Validation methods --------------------

    //#region -------------------- Validation (is not in "edge case numeric") methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal} is not an {@link EnumConstants.EDGE_CASE_NUMERIC_NAMES edge case number}
     * in the {@link String} format
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenNumericException}
     */
    protected _isNotInEdgeCaseNumericByString(nameOrOrdinal: string, originalValue: PossibleString,) {
        if (nameOrOrdinal === "NaN")
            throw new ForbiddenNumericException("Forbidden numeric. The String value cannot be NaN.", originalValue,)
        if (nameOrOrdinal === "-Infinity")
            throw new ForbiddenNumericException("Forbidden numeric. The String value cannot be -∞.", originalValue,)
        if (nameOrOrdinal === "Infinity")
            throw new ForbiddenNumericException("Forbidden numeric. The String value cannot be +∞.", originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not an {@link EnumConstants.EDGE_CASE_NUMERIC_NAMES edge case number}
     * in the {@link Number} format
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ForbiddenNumericException}
     */
    protected _isNotInEdgeCaseNumericByNumber(ordinal: number, originalValue: PossibleNumber,) {
        if (Number.isNaN(ordinal,))
            throw new ForbiddenNumericException("Forbidden numeric. The Number value cannot be NaN.", originalValue,)
        if (ordinal == -Infinity)
            throw new ForbiddenNumericException("Forbidden numeric. The Number value cannot be -∞.", originalValue,)
        if (ordinal == Infinity)
            throw new ForbiddenNumericException("Forbidden numeric. The Number value cannot be +∞.", originalValue,)
    }

    //#endregion -------------------- Validation (is not in "edge case numeric") methods --------------------
    //#region -------------------- Validation (is not in "inherited enumerable members") methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal} is not a {@link EnumConstants.EVERY_ENUMERABLE_MEMBERS enumerable member}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     */
    protected _isNotInInheritedEnumerableMembers(nameOrOrdinal: string, originalValue: PossibleString,) {
        if (EnumConstants.EVERY_ENUMERABLE_MEMBERS.hasOne(nameOrOrdinal,))
            throw new ForbiddenInheritedEnumerableMemberException(`Forbidden inherited enumerable member. The string value "${originalValue}" cannot be an inherited member of the inherited Enum static methods (\"name\", \"ordinal\", \"parent\", \"grandParent\", \"greatGrandParent\").`, originalValue,)
    }

    //#endregion -------------------- Validation (is not in "inherited enumerable members") methods --------------------
    //#region -------------------- Validation (is not in "excluded names") methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal} is not one of the {@link _excludedNames excluded names}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenNameException}
     */
    protected _isNotInExcludedNames(nameOrOrdinal: string, originalValue: PossibleString,) {
        const excludedNames = this._excludedNames
        if (excludedNames.hasOne(nameOrOrdinal,))
            throw new ForbiddenNameException(`Forbidden name. The char value "${nameOrOrdinal}" is one of the excluded names ${excludedNames.join(", ", '(', ')', null, null, it => `"${it}"`,)}.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not in "excluded names") methods --------------------
    //#region -------------------- Validation (is in ordinal) methods --------------------

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isInOrdinalsByString(ordinal: NumberTemplate, originalValue: PossibleString,) {
        const ordinals = this.ordinals
        if (ordinals.hasOne(Number(ordinal,),))
            return
        throw new ImpossibleOrdinalException(`The String value "${ordinal}" is not within a valid ordinal ${ordinals.join(", ", '(', ')',)}.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @returns number The {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isInOrdinalsByNumber(ordinal: number, originalValue: PossibleNumber,): OrdinalOf<ENUMERABLE> {
        const ordinals = this.ordinals
        if (ordinals.hasOne(ordinal,))
            return ordinal
        throw new ImpossibleOrdinalException(`The Number value "${ordinal}" is not within a valid ordinal ${ordinals.join(", ", '(', ')',)}.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @returns number The converted {@link ordinal} as a {@link Number}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isInOrdinalsByBigInt(ordinal: bigint, originalValue: PossibleBigInt,): OrdinalOf<ENUMERABLE> {
        const convertedOrdinal = Number(ordinal,)
        const ordinals = this.ordinals
        if (ordinals.hasOne(convertedOrdinal,))
            return convertedOrdinal
        throw new ImpossibleOrdinalException(`The BigInt value "${ordinal}" is not within a valid ordinal ${ordinals.join(", ", '(', ')',)}.`, originalValue,)
    }

    //#endregion -------------------- Validation (is in ordinal) methods --------------------
    //#region -------------------- Validation (is positive) methods --------------------

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isPositiveByString(ordinal: NumberTemplate, originalValue: PossibleString,) {
        if (ordinal[0] === '-')
            throw new ImpossibleOrdinalException(`The String value "${ordinal}" cannot be under 0.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isPositiveByNumber(ordinal: number, originalValue: PossibleNumber,) {
        if (ordinal < 0)
            throw new ImpossibleOrdinalException(`The Number value "${ordinal}" cannot be under 0.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isPositiveByBigInt(ordinal: bigint, originalValue: PossibleBigInt,) {
        if (ordinal < 0n)
            throw new ImpossibleOrdinalException(`The BigInt value "${ordinal}" cannot be under 0.`, originalValue,)
    }

    //#endregion -------------------- Validation (is positive) methods --------------------
    //#region -------------------- Validation (is not over MAX_VALUE) methods --------------------

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_NUMBER maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isNotOverMaxValueByString(ordinal: NumberTemplate, originalValue: PossibleString,) {
        if (ordinal.length > 10)
            throw new ImpossibleOrdinalException(`The String value "${ordinal}" cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
        if (Number(ordinal,) > 0b111_1111_1111_1111_1111_1111_1111_1111)
            throw new ImpossibleOrdinalException(`The String value "${ordinal}" cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_NUMBER maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isNotOverMaxValueByNumber(ordinal: number, originalValue: PossibleNumber,) {
        if (ordinal > 0b111_1111_1111_1111_1111_1111_1111_1111)
            throw new ImpossibleOrdinalException(`The Number value "${ordinal}" cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isNotOverMaxValueByBigInt(ordinal: bigint, originalValue: PossibleBigInt,) {
        if (ordinal > 0b111_1111_1111_1111_1111_1111_1111_1111n)
            throw new ImpossibleOrdinalException(`The BigInt value "${ordinal}" cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not over MAX_VALUE) methods --------------------
    //#region -------------------- Validation (is not a floating value) methods --------------------

    /**
     * Validate that the {@link ordinal} is not a floating {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isNotAFloatingNumberByString(ordinal: NumberTemplate, originalValue: PossibleString,) {
        const size = ordinal.length
        let index = -1
        while (++index < size)
            if (ordinal[index] == '.')
                throw new ImpossibleOrdinalException(`The string value "${ordinal}" cannot be a floating value.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not a floating {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _isNotAFloatingNumberByNumber(ordinal: number, originalValue: PossibleNumber,) {
        if (ordinal % 1 != 0)
            throw new ImpossibleOrdinalException(`The number value "${ordinal}" cannot be a floating value.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not a floating value) methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get the field from the {@link instance} with a validation that it exist
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} that can exist
     * @param originalValue The original {@link nameOrOrdinal} received
     * @param instance The instance to tell if the value exists
     * @throws {NullReferenceException}
     */
    #getField(nameOrOrdinal: string, originalValue: PossibleString, instance: ENUMERABLE_CONSTRUCTOR,): unknown {
        if (!Reflect.has(instance, nameOrOrdinal,))
            throw new NullReferenceException(`No value exist in "${instance.name}.${nameOrOrdinal}".`, originalValue,)
        return Reflect.get(instance, nameOrOrdinal,)
    }

    /**
     * Validate that the {@link value} is not <b>null</b>
     *
     * @param value the value to validate
     * @param nameOrOrdinal the {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal}
     * @param originalValue The original {@link nameOrOrdinal} received
     * @param instance The instance (to avoid recalling the {@link CompanionEnumDeclaration.instance getter})
     * @throws {NullReferenceException}
     */
    #getValue<const T = unknown, >(value: T, nameOrOrdinal: string, originalValue: PossibleString, instance: ENUMERABLE_CONSTRUCTOR,): NonNullable<T> {
        if (value == null)
            throw new NullReferenceException(`The value "${instance.name}.CompanionEnum.get.${nameOrOrdinal}" cannot be a null reference.`, originalValue,)
        return value
    }


    /**
     * Get the valid value that is a valid {@link Enumerable}
     * for the current {@link instance}
     *
     * @param enumerable The instance to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getValidValueByEnumerable(enumerable: Enumerable,): ENUMERABLE {
        const instance = this.instance
        if (!(enumerable instanceof instance))
            throw new InvalidEnumerableException(`The enumerable "${getLastPrototype(enumerable).name}.${enumerable.name}" is not an instance of "${instance.name}".`, enumerable, [instance,],)
        return this._getValueFromValues(enumerable,)
    }

    /**
     * Get a valid value that is a valid {@link Enumerable} for the current instance
     *
     * @param value The value to validate
     * @param nameOrOrdinal Either the {@link Enumerable.name name} or the {@link Enumerable.ordinal ordinal}
     * @param originalValue The original {@link nameOrOrdinal} received
     * @param instance The instance to tell if it is an instance of it
     * @throws {InvalidInstanceException}
     */
    protected _getValidValueByString(value: NonNullable<unknown>, nameOrOrdinal: string, originalValue: PossibleString, instance: ENUMERABLE_CONSTRUCTOR,): ENUMERABLE {
        if (value instanceof instance)
            return value as ENUMERABLE
        throw new InvalidInstanceException(`The reference "${instance.name}.${nameOrOrdinal}" is not an instance of ${instance.name}.`, originalValue,)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable} via reflection
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    protected _getValueFromReflection(nameOrOrdinal: string, originalValue: PossibleString,) {
        const instance = this.instance
        const field = this.#getField(nameOrOrdinal, originalValue, instance,)
        const value = this.#getValue(field, nameOrOrdinal, originalValue, instance,)
        return this._getValidValueByString(value, nameOrOrdinal, originalValue, instance,)
    }

    /**
     * Get an {@link Enumerable} from the {@link ordinals instance ordinals}
     * (utilizing the {@link values instance values})
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {NullReferenceException}
     */
    protected _getValueFromOrdinals(ordinal: OrdinalOf<ENUMERABLE>, originalValue: PossibleNumeric,) {
        const valueFound = this.values.getOrNull(ordinal,)
        if (valueFound == null)
            throw new NullReferenceException(`No value could be found by the ordinal "${ordinal}".`, originalValue,)
        return valueFound
    }

    /**
     * Get an {@link Enumerable} from the {@link values}
     *
     * @param value The {@link Enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValues(value: Enumerable,) {
        const valueFound = this.values.find(it => it === value,)
        if (valueFound == null)
            throw new NullReferenceException(`No "${value.name}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------
    //#region -------------------- Get name (validated) methods --------------------

    /**
     * The main validator method to tell if the {@link nameOrOrdinal} is valid
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     */
    protected _getValidName(nameOrOrdinal: string, originalValue: PossibleString,): string {
        this._isNotInEdgeCaseNumericByString(nameOrOrdinal, originalValue,)
        this._isNotInInheritedEnumerableMembers(nameOrOrdinal, originalValue,)
        this._isNotInExcludedNames(nameOrOrdinal, originalValue,)

        if (EnumConstants.INTEGER_REGEX.test(nameOrOrdinal,)) {
            this._isPositiveByString(nameOrOrdinal as NumberTemplate, originalValue,)
            this._isNotOverMaxValueByString(nameOrOrdinal as NumberTemplate, originalValue,)
            this._isInOrdinalsByString(nameOrOrdinal as NumberTemplate, originalValue,)
            return nameOrOrdinal
        }
        if (EnumConstants.DECIMAL_REGEX.test(nameOrOrdinal,)) {
            this._isPositiveByString(nameOrOrdinal as NumberTemplate, originalValue,)
            this._isNotAFloatingNumberByString(nameOrOrdinal as NumberTemplate, originalValue,)
            this._isNotOverMaxValueByString(nameOrOrdinal as NumberTemplate, originalValue,)
            this._isInOrdinalsByString(nameOrOrdinal as NumberTemplate, originalValue,)
            return nameOrOrdinal
        }

        return nameOrOrdinal
    }

    //#endregion -------------------- Get name (validated) methods --------------------
    //#region -------------------- Get ordinal (validated) methods --------------------

    /**
     * The main validator to tell if the {@link ordinal} is valid
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     */
    protected _getValidOrdinalByNumber(ordinal: number, originalValue: PossibleNumber,) {
        this._isNotInEdgeCaseNumericByNumber(ordinal, originalValue,)
        this._isPositiveByNumber(ordinal, originalValue,)
        this._isNotAFloatingNumberByNumber(ordinal, originalValue,)
        this._isNotOverMaxValueByNumber(ordinal, originalValue,)
        return this._isInOrdinalsByNumber(ordinal, originalValue,)
    }

    /**
     * The main validator to tell if the {@link ordinal} is valid
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     */
    protected _getValidOrdinalByBigInt(ordinal: bigint, originalValue: PossibleBigInt,) {
        this._isPositiveByBigInt(ordinal, originalValue,)
        this._isNotOverMaxValueByBigInt(ordinal, originalValue,)
        return this._isInOrdinalsByBigInt(ordinal, originalValue,)
    }

    //#endregion -------------------- Get ordinal (validated) methods --------------------

    /**
     * Throw a specific error message to give a user-friendly feedback on what they sent as an invalid value
     *
     * @param value The value that is not a {@link String}, {@link Number}, {@link BigInt} or {@link Enumerable}
     * @param methodCalled The method calling it
     * @throws {UnhandledValueException} An exception with a personalized message depending on the invalid type
     *
     * @uniqueToJavascript
     */
    #throwInvalidCases(value: NonNullable<unknown>, methodCalled: MethodCalledName,): never {
        if (typeof value == "boolean" || value instanceof Boolean)
            throw new UnhandledValueException(`A Boolean value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (typeof value == "symbol" || value instanceof Symbol)
            throw new UnhandledValueException(`A Symbol value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (typeof value == "function" || value instanceof Function)
            throw new UnhandledValueException(`A Function value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof RegExp)
            throw new UnhandledValueException(`A Regex value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof Array)
            throw new UnhandledValueException(`An Array value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof Set)
            throw new UnhandledValueException(`A Set value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof Map)
            throw new UnhandledValueException(`A Map value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof WeakSet)
            throw new UnhandledValueException(`A WeakSet value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        if (value instanceof WeakMap)
            throw new UnhandledValueException(`A WeakMap value cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
        throw new UnhandledValueException(`The value received is not of type String, Number, BigInt or Enumerable. It cannot be received in "${this.instance.name}.CompanionEnum.get.${methodCalled}(value)".`, value,)
    }

    //#endregion -------------------- Validation methods --------------------

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

    public getValue(value: Nullable<ImpossibleNames>,): never
    public getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getValue<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getValue(ordinal: Nullable<PossibleNumericOrTemplate>,): ENUMERABLE
    public getValue<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public getValue(nameOrOrdinal: Nullable<PossibleString>,): ENUMERABLE
    public getValue<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): INSTANCE
    public getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, >(value: Nullable<PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ENUMERABLE
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
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     * @readonly
     */
    protected _getValue(value: Nullable<PossibleEnumerableValue>,): ENUMERABLE {
        value = this._getNonNullValueFromGetValue(value,)

        if (typeof value == "string")
            return this._getValueByString(value, value,)
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

    //#region -------------------- "Get value" with original methods --------------------

    /**
     * Get a valid {@link Enumerable} by an {@link Enumerable}
     *
     * @param enumerable The enumerable to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected _getValueByEnumerable(enumerable: Enumerable,){
        return this._getValidValueByEnumerable(enumerable,)
    }

    /**
     * Get a valid {@link Enumerable} by a {@link String}
     *
     * @param name The name to validate
     * @param originalValue The original {@link name}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getValueByString(name: string, originalValue: PossibleString,) {
        return this._getValueFromReflection(this._getValidName(name, originalValue,), originalValue,)
    }

    /**
     * Get a valid {@link Enumerable} by a {@link Number}
     *
     * @param ordinal The ordinal to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getValueByNumber(ordinal: number, originalValue: PossibleNumber,) {
        return this._getValueFromOrdinals(this._getValidOrdinalByNumber(ordinal, originalValue,), originalValue,)
    }

    /**
     * Get a valid {@link Enumerable} from a {@link BigInt}
     *
     * @param ordinal The ordinal
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getValueByBigInt(ordinal: bigint, originalValue: PossibleBigInt,) {
        return this._getValueFromOrdinals(this._getValidOrdinalByBigInt(ordinal, originalValue,), originalValue,)
    }

    //#endregion -------------------- "Get value" with original methods --------------------

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    public getName(value: Nullable<ImpossibleNames>,): never
    public getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getName<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public getName(ordinal: Nullable<PossibleNumericOrTemplate>,): NameOf<ENUMERABLE>
    public getName<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): SpecificNameOf<NAME, ENUMERABLE>
    public getName(nameOrOrdinal: Nullable<PossibleString>,): NameOf<ENUMERABLE>
    public getName<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>
    public getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<| INSTANCE | ENUMERABLE>
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
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     * @readonly
     */
    protected _getName(value: Nullable<PossibleEnumerableValue>,) {
        value = this._getNonNullValueFromGetName(value,)

        if (typeof value == "string")
            return this._getNameByString(value, value,)
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

    //#region -------------------- "Get name" with original methods --------------------

    /**
     * Get a valid {@link Enumerable.name} by an {@link Enumerable}
     *
     * @param enumerable The {@link Enumerable} to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getNameByEnumerable(enumerable: Enumerable,): NameOf<ENUMERABLE> {
        return this._getValidValueByEnumerable(enumerable,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link String}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getNameByString(nameOrOrdinal: string, originalValue: PossibleString,): NameOf<ENUMERABLE> {
        return this._getValueFromReflection(this._getValidName(nameOrOrdinal, originalValue), originalValue,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getNameByNumber(ordinal: number, originalValue: PossibleNumber,): NameOf<ENUMERABLE> {
        return this._getValueFromOrdinals(this._getValidOrdinalByNumber(ordinal, originalValue,), originalValue,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link BigInt}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getNameByBigInt(ordinal: bigint, originalValue: PossibleBigInt,): NameOf<ENUMERABLE> {
        return this._getValueFromOrdinals(this._getValidOrdinalByBigInt(ordinal, originalValue,), originalValue,).name
    }

    //#endregion -------------------- "Get name" with original methods --------------------

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    public getOrdinal(value: Nullable<ImpossibleNames>,): never
    public getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public getOrdinal(ordinal: Nullable<PossibleNumericOrTemplate>,): OrdinalOf<ENUMERABLE>
    public getOrdinal<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public getOrdinal(nameOrOrdinal: Nullable<PossibleString>,): OrdinalOf<ENUMERABLE>
    public getOrdinal<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>
    public getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<| INSTANCE | ENUMERABLE>
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
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @throws {UnhandledValueException}
     * @readonly
     */
    protected _getOrdinal(value: Nullable<PossibleEnumerableValue>,): OrdinalOf<ENUMERABLE> {
        value = this._getNonNullValueFromGetOrdinal(value,)

        if (typeof value == "string")
            return this._getOrdinalByString(value, value,)
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

    //#region -------------------- "Get ordinal" with original methods --------------------

    /**
     * Get a valid {@link Enumerable.ordinal} by an {@link Enumerable}
     *
     * @param enumerable The enumerable to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getOrdinalByEnumerable(enumerable: Enumerable,): OrdinalOf<ENUMERABLE> {
        return this._getValidValueByEnumerable(enumerable,).ordinal
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link String}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     * @readonly
     */
    protected _getOrdinalByString(nameOrOrdinal: string, originalValue: PossibleString,): OrdinalOf<ENUMERABLE> {
        return this._getValueFromReflection(this._getValidName(nameOrOrdinal,originalValue,),originalValue,).ordinal
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @readonly
     */
    protected _getOrdinalByNumber(ordinal: number, originalValue: PossibleNumber,): OrdinalOf<ENUMERABLE> {
        return this._getValidOrdinalByNumber(ordinal, originalValue,)
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link BigInt}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws {ImpossibleOrdinalException}
     * @readonly
     */
    protected _getOrdinalByBigInt(ordinal: bigint, originalValue: PossibleBigInt,): OrdinalOf<ENUMERABLE> {
        return this._getValidOrdinalByBigInt(ordinal, originalValue,)
    }

    //#endregion -------------------- "Get ordinal" with original methods --------------------

    //#endregion -------------------- "Get ordinal" methods --------------------

    public [Symbol.iterator](): CollectionIterator<ENUMERABLE> {
        return this.values[Symbol.iterator]()
    }

    public get [Symbol.toStringTag](): CompanionEnumName {
        return "CompanionEnum"
    }


    //#endregion -------------------- Methods --------------------

}

type MethodCalledName = `get${| "Value" | "Name" | "Ordinal"}`
