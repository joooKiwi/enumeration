/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}        from "../Enumerable"
import type {CompanionEnumType} from "../companion/types"

import {CompanionEnum} from "../companion/CompanionEnum"

/**
 * Tell if the value received is a {@link CompanionEnum}
 *
 * @param value The value to compare
 */
export function isCompanionEnum(value: unknown,): value is CompanionEnumType<Enumerable> {
    return value instanceof CompanionEnum
}
