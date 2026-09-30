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

import type {Enumerable} from "../Enumerable"

/** A {@link String} or {@link Enumerable.ordinal} value */
export type PossibleOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = | ORDINAL | OrdinalOf<ENUM>

/** A join of both {@link Number} and {@link Enumerable.ordinal} */
export type SpecificOrdinalOf<ORDINAL extends number, ENUM extends Enumerable, > = & ORDINAL & OrdinalOf<ENUM>

/**
 * A type to retrieve the {@link Enumerable.ordinal ordinal} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.ordinal
 */
export type OrdinalOf<ENUM extends Enumerable, > = ENUM["ordinal"]
