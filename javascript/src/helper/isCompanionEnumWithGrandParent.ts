/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                                                                            from "../Enumerable"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../Enumerable.types"
import type {CompanionEnumWithGrandParentType}                                                      from "../companion/types"

import {CompanionEnumWithGrandParent} from "../companion/CompanionEnumWithGrandParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithGrandParent}
 *
 * @param value The value to compare
 */
export function isCompanionEnumWithGrandParent(value: unknown,): value is CompanionEnumWithGrandParentType<EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType, Enumerable> {
    return value instanceof CompanionEnumWithGrandParent
}
