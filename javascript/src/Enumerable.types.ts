/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants}                          from "./EnumConstants"
import type {Enumerable}                             from "./Enumerable"
import type {EnumerableConstructor}                  from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}      from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}           from "./EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}              from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}         from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                   from "./EnumerableWithParent"
import type {Nullable, PossibleBigInt}               from "./general type"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = typeof EnumConstants["ENUM_TO_STRING_TAG"]

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends string, ENUM extends Enumerable = Enumerable, > =
    | (Lowercase<HINT> extends "number" ? ENUM["ordinal"] : never)
    | (Lowercase<HINT> extends ("string" | "default") ? ENUM["name"] : never)

/** A simple {@link String} or {@link Enumerable.name} value */
export type PossibleNameOf<NAME extends string, ENUM extends Enumerable, > = | NAME | NameOf<ENUM>
/** A simple {@link String} or {@link Enumerable.ordinal} value */
export type PossibleOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = | ORDINAL | OrdinalOf<ENUM>

/** A join of both {@link String} and {@link Enumerable.name} */
export type SpecificNameOf<NAME extends string, ENUM extends Enumerable, > = & NAME & NameOf<ENUM>
/** A join of both {@link Number} and {@link Enumerable.ordinal} */
export type SpecificOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = & ORDINAL & OrdinalOf<ENUM>

/**
 * A simple type to retrieve the {@link Enumerable.name name} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.name
 */
export type NameOf<ENUM extends Enumerable, > = ENUM["name"]
/**
 * A simple type to retrieve the {@link Enumerable.ordinal ordinal} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.ordinal
 */
export type OrdinalOf<ENUM extends Enumerable, > = ENUM["ordinal"]
/** The {@link CompanionEnumDeclaration Companion enum} reference of an {@link EnumerableConstructor} */
export type CompanionOf<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, > = ENUM_CONSTRUCTOR["CompanionEnum"]["get"]

/**
 * The possible {@link Enumerable} members by itself
 * or by an inheritors (in the project)
 *
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
 */
export type PossibleEnumerableMembers = | keyof Enumerable
                                        | keyof EnumerableWithNullableParent<Enumerable>
                                        | keyof EnumerableWithParent<Enumerable>
                                        | keyof EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>
                                        | keyof EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>
                                        | keyof EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>, EnumerableWithNullableParent<Enumerable>, Enumerable>
                                        | keyof EnumerableWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>, EnumerableWithParent<Enumerable>, Enumerable>

/** A general {@link Enumerable} type possibility */
export type PossibleEnumerableValue<ENUM extends Enumerable = Enumerable, ORDINAL extends number = number, NAME extends string = string, > =
    | String | Number | PossibleBigInt
    | ORDINAL | NAME | ENUM
/** A strict {@link Enumerable} type possibility */
export type PossibleEnumerableValueBy<ENUM extends Enumerable, >
    = | String | Number | PossibleBigInt
      | ENUM[ | "ordinal" | "name"]
      | ENUM


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

export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = ENUM_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUM> & keyof ENUM_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = ENUM_CONSTRUCTOR[& SpecificNameOf<NAME, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Use {@link ValueByEnumerableConstructorAndEnumerableName} instead */
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& OrdinalOf<ENUM> & keyof ENUM_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& NameOf<ENUM> & keyof ENUM_CONSTRUCTOR]

export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUM_CONSTRUCTOR[& NAME & keyof ENUM_CONSTRUCTOR] & ENUM>
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUM_CONSTRUCTOR[& ORDINAL & keyof ENUM_CONSTRUCTOR] & ENUM>

//#endregion -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------
