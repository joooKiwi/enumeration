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

import type {Enumerable}                                                                                                                               from "../Enumerable"
import type {CompanionEnumWithGreatGrandParentType}                                                                                                    from "../companion/types"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../Enumerable.types"

import {CompanionEnumWithGreatGrandParent} from "../companion/CompanionEnumWithGreatGrandParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithGreatGrandParent}
 *
 * @param value The value to compare
 * @see isCompanionEnumWithGreatGrandParentByStructure
 */
export function isCompanionEnumWithGreatGrandParent(value: unknown,): value is CompanionEnumWithGreatGrandParentType<EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType, Enumerable> {
    return value instanceof CompanionEnumWithGreatGrandParent
}
