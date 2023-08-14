/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumWithParentGeneralType} from "../Enumerable.types"

import {EnumWithParent} from "../EnumWithParent"

/**
 * Tell if the value received is a {@link EnumWithParent}
 *
 * @param value The value to compare
 */
export function isEnumWithParent(value: unknown,): value is EnumWithParentGeneralType {
    return value instanceof EnumWithParent
}
