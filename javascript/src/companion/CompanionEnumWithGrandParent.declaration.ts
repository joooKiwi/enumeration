//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
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

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                   from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                        from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableGrandParent}                                                                                                                                                                                                                                                                                                                            from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                 from "../EnumerableWithNullableParent"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                     from "./CompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                           from "./CompanionEnumWithParent.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                              from "./types"

export interface CompanionEnumWithGrandParentDeclaration<out ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GRAND_PARENT_ENUM extends Enumerable,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumWithParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableGrandParent} constructor (or type / class in other languages) */
    get grandParentInstance(): GRAND_PARENT_ENUM_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUM

    set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,)

    setDefaultValue(value: ImpossibleNames,): never
    setDefaultValue(grandParentInstance: GRAND_PARENT_ENUM,): this
    setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    getValue<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                              ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                       ENUM
    getValue                                                                                                                                                                                          (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                       ENUM
    getValue                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                      ENUM
    getValue<const NAME extends string, >                                                                                                                                                             (name: Nullable<StringOrObject<NAME>>,):                                                                                              ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getValue                                                                                                                                                                                          (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                           ENUM
    getValue<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      INSTANCE
    getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGrandParent instance} by comparing its {@link EnumerableWithNullableGrandParent.grandParent} value
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, | PARENT_INSTANCE | GRAND_PARENT_INSTANCE> | ENUM

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    getName<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                              EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                       NameOf<ENUM>
    getName                                                                                                                                                                                          (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                       NameOf<ENUM>
    getName                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                      NameOf<ENUM>
    getName<const NAME extends string, >                                                                                                                                                             (name: Nullable<StringOrObject<NAME>>,):                                                                                              SpecificNameOf<NAME, ENUM>
    getName                                                                                                                                                                                          (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                           NameOf<ENUM>
    getName<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      NameOf<INSTANCE>
    getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         NameOf<PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGrandParent.name name} from the {@link EnumerableWithNullableGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              NameOf<GRAND_PARENT_INSTANCE>
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | ENUM>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject<ORDINAL>>,):                                                                              SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumberOrObject>,):                                                                                       OrdinalOf<ENUM>
    getOrdinal                                                                                                                                                                                          (ordinal: Nullable<TemplateOrBigIntOrObject>,):                                                                                       OrdinalOf<ENUM>
    getOrdinal                                                                                                                                                                                          (ordinal: Nullable<TemplateOrNumericOrObject>,):                                                                                      OrdinalOf<ENUM>
    getOrdinal<const NAME extends string, >                                                                                                                                                             (name: Nullable<StringOrObject<NAME>>,):                                                                                              EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getOrdinal                                                                                                                                                                                          (nameOrOrdinal: Nullable<StringOrObject>,):                                                                                           OrdinalOf<ENUM>
    getOrdinal<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      OrdinalOf<INSTANCE>
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         OrdinalOf<PARENT_INSTANCE>
    /**
     * Get the {@link EnumerableWithNullableGrandParent.ordinal ordinal} from the {@link EnumerableWithNullableGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              OrdinalOf<GRAND_PARENT_INSTANCE>
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | ENUM>

    //#endregion -------------------- "Get ordinal" methods --------------------

}
