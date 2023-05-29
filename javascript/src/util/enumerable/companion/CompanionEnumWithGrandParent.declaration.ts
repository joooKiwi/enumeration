import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                      from "enumerable/Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                           from "enumerable/EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "enumerable/Enumerable.types"
import type {EnumerableWithParent}                                                                                                                                                                                                                                                                                                                                            from "enumerable/EnumerableWithParent"
import type {EnumerableWithGrandParent}                                                                                                                                                                                                                                                                                                                                       from "enumerable/EnumerableWithGrandParent"
import type {BasicCompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                   from "enumerable/companion/BasicCompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                              from "enumerable/companion/CompanionEnumWithParent.declaration"

export interface CompanionEnumWithGrandParentDeclaration<ENUMERABLE extends EnumerableWithGrandParent<number, string, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithParent<number, string, GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends Enumerable,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR> {

    get grandParentInstance(): GRAND_PARENT_ENUMERABLE_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    get default(): ENUMERABLE

    set default(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,)

    setDefault(grandParentInstance: GRAND_PARENT_ENUMERABLE,): this

    setDefault(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                                                                                            (value: NullOrUndefined,):                                                                                                                   never

    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                               ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                          ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                     ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getValue<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                             INSTANCE

    getValue<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_ENUMERABLE>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGrandParent instance} by comparing its {@link EnumerableWithGrandParent.grandParent} value
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_ENUMERABLE>,):                                                                                   ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>

    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                                                                                            (value: NullOrUndefined,):                                                                                                                 never

    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                             EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                        EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                            EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                   SpecificNameOf<NAME, ENUMERABLE>

    getName<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                           NameOf<INSTANCE>

    getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                              NameOf<PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGrandParent.name name} from the {@link EnumerableWithGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                   NameOf<GRAND_PARENT_INSTANCE>

    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                                                                                           (value: NullOrUndefined,):                                                                                                                  never

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<ORDINAL>,):                                                                                                              SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                         SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                             SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const NAME extends string, >                                                                                                                                                                              (name: Nullable<NAME>,):                                                                                                                    EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                      (instance: Nullable<INSTANCE>,):                                                                                                            OrdinalOf<INSTANCE>

    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                        (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                               OrdinalOf<PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGrandParent.ordinal ordinal} from the {@link EnumerableWithGrandParent grandparent instance} directly
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                            (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                    OrdinalOf<GRAND_PARENT_INSTANCE>

    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

}