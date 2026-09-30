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

import type {EnumerableConstructor}        from "../EnumerableConstructor"
import type {Enumerable}                   from "../Enumerable"
import type {OrdinalOf, SpecificOrdinalOf} from "./ordinalOf"
import type {NameOf, SpecificNameOf}       from "./nameOf"

/**
 * Gives a value by the {@link Enumerable.ordinal ordinal} of the jointure of the `ENUM` type and `ORDINAL` inside the `ENUM_CONSTRUCTOR` type
 *
 * @see SpecificOrdinalOf
 */
export type ValueBySpecificOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = ENUM_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUM> & keyof ENUM_CONSTRUCTOR]
/**
 * Gives a value by the {@link Enumerable.ordinal ordinal} of the `ENUM` type inside the `ENUM_CONSTRUCTOR` type
 *
 * @see OrdinalOf
 */
export type ValueByOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& OrdinalOf<ENUM> & keyof ENUM_CONSTRUCTOR]

/**
 * Gives a value by the {@link Enumerable.name name} of the jointure of the `ENUM` type and `NAME` inside the `ENUM_CONSTRUCTOR` type
 *
 * @see SpecificNameOf
 */
export type ValueBySpecificName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = ENUM_CONSTRUCTOR[& SpecificNameOf<NAME, ENUM> & keyof ENUM_CONSTRUCTOR]
/**
 * Gives a value by the {@link Enumerable.name name} of the `ENUM` type inside the `ENUM_CONSTRUCTOR` type
 *
 * @see NameOf
 */
export type ValueByName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& NameOf<ENUM> & keyof ENUM_CONSTRUCTOR]

/**
 * Gives an {@link Enumerable.ordinal ordinal} of the `ENUM_CONSTRUCTOR` type
 *
 * @see ValueBySpecificName
 * @see ValueByName
 * @see OrdinalOf
 */
export type OrdinalByName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUM_CONSTRUCTOR[& NAME & keyof ENUM_CONSTRUCTOR] & ENUM>

/**
 * Gives an {@link Enumerable.name name} of the `ENUM_CONSTRUCTOR` type
 *
 * @see ValueBySpecificOrdinal
 * @see ValueByOrdinal
 * @see NameOf
 */
export type NameByOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUM_CONSTRUCTOR[& ORDINAL & keyof ENUM_CONSTRUCTOR] & ENUM>
