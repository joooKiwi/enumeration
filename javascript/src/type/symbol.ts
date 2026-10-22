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

import type {EnumConstants} from "../EnumConstants"

/**
 * Every possible {@link Symbol} passed to a {@link Enum} child
 * to create a {@link import('@joookiwi/lazy').Lazy Lazy}
 */
export type PossibleEnumSymbol = typeof EnumConstants[| "ENUM_REFERENCE_BY_ITS_NAME_SYMBOL" | "NULL_ENUM_REFERENCE_SYMBOL"]
