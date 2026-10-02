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

import type {Nullable, StringOrNumericOrObject, StringOrObject, TemplateOrBigIntOrObject, TemplateOrNumberOrObject, TemplateOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable}                                                                             from "../Enumerable"
import type {EnumerableConstructor}                                                                  from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}                                                      from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}                                                 from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                                                           from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                                                                    from "./CompanionEnumerable"
import type {CompanionEnumerableWithParent}                                                          from "./CompanionEnumerableWithParent"
import type {CompanionEnumerableWithGrandParent}                                                     from "./CompanionEnumerableWithGrandParent"
import type {ImpossibleNames}                                                                        from "../type/name"
import type {NameOf, SpecificNameOf}                                                                 from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                                           from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"

export interface CompanionEnumerableWithGreatGrandParent<out ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParent<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerable<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableGreatGrandParent} constructor */
    readonly greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR


    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUM

    set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,)

    setDefaultValue(value: ImpossibleNames,): never
    setDefaultValue(greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM,): this
    setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                never
    getValue<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                      ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                                                            ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                                                     ENUM
    getValue                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                                                     ENUM
    getValue                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                    ENUM
    getValue<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<StringOrObject<NAME>>,):                                                                                                                            ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getValue                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                         ENUM
    getValue<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                    INSTANCE
    getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                       ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                            ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGreatGrandParent instance} by comparing its {@link EnumerableWithNullableGreatGrandParent.greatGrandParent} value
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                 ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE> | ENUM

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                never
    getName<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                      NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                                                            NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                                                     NameOf<ENUM>
    getName                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                                                     NameOf<ENUM>
    getName                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                    NameOf<ENUM>
    getName<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<StringOrObject<NAME>>,):                                                                                                                            SpecificNameOf<NAME, ENUM>
    getName                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                         NameOf<ENUM>
    getName<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                    NameOf<INSTANCE>
    getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                       NameOf<PARENT_INSTANCE>
    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                            NameOf<GRAND_PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGreatGrandParent.name name} from the {@link EnumerableWithNullableGreatGrandParent great-grandparent instance} directly
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                 NameOf<GREAT_GRAND_PARENT_INSTANCE>
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE> | NameOf<GREAT_GRAND_PARENT_INSTANCE> | NameOf<ENUM>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                                                                                                                                             (value: Nullable<ImpossibleNames>,):                                                                                                                                never
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<ORDINAL>,):                                                                                                                                      SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                                                            SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                                                     OrdinalOf<ENUM>
    getOrdinal                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                                                     OrdinalOf<ENUM>
    getOrdinal                                                                                                                                                                                                                                                             (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                                                    OrdinalOf<ENUM>
    getOrdinal<const NAME extends string, >                                                                                                                                                                                                                                (name: Nullable<StringOrObject<NAME>>,):                                                                                                                            OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getOrdinal                                                                                                                                                                                                                                                             (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                                                         OrdinalOf<ENUM>
    getOrdinal<const INSTANCE extends ENUM, >                                                                                                                                                                                                                              (instance: Nullable<INSTANCE>,):                                                                                                                                    OrdinalOf<INSTANCE>
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                                                                                                (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                       OrdinalOf<PARENT_INSTANCE>
    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                                                                                    (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                            OrdinalOf<GRAND_PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} from the {@link EnumerableWithNullableGreatGrandParent great-grandparent instance} directly
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >                                                                                                                                                                                        (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                 OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE> | OrdinalOf<GREAT_GRAND_PARENT_INSTANCE> | OrdinalOf<ENUM>

    //#endregion -------------------- "Get ordinal" methods --------------------

}
