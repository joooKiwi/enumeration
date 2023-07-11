/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants}            from "./EnumConstants"
import type {Enumerable}               from "./Enumerable"
import type {EnumerableConstructor}    from "./EnumerableConstructor"
import type {Nullable, PossibleBigInt} from "./general type"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = typeof EnumConstants["ENUM_TO_STRING_TAG"]

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends string, ENUMERABLE extends Enumerable = Enumerable, > =
    | (Lowercase<HINT> extends "number" ? ENUMERABLE["ordinal"] : never)
    | (Lowercase<HINT> extends ("string" | "default") ? ENUMERABLE["name"] : never)

/** A simple {@link String} or {@link Enumerable.name} value */
export type PossibleNameOf<NAME extends string, ENUMERABLE extends Enumerable, > = | NAME | NameOf<ENUMERABLE>
/** A simple {@link String} or {@link Enumerable.ordinal} value */
export type PossibleOrdinalOf<ORDINAL extends number, ENUMERABLE extends Enumerable, > = | ORDINAL | OrdinalOf<ENUMERABLE>

/** A join of both {@link String} and {@link Enumerable.name} */
export type SpecificNameOf<NAME extends string, ENUMERABLE extends Enumerable, > = & NAME & NameOf<ENUMERABLE>
/** A join of both {@link Number} and {@link Enumerable.ordinal} */
export type SpecificOrdinalOf<ORDINAL extends number, ENUMERABLE extends Enumerable, > = & ORDINAL & OrdinalOf<ENUMERABLE>

/**
 * A simple type to retrieve the {@link Enumerable.name name} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.name
 */
export type NameOf<ENUMERABLE extends Enumerable, > = ENUMERABLE["name"]
/**
 * A simple type to retrieve the {@link Enumerable.ordinal ordinal} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.ordinal
 */
export type OrdinalOf<ENUMERABLE extends Enumerable, > = ENUMERABLE["ordinal"]
/** The {@link BasicCompanionEnumDeclaration Companion enum} reference of an {@link EnumerableConstructor} */
export type CompanionOf<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, > = ENUMERABLE_CONSTRUCTOR["CompanionEnum"]["get"]


/** A general {@link Enumerable} type possibility */
export type PossibleEnumerableValue<ENUMERABLE extends Enumerable = Enumerable, ORDINAL extends number = number, NAME extends string = string, > =
    | String | Number | PossibleBigInt
    | ORDINAL | NAME | ENUMERABLE
/** A strict {@link Enumerable} type possibility */
export type PossibleEnumerableValueBy<ENUMERABLE extends Enumerable, >
    = | String | Number | PossibleBigInt
      | ENUMERABLE[ | "ordinal" | "name"]
      | ENUMERABLE


/**
 * Every possible {@link Symbol} passed to a {@link Enum} child
 * in order to create a {@link import('@joookiwi/lazy').Lazy Lazy}
 */
export type PossibleEnumSymbol = typeof EnumConstants[| "ENUM_REFERENCE_BY_ITS_NAME_SYMBOL" | "NULL_ENUM_REFERENCE_SYMBOL"]
/**
 * A simple type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValueOrCallback<T extends Enumerable = Enumerable, > = Nullable<| T | NameOf<T> | String | PossibleEnumSymbol | (() => Nullable<T | NameOf<T> | String | PossibleEnumSymbol>)>

//#region -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------

export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, ORDINAL extends number, >
    = ENUMERABLE_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, NAME extends string, >
    = ENUMERABLE_CONSTRUCTOR[& SpecificNameOf<NAME, ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, >
    = ENUMERABLE_CONSTRUCTOR[& OrdinalOf<ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]

export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUMERABLE_CONSTRUCTOR[& NAME & keyof ENUMERABLE_CONSTRUCTOR] & ENUMERABLE>
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUMERABLE_CONSTRUCTOR[& ORDINAL & keyof ENUMERABLE_CONSTRUCTOR] & ENUMERABLE>


//#endregion -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------
