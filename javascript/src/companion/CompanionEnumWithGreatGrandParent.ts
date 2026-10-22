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

import type {Enumerable}                                                                                                                               from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                    from "../EnumerableConstructor"
import type {EnumerableWithNullableParent}                                                                                                             from "../EnumerableWithNullableParent"
import type {EnumerableWithNullableGreatGrandParent}                                                                                                   from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableGrandParent}                                                                                                        from "../EnumerableWithNullableGrandParent"
import type {CompanionEnumerable}                                                                                                                      from "./CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}                                                                                                       from "./CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent}                                                                                                  from "./CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}                                                                                                            from "./CompanionEnumerableWithParent"
import type {CompanionEnumerableType, CompanionEnumerableWithGrandParentType, CompanionEnumerableWithParentType}                                       from "../type/companion"
import type {ImpossibleNames}                                                                                                                          from "../type/name"
import type {NameOf, SpecificNameOf}                                                                                                                   from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                                                                                             from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueByName, ValueBySpecificName, ValueBySpecificOrdinal}                                                   from "../type/valueBy"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../type/general"

import {Enum}                             from "../Enum"
import {EnumWithNullableGrandParent}      from "../EnumWithNullableGrandParent"
import {EnumWithNullableGreatGrandParent} from "../EnumWithNullableGreatGrandParent"
import {EnumWithNullableParent}           from "../EnumWithNullableParent"
import {EnumWithGrandParent}              from "../EnumWithGrandParent"
import {EnumWithGreatGrandParent}         from "../EnumWithGreatGrandParent"
import {EnumWithParent}                   from "../EnumWithParent"
import {CompanionEnumWithGrandParent}     from "./CompanionEnumWithGrandParent"
import {InvalidEnumerableException}       from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}         from "../exception/InvalidInstanceException"
import {NullInstanceException}            from "../exception/NullInstanceException"
import {NullReferenceException}           from "../exception/NullReferenceException"
import {_hasPrototypeOf}                  from "../method/_hasPrototypeOf"
import {_getSimplifiedPrototypeChains}    from "../method/_getSimplifiedPrototypeChains"

