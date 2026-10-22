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

import type {BigIntOrObject, StringOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable} from "../Enumerable"
import type {NameOf}     from "./nameOf"
import type {OrdinalOf}  from "./ordinalOf"

/**
 * A type possibility for an {@link Enumerable}, {@link String}, {@link Number} or {@link BigInt} (object or primitive)
 *
 * @see StrictEnumerableOrStringOrNumericOrObject
 */
export type EnumerableOrStringOrNumericOrObject<ENUM extends Enumerable = Enumerable, > =
    | StringOrNumericOrObject | ENUM
/**
 * A strict type possibility for an {@link Enumerable}, {@link Enumerable.name name}, {@link Enumerable.ordinal ordinal},
 * {@link String}, {@link Number} or {@link BigInt} object
 *
 * @see EnumerableOrStringOrNumericOrObject
 */
export type StrictEnumerableOrStringOrNumericOrObject<ENUM extends Enumerable, >
    = | NameOf<ENUM> | String | OrdinalOf<ENUM> | Number | BigIntOrObject | ENUM
