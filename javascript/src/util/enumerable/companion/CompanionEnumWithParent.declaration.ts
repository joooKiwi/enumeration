import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                                               from "enumerable/Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                                                    from "enumerable/EnumerableConstructor"
import type {ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, NameOf, OrdinalOf, PossibleEnumerableValue, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, ValueByEnumerableConstructorAndEnumerableNameAndName} from "enumerable/Enumerable.types"
import type {EnumerableWithParent}                                                                                                                                                                                                                                                                                                                                                                     from "enumerable/EnumerableWithParent"
import type {BasicCompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                                            from "enumerable/companion/BasicCompanionEnum.declaration"

export interface CompanionEnumWithParentDeclaration<ENUMERABLE extends EnumerableWithParent<number, string, PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends Enumerable,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends BasicCompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR> {

    get parentInstance(): PARENT_ENUMERABLE_CONSTRUCTOR


    //#region -------------------- Default getter & setter methods --------------------

    get default(): ENUMERABLE

    set default(value: Nullable<PossibleEnumerableValue<| ENUMERABLE | PARENT_ENUMERABLE>>,)

    setDefault(parentInstance: PARENT_ENUMERABLE,): this

    setDefault(value: Nullable<PossibleEnumerableValue<| ENUMERABLE | PARENT_ENUMERABLE>>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    getValue                                                                                                                                               (value: NullOrUndefined,):                                                                                           never

    getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                       ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                  ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                      ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getValue<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                             ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getValue<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                     INSTANCE

    /**
     * Get the {@link EnumerableWithParent instance} by comparing its {@link EnumerableWithParent.parent} value
     *
     * @param parentInstance The parent instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const PARENT_INSTANCE extends ENUMERABLE, >                                                                                                   (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                        ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>

    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    getName                                                                                                                                               (value: NullOrUndefined,):                                                                                         never

    getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                     EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                    EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    getName<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                           SpecificNameOf<NAME, ENUMERABLE>

    getName<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                   NameOf<INSTANCE>

    /**
     * Get the {@link EnumerableWithParent.name name} from the {@link EnumerableWithParent parent instance} directly
     *
     * @param parentInstance The parent instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                            (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                      NameOf<PARENT_INSTANCE>

    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    getOrdinal                                                                                                                                               (value: NullOrUndefined,):                                                                                         never

    getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                     SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                    SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    getOrdinal<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                           EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                   OrdinalOf<INSTANCE>

    /**
     * Get the {@link EnumerableWithParent.ordinal ordinal} from the {@link EnumerableWithParent parent instance} directly
     *
     * @param parentInstance The parent instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                            (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                      OrdinalOf<PARENT_INSTANCE>

    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

}