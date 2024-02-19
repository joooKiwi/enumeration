/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                              from "../Enumerable"
import type {EnumerableWithNullableParentGeneralType} from "../Enumerable.types"
import type {CompanionEnumWithParentType}             from "../companion/types"

import {CompanionEnumWithParent} from "../companion/CompanionEnumWithParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithParent}
 *
 * @param value The value to compare
 */
export function isCompanionEnumWithParent(value: unknown,): value is CompanionEnumWithParentType<EnumerableWithNullableParentGeneralType, Enumerable> {
    return value instanceof CompanionEnumWithParent
}
