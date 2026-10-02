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

import type {BigIntOrObject, Nullable, NumberOrObject, StringOrObject} from "@joookiwi/type"

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
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
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

/** A general {@link Enumerable} type possibility */
export type PossibleEnumerableValue<ENUM extends Enumerable = Enumerable, ORDINAL extends number = number, NAME extends string = string, > =
    | StringOrObject<NAME> | NumberOrObject<ORDINAL> | BigIntOrObject | ENUM
/** A strict {@link Enumerable} type possibility */
export type PossibleEnumerableValueBy<ENUM extends Enumerable, >
    = | StringOrObject<NameOf<ENUM>> | NumberOrObject<OrdinalOf<ENUM>> | BigIntOrObject | ENUM

/**
 * A type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValue<T extends Enumerable = Enumerable, > = Nullable<| T | StringOrObject<NameOf<T>> | PossibleEnumSymbol>

/**
 * A type of {@link Enumerable} by its value or its {@link Enumerable.name name} (object or primitive)
 * via the {@link Nullable} value itself or a callback returning the {@link Nullable} value
 */
export type PossibleEnumerableValueOrNameByValueOrCallback<T extends Enumerable = Enumerable, > = Nullable<| T | StringOrObject<NameOf<T>> | PossibleEnumSymbol | (() => Nullable<T | StringOrObject<NameOf<T>> | PossibleEnumSymbol>)>
