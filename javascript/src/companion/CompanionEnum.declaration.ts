/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"

import type {Nullable, NullOrUndefined, PossibleBigInt, PossibleBigIntOrTemplate, PossibleNumberOrTemplate, PossibleNumeric, PossibleString}                                                                                                                                                                                                                                    from "../general type"
import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {CompanionEnumName, ImpossibleNames}                                                                                                                                                                                                                                                                                                                                from "./types"

export interface CompanionEnumDeclaration<ENUMERABLE extends Enumerable,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>, > {

    /** The {@link Enumerable} constructor (or type / class in other languages) */
    get instance(): ENUMERABLE_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    /**
     * Get the default value.
     *
     * If the default value was not initialized, it will attempt to initialize it
     * and then return it.
     *
     * @throws {NullEnumerableException}
     * @throws {UnhandledValueException}
     */
    get defaultValue(): ENUMERABLE

    /**
     * Set the default value by an {@link Enumerable}, {@link Number}, {@link BigInt} or {@link String}
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @see setDefaultValue
     * @removeIfNullReceived
     */
    set defaultValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,)

    /**
     * Remove the default value
     *
     * @param value A <b>null</b> value
     * @typescriptDefinition
     */
    setDefaultValue(value: NullOrUndefined,): this

    /**
     * Set nothing because of an {@link EnumConstants.EDGE_CASE_NUMERIC_NAMES edge-case name}
     * or an {@link EnumConstants.EVERY_ENUMERABLE_MEMBERS enumerable member name}
     *
     * @param value The edge-case value
     * @throws {ForbiddenNumericException}
     * @throws {ForbiddenNameException}
     * @typescriptDefinition
     */
    setDefaultValue(value: ImpossibleNames,): never

    /**
     * Set the default value by an {@link Enumerable}
     *
     * @param enumerable The current {@link Enumerable}
     * @removeIfNullReceived
     */
    setDefaultValue(enumerable: Nullable<ENUMERABLE>,): this

    /**
     * Set the default value by an {@link Enumerable}, {@link Number}, {@link BigInt} or {@link String}
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @removeIfNullReceived
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<PossibleEnumerableValueBy<ENUMERABLE>>,): this

    /**
     * Set the default value by an {@link Enumerable}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @removeIfNullReceived
     */
    setDefaultValue(ordinal: Nullable<PossibleNumeric>,): this

    /**
     * Set the default value by a {@link String}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @removeIfNullReceived
     */
    setDefaultValue(nameOrOrdinal: Nullable<PossibleString>,): this

    /**
     * Set the default value by a {@link Enumerable}, {@link Number}, {@link BigInt} or {@link String}
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @removeIfNullReceived
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<PossibleEnumerableValue<ENUMERABLE>>,): this

    //#endregion -------------------- Default getter & setter methods --------------------
    //#region -------------------- Values getter methods --------------------

    /** Every {@link Enumerable instance} for the {@link instance} */
    get values(): CollectionHolder<ENUMERABLE>

    /** Every {@link Enumerable.name name} for the {@link instance} */
    get names(): CollectionHolder<NameOf<ENUMERABLE>>

    /** Every {@link Enumerable.ordinal ordinal} for the {@link instance} */
    get ordinals(): CollectionHolder<OrdinalOf<ENUMERABLE>>

    /** A simple {@link IterableIterator iterator} for the {@link instance} */
    get iterator(): CollectionIterator<ENUMERABLE>

    //#endregion -------------------- Values getter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getValue(value: Nullable<ImpossibleNames>,): never

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(ordinal: Nullable<PossibleNumberOrTemplate>,): ENUMERABLE

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(ordinal: Nullable<PossibleBigIntOrTemplate>,): ENUMERABLE

    /**
     * Get an {@link Enumerable} by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getValue<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    /**
     * Get an {@link Enumerable} by a {@link Enumerable.name name} or an {@link Enumerable.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(nameOrOrdinal: Nullable<PossibleString>,): ENUMERABLE

    /**
     * Get an {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): INSTANCE

    /**
     * Get an {@link Enumerable instance} by any valid value
     * ({@link Enumerable}, {@link Enumerable.ordinal ordinal} or {@link Enumerable.name name})
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | NAME | String | Number | PossibleBigInt | INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {NullEnumerableException}
     * @typescriptdefinition
     */
    getName(value: Nullable<ImpossibleNames>,): never

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(ordinal: Nullable<PossibleNumberOrTemplate>,): NameOf<ENUMERABLE>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(ordinal: Nullable<PossibleBigIntOrTemplate>,): NameOf<ENUMERABLE>

    /**
     * Get the {@link Enumerable.name name} by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getName<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): SpecificNameOf<NAME, ENUMERABLE>

    /**
     * Get the {@link Enumerable.name name} by a {@link Enumerable.name name} or an {@link Enumerable.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(nameOrOrdinal: Nullable<PossibleString>,): NameOf<ENUMERABLE>

    /**
     * Get the {@link Enumerable.name name} by the {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

    /**
     * Get the {@link Enumerable.name name} from any valid value
     * ({@link Enumerable}, {@link Enumerable.ordinal ordinal} or {@link Enumerable.name name})
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(value: Nullable<ImpossibleNames>,): never

    /**
     * Get the {@link Enumerable.ordinal ordinal} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): SpecificOrdinalOf<ORDINAL, ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<PossibleNumberOrTemplate>,): OrdinalOf<ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<PossibleBigIntOrTemplate>,): OrdinalOf<ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.name name}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNameException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getOrdinal(nameOrOrdinal: Nullable<PossibleString>,): OrdinalOf<ENUMERABLE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by an {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const INSTANCE extends ENUMERABLE, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

    /**
     * Get the {@link Enumerable.ordinal ordinal} from any valid value
     * ({@link Enumerable.ordinal ordinal}, {@link Enumerable.name name} or {@link Enumerable instance})
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @throws {ForbiddenInheritedEnumerableMemberException}
     * @throws {ForbiddenNumericException}
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {InvalidEnumerableException}
     * @throws {InvalidInstanceException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE = ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

    /** A Javascript way to implements a "for‥of" for a {@link Enumerable instance} instance */
    [Symbol.iterator](): CollectionIterator<ENUMERABLE>

    /**
     * A simple output for the call from {@link Object.prototype.toString.call} [object CompanionEnum] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: CompanionEnumName

}
