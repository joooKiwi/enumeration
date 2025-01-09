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

import type {Enumerable}                              from "../Enumerable"
import type {EnumerableWithNullableParentGeneralType} from "../Enumerable.types"
import type {CompanionEnumWithParentType}             from "../companion/types"

import {CompanionEnumWithParent} from "../companion/CompanionEnumWithParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithParent}
 *
 * @param value The value to compare
 * @see isCompanionEnumWithParentByStructure
 */
export function isCompanionEnumWithParent(value: unknown,): value is CompanionEnumWithParentType<EnumerableWithNullableParentGeneralType, Enumerable> {
    return value instanceof CompanionEnumWithParent
}
