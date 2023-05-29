import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                      from "enumerable/Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                           from "enumerable/EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "enumerable/Enumerable.types"
import type {EnumerableWithGreatGrandParent}                                                                                                                                                                                                                                                                                                                                  from "enumerable/EnumerableWithGreatGrandParent"
import type {EnumerableWithGrandParent}                                                                                                                                                                                                                                                                                                                                       from "enumerable/EnumerableWithGrandParent"
import type {EnumerableWithParent}                                                                                                                                                                                                                                                                                                                                            from "enumerable/EnumerableWithParent"
import type {BasicCompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                   from "enumerable/companion/BasicCompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                              from "enumerable/companion/CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                                                                                                                                                                                                                                         from "enumerable/companion/CompanionEnumWithGrandParent.declaration"

export interface CompanionEnumWithGreatGrandParentDeclaration<ENUMERABLE extends EnumerableWithGreatGrandParent<number, string, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGreatGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithGrandParent<number, string, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithGrandParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends EnumerableWithParent<number, string, GREAT_GRAND_PARENT_ENUMERABLE>,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUMERABLE extends Enumerable,
    GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR> {

    get greatGrandParentInstance(): GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR


    //#region -------------------- Default getter & setter methods --------------------

    get default(): ENUMERABLE

    set default(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,)

    setDefault(greatGrandParentInstance: GREAT_GRAND_PARENT_ENUMERABLE,): this

    setDefault(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                                 never

    getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                             ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                            ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                   ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getValue<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                           INSTANCE

    getValue<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_ENUMERABLE>,):                                                                                                                            ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>

    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_ENUMERABLE>,):                                                                                                                 ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGreatGrandParent instance} by comparing its {@link EnumerableWithGreatGrandParent.greatGrandParent} value
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>

    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                               never

    getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                           EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                      EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                          EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                 SpecificNameOf<NAME, ENUMERABLE>

    getName<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                         NameOf<INSTANCE>

    getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                            NameOf<PARENT_INSTANCE>

    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                 NameOf<GRAND_PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGreatGrandParent.name name} from the {@link EnumerableWithGreatGrandParent great-grandparent instance} directly
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                      NameOf<GREAT_GRAND_PARENT_INSTANCE>

    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE> | NameOf<GREAT_GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                               never

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                           SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                      SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                          SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                 EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                         OrdinalOf<INSTANCE>

    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                            OrdinalOf<PARENT_INSTANCE>

    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                 OrdinalOf<GRAND_PARENT_INSTANCE>

    /**
     * Get the {@link EnumerableWithGreatGrandParent.ordinal ordinal} from the {@link EnumerableWithGreatGrandParent great-grandparent instance} directly
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                      OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>

    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE> | OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

}
