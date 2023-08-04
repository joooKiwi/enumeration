/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                                                         from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                                                              from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleNameOf, PossibleOrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableGrandParent}                                                                                                                                                                                                                                                                                                                                                                  from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                                                       from "../EnumerableWithNullableParent"
import type {Nullable, NullOrUndefined, PossibleBigInt, PossibleStringOrNumeric}                                                                                                                                                                                                                                                                                                                                 from "../general type"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                                                           from "./CompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                                                                 from "./CompanionEnumWithParent.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                                                                    from "./types"

export interface CompanionEnumWithGrandParentDeclaration<ENUMERABLE extends EnumerableWithNullableGrandParent<PossibleOrdinalOf<number, PARENT_ENUMERABLE>, PossibleNameOf<string, PARENT_ENUMERABLE>, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithNullableParent<PossibleOrdinalOf<number, GRAND_PARENT_ENUMERABLE>, PossibleNameOf<string, GRAND_PARENT_ENUMERABLE>, GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends Enumerable,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, CompanionEnumDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableGrandParent} constructor (or type / class in other languages) */
    get grandParentInstance(): GRAND_PARENT_ENUMERABLE_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUMERABLE

    set defaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,)

    setDefaultValue(value: ImpossibleNames,): never
    setDefaultValue(grandParentInstance: GRAND_PARENT_ENUMERABLE,): this
    setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                                                                                            (value: NullOrUndefined,):                                                                                                                   never
    getValue                                                                                                                                                                                                            (value: ImpossibleNames,):                                                                                                                   never
    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                               ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                          ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getValue<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                     ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    getValue<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                             INSTANCE
    getValue<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_ENUMERABLE>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithNullableGrandParent instance} by comparing its {@link EnumerableWithNullableGrandParent.grandParent} value
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_ENUMERABLE>,):                                                                                   ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                                                                                            (value: NullOrUndefined,):                                                                                                                 never
    getName                                                                                                                                                                                                            (value: ImpossibleNames,):                                                                                                                 never
    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                             EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                        EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                            EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    getName<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                   SpecificNameOf<NAME, ENUMERABLE>
    getName<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                           NameOf<INSTANCE>
    getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                              NameOf<PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithNullableGrandParent.name name} from the {@link EnumerableWithNullableGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                   NameOf<GRAND_PARENT_INSTANCE>
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                                                                                           (value: NullOrUndefined,):                                                                                                                  never
    getOrdinal                                                                                                                                                                                                           (value: ImpossibleNames,):                                                                                                                  never
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<ORDINAL>,):                                                                                                              SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                         SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                             SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    getOrdinal<const NAME extends string, >                                                                                                                                                                              (name: Nullable<NAME>,):                                                                                                                    EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                      (instance: Nullable<INSTANCE>,):                                                                                                            OrdinalOf<INSTANCE>
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                        (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                               OrdinalOf<PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithNullableGrandParent.ordinal ordinal} from the {@link EnumerableWithNullableGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                            (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                    OrdinalOf<GRAND_PARENT_INSTANCE>
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

}
