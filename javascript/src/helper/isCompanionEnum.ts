/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}            from "../Enumerable"
import type {EnumerableConstructor} from "../EnumerableConstructor"

import {CompanionEnum} from "../companion/CompanionEnum"

/**
 * Tell if the value received is an instance of {@link CompanionEnum}
 *
 * @param value The value to compare
 */
export function isCompanionEnum(value: unknown,): value is CompanionEnum<Enumerable, EnumerableConstructor<Enumerable, any>> {
    return value instanceof CompanionEnum
}