export class CompanionEnumWithGreatGrandParent<const ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    const PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    const PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    const GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    const GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParent<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    const GREAT_GRAND_PARENT_ENUM extends Enumerable,
    const GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerable<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>
    implements CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUM_CONSTRUCTOR, parentInstance: PARENT_ENUM_CONSTRUCTOR, grandParentInstance: GRAND_PARENT_ENUM_CONSTRUCTOR, greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR,) {
        super(instance, parentInstance, grandParentInstance,)
        __validateInstance(instance,)
        __validateParentInstance(parentInstance,)
        __validateGrandParentInstance(grandParentInstance,)
        if (greatGrandParentInstance == null)
            throw new NullInstanceException()
        if (!(greatGrandParentInstance instanceof Function))
            throw new InvalidInstanceException(`Invalid instance exception. The great-grandparent instance received in “${this.constructor.name}” is not a function type.`, greatGrandParentInstance,)
        this.#greatGrandParentInstance = __validateGreatGrandParentInstance(greatGrandParentInstance,)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get greatGrandParentInstance(): GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR {
        return this.#greatGrandParentInstance
    }


    public override get defaultValue(): ENUM {
        return super.defaultValue
    }

    public override set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>) {
        super.defaultValue = value == null ? null : this._getValue(value,)
    }

    public override setDefaultValue(value: NullOrUndefined,): this
    public override setDefaultValue(value: ImpossibleNames,): never
    public override setDefaultValue(ordinal: Nullable<NumericOrObject>,): this
    public override setDefaultValue(name: Nullable<StringOrObject>,): this
    public override setDefaultValue(enumerable: Nullable<ENUM>,): this
    public override setDefaultValue(parentEnumerable: Nullable<PARENT_ENUM>,): this
    public override setDefaultValue(grandParentEnumerable: Nullable<GRAND_PARENT_ENUM>,): this
    public override setDefaultValue(greatGrandParentEnumerable: Nullable<GREAT_GRAND_PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>): this {
        this.defaultValue = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Validation methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get a valid value that is a valid {@link EnumerableWithNullableGreatGrandParent}
     * for the current {@link instance}, {@link parentInstance},
     * {@link grandParentInstance} or {@link greatGrandParentInstance}
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

        const grandParentInstance = this.grandParentInstance
        if (enumerable instanceof grandParentInstance)
            return this._getValueFromValuesByGrandParent(enumerable,)

        const greatGrandParentInstance = this.greatGrandParentInstance
        if (enumerable instanceof greatGrandParentInstance)
            return this._getValueFromValuesByGreatGrandParent(enumerable,)

        throw new InvalidEnumerableException(`The enumerable “${instance.name}.${enumerable.name}” is not an instance of “${instance.name}”, “${parentInstance.name}”, “${grandParentInstance.name}” or “${greatGrandParentInstance.name}”.`, enumerable, [instance, parentInstance, grandParentInstance, greatGrandParentInstance,],)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable}
     * by the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent great-grandparent}
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link Enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValuesByGreatGrandParent(value: Enumerable,): ENUM {
        const valueFound = this.values.findFirstOrNull(it => it.greatGrandParent === value,)
        if (valueFound == null)
            throw new NullReferenceException(`No great-grandparent “${value}” could be found on the “${this.instance.name}”.`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------

    //#endregion -------------------- Validation methods --------------------

    public override getValue                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                          never
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                                ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                                                                              ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                              ENUM
    public override getValue<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<NAME>,):                                                                                                                                                      ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getValue                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                                   ENUM
    public override getValue<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                              INSTANCE
    public override getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                                 ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                      ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    public override getValue<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                           ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE> | ENUM
    public override getValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,) {
        return this._getValue(value,)
    }

    public override getName                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                          never
    public override getName<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                                NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                                                                              NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                              NameOf<ENUM>
    public override getName<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<NAME>,):                                                                                                                                                      SpecificNameOf<NAME, ENUM>
    public override getName                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                                   NameOf<ENUM>
    public override getName<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                              NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                                 NameOf<PARENT_INSTANCE>
    public override getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                      NameOf<GRAND_PARENT_INSTANCE>
    public override getName<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                           NameOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE> | NameOf<GREAT_GRAND_PARENT_INSTANCE> | NameOf<ENUM>
    public override getName(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,) {
        return this._getName(value,)
    }

    public override getOrdinal                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                          never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                                SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumber<ORDINAL>>,):                                                                                                                              SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                              OrdinalOf<ENUM>
    public override getOrdinal<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<NAME>,):                                                                                                                                                      OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getOrdinal                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                                   OrdinalOf<ENUM>
    public override getOrdinal<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                              OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                                 OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                      OrdinalOf<GRAND_PARENT_INSTANCE>
    public override getOrdinal<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                           OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | String | Number | BigIntOrObject | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE> | OrdinalOf<GREAT_GRAND_PARENT_INSTANCE> | OrdinalOf<ENUM>
    public override getOrdinal(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,) {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}

/**
 * Validate that the {@link greatGrandParentInstance} is a relative to {@link Enum} or has the structure of an {@link Enumerable}
 *
 * @param greatGrandParentInstance The {@link CompanionEnumerable} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link Enum} or does not have the structure of an {@link Enumerable}
 */
function __validateGreatGrandParentInstance<const GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<Enumerable, CompanionEnumerable<Enumerable, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >(
    greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR,): GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR {
    if (_hasPrototypeOf(greatGrandParentInstance, Enum,))
        // Is relative to the Enum class
        return greatGrandParentInstance

    const parentInstancePrototype = greatGrandParentInstance.prototype as NullOr<object>
    if (parentInstancePrototype != null)
        if ("name" in parentInstancePrototype)
            if ("ordinal" in parentInstancePrototype)
                if (Symbol.toStringTag in parentInstancePrototype)
                    if (Symbol.toPrimitive in parentInstancePrototype)
                        // Is Enumerable by structure
                        return greatGrandParentInstance

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = greatGrandParentInstance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The great-grandparent instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “Enum” or the structure of an “Enumerable”.`, greatGrandParentInstance,)
}

/**
 * Validate that the {@link grandParentInstance} is a relative to {@link EnumWithNullableParent}, {@link EnumWithParent} or has the structure of an {@link EnumerableWithParent}
 *
 * @param grandParentInstance The {@link CompanionEnumerableWithParent} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link EnumWithNullableParent}|{@link EnumWithParent} or does not have the structure of an {@link EnumerableWithParent}
 */
function __validateGrandParentInstance<const GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<EnumerableWithNullableParentGeneralType, CompanionEnumerableWithParent<EnumerableWithNullableParentGeneralType, GRAND_PARENT_ENUM_CONSTRUCTOR, Enumerable, EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>>>, >(
    grandParentInstance: GRAND_PARENT_ENUM_CONSTRUCTOR,): void {
    if (_hasPrototypeOf(grandParentInstance, EnumWithNullableParent,))
        // Is relative to the EnumWithNullableParent class
        return
    if (_hasPrototypeOf(grandParentInstance, EnumWithParent,))
        // Is relative to the EnumWithParent class
        return

    if ("parent" in (grandParentInstance.prototype as object))
        // Is EnumerableWithParent by structure
        return

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = grandParentInstance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The grandparent instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “EnumWithNullableParent”, “EnumWithParent” or the structure of an “EnumerableWithParent”.`, grandParentInstance,)
}

