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

import type {KeyOfEnumerableWithGreatGrandParent}       from "../type/keyOf"
import type {EnumerableWithGreatGrandParentGeneralType} from "../type/general"

/**
 * Tell if the value received has the structure of a {@link EnumerableWithGreatGrandParent}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 * @see isEnumWithGreatGrandParent
 * @see EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS
 * @doesNotValidateTheTypes
 */
export function isEnumWithGreatGrandParentByStructure(value: unknown,): value is (& object & Record<KeyOfEnumerableWithGreatGrandParent, unknown>)
/**
 * Tell if the value received has the structure of a {@link EnumerableWithGreatGrandParent}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 * @see isEnumWithGreatGrandParent
 * @see EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS
 * @doesNotValidateTheTypes
 * @note Giving a type to the method is only here to help the implementation, but it will not change the behaviour in JavaScript
 */
export function isEnumWithGreatGrandParentByStructure<const INSTANCE extends EnumerableWithGreatGrandParentGeneralType, >(value: unknown,): value is INSTANCE
export function isEnumWithGreatGrandParentByStructure(value: unknown,) {
    if (value == null)
        return false
    if (typeof value != "object")
        return false
    if ("name" in value)
    if ("ordinal" in value)
    if ("parent" in value)
    if ("grandParent" in value)
    if ("greatGrandParent" in value)
    if (Symbol.toPrimitive in value)
    if (Symbol.toStringTag in value)
        return true
    return false
}
