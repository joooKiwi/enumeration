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

import type {Enumerable}      from "../Enumerable"
import type {KeyOfEnumerable} from "../type/keyOf"

/**
 * Tell if the value received has the structure of a {@link Enumerable}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 * @see isEnum
 * @see EnumConstants.ENUMERABLE_MEMBERS
 * @doesNotValidateTheTypes
 */
export function isEnumByStructure(value: unknown,): value is (& object & Record<KeyOfEnumerable, unknown>)
/**
 * Tell if the value received has the structure of a {@link Enumerable}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 * @see isEnum
 * @see EnumConstants.ENUMERABLE_MEMBERS
 * @doesNotValidateTheTypes
 * @note Giving a type to the method is only here to help the implementation, but it will not change the behaviour in JavaScript
 */
export function isEnumByStructure<const INSTANCE extends Enumerable, >(value: unknown,): value is INSTANCE
export function isEnumByStructure(value: unknown,) {
    if (value == null)
        return false
    if (typeof value != "object")
        return false
    if ("name" in value)
    if ("ordinal" in value)
    if (Symbol.toPrimitive in value)
    if (Symbol.toStringTag in value)
        return true
    return false
}
