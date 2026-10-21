//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {CollectionHolder, CollectionIterator}                                                                                                                                                                                   from "@joookiwi/collection"
import type {BigIntOrObject, MutableArray, Nullable, NullableString, NullOr, NullOrUndefined, NumberOrObject, NumberTemplate, NumericOrObject, StringOrNumericOrObject, StringOrObject, TemplateOrNumber, TemplateOrNumericOrObject} from "@joookiwi/type"
import {ArrayAsCollectionHolder, EmptyCollectionHolder, GenericCollectionHolder}                                                                                                                                                     from "@joookiwi/collection"

import type {Enumerable}                                                                from "../Enumerable"
import type {EnumerableConstructor}                                                     from "../EnumerableConstructor"
import type {CompanionEnumerable}                                                       from "./CompanionEnumerable"
import type {ImpossibleNames}                                                           from "../type/name"
import type {NameOf, SpecificNameOf}                                                    from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                              from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"
import type {CompanionEnumName}                                                         from "../type/toStringTag"

import {Enum}                                        from "../Enum"
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
import {_getSimplifiedPrototypeChains}               from "../method/_getSimplifiedPrototypeChains"
import {getLastPrototype}                            from "../method/getLastPrototype"
import {isEnum}                                      from "../method/isEnum"
import {isEnumByStructure}                           from "../method/isEnumByStructure"
import {_hasPrototypeOf}                             from "../method/_hasPrototypeOf"

