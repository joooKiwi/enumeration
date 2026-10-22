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

/** A {@link String} or {@link Enumerable.name} value */
export type PossibleNameOf<NAME extends string, ENUM extends Enumerable, > = | NAME | NameOf<ENUM>

/** A join of both {@link String} and {@link Enumerable.name} */
export type SpecificNameOf<NAME extends string, ENUM extends Enumerable, > = & NAME & NameOf<ENUM>

/**
 * A type to retrieve the {@link Enumerable.name name} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.name
 */
export type NameOf<ENUM extends Enumerable, > = ENUM["name"]
