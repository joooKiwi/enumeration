/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {EnumWithNullableParentGeneralType} from "../Enumerable.types"

import {EnumWithNullableParent} from "../EnumWithNullableParent"

/**
 * Tell if the value received is a {@link EnumWithNullableParent}
 *
 * @param value The value to compare
 */
export function isEnumWithNullableParent(value: unknown,): value is EnumWithNullableParentGeneralType {
    return value instanceof EnumWithNullableParent
}