export class CompanionEnum<const ENUM extends Enumerable,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR>>, >
    implements CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #instance: ENUM_CONSTRUCTOR
    #values?: CollectionHolder<ENUM>
    #names?: CollectionHolder<NameOf<ENUM>>
    #ordinals?: CollectionHolder<OrdinalOf<ENUM>>
    #defaultValue?: NullOr<ENUM>
    #excludedNames?: CollectionHolder<string>


    /**
     * The excluded names that are an instance of the current instance.
     *
     * Note that giving an invalid name will result in an exception on the first time it is initialized.
     * From either {@link Enumerable.name get name},
     * {@link CompanionEnum.getValue getValue()}, {@link CompanionEnum.values get values},
     * {@link CompanionEnum.getOrdinal getOrdinal()}, {@link CompanionEnum.ordinals get ordinals}
     * {@link CompanionEnum.getName getName()} or {@link CompanionEnum.names get names}
     */
    protected readonly _EXCLUDED_NAMES?: Nullable<Iterable<NullableString>>

    /**
     * The default {@link Enumerable enumerable value} stored for the current instance at the initialization
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT?: Nullable<ENUM>
    /**
     * The default {@link Enumerable.name name value} stored for the current instance at the initialization
     * (is ignored if there is a value on the {@link _DEFAULT})
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT_NAME?: Nullable<StringOrObject>
    /**
     * The default {@link Enumerable.ordinal ordinal value} stored for the current instance at the initialization
     * (is ignored if there is a value on the {@link _DEFAULT_NAME})
     *
     * @canUseAGetterMethodInstead
     * @canOnlyCalledOnce
     */
    protected readonly _DEFAULT_ORDINAL?: Nullable<NumericOrObject>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUM_CONSTRUCTOR,) {
        if (instance == null)
            throw new NullInstanceException()
        if (!(instance instanceof Function))
            throw new InvalidInstanceException(`Invalid instance exception. The instance received in “${this.constructor.name}” is not a function type.`, instance,)
        this.#instance = __validateInstance(instance,)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get instance(): ENUM_CONSTRUCTOR {
        return this.#instance
    }


    protected get _excludedNames(): CollectionHolder<string> {
        const value = this.#excludedNames
        if (value != null)
            return value

        const excludedNames = this._EXCLUDED_NAMES
        if (excludedNames == null)
            return this.#excludedNames = EmptyCollectionHolder.get
        return this.#excludedNames = new GenericCollectionHolder(excludedNames,).filterNotNull()
    }


    public get defaultValue(): ENUM {
        if (this.#defaultValue === undefined)
            if (!EnumConstants.DEFAULT_MAP.has(this,))
                this.#initializeDefault()

        const defaultValue = this.#defaultValue
        if (defaultValue == null)
            throw new NullEnumerableException(`The default value was set to null or removed on “${this.instance.name}”. Try a calling “${this.instance.name}.CompanionEnum.get.defaultValue = value” or “${this.instance.name}.CompanionEnum.get.setDefault(value)”.`,)
        return defaultValue
    }

    public set defaultValue(value: Nullable<PossibleEnumerableValue<ENUM>>,) {
        if (value == null)
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = null,)
        else
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValue(value,),)
    }

    public setDefaultValue(value: NullOrUndefined,): this
    public setDefaultValue(value: ImpossibleNames,): never
    public setDefaultValue(enumerable: Nullable<ENUM>,): this
    public setDefaultValue(ordinal: Nullable<TemplateOrNumericOrObject>,): this
    public setDefaultValue(name: Nullable<StringOrObject>,): this
    public setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM>,): this
    public setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM>,) {
        this.defaultValue = value
        return this
    }


    public get values(): CollectionHolder<ENUM> {
        if (this.#values === undefined)
            if (!EnumConstants.VALUES_MAP.has(this,))
                this.#initializeMaps()

        const values = this.#values
        if (values == null)
            throw new NullReferenceException(`The values in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.VALUES_MAP.`, this,)
        return values
    }

    public get names(): CollectionHolder<NameOf<ENUM>> {
        if (this.#names === undefined)
            if (!EnumConstants.NAMES_MAP.has(this,))
                this.#initializeMaps()

        const names = this.#names
        if (names == null)
            throw new NullReferenceException(`The names in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.NAMES_MAP.`, this,)
        return names
    }

    public get ordinals(): CollectionHolder<OrdinalOf<ENUM>> {
        if (this.#ordinals === undefined)
            if (!EnumConstants.ORDINALS_MAP.has(this,))
                this.#initializeMaps()

        const ordinals = this.#ordinals
        if (ordinals == null)
            throw new NullReferenceException(`The ordinals in the ${this.constructor.name} was not expected to be null after it has already been initialized or contained in the EnumConstants.ORDINALS_MAP.`, this,)
        return ordinals
    }

    public get iterator(): CollectionIterator<ENUM> {
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
        const everyOrdinals: OrdinalOf<ENUM>[] = []
        const everyNames: NameOf<ENUM>[] = []
        const everyEnumerable: ENUM[] = []

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
            if (name === "prototype")
                continue
            if (excludedNames.has(name,))
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
            everyEnumerable.push(value as ENUM,)
        }

        EnumConstants.ORDINALS_MAP.set(this, this.#ordinals = new ArrayAsCollectionHolder<OrdinalOf<ENUM>>(Object.freeze(everyOrdinals,),),)
        EnumConstants.NAMES_MAP.set(this, this.#names = new ArrayAsCollectionHolder<NameOf<ENUM>>(Object.freeze(everyNames,),),)
        EnumConstants.VALUES_MAP.set(this, this.#values = new ArrayAsCollectionHolder<ENUM>(Object.freeze(everyEnumerable,),),)
    }


    /**
     * Initialize the default value by retrieving the {@link _DEFAULT} first,
     * then the {@link _DEFAULT_NAME} and finally the {@link _DEFAULT_ORDINAL}.
     *
     * If all of them are `null`, then a {@link NullEnumerableException} will be thrown.
     *
     * And if the values expected ({@link _DEFAULT}, {@link _DEFAULT_NAME} or {@link _DEFAULT_ORDINAL})
     * are not in the expected type, then an {@link UnhandledValueException} is thrown.
     *
     * @see EnumConstants.DEFAULT_MAP
     * @throws NullEnumerableException An exception occurred while retrieving and validating the {@link _DEFAULT}|{@link _DEFAULT_NAME}|{@link _DEFAULT_ORDINAL}
     * @throws NullEnumerableException The default value could not be initialized
     * @throws UnhandledValueException The {@link _DEFAULT}|{@link _DEFAULT_NAME}|{@link _DEFAULT_ORDINAL} was an improper type
     */
    #initializeDefault(): void {
        if (this.#initializeDefaultByEnumerable())
            return
        if (this.#initializeDefaultByName())
            return
        if (this.#initializeDefaultByOrdinal())
            return

        throw new NullEnumerableException(`Unable to get the default value. There is no default stored for “${this.instance.name}”. Try using the the “_DEFAULT”, “_DEFAULT_NAME” or “_DEFAULT_ORDINAL” (at declaration) or call “${this.instance.name}.defaultValue = value”.`,)
    }

    /**
     * Initialize the default value from {@link _DEFAULT}
     *
     * @returns {boolean} The default value has been initialized
     * @throws NullEnumerableException An exception occurred while retrieving and validating the {@link _DEFAULT}
     * @throws UnhandledValueException The default value was an improper type
     */
    #initializeDefaultByEnumerable(): boolean {
        const defaultValue = this._DEFAULT
        if (defaultValue == null)
            return false

        if (!isEnum(defaultValue,))
            if (!isEnumByStructure(defaultValue,))
                throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT) was not an Enum or in the structure of an Enumerable.`, defaultValue,)
        try {
            EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByEnumerable(defaultValue,),)
            return true
        } catch (exception) {
            if (exception instanceof InvalidEnumerableException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT”. The value ${defaultValue} is not a valid instance received by the companion enum.`, exception,)
            if (exception instanceof NullReferenceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT”. The value ${defaultValue} is not a valid instance received by the companion enum.`, exception,)
            throw exception
        }
    }

    /**
     * Initialize the default value from {@link _DEFAULT_NAME}
     *
     * @returns {boolean} The default value has been initialized
     * @throws NullEnumerableException An exception occurred while retrieving and validating the {@link _DEFAULT_NAME}
     * @throws UnhandledValueException The default value was an improper type
     */
    #initializeDefaultByName(): boolean {
        const defaultName = this._DEFAULT_NAME
        if (defaultName == null)
            return false

        if (typeof defaultName != "string")
            if (!(defaultName instanceof String))
                throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT_NAME) was not a string (primitive or object).`, defaultName,)
        try {
            if (typeof defaultName == "string")
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByString(defaultName, defaultName,),)
            else
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByString(defaultName.valueOf(), defaultName,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenInheritedEnumerableMemberException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${defaultName}” is one possible value of the inherited field name (“name”, “ordinal”, “parent”, “grandParent”, “greatGrandParent”, “[Symbol.toPrimitive]”, “[Symbol.toStringTag]”).`, exception,)
            if (exception instanceof ForbiddenNameException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${defaultName}” is an excluded name ${this._excludedNames.joinToString(", ", '(', ')', null, null, it => `“${it}”`,)}.`, exception,)
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${defaultName}” is equivalent to ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${defaultName}” is an impossible ordinal value.`, exception,)
            if (exception instanceof InvalidInstanceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${this.instance.name}.${defaultName}” is not a valid instance for the companion enum.`, exception,)
            if (exception instanceof NullReferenceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_NAME”. The value “${this.instance.name}.${defaultName}” does not exist.`, exception,)
            throw exception
        }
    }

    /**
     * Initialize the default value from {@link _DEFAULT_ORDINAL}
     *
     * @returns {boolean} The default value has been initialized
     * @throws NullEnumerableException An exception occurred while retrieving and validating the {@link _DEFAULT_ORDINAL}
     * @throws UnhandledValueException The default value was an improper type
     */
    #initializeDefaultByOrdinal(): boolean {
        const defaultOrdinal = this._DEFAULT_ORDINAL
        if (defaultOrdinal == null)
            return false

        if (typeof defaultOrdinal != "number")
            if (typeof defaultOrdinal != "bigint")
                if (!(defaultOrdinal instanceof Number))
                    if (!(defaultOrdinal instanceof BigInt))
                        throw new UnhandledValueException(`The default value (${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL) was not a number or bigint (primitive or object).`, defaultOrdinal,)
        try {
            if (typeof defaultOrdinal == "number")
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByNumber(defaultOrdinal, defaultOrdinal,),)
            else if (typeof defaultOrdinal == "bigint")
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByBigInt(defaultOrdinal, defaultOrdinal,),)
            else if (defaultOrdinal instanceof Number)
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByNumber(defaultOrdinal.valueOf(), defaultOrdinal,),)
            else
                EnumConstants.DEFAULT_MAP.set(this, this.#defaultValue = this._getValueByBigInt(defaultOrdinal.valueOf(), defaultOrdinal,),)
            return true
        } catch (exception) {
            if (exception instanceof ForbiddenNumericException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL”. The value “${defaultOrdinal}” is ±∞ or NaN.`, exception,)
            if (exception instanceof ImpossibleOrdinalException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL”. The value “${defaultOrdinal}” is negative, over the Number.MAX_VALUE or a floating value.`, exception,)
            if (exception instanceof NullReferenceException)
                throw new NullEnumerableException(`Unable to initialize the default value by the “${this.instance.name}.CompanionEnum.get._DEFAULT_ORDINAL”. The value “${this.instance.name}.${defaultOrdinal}” does not exist.`, exception,)
            throw exception
        }
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
     * @throws ForbiddenNumericException The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     */
    protected _isNotInEdgeCaseNumericByString(nameOrOrdinal: string, originalValue: StringOrObject,): void {
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
     * @throws ForbiddenNumericException The {@link ordinal} was either ±∞ or {@link NaN}
     */
    protected _isNotInEdgeCaseNumericByNumber(ordinal: number, originalValue: NumberOrObject,): void {
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
     * Validate that the {@link nameOrOrdinal} is not a {@link EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS enumerable member}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     */
    protected _isNotInInheritedEnumerableMembers(nameOrOrdinal: string, originalValue: StringOrObject,): void {
        if (nameOrOrdinal !== "name")
        if (nameOrOrdinal !== "ordinal")
        if (nameOrOrdinal !== "parent")
        if (nameOrOrdinal !== "grandParent")
        if (nameOrOrdinal !== "greatGrandParent")
            return
        throw new ForbiddenInheritedEnumerableMemberException(`Forbidden inherited enumerable member. The string value “${originalValue}” cannot be an inherited member of the Enumerable (“name”, “ordinal”, “parent”, “grandParent”, “greatGrandParent”).`, originalValue,)
    }

    //#endregion -------------------- Validation (is not in "inherited enumerable members") methods --------------------
    //#region -------------------- Validation (is not in "excluded names") methods --------------------

    /**
     * Validate that the {@link nameOrOrdinal} is not one of the {@link _excludedNames excluded names}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws ForbiddenNameException The {@link nameOrOrdinal} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     */
    protected _isNotInExcludedNames(nameOrOrdinal: string, originalValue: StringOrObject,): void {
        const excludedNames = this._excludedNames
        if (excludedNames.has(nameOrOrdinal,))
            throw new ForbiddenNameException(`Forbidden name. The value “${nameOrOrdinal}” is one of the excluded names ${excludedNames.joinToString(", ", '(', ')', null, null, it => `“${it}”`,)}.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not in "excluded names") methods --------------------
    //#region -------------------- Validation (is in ordinal) methods --------------------

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _isInOrdinalsByString(ordinal: NumberTemplate, originalValue: StringOrObject,): void {
        const ordinals = this.ordinals
        if (ordinals.has(Number(ordinal,),))
            return
        throw new ImpossibleOrdinalException(`The String value “${ordinal}” is not within a valid ordinal ${ordinals.joinToString(", ", '(', ')',)}.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @returns number The {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _isInOrdinalsByNumber(ordinal: number, originalValue: NumberOrObject,): OrdinalOf<ENUM> {
        const ordinals = this.ordinals
        if (ordinals.has(ordinal,))
            return ordinal
        throw new ImpossibleOrdinalException(`The Number value “${ordinal}” is not within a valid ordinal ${ordinals.joinToString(", ", '(', ')',)}.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is in the {@link ordinals instance ordinals}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @returns number The converted {@link ordinal} as a {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _isInOrdinalsByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): OrdinalOf<ENUM> {
        const convertedOrdinal = Number(ordinal,)
        const ordinals = this.ordinals
        if (ordinals.has(convertedOrdinal,))
            return convertedOrdinal
        throw new ImpossibleOrdinalException(`The BigInt value “${ordinal}” is not within a valid ordinal ${ordinals.joinToString(", ", '(', ')',)}.`, originalValue,)
    }

    //#endregion -------------------- Validation (is in ordinal) methods --------------------
    //#region -------------------- Validation (is positive) methods --------------------

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is negative
     */
    protected _isPositiveByString(ordinal: NumberTemplate, originalValue: StringOrObject,): void {
        if (ordinal[0] === '-')
            throw new ImpossibleOrdinalException(`The String value “${ordinal}” cannot be under 0.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is negative
     */
    protected _isPositiveByNumber(ordinal: number, originalValue: NumberOrObject,): void {
        if (ordinal < 0)
            throw new ImpossibleOrdinalException(`The Number value “${ordinal}” cannot be under 0.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is positive
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is negative
     */
    protected _isPositiveByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): void {
        if (ordinal < 0n)
            throw new ImpossibleOrdinalException(`The BigInt value “${ordinal}” cannot be under 0.`, originalValue,)
    }

    //#endregion -------------------- Validation (is positive) methods --------------------
    //#region -------------------- Validation (is not over MAX_VALUE) methods --------------------

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_NUMBER maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     */
    protected _isNotOverMaxValueByString(ordinal: NumberTemplate, originalValue: StringOrObject,): void {
        if (ordinal.length > 10)
            throw new ImpossibleOrdinalException(`The String value “${ordinal}” cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
        if (Number(ordinal,) > 0b111_1111_1111_1111_1111_1111_1111_1111)
            throw new ImpossibleOrdinalException(`The String value “${ordinal}” cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_NUMBER maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     */
    protected _isNotOverMaxValueByNumber(ordinal: number, originalValue: NumberOrObject,): void {
        if (ordinal > 0b111_1111_1111_1111_1111_1111_1111_1111)
            throw new ImpossibleOrdinalException(`The Number value “${ordinal}” cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT maximum value}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     */
    protected _isNotOverMaxValueByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): void {
        if (ordinal > 0b111_1111_1111_1111_1111_1111_1111_1111n)
            throw new ImpossibleOrdinalException(`The BigInt value “${ordinal}” cannot be over the maximum value (2 147 483 647) of an int.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not over MAX_VALUE) methods --------------------
    //#region -------------------- Validation (is not a floating value) methods --------------------

    /**
     * Validate that the {@link ordinal} is not a floating {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     */
    protected _isNotAFloatingNumberByString(ordinal: NumberTemplate, originalValue: StringOrObject,): void {
        const size = ordinal.length
        let index = -1
        while (++index < size)
            if (ordinal[index] == '.')
                throw new ImpossibleOrdinalException(`The string value “${ordinal}” cannot be a floating value.`, originalValue,)
    }

    /**
     * Validate that the {@link ordinal} is not a floating {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     */
    protected _isNotAFloatingNumberByNumber(ordinal: number, originalValue: NumberOrObject,): void {
        if (ordinal % 1 != 0)
            throw new ImpossibleOrdinalException(`The number value “${ordinal}” cannot be a floating value.`, originalValue,)
    }

    //#endregion -------------------- Validation (is not a floating value) methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get the valid value that is a valid {@link Enumerable}
     * for the current {@link instance}
     *
     * @param enumerable The instance to validate
     * @throws InvalidEnumerableException The {@link value} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnum.values values}
     */
    protected _getValidValueByEnumerable(enumerable: Enumerable,): ENUM {
        const instance = this.instance
        if (!(enumerable instanceof instance))
            throw new InvalidEnumerableException(`The enumerable “${getLastPrototype(enumerable,).name}.${enumerable.name}” is not an instance of “${instance.name}”.`, enumerable, [instance,],)
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
    protected _getValidValueByString(value: NonNullable<unknown>, nameOrOrdinal: string, originalValue: StringOrObject, instance: ENUM_CONSTRUCTOR,): ENUM {
        if (value instanceof instance)
            return value as ENUM
        throw new InvalidInstanceException(`The reference “${instance.name}.${nameOrOrdinal}” is not an instance of ${instance.name}.`, originalValue,)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable} via reflection
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws InvalidInstanceException The value found reflectively was not an `instanceof` the {@link CompanionEnum.instance instance}
     * @throws NullReferenceException   The value found reflectively was `null`
     * @throws NullReferenceException   No value exist in the {@link CompanionEnum.instance instance} with the {@link nameOrOrdinal}
     */
    protected _getValueFromReflection(nameOrOrdinal: string, originalValue: StringOrObject,): ENUM {
        const instance = this.instance
        if (!Reflect.has(instance, nameOrOrdinal,))
            throw new NullReferenceException(`No value exist in “${instance.name}.${nameOrOrdinal}”.`, originalValue,)

        const field: unknown = Reflect.get(instance, nameOrOrdinal,)
        if (field == null)
            throw new NullReferenceException(`The value “${instance.name}.CompanionEnum.get.${nameOrOrdinal}” cannot be a null reference.`, originalValue,)
        return this._getValidValueByString(field, nameOrOrdinal, originalValue, instance,)
    }

    /**
     * Get an {@link Enumerable} from the {@link ordinals instance ordinals}
     * (utilizing the {@link values instance values})
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws NullReferenceException The {@link ordinal} did not have any association in {@link CompanionEnum.values values}
     */
    protected _getValueFromOrdinals(ordinal: OrdinalOf<ENUM>, originalValue: NumericOrObject,) {
        const valueFound = this.values.getOrNull(ordinal,)
        if (valueFound == null)
            throw new NullReferenceException(`No value could be found by the ordinal “${ordinal}”.`, originalValue,)
        return valueFound
    }

    /**
     * Get an {@link Enumerable} from the {@link values}
     *
     * @param value The {@link Enumerable} to find
     * @throws NullReferenceException No equivalent value (`===`) was in {@link CompanionEnum.values values}
     */
    protected _getValueFromValues(value: Enumerable,) {
        const valueFound = this.values.find(it => it === value,)
        if (valueFound == null)
            throw new NullReferenceException(`No “${value.name}” could be found on the “${this.instance.name}”.`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------
    //#region -------------------- Get name (validated) methods --------------------

    /**
     * The main validator method to tell if the {@link nameOrOrdinal} is valid
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _getValidName(nameOrOrdinal: string, originalValue: StringOrObject,): string {
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
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _getValidOrdinalByNumber(ordinal: number, originalValue: NumberOrObject,): OrdinalOf<ENUM> {
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
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _getValidOrdinalByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): OrdinalOf<ENUM> {
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
     * @throws UnhandledValueException The {@link value} was an improper type
     *
     * @uniqueToJavascript
     */
    #throwInvalidCases(value: NonNullable<unknown>, methodCalled: MethodCalledName,): never {
        if (typeof value == "boolean")
            throw new UnhandledValueException(`A primitive Boolean value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Boolean)
            throw new UnhandledValueException(`A Boolean object value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (typeof value == "symbol")
            throw new UnhandledValueException(`A primitive Symbol value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Symbol)
            throw new UnhandledValueException(`A Symbol object value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (typeof value == "function")
            throw new UnhandledValueException(`A primitive Function value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Function)
            throw new UnhandledValueException(`A Function object value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof RegExp)
            throw new UnhandledValueException(`A Regex value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Array)
            throw new UnhandledValueException(`An Array value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Set)
            throw new UnhandledValueException(`A Set value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Map)
            throw new UnhandledValueException(`A Map value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof WeakSet)
            throw new UnhandledValueException(`A WeakSet value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof WeakMap)
            throw new UnhandledValueException(`A WeakMap value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        if (value instanceof Iterator)
            throw new UnhandledValueException(`An Iterator value cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
        throw new UnhandledValueException(`The value received is not of type String, Number, BigInt or Enumerable. It cannot be received in “${this.instance.name}.CompanionEnum.get.${methodCalled}(value)”.`, value,)
    }

    //#endregion -------------------- Validation methods --------------------

    //#region -------------------- "Get non null value" methods --------------------

    /**
     * Get the {@link NonNullable} {@link value} or throw a {@link NullEnumerableException}
     * from a {@link getValue} method
     *
     * @param value The value to validate
     * @throws NullEnumerableException The {@link value} was `null`|`undefined`
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
     * @throws NullEnumerableException The {@link value} was `null`|`undefined`
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
     * @throws NullEnumerableException The {@link value} was `null`|`undefined`
     */
    protected _getNonNullValueFromGetOrdinal<const T, >(value: Nullable<T>,): T {
        if (value == null)
            throw new NullEnumerableException(`Unable to get the ordinal. The value received for the instance ${this.instance.name} cannot be null (or undefined).`,)
        return value
    }


    //#endregion -------------------- "Get non null value" methods --------------------
    //#region -------------------- "Get value" methods --------------------

    public getValue                                                                                        (value: Nullable<ImpossibleNames>,):                                                      never
    public getValue<const ORDINAL extends number, >                                                        (ordinal: Nullable<ORDINAL>,):                                                            ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public getValue<const ORDINAL extends number, >                                                        (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                          ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public getValue                                                                                        (ordinal: Nullable<TemplateOrNumericOrObject>,):                                          ENUM
    public getValue<const NAME extends string, >                                                           (name: Nullable<NAME>,):                                                                  ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public getValue                                                                                        (nameOrOrdinal: Nullable<StringOrObject>,):                                               ENUM
    public getValue<const INSTANCE extends ENUM, >                                                         (instance: Nullable<INSTANCE>,):                                                          INSTANCE
    public getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, >(value: Nullable<TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ENUM
    public getValue(value: Nullable<| StringOrNumericOrObject | ENUM>,): ENUM {
        return this._getValue(value,)
    }

    /**
     * Get an {@link Enumerable} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance}
     * @note This method is only here in order to provide a way to distinguish the type of the value.
     *       It should not be overridden in normal circumstances.
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      The {@link value} did not have any association in {@link CompanionEnum.values values}
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnum.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @readonly
     */
    protected _getValue(value: Nullable<| StringOrNumericOrObject | Enumerable>,): ENUM {
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
     * @throws InvalidEnumerableException The {@link enumerable} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnum.values values}
     */
    protected _getValueByEnumerable(enumerable: Enumerable,): ENUM {
        return this._getValidValueByEnumerable(enumerable,)
    }

    /**
     * Get a valid {@link Enumerable} by a {@link String}
     *
     * @param name The name to validate
     * @param originalValue The original {@link name}
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link name} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link name}
     */
    protected _getValueByString(name: string, originalValue: StringOrObject,): ENUM {
        return this._getValueFromReflection(this._getValidName(name, originalValue,), originalValue,)
    }

    /**
     * Get a valid {@link Enumerable} by a {@link Number}
     *
     * @param ordinal The ordinal to validate
     * @param originalValue The original {@link ordinal}
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnum.values values}
     */
    protected _getValueByNumber(ordinal: number, originalValue: NumberOrObject,): ENUM {
        return this._getValueFromOrdinals(this._getValidOrdinalByNumber(ordinal, originalValue,), originalValue,)
    }

    /**
     * Get a valid {@link Enumerable} from a {@link BigInt}
     *
     * @param ordinal The ordinal
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnum.values values}
     */
    protected _getValueByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): ENUM {
        return this._getValueFromOrdinals(this._getValidOrdinalByBigInt(ordinal, originalValue,), originalValue,)
    }

    //#endregion -------------------- "Get value" with original methods --------------------

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    public getName                                                                                               (value: Nullable<ImpossibleNames>,):                                                      never
    public getName<const ORDINAL extends number, >                                                               (ordinal: Nullable<ORDINAL>,):                                                            NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public getName<const ORDINAL extends number, >                                                               (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                          NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public getName                                                                                               (ordinal: Nullable<TemplateOrNumericOrObject>,):                                          NameOf<ENUM>
    public getName<const NAME extends string, >                                                                  (name: Nullable<NAME>,):                                                                  SpecificNameOf<NAME, ENUM>
    public getName                                                                                               (nameOrOrdinal: Nullable<StringOrObject>,):                                               NameOf<ENUM>
    public getName<const INSTANCE extends ENUM, >                                                                (instance: Nullable<INSTANCE>,):                                                          NameOf<INSTANCE>
    public getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<ENUM>
    public getName(value: Nullable<| StringOrNumericOrObject | ENUM>,): NameOf<ENUM> {
        return this._getName(value,)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.name name} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance} {@link Enumerable.name name}
     * @note This method is only here in order to provide a way to distinguish the type of the value.
     *       It should not be overridden in normal circumstances.
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      The {@link value} did not have any association in {@link CompanionEnum.values values}
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnum.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @readonly
     */
    protected _getName(value: Nullable<| StringOrNumericOrObject | Enumerable>,) {
        value = this._getNonNullValueFromGetName(value,)

        if (typeof value == "string")
            return this._getNameByString(value, value,)
        if (typeof value == "number")
            return this._getNameByNumber(value, value,)
        if (typeof value == "bigint")
            return this._getNameByBigInt(value, value,)
        if (isEnum(value,))
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
     * @throws InvalidEnumerableException The {@link enumerable} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnum.values values}
     */
    protected _getNameByEnumerable(enumerable: Enumerable,): NameOf<ENUM> {
        return this._getValidValueByEnumerable(enumerable,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link String}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link nameOrOrdinal}
     */
    protected _getNameByString(nameOrOrdinal: string, originalValue: StringOrObject,): NameOf<ENUM> {
        return this._getValueFromReflection(this._getValidName(nameOrOrdinal, originalValue,), originalValue,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnum.values values}
     */
    protected _getNameByNumber(ordinal: number, originalValue: NumberOrObject,): NameOf<ENUM> {
        return this._getValueFromOrdinals(this._getValidOrdinalByNumber(ordinal, originalValue,), originalValue,).name
    }

    /**
     * Get a valid {@link Enumerable.name} by a {@link BigInt}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnum.values values}
     */
    protected _getNameByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): NameOf<ENUM> {
        return this._getValueFromOrdinals(this._getValidOrdinalByBigInt(ordinal, originalValue,), originalValue,).name
    }

    //#endregion -------------------- "Get name" with original methods --------------------

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    public getOrdinal                                                                                               (value: Nullable<ImpossibleNames>,):                                                      never
    public getOrdinal<const ORDINAL extends number, >                                                               (ordinal: Nullable<ORDINAL>,):                                                            SpecificOrdinalOf<ORDINAL, ENUM>
    public getOrdinal<const ORDINAL extends number, >                                                               (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                          SpecificOrdinalOf<ORDINAL, ENUM>
    public getOrdinal                                                                                               (ordinal: Nullable<TemplateOrNumericOrObject>,):                                          OrdinalOf<ENUM>
    public getOrdinal<const NAME extends string, >                                                                  (name: Nullable<NAME>,):                                                                  OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public getOrdinal                                                                                               (nameOrOrdinal: Nullable<StringOrObject>,):                                               OrdinalOf<ENUM>
    public getOrdinal<const INSTANCE extends ENUM, >                                                                (instance: Nullable<INSTANCE>,):                                                          OrdinalOf<INSTANCE>
    public getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<ENUM>
    public getOrdinal(value: Nullable<| StringOrNumericOrObject | ENUM>,): OrdinalOf<ENUM> {
        return this._getOrdinal(value,)
    }

    /**
     * Get an {@link Enumerable} {@link Enumerable.ordinal ordinal} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable}).
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance} {@link Enumerable.ordinal ordinal}
     * @note This method is only here in order to provide a way to distinguish the type of the value.
     *       It should not be overridden in normal circumstances.
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnum.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     */
    protected _getOrdinal(value: Nullable<| StringOrNumericOrObject | Enumerable>,): OrdinalOf<ENUM> {
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
     * @throws InvalidEnumerableException The {@link enumerable} was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnum.values values}
     */
    protected _getOrdinalByEnumerable(enumerable: Enumerable,): OrdinalOf<ENUM> {
        return this._getValidValueByEnumerable(enumerable,).ordinal
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link String}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link nameOrOrdinal}
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the {@link CompanionEnum._EXCLUDED_NAMES excluded names}
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnum.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnum.instance instance} with the {@link nameOrOrdinal}
     */
    protected _getOrdinalByString(nameOrOrdinal: string, originalValue: StringOrObject,): OrdinalOf<ENUM> {
        return this._getValueFromReflection(this._getValidName(nameOrOrdinal, originalValue,), originalValue,).ordinal
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link Number}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _getOrdinalByNumber(ordinal: number, originalValue: NumberOrObject,): OrdinalOf<ENUM> {
        return this._getValidOrdinalByNumber(ordinal, originalValue,)
    }

    /**
     * Get a valid {@link Enumerable.ordinal} by a {@link BigInt}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to validate
     * @param originalValue The original {@link ordinal}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link CompanionEnum.ordinals ordinals}
     */
    protected _getOrdinalByBigInt(ordinal: bigint, originalValue: BigIntOrObject,): OrdinalOf<ENUM> {
        return this._getValidOrdinalByBigInt(ordinal, originalValue,)
    }

    //#endregion -------------------- "Get ordinal" with original methods --------------------

    //#endregion -------------------- "Get ordinal" methods --------------------

    public [Symbol.iterator](): CollectionIterator<ENUM> {
        return this.values[Symbol.iterator]()
    }

    public get [Symbol.toStringTag](): CompanionEnumName {
        return "CompanionEnum"
    }


    //#endregion -------------------- Methods --------------------

}

/**
 * Validate that the {@link instance} is a relative to {@link Enum} or has the structure of an {@link Enumerable}
 *
 * @param instance The {@link CompanionEnumerable} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link Enum} or does not have the structure of an {@link Enumerable}
 */
function __validateInstance<const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<Enumerable, CompanionEnumerable<Enumerable, ENUMERABLE_CONSTRUCTOR>>, >(
    instance: ENUMERABLE_CONSTRUCTOR,): ENUMERABLE_CONSTRUCTOR {
    if (_hasPrototypeOf(instance, Enum,))
        // Is relative to the Enum class
        return instance

    // We will find if the prototype has the structure of an Enumerable
    const instancePrototype = instance.prototype as NullOr<object>
    if (instancePrototype != null)
    if ("name" in instancePrototype)
    if ("ordinal" in instancePrototype)
    if (Symbol.toStringTag in instancePrototype)
    if (Symbol.toPrimitive in instancePrototype)
        // Is Enumerable by structure
        return instance

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = instance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “Enum” or the structure of an “Enumerable”.`, instance,)
}

type MethodCalledName = "getValue" | "getName" | "getOrdinal"
