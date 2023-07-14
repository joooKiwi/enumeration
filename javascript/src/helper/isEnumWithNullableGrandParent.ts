/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumerableWithNullableParent} from "../EnumerableWithNullableParent"

import {EnumWithNullableGrandParent} from "../EnumWithNullableGrandParent"

/**
 * Tell if the value received is a {@link EnumWithNullableGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithNullableGrandParent(value: unknown,): value is EnumWithNullableGrandParent<number, string, EnumerableWithNullableParent> {
    return value instanceof EnumWithNullableGrandParent
}
