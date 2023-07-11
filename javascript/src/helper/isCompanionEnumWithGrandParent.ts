/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "../Enumerable"
import type {EnumerableConstructor}             from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent} from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}      from "../EnumerableWithNullableParent"

import {CompanionEnumWithGrandParent} from "../companion/CompanionEnumWithGrandParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithGrandParent}
 *
 * @param value The value to compare
 */
export function isCompanionEnumWithGrandParent(value: unknown,): value is CompanionEnumWithGrandParent<EnumerableWithNullableGrandParent, EnumerableConstructor<EnumerableWithNullableGrandParent, any>, EnumerableWithNullableParent, EnumerableConstructor<EnumerableWithNullableParent, any>, Enumerable, EnumerableConstructor<Enumerable, any>> {
    return value instanceof CompanionEnumWithGrandParent
}
