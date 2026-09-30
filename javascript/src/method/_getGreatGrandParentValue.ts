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

import type {Enumerable}                           from "../Enumerable"
import type {EnumerableWithGreatGrandParent}       from "../EnumerableWithGreatGrandParent"
import type {EnumerableWithGrandParent}            from "../EnumerableWithGrandParent"
import type {EnumerableWithParent}                 from "../EnumerableWithParent"
import type {CompanionEnumDeclaration}             from "../companion/CompanionEnum.declaration"
import type {PossibleEnumerableValueOrNameByValue} from "../type/possibleInstance"

import {EnumConstants}                     from "../EnumConstants"
import {CompanionEnum}                     from "../companion/CompanionEnum"
import {NullReferenceException}            from "../exception/NullReferenceException"
import {_getGreatGrandParentValueFromName} from "./_getGreatGrandParentValueFromName"

/**
 * Get a {@link NonNullable non-nullable} value.
 *
 * If the {@link value value received} is `null` or `undefined`,
 * a {@link NullReferenceException} is thrown.
 *
 * If the {@link value value received} is a {@link String} (primitive or object),
 * it retrieves the value via {@link CompanionEnumDeclaration.getValue} method.
 *
 * If the {@link value value received} is a {@link Enumerable},
 * it assumes that the value is correct.
 *
 * @param instance The instance to retrieve its {@link CompanionEnum} and use its {@link CompanionEnumDeclaration.getValue} method
 * @param value    The value to retrieve
 * @throws NullReferenceException   The value is `null`|`undefined`
 * @throws NullReferenceException   The value refer to a {@link EnumConstants.NULL_ENUM_REFERENCE_SYMBOL}
 * @throws InvalidInstanceException The companion enum path was not compatible or possible while retrieving the instance
 *
 * @internal
 * @todo: update the documentation to better-fit the method
 * @todo Move to be used publicly
 * @throwsOnNullSymbol
 */
export function _getGreatGrandParentValue<const INSTANCE extends Enumerable, >(instance: EnumerableWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<INSTANCE>, INSTANCE>, EnumerableWithParent<INSTANCE>, INSTANCE>, value: PossibleEnumerableValueOrNameByValue<INSTANCE>,): INSTANCE {
    if (value == null)
        throw new NullReferenceException(`The value received on the “${instance.constructor.name}” cannot be null on an Enumerable with non-null value.`, value,)
    if (typeof value == "string")
        return _getGreatGrandParentValueFromName(instance, value,)

    if (value === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
        return _getGreatGrandParentValueFromName(instance, instance.name,)
    if (value === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
        throw new NullReferenceException(`The value received on the “${instance.constructor.name}” cannot be null on an Enumerable with non-null value.`, value,)

    if (value instanceof String)
        return _getGreatGrandParentValueFromName(instance, value.valueOf(),)
    return value
}
