//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {BigIntOrObject, Nullable, NumberOrObject, StringOrObject} from "@joookiwi/type"

import type {EnumConstants}                          from "./EnumConstants"
import type {Enumerable}                             from "./Enumerable"
import type {EnumerableConstructor}                  from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}      from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}           from "./EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}              from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}         from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                   from "./EnumerableWithParent"
import type {EnumWithNullableGrandParent}            from "./EnumWithNullableGrandParent"
import type {EnumWithNullableGreatGrandParent}       from "./EnumWithNullableGreatGrandParent"
import type {EnumWithNullableParent}                 from "./EnumWithNullableParent"
import type {EnumWithGrandParent}                    from "./EnumWithGrandParent"
import type {EnumWithGreatGrandParent}               from "./EnumWithGreatGrandParent"
import type {EnumWithParent}                         from "./EnumWithParent"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = typeof EnumConstants["ENUM_TO_STRING_TAG"]

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends string, ENUM extends Enumerable = Enumerable, > =
    | (Lowercase<HINT> extends "number" ? ENUM["ordinal"] : never)
    | (Lowercase<HINT> extends ("string" | "default") ? ENUM["name"] : never)

//#region -------------------- Name / ordinal of --------------------

/** A {@link String} or {@link Enumerable.name} value */
export type PossibleNameOf<NAME extends string, ENUM extends Enumerable, > = | NAME | NameOf<ENUM>
/** A {@link String} or {@link Enumerable.ordinal} value */
export type PossibleOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = | ORDINAL | OrdinalOf<ENUM>

/** A join of both {@link String} and {@link Enumerable.name} */
export type SpecificNameOf<NAME extends string, ENUM extends Enumerable, > = & NAME & NameOf<ENUM>
/** A join of both {@link Number} and {@link Enumerable.ordinal} */
export type SpecificOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = & ORDINAL & OrdinalOf<ENUM>

/**
 * A type to retrieve the {@link Enumerable.name name} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.name
 */
export type NameOf<ENUM extends Enumerable, > = ENUM["name"]
/**
 * A type to retrieve the {@link Enumerable.ordinal ordinal} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.ordinal
 */
export type OrdinalOf<ENUM extends Enumerable, > = ENUM["ordinal"]

//#endregion -------------------- Name / ordinal of --------------------


/** The {@link CompanionEnumDeclaration Companion enum} reference of an {@link EnumerableConstructor} */
export type CompanionOf<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, > = ENUM_CONSTRUCTOR["CompanionEnum"]["get"]

/**
 * The possible {@link Enumerable} members by itself
 * or by an inheritors (in the project)
 *
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
 */
export type PossibleEnumerableMembers = | keyof Enumerable
                                        | keyof EnumerableWithNullableParent<never>
                                        | keyof EnumerableWithParent<never>
                                        | keyof EnumerableWithNullableGrandParent<never, never>
                                        | keyof EnumerableWithGrandParent<never, never>
                                        | keyof EnumerableWithNullableGreatGrandParent<never, never, never>
                                        | keyof EnumerableWithGreatGrandParent<never, never, never>

/** A general {@link Enumerable} type possibility */
export type PossibleEnumerableValue<ENUM extends Enumerable = Enumerable, ORDINAL extends number = number, NAME extends string = string, > =
    | StringOrObject<NAME> | NumberOrObject<ORDINAL> | BigIntOrObject | ENUM
/** A strict {@link Enumerable} type possibility */
export type PossibleEnumerableValueBy<ENUM extends Enumerable, >
    = | StringOrObject<ENUM["name"]> | NumberOrObject<ENUM["ordinal"]> | BigIntOrObject | ENUM


/**
 * Every possible {@link Symbol} passed to a {@link Enum} child
 * to create a {@link import('@joookiwi/lazy').Lazy Lazy}
 */
export type PossibleEnumSymbol = typeof EnumConstants[| "ENUM_REFERENCE_BY_ITS_NAME_SYMBOL" | "NULL_ENUM_REFERENCE_SYMBOL"]
/**
 * A type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValueOrCallback<T extends Enumerable = Enumerable, > = Nullable<| T | StringOrObject<NameOf<T>> | PossibleEnumSymbol | (() => Nullable<T | StringOrObject<NameOf<T>> | PossibleEnumSymbol>)>

//#region -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------

export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = ENUM_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUM> & keyof ENUM_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = ENUM_CONSTRUCTOR[& SpecificNameOf<NAME, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Use {@link ValueByEnumerableConstructorAndEnumerableName} instead. This will be removed in version 3.6. */
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& OrdinalOf<ENUM> & keyof ENUM_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& NameOf<ENUM> & keyof ENUM_CONSTRUCTOR]

export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUM_CONSTRUCTOR[& NAME & keyof ENUM_CONSTRUCTOR] & ENUM>
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUM_CONSTRUCTOR[& ORDINAL & keyof ENUM_CONSTRUCTOR] & ENUM>

//#endregion -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------
//#region -------------------- General types --------------------

/** The generic value of an {@link EnumWithNullableParent} with its default values */
export type EnumWithNullableParentGeneralType = EnumWithNullableParent<Enumerable>
/** The generic value of an {@link EnumWithParent} with its default values */
export type EnumWithParentGeneralType = EnumWithParent<Enumerable>
/** The generic value of an {@link EnumWithNullableGrandParent} with its default values */
export type EnumWithNullableGrandParentGeneralType = EnumWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithGrandParent} with its default values */
export type EnumWithGrandParentGeneralType = EnumWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithNullableGreatGrandParent} with its default values */
export type EnumWithNullableGreatGrandParentGeneralType = EnumWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>, EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithGreatGrandParent} with its default values */
export type EnumWithGreatGrandParentGeneralType = EnumWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>, EnumerableWithParent<Enumerable>, Enumerable>


/** The generic value of an {@link EnumerableWithNullableParent} with its default values */
export type EnumerableWithNullableParentGeneralType = EnumerableWithNullableParent<Enumerable>
/** The generic value of an {@link EnumerableWithParent} with its default values */
export type EnumerableWithParentGeneralType = EnumerableWithParent<Enumerable>
/** The generic value of an {@link EnumerableWithNullableGrandParent} with its default values */
export type EnumerableWithNullableGrandParentGeneralType = EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithGrandParent} with its default values */
export type EnumerableWithGrandParentGeneralType = EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithNullableGreatGrandParent} with its default values */
export type EnumerableWithNullableGreatGrandParentGeneralType = EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>, EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithGreatGrandParent} with its default values */
export type EnumerableWithGreatGrandParentGeneralType = EnumerableWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>, EnumerableWithParent<Enumerable>, Enumerable>

//#endregion -------------------- General types --------------------
