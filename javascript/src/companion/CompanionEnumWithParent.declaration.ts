/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                                            from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                                                 from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                                          from "../EnumerableWithNullableParent"
import type {Nullable, PossibleBigIntOrTemplate, PossibleNumberOrTemplate, PossibleNumericOrTemplate, PossibleString}                                                                                                                                                                                                                                                                               from "../general type"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                                              from "./CompanionEnum.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                                                       from "./types"

export interface CompanionEnumWithParentDeclaration<out ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableParent} constructor (or type / class in other languages) */
    get parentInstance(): PARENT_ENUM_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUM

    set defaultValue(value: Nullable<PossibleEnumerableValue<| ENUM | PARENT_ENUM>>,)

    setDefaultValue(value: ImpossibleNames,): never
    setDefaultValue(parentInstance: PARENT_ENUM,): this
    setDefaultValue(value: Nullable<PossibleEnumerableValue<| ENUM | PARENT_ENUM>>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                          never
    getValue<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                      ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getValue                                                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                               ENUM
    getValue                                                                                                                                   (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                               ENUM
    getValue<const NAME extends string, >                                                                                                      (name: Nullable<PossibleString<NAME>>,):                                                                      ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getValue                                                                                                                                   (nameOrOrdinal: Nullable<PossibleString>,):                                                                   ENUM
    getValue<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                              INSTANCE

    /**
     * Get the {@link EnumerableWithNullableParent instance} by comparing its {@link EnumerableWithNullableParent.parent} value
     *
     * @param parentInstance The parent instance to find
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                 ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, PARENT_INSTANCE> | ENUM

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                          never
    getName<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                      EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    getName                                                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                               NameOf<ENUM>
    getName                                                                                                                                   (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                               NameOf<ENUM>
    getName<const NAME extends string, >                                                                                                      (name: Nullable<PossibleString<NAME>>,):                                                                      SpecificNameOf<NAME, ENUM>
    getName                                                                                                                                   (nameOrOrdinal: Nullable<PossibleString>,):                                                                   NameOf<ENUM>
    getName<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                              NameOf<INSTANCE>

    /**
     * Get the {@link EnumerableWithNullableParent.name name} from the {@link EnumerableWithNullableParent parent instance} directly
     *
     * @param parentInstance The parent instance to find
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                 NameOf<PARENT_INSTANCE>
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<| INSTANCE | PARENT_INSTANCE | ENUM>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                   (value: Nullable<ImpossibleNames>,):                                                                          never
    getOrdinal<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<ORDINAL>,):                                                                                SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal<const ORDINAL extends number, >                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                      SpecificOrdinalOf<ORDINAL, ENUM>
    getOrdinal                                                                                                                                   (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                               OrdinalOf<ENUM>
    getOrdinal                                                                                                                                   (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                               OrdinalOf<ENUM>
    getOrdinal<const NAME extends string, >                                                                                                      (name: Nullable<PossibleString<NAME>>,):                                                                      EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    getOrdinal                                                                                                                                   (nameOrOrdinal: Nullable<PossibleString>,):                                                                   OrdinalOf<ENUM>
    getOrdinal<const INSTANCE extends ENUM, >                                                                                                    (instance: Nullable<INSTANCE>,):                                                                              OrdinalOf<INSTANCE>

    /**
     * Get the {@link EnumerableWithNullableParent.ordinal ordinal} from the {@link EnumerableWithNullableParent parent instance} directly
     *
     * @param parentInstance The parent instance to find
     * @throws {NullEnumerableException}
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                      (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                 OrdinalOf<PARENT_INSTANCE>
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<| INSTANCE | PARENT_INSTANCE | ENUM>

    //#endregion -------------------- "Get ordinal" methods --------------------

}
