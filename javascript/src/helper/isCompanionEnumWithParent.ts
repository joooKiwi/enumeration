/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                   from "../Enumerable"
import type {EnumerableConstructor}        from "../EnumerableConstructor"
import type {EnumerableWithNullableParent} from "../EnumerableWithNullableParent"

import {CompanionEnumWithParent} from "../companion/CompanionEnumWithParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithParent}
 *
 * @param value The value to compare
 */
export function isCompanionEnumWithParent(value: unknown,): value is CompanionEnumWithParent<EnumerableWithNullableParent, EnumerableConstructor<EnumerableWithNullableParent, any>, Enumerable, EnumerableConstructor<Enumerable, any>> {
    return value instanceof CompanionEnumWithParent
}