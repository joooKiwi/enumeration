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

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = typeof EnumConstants["ENUM_TO_STRING_TAG"]

/** The {@link CompanionEnumerable} name in a {@link Object.toString toString()} method */
export type CompanionEnumName = typeof EnumConstants["COMPANION_ENUM_TO_STRING_TAG"]
