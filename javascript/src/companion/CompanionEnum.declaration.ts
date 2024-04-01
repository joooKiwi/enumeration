/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"

import type {Nullable, NullOrUndefined, PossibleBigIntOrTemplate, PossibleNumberOrTemplate, PossibleNumeric, PossibleNumericOrTemplate, PossibleString}                                                                                                                                                                                                                         from "../general type"
import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                        from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                             from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleEnumerableValue, PossibleEnumerableValueBy, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {CompanionEnumName, ImpossibleNames}                                                                                                                                                                                                                                                                                                                                from "./types"

export interface CompanionEnumDeclaration<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > {

    /** The {@link Enumerable} constructor (or type / class in other languages) */
    get instance(): ENUM_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    /**
     * Get the default value
     *
     * @throws {NullEnumerableException}
     * @throws {UnhandledValueException}
     * @lateInititialization
     */
    get defaultValue(): ENUM

    /**
     * Set the default value by an {@link Enumerable}, {@link Number}, {@link BigInt} or {@link String}
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @see setDefaultValue
     * @removeIfNullReceived
     */
    set defaultValue(value: Nullable<PossibleEnumerableValue<ENUM>>,)

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
    setDefaultValue(enumerable: Nullable<ENUM>,): this

    /**
     * Set the default value by an {@link Enumerable}, {@link Number}, {@link BigInt} or {@link String}
     *
     * @param value The value to find ({@link Enumerable}, {@link Number}, {@link BigInt} or {@link String})
     * @removeIfNullReceived
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<PossibleEnumerableValueBy<ENUM>>,): this

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
    setDefaultValue(value: Nullable<PossibleEnumerableValue<ENUM>>,): this

    //#endregion -------------------- Default getter & setter methods --------------------
    //#region -------------------- Values getter methods --------------------

    /**
     * Every {@link Enumerable instance} for the {@link instance}
     *
     * @lateInitialization
     */
    get values(): CollectionHolder<ENUM>

    /**
     * Every {@link Enumerable.name name} for the {@link instance}
     *
     * @lateInitialization
     */
    get names(): CollectionHolder<NameOf<ENUM>>

    /**
     * Every {@link Enumerable.ordinal ordinal} for the {@link instance}
     *
     * @lateInitialization
     */
    get ordinals(): CollectionHolder<OrdinalOf<ENUM>>

    /** An {@link IterableIterator iterator} for the {@link instance} */
    get iterator(): CollectionIterator<ENUM>

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
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

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
    getValue<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(ordinal: Nullable<PossibleNumberOrTemplate>,): ENUM

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(ordinal: Nullable<PossibleBigIntOrTemplate>,): ENUM

    /**
     * Get an {@link Enumerable} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue(ordinal: Nullable<PossibleNumericOrTemplate>,): ENUM

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
    getValue<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>

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
    getValue(nameOrOrdinal: Nullable<PossibleString>,): ENUM

    /**
     * Get an {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getValue<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): INSTANCE

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
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE

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
    getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

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
    getName<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(ordinal: Nullable<PossibleNumberOrTemplate>,): NameOf<ENUM>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(ordinal: Nullable<PossibleBigIntOrTemplate>,): NameOf<ENUM>

    /**
     * Get a {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName(ordinal: Nullable<PossibleNumericOrTemplate>,): NameOf<ENUM>

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
    getName<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): SpecificNameOf<NAME, ENUM>

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
    getName(nameOrOrdinal: Nullable<PossibleString>,): NameOf<ENUM>

    /**
     * Get the {@link Enumerable.name name} by the {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getName<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

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
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE>

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
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): SpecificOrdinalOf<ORDINAL, ENUM>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,): SpecificOrdinalOf<ORDINAL, ENUM>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<PossibleNumberOrTemplate>,): OrdinalOf<ENUM>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<PossibleBigIntOrTemplate>,): OrdinalOf<ENUM>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws {ForbiddenNumericException}
     * @throws {ImpossibleOrdinalException}
     * @throws {NullEnumerableException}
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<PossibleNumericOrTemplate>,): OrdinalOf<ENUM>

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
    getOrdinal<const NAME extends string, >(name: Nullable<PossibleString<NAME>>,): EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>

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
    getOrdinal(nameOrOrdinal: Nullable<PossibleString>,): OrdinalOf<ENUM>

    /**
     * Get the {@link Enumerable.ordinal ordinal} by an {@link Enumerable} directly
     *
     * @param instance The instance to find
     * @throws {InvalidEnumerableException}
     * @throws {NullEnumerableException}
     * @throws {NullReferenceException}
     */
    getOrdinal<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

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
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

    /** A Javascript way to implements a "for‥of" for a {@link Enumerable instance} instance */
    [Symbol.iterator](): CollectionIterator<ENUM>

    /**
     * An output for the call from {@link Object.prototype.toString.call} [object CompanionEnum] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: CompanionEnumName

}
