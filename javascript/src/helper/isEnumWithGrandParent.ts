/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumerableWithParent} from "../EnumerableWithParent"

import {EnumWithGrandParent} from "../EnumWithGrandParent"

/**
 * Tell if the value received is a {@link EnumWithGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithGrandParent(value: unknown,): value is EnumWithGrandParent<number, string, EnumerableWithParent> {
    return value instanceof EnumWithGrandParent
}
