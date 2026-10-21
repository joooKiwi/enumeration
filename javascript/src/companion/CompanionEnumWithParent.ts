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

import type {BigIntOrObject, MutableArray, NullOr, NullOrUndefined, Nullable, NumericOrObject, StringOrNumericOrObject, StringOrObject, TemplateOrNumber, TemplateOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable}                                                                             from "../Enumerable"
import type {EnumerableConstructor}                                                                  from "../EnumerableConstructor"
import type {EnumerableWithNullableParent}                                                           from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                                                                    from "./CompanionEnumerable"
import type {CompanionEnumerableWithParent}                                                          from "./CompanionEnumerableWithParent"
import type {CompanionEnumerableType}                                                                from "../type/companion"
import type {ImpossibleNames}                                                                        from "../type/name"
import type {NameOf, SpecificNameOf}                                                                 from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                                           from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"
import type {EnumerableWithNullableParentGeneralType}                                                from "../type/general"

import {CompanionEnum}                 from "./CompanionEnum"
import {Enum}                          from "../Enum"
import {EnumWithNullableParent}        from "../EnumWithNullableParent"
import {EnumWithParent}                from "../EnumWithParent"
import {InvalidEnumerableException}    from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}      from "../exception/InvalidInstanceException"
import {NullInstanceException}         from "../exception/NullInstanceException"
import {NullReferenceException}        from "../exception/NullReferenceException"
import {_getSimplifiedPrototypeChains} from "../method/_getSimplifiedPrototypeChains"
import {_hasPrototypeOf}               from "../method/_hasPrototypeOf"

