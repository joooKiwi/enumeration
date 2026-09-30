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

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends string, ENUM extends Enumerable = Enumerable, > =
    | (Lowercase<HINT> extends "number" ? ENUM["ordinal"] : never)
    | (Lowercase<HINT> extends ("string" | "default") ? ENUM["name"] : never)
