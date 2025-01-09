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

import type {EnumWithParentGeneralType} from "../Enumerable.types"

import {EnumWithParent} from "../EnumWithParent"

/**
 * Tell if the value received is a {@link EnumWithParent}
 *
 * @param value The value to compare
 * @see isEnumWithParentByStructure
 */
export function isEnumWithParent(value: unknown,): value is EnumWithParentGeneralType {
    return value instanceof EnumWithParent
}
