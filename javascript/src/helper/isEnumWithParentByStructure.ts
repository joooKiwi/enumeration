//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {EnumerableWithParent} from "../EnumerableWithParent"

import {EnumConstants} from "../EnumConstants"

/**
 * Tell if the value received has the structure of a {@link EnumerableWithParent}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 * @see isEnumWithParent
 * @doesNotValidateTheTypes
 */
export function isEnumWithParentByStructure(value: unknown,): value is (& object & Record<keyof EnumerableWithParent<never>, unknown>) {
    if (value == null)
        return false
    if (typeof value != "object")
        return false

    const members = EnumConstants.ENUMERABLE_WITH_PARENT_MEMBERS
    const size = members.length
    let index = -1
    while (++index < size)
        if (!(members[index]! in value))
            return false
    return true
}
