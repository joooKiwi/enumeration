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

import type {Enumerable}                 from "../Enumerable"
import type {EnumerableConstructor}      from "../EnumerableConstructor"
import type {CompanionEnumerable}        from "../companion/CompanionEnumerable"
import type {PossibleEnumerableInstance} from "./possibleInstance"
import type {CompanionEnumerableType}    from "./companion"
import type {CompanionOf}                from "./companionOf"

export type CompanionEnumFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance, >
    = T extends EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>                                  ? CompanionOf<T>
    : T extends CompanionEnumerable<Enumerable, EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>> ? T : never
