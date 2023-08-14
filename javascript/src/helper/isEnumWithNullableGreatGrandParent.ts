/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {EnumWithNullableGreatGrandParentGeneralType} from "../Enumerable.types"

import {EnumWithNullableGreatGrandParent} from "../EnumWithNullableGreatGrandParent"

/**
 * Tell if the value received is a {@link EnumWithNullableGreatGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithNullableGreatGrandParent(value: unknown,): value is EnumWithNullableGreatGrandParentGeneralType {
    return value instanceof EnumWithNullableGreatGrandParent
}
