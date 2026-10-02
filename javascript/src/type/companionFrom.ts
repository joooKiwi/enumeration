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

import type {EnumerableConstructor}      from "../EnumerableConstructor"
import type {CompanionEnumerable}        from "../companion/CompanionEnumerable"
import type {PossibleEnumerableInstance} from "./possibleInstance"
import type {CompanionOf}                from "./companionOf"

export type CompanionEnumFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance<any>, >
    = T extends EnumerableConstructor<any, any> ? CompanionOf<T>
    : T extends CompanionEnumerable<any, any> ? T : never
