import type {Nullable, NullOrUndefined, PossibleBigInt, PossibleNumeric, PossibleString}                                                                                                                                                                                                                                                                                        from "../../../general type"
import type {CollectionHolder}                                                                                                                                                                                                                                                                                                                                                  from "../../collection/CollectionHolder"
import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {CompanionEnumName}                                                                                                                                                                                                                                                                                                                                                 from "./types"

export interface BasicCompanionEnumDeclaration<ENUMERABLE extends Enumerable,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, BasicCompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>, > {

    /** The {@link Enumerable} constructor (or class in other languages) */
    get instance(): ENUMERABLE_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    /**
     * Get the default value of an {@link Enumerable instance}
     *
     * @note If no default value was set (in the declaration) or by using the instance setter, an {@link NullEnumerableException exception} will be thrown.
     * @throws {NullEnumerableException}
     */
    get default(): ENUMERABLE

    /**
     * Set the default value of an {@link Enumerable instance}
     *
     * @param value The value to set (name, ordinal or instance)
     *
     * @note Receiving a <b>null</b> value with remove the default value
     * @see setDefault
     */
    set default(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,)

    /**
     * Remove the default value of an {@link Enumerable instance}
     *
     * @param value A <b>null</b> value
     */
    setDefault(value: NullOrUndefined,): this

    /**
     * Set the default value of an {@link Enumerable instance}
     *
     * @param enumerable The current {@link Enumerable instance} type
     *
     * @note Receiving a <b>null</b> value with remove the default value
     */
    setDefault(enumerable: Nullable<ENUMERABLE>,): this

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param value The value to set by a valid value ({@link Enumerable.name name}, {@link Enumerable.ordinal ordinal} or {@link Enumerable instance})
     *
     * @note Receiving a <b>null</b> value with remove the default value
     */
    setDefault(value: Nullable<PossibleEnumerableValueBy<ENUMERABLE>>,): this

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} of the current {@link Enumerable instance} or a {@link Number}/{@link BigInt} related to it
     *
     * @note Receiving a <b>null</b> value with remove the default value
     */
    setDefault(ordinal: Nullable<PossibleNumeric>,): this

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param name The {@link Enumerable.name name} of the current {@link Enumerable instance} or a {@link String} related to it
     *
     * @note Receiving a <b>null</b> value with remove the default value
     */
    setDefault(name: Nullable<PossibleString>,): this

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param value The value to set by a possibly valid value ({@link Enumerable.name name}, {@link Enumerable.ordinal ordinal} or {@link Enumerable instance})
     *
     * @note Receiving a <b>null</b> value with remove the default value
     */
    setDefault(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this

    //#endregion -------------------- Default getter & setter methods --------------------
    //#region -------------------- Values getter methods --------------------

    /** Every {@link Enumerable instance} for the {@link Enumerable instance} */
    get values(): CollectionHolder<ENUMERABLE>

    /** Every {@link Enumerable.name name} for the {@link Enumerable instance} */
    get names(): CollectionHolder<NameOf<ENUMERABLE>>

    /** Every {@link Enumerable.ordinal ordinal} for the {@link Enumerable instance} */
    get ordinals(): CollectionHolder<OrdinalOf<ENUMERABLE>>

    /** A simple {@link IterableIterator iterator} to be used for the {@link Enumerable instance} */
    get iterator(): IterableIterator<ENUMERABLE>

    //#endregion -------------------- Values getter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    /**
     * Get nothing because of a <b>null</b> value
     *
     * @param value A <b>null</b> value
     * @throws {NullEnumerableException}
     */
    getValue(value: NullOrUndefined,): never

    /**
     * Get the {@link Enumerable instance} from an {@link Enumerable.ordinal ordinal value} indirectly
     *
     * @param ordinal The ordinal to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable instance} from a {@link Enumerable.ordinal ordinal value} indirectly
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<`${ORDINAL}`>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable instance} from a {@link Enumerable.ordinal ordinal value} indirectly
     *
     * @param ordinal The ordinal to find (as a {@link Number} or {@link String} template form)
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable instance} from a {@link Enumerable.name name value} indirectly
     *
     * @param name The name to find
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getValue<const NAME extends string, >(name: Nullable<NAME>,): ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    /**
     * Get the {@link Enumerable instance} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     */
    getValue<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): INSTANCE

    /**
     * Get the {@link Enumerable instance} from any valid value
     * ({@link Enumerable.ordinal ordinal}, {@link Enumerable.name name} or {@link Enumerable instance})
     *
     * @param value The value (ordinal, name or instance) to find
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | NAME | String | Number | PossibleBigInt | INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    /**
     * Get nothing because of a <b>null</b> value
     *
     * @param value A <b>null</b> value
     * @throws {NullEnumerableException}
     */
    getName(value: NullOrUndefined,): never

    /**
     * Get the {@link Enumerable.name name} from an {@link Enumerable.ordinal ordinal value} directly
     *
     * @param ordinal The ordinal to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable.name name} from a {@link Enumerable.ordinal ordinal value} indirectly
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<`${ORDINAL}`>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable.name name} from a {@link Enumerable.ordinal ordinal value} indirectly
     *
     * @param ordinal The ordinal to find (as a {@link Number} or {@link String} template form)
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get the {@link Enumerable.name name} from a {@link Enumerable.name name value} directly
     *
     * @param name The name to find
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getName<const NAME extends string, >(name: Nullable<NAME>,): SpecificNameOf<NAME, ENUMERABLE>

    /**
     * Get the {@link Enumerable.name name} from the {@link Enumerable instance} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     */
    getName<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

    /**
     * Get the {@link Enumerable.name name} from any valid value ({@link Enumerable.ordinal ordinal}, {@link Enumerable.name name} or {@link Enumerable instance})
     *
     * @param value The value (ordinal, name or instance) to find
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    /**
     * Get nothing because of a <b>null</b> value
     *
     * @param value A <b>null</b> value
     * @throws {NullEnumerableException}
     */
    getOrdinal(value: NullOrUndefined,): never

    /**
     * Get the {@link Enumerable.ordinal ordinal} from an {@link Enumerable.ordinal ordinal value} directly
     *
     * @param ordinal The ordinal to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from a {@link Enumerable.ordinal ordinal value} directly
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<`${ORDINAL}`>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from a {@link Enumerable.ordinal ordinal value} directly
     *
     * @param ordinal The ordinal to find (as a {@link Number} or {@link String} template form)
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from a {@link Enumerable.name name value} indirectly
     *
     * @param name The name to find
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const NAME extends string, >(name: Nullable<NAME>,): EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from the {@link Enumerable instance} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     */
    getOrdinal<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from any valid value
     * ({@link Enumerable.ordinal ordinal}, {@link Enumerable.name name} or {@link Enumerable instance})
     *
     * @param value The value (ordinal, name or instance) to find
     *
     * @typescriptDefinition
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

    /** A Javascript way to implements a "for‥of" for a {@link Enumerable instance} instance */
    [Symbol.iterator](): IterableIterator<ENUMERABLE>

    /**
     * A simple output for the call from {@link Object.prototype.toString.call} [object CompanionEnum] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: CompanionEnumName

}