/**
 * Validate that the {@link parentInstance} is a relative to {@link EnumWithNullableGrandParent}, {@link EnumWithGrandParent} or has the structure of an {@link EnumerableWithGrandParent}
 *
 * @param parentInstance The {@link CompanionEnumerableWithGrandParent} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link EnumWithNullableGrandParent}|{@link EnumWithGrandParent} or does not have the structure of an {@link EnumerableWithGrandParent}
 */
function __validateParentInstance<const PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<EnumerableWithNullableGrandParentGeneralType, CompanionEnumerableWithGrandParent<EnumerableWithNullableGrandParentGeneralType, PARENT_ENUM_CONSTRUCTOR, EnumerableWithNullableParentGeneralType, EnumerableConstructor<EnumerableWithNullableParentGeneralType, CompanionEnumerableWithParentType<EnumerableWithNullableParentGeneralType, Enumerable>>, Enumerable, EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>>>, >(
    parentInstance: PARENT_ENUM_CONSTRUCTOR,): void {
    if (_hasPrototypeOf(parentInstance, EnumWithNullableGrandParent,))
        // Is relative to the EnumWithNullableGrandParent class
        return
    if (_hasPrototypeOf(parentInstance, EnumWithGrandParent,))
        // Is relative to the EnumWithGrandParent class
        return

    if ("grandParent" in (parentInstance.prototype as object))
        // Is EnumerableWithGrandParent by structure
        return

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = parentInstance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The parent instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “EnumWithNullableGrandParent”, “EnumWithGrandParent” or the structure of an “EnumerableWithGrandParent”.`, parentInstance,)
}

/**
 * Validate that the {@link instance} is a relative to {@link EnumWithNullableGrandParent}, {@link EnumWithGrandParent} or has the structure of an {@link EnumerableWithGrandParent}
 *
 * @param instance The {@link CompanionEnumerableWithGrandParent} constructor to validate
 * @throws InvalidInstanceException It is not a relative to {@link EnumWithNullableGrandParent}|{@link EnumWithGrandParent} or does not have the structure of an {@link EnumerableWithGrandParent}
 */
function __validateInstance<const ENUM_CONSTRUCTOR extends EnumerableConstructor<EnumerableWithNullableGreatGrandParentGeneralType, CompanionEnumerableWithGreatGrandParent<EnumerableWithNullableGreatGrandParentGeneralType, ENUM_CONSTRUCTOR, EnumerableWithNullableGrandParentGeneralType, EnumerableConstructor<EnumerableWithNullableGrandParentGeneralType, CompanionEnumerableWithGrandParentType<EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType, Enumerable>>, EnumerableWithNullableParentGeneralType, EnumerableConstructor<EnumerableWithNullableParentGeneralType, CompanionEnumerableWithParentType<EnumerableWithNullableParentGeneralType, Enumerable>>, Enumerable, EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>>>, >(
    instance: ENUM_CONSTRUCTOR,): void {
    if (_hasPrototypeOf(instance, EnumWithNullableGreatGrandParent,))
        // Is relative to the EnumWithNullableGreatGrandParent class
        return
    if (_hasPrototypeOf(instance, EnumWithGreatGrandParent,))
        // Is relative to the EnumWithGreatGrandParent class
        return

    if ("greatGrandParent" in (instance.prototype as object))
        // Is EnumerableWithGrandParent by structure
        return

    // We now know that it is invalid.
    // We will get its chain to display in a simplified manner toward the inheritance
    let prototype: NullOr<object> = instance
    const prototypeChain: MutableArray<object> = []
    while (prototype != null) {
        prototypeChain.push(prototype,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    throw new InvalidInstanceException(`Invalid instance exception. The instance received in ${_getSimplifiedPrototypeChains(prototypeChain,)} does not have an inheritor of “EnumWithNullableGreatGrandParent”, “EnumWithGreatGrandParent” or the structure of an “EnumerableWithGreatGrandParent”.`, instance,)
}
