/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                             from "../Enumerable"
import type {EnumerableConstructor}                  from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}      from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}           from "../EnumerableWithNullableParent"

import {CompanionEnumWithGreatGrandParent} from "../companion/CompanionEnumWithGreatGrandParent"

/**
 * Tell if the value received is a {@link CompanionEnumWithGreatGrandParent}
 *
 * @param value The value to compare
 */
export function isCompanionEnumWithGreatGrandParent(value: unknown,): value is CompanionEnumWithGreatGrandParent<EnumerableWithNullableGreatGrandParent, EnumerableConstructor<EnumerableWithNullableGreatGrandParent, any>, EnumerableWithNullableGrandParent, EnumerableConstructor<EnumerableWithNullableGrandParent, any>, EnumerableWithNullableParent, EnumerableConstructor<EnumerableWithNullableParent, any>, Enumerable, EnumerableConstructor<Enumerable, any>> {
    return value instanceof CompanionEnumWithGreatGrandParent
}
