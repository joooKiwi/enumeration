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

import type {EnumerableConstructor} from "../EnumerableConstructor"

/** The {@link CompanionEnumDeclaration Companion enum} reference of an {@link EnumerableConstructor} */
export type CompanionOf<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, > = ENUM_CONSTRUCTOR["CompanionEnum"]["get"]
