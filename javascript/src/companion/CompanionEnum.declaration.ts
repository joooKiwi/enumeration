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

import type {Enumerable}            from "../Enumerable"
import type {EnumerableConstructor} from "../EnumerableConstructor"
import type {CompanionEnumerable}   from "./CompanionEnumerable"

/** @deprecated Replace with {@link CompanionEnumerable} instead. This will be removed in version 3.14 */
export interface CompanionEnumDeclaration<out ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR>>, > extends CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR> {}
