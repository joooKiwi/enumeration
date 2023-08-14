/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {EnumWithNullableGrandParentGeneralType} from "../Enumerable.types"

import {EnumWithNullableGrandParent} from "../EnumWithNullableGrandParent"

/**
 * Tell if the value received is a {@link EnumWithNullableGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithNullableGrandParent(value: unknown,): value is EnumWithNullableGrandParentGeneralType {
    return value instanceof EnumWithNullableGrandParent
}