export class CompanionEnumWithParent<const ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    const PARENT_ENUM extends Enumerable,
    const PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerable<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR>
    implements CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #parentInstance: PARENT_ENUM_CONSTRUCTOR

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUM_CONSTRUCTOR, parentInstance: PARENT_ENUM_CONSTRUCTOR,) {
        super(instance,)
        __validateInstance(instance,)

        if (parentInstance == null)
            throw new NullInstanceException()
        if (!(parentInstance instanceof Function))
            throw new InvalidInstanceException(`Invalid instance exception. The parent instance received in “${this.constructor.name}” is not a function type.`, parentInstance,)
        this.#parentInstance = __validateParentInstance(parentInstance,)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get parentInstance(): PARENT_ENUM_CONSTRUCTOR {
        return this.#parentInstance
    }


    public override get defaultValue(): ENUM {
        return super.defaultValue
    }

    public override set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,) {
        super.defaultValue = value == null ? null : this._getValue(value,)
    }

    public override setDefaultValue(value: NullOrUndefined,): this
    public override setDefaultValue(value: ImpossibleNames,): never
    public override setDefaultValue(ordinal: Nullable<NumericOrObject>,): this
    public override setDefaultValue(name: Nullable<StringOrObject>,): this
    public override setDefaultValue(instance: Nullable<ENUM>,): this
    public override setDefaultValue(parentInstance: Nullable<PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>): this {
        this.defaultValue = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Validation methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get a valid value that is a valid {@link EnumerableWithNullableParent}
     * for the current {@link instance} or {@link parentInstance}
     *
     * @param enumerable The instance to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected override _getValidValueByEnumerable(enumerable: Enumerable,): ENUM {
        const instance = this.instance
        if (enumerable instanceof instance)
            return this._getValueFromValues(enumerable,)

        const parentInstance = this.parentInstance
        if (enumerable instanceof parentInstance)
            return this._getValueFromValuesByParent(enumerable,)

        throw new InvalidEnumerableException(`The enumerable “${instance.name}.${enumerable.name}” is not an instance of “${instance.name}” or “${parentInstance.name}”.`, enumerable, [instance, parentInstance,],)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable} from the {@link values}
     * by the {@link EnumerableWithNullableParent.parent parent}
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link Enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValuesByParent(value: Enumerable,): ENUM {
        const valueFound = this.values.findFirstOrNull(it => it.parent === value,)
        if (valueFound == null)
            throw new NullReferenceException(`No parent “${value}” could be found on the “${this.instance.name}”.`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------

    //#endregion -------------------- Validation methods --------------------

    public override getValue                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                                    never
    public override getValue<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                          ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                        ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue                                                                                                                                   (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                        ENUM
    public override getValue<const NAME extends string, >                                                                                                      (name: Nullable<NAME>,):                                                                                                ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getValue                                                                                                                                   (nameOrOrdinal: Nullable<StringOrObject>,):                                                                             ENUM
    public override getValue<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                                        INSTANCE
    public override getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                           ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,) {
        return this._getValue(value,)
    }


    public override getName                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                                    never
    public override getName<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                          NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                        NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName                                                                                                                                   (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                        NameOf<ENUM>
    public override getName<const NAME extends string, >                                                                                                      (name: Nullable<NAME>,):                                                                                                SpecificNameOf<NAME, ENUM>
    public override getName                                                                                                                                   (nameOrOrdinal: Nullable<StringOrObject>,):                                                                             NameOf<ENUM>
    public override getName<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                                        NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                           NameOf<PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE>
    public override getName(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,) {
        return this._getName(value,)
    }


    public override getOrdinal                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                                    never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                          SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                        SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal                                                                                                                                   (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                        OrdinalOf<ENUM>
    public override getOrdinal<const NAME extends string, >                                                                                                      (name: Nullable<NAME>,):                                                                                                OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getOrdinal                                                                                                                                   (nameOrOrdinal: Nullable<StringOrObject>,):                                                                             OrdinalOf<ENUM>
    public override getOrdinal<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                                        OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                           OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE>,): | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,) {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}

/**
 * Validate that the {@link parentInstance} is a relative to {@link Enum} or has the structure of an {@link Enumerable}
 *
 * @param parentInstance The {@link CompanionEnumerable} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link Enum} or does not have the structure of an {@link Enumerable}
 */
function __validateParentInstance<const PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<Enumerable, CompanionEnumerable<Enumerable, PARENT_ENUM_CONSTRUCTOR>>, >(
    parentInstance: PARENT_ENUM_CONSTRUCTOR,): PARENT_ENUM_CONSTRUCTOR {
    if (_hasPrototypeOf(parentInstance, Enum,))
        // Is relative to the Enum class
        return parentInstance

    const parentInstancePrototype = parentInstance.prototype as NullOr<object>
    if (parentInstancePrototype != null)
    if ("name" in parentInstancePrototype)
    if ("ordinal" in parentInstancePrototype)
    if (Symbol.toStringTag in parentInstancePrototype)
    if (Symbol.toPrimitive in parentInstancePrototype)
        // Is Enumerable by structure
        return parentInstance

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = parentInstance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The parent instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “Enum” or the structure of an “Enumerable”.`, parentInstance,)
}

/**
 * Validate that the {@link instance} is a relative to {@link EnumWithNullableParent}, {@link EnumWithParent} or has the structure of an {@link EnumerableWithParent}
 *
 * @param instance The {@link CompanionEnumerableWithParent} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link EnumWithNullableParent}|{@link EnumWithParent} or does not have the structure of an {@link EnumerableWithParent}
 */
function __validateInstance<const ENUM_CONSTRUCTOR extends EnumerableConstructor<EnumerableWithNullableParentGeneralType, CompanionEnumerableWithParent<EnumerableWithNullableParentGeneralType, ENUM_CONSTRUCTOR, Enumerable, EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>>>, >(
    instance: ENUM_CONSTRUCTOR,): void {
    if (_hasPrototypeOf(instance, EnumWithNullableParent,))
        // Is relative to the EnumWithNullableParent class
        return
    if (_hasPrototypeOf(instance, EnumWithParent,))
        // Is relative to the EnumWithParent class
        return

    if ("parent" in (instance.prototype as object))
        // Is EnumerableWithParent by structure
        return

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = instance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “EnumWithNullableParent”, “EnumWithParent” or the structure of an “EnumerableWithParent”.`, instance,)
}
