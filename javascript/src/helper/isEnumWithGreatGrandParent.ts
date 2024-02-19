/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {EnumWithGreatGrandParentGeneralType} from "../Enumerable.types"

import {EnumWithGreatGrandParent} from "../EnumWithGreatGrandParent"

/**
 * Tell if the value received is a {@link EnumWithGreatGrandParent}
 *
 * @param value The value to compare
 */
export function isEnumWithGreatGrandParent(value: unknown,): value is EnumWithGreatGrandParentGeneralType {
    return value instanceof EnumWithGreatGrandParent
}
