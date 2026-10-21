//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {BigIntOrObject, Nullable, StringOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable}                              from "../Enumerable"
import type {EnumerableConstructor}                   from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}       from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}  from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}            from "../EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}               from "../EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}          from "../EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                    from "../EnumerableWithParent"
import type {CompanionEnumerableWithGrandParent}      from "../companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent} from "../companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}           from "../companion/CompanionEnumerableWithParent"
import type {CompanionEnumerableType}                 from "./companion"
import type {NameOf}                                  from "./nameOf"
import type {OrdinalOf}                               from "./ordinalOf"
import type {PossibleEnumSymbol}                      from "./symbol"

/**
 * The possible {@link Enumerable} members by itself
 * or by an inheritors (in the project)
 *
 * @see EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS
 */
export type PossibleEnumerableMembers = | keyof Enumerable
                                        | keyof EnumerableWithNullableParent<never>
                                        | keyof EnumerableWithParent<never>
                                        | keyof EnumerableWithNullableGrandParent<never, never>
                                        | keyof EnumerableWithGrandParent<never, never>
                                        | keyof EnumerableWithNullableGreatGrandParent<never, never, never>
                                        | keyof EnumerableWithGreatGrandParent<never, never, never>

/** The possible {@link Enumerable} instances. Either a {@link EnumerableConstructor} or a {@link CompanionEnumerable} */
export type PossibleEnumerableInstance<ENUMERABLE extends Enumerable = Enumerable, > =
    | CompanionEnumerableType<ENUMERABLE>
    | CompanionEnumerableWithParent<any, any, ENUMERABLE, any>
    | CompanionEnumerableWithGrandParent<any, any, any, any, ENUMERABLE, any>
    | CompanionEnumerableWithGreatGrandParent<any, any, any, any, any, any, ENUMERABLE, any>
    | EnumerableConstructor<ENUMERABLE, CompanionEnumerableType<ENUMERABLE>>

/**
 * A type possibility for an {@link Enumerable}, {@link String}, {@link Number} or {@link BigInt} (object or primitive)
 *
 * @see StrictEnumerableOrStringOrNumericOrObject
 */
export type EnumerableOrStringOrNumericOrObject<ENUM extends Enumerable = Enumerable, > =
    | StringOrNumericOrObject | ENUM
/**
 * A strict type possibility for an {@link Enumerable}, {@link Enumerable.name name}, {@link Enumerable.ordinal ordinal},
 * {@link String}, {@link Number} or {@link BigInt} object
 *
 * @see EnumerableOrStringOrNumericOrObject
 */
export type StrictEnumerableOrStringOrNumericOrObject<ENUM extends Enumerable, >
    = | NameOf<ENUM> | String | OrdinalOf<ENUM> | Number | BigIntOrObject | ENUM

/**
 * A type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValue<T extends Enumerable = Enumerable, > = Nullable<| T | NameOf<T> | String | PossibleEnumSymbol>

/**
 * A type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValueOrCallback<T extends Enumerable = Enumerable, > = Nullable<| T | NameOf<T> | String | PossibleEnumSymbol | (() => Nullable<T | NameOf<T> | String | PossibleEnumSymbol>)>
