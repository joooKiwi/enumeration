/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumerableWithNullableGrandParent} from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}      from "../EnumerableWithNullableParent"

import {EnumWithNullableGreatGrandParent} from "../EnumWithNullableGreatGrandParent"

/**
 * Tell if the value received is a {@link EnumWithNullableGreatGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithNullableGreatGrandParent(value: unknown,): value is EnumWithNullableGreatGrandParent<number, string, EnumerableWithNullableGrandParent, EnumerableWithNullableParent> {
    return value instanceof EnumWithNullableGreatGrandParent
}
