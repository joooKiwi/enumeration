//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {NullOr} from "@joookiwi/type"

import type {Enumerable}                           from "../Enumerable"
import type {EnumerableWithNullableGrandParent}    from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}         from "../EnumerableWithNullableParent"
import type {PossibleEnumerableValueOrNameByValue} from "../type/possibleInstance"

import {EnumConstants}                from "../EnumConstants"
import {_getGrandParentValueFromName} from "./_getGrandParentValueFromName"

/**
 * Get a {@link Nullable nullable} value.
 *
 * If the {@link value value received} is `null` or `undefined`,
 * it send `null`.
 *
 * If the {@link value value received} is a {@link String} (primitive or object),
 * it retrieves the value via {@link CompanionEnumerableWithGrandParent.getValue} method.
 *
 * If the {@link value value received} is a {@link Enumerable},
 * it assumes that the value is correct.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithGrandParent} and use its {@link CompanionEnumerableWithGrandParent.getValue} method
 * @param value    The value to retrieve
 * @throws NullReferenceException   The value is `null`|`undefined`
 * @throws NullReferenceException   The value refer to a {@link EnumConstants.NULL_ENUM_REFERENCE_SYMBOL}
 * @throws InvalidInstanceException The companion enum path was not compatible or possible while retrieving the instance
 *
 * @internal
 * @todo: update the documentation to better-fit the method
 * @todo Move to be used publicly
 */
export function _getNullableGrandParentValue<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, value: PossibleEnumerableValueOrNameByValue<INSTANCE>,): NullOr<INSTANCE> {
    if (value == null)
        return null
    if (typeof value == "string")
        return _getGrandParentValueFromName(instance, value,)

    if (value === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
        return null
    if (value === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
        return _getGrandParentValueFromName(instance, instance.name,)

    if (value instanceof String)
        return _getGrandParentValueFromName(instance, value.valueOf(),)
    return value
}
