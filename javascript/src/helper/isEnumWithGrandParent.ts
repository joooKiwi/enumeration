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

import type {EnumWithGrandParentGeneralType} from "../Enumerable.types"

import {EnumWithGrandParent} from "../EnumWithGrandParent"

/**
 * Tell if the value received is a {@link EnumWithGrandParent}
 *
 * @param value The value to compare
 * @see isEnumWithGrandParentByStructure
 */
export function isEnumWithGrandParent(value: unknown,): value is EnumWithGrandParentGeneralType {
    return value instanceof EnumWithGrandParent
}
