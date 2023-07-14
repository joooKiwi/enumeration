/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumerableWithGrandParent} from "../EnumerableWithGrandParent"
import type {EnumerableWithParent}      from "../EnumerableWithParent"

import {EnumWithGreatGrandParent} from "../EnumWithGreatGrandParent"

/**
 * Tell if the value received is a {@link EnumWithGreatGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithGreatGrandParent(value: unknown,): value is EnumWithGreatGrandParent<number, string, EnumerableWithGrandParent, EnumerableWithParent> {
    return value instanceof EnumWithGreatGrandParent
}
