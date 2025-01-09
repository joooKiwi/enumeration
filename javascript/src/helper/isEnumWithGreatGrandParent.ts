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

import type {EnumWithGreatGrandParentGeneralType} from "../Enumerable.types"

import {EnumWithGreatGrandParent} from "../EnumWithGreatGrandParent"

/**
 * Tell if the value received is a {@link EnumWithGreatGrandParent}
 *
 * @param value The value to compare
 * @see isEnumWithGreatGrandParentByStructure
 */
export function isEnumWithGreatGrandParent(value: unknown,): value is EnumWithGreatGrandParentGeneralType {
    return value instanceof EnumWithGreatGrandParent
}
