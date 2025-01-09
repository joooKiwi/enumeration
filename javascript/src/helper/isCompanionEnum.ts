//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Enumerable}        from "../Enumerable"
import type {CompanionEnumType} from "../companion/types"

import {CompanionEnum} from "../companion/CompanionEnum"

/**
 * Tell if the value received is a {@link CompanionEnum}
 *
 * @param value The value to compare
 * @see isCompanionEnumByStructure
 */
export function isCompanionEnum(value: unknown,): value is CompanionEnumType<Enumerable> {
    return value instanceof CompanionEnum
}
