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

import type {Enumerable}                                                                                                                               from "../Enumerable"
import type {CompanionEnumerableWithGreatGrandParentType}                                                                                              from "../type/companion"
import type {KeyOfCompanionEnumWithGreatGrandParent}                                                                                                   from "../type/keyOf"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../type/general"

/**
 * Tell if the value received has the structure of a {@link CompanionEnumerableWithGreatGrandParent}
 *
 * @param value The value to compare
 * @see isCompanionEnumWithGreatGrandParent
 * @see EnumConstants.COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS
 * @doesNotValidateTheTypes
 */
export function isCompanionEnumWithGreatGrandParentByStructure(value: unknown,): value is (& object & Record<KeyOfCompanionEnumWithGreatGrandParent, unknown>)
/**
 * Tell if the value received has the structure of a {@link CompanionEnumerableWithGreatGrandParent}
 *
 * @param value The value to compare
 * @see isCompanionEnumWithGreatGrandParent
 * @see EnumConstants.COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS
 * @doesNotValidateTheTypes
 * @note Giving a type to the method is only here to help the implementation, but it will not change the behaviour in JavaScript
 */
export function isCompanionEnumWithGreatGrandParentByStructure<const INSTANCE extends CompanionEnumerableWithGreatGrandParentType<EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType, Enumerable>, >(value: unknown,): value is INSTANCE
export function isCompanionEnumWithGreatGrandParentByStructure(value: unknown,) {
    if (value == null)
        return false
    if (typeof value != "object")
        return false
    if ("instance" in value)
    if ("parentInstance" in value)
    if ("grandParentInstance" in value)
    if ("greatGrandParentInstance" in value)
    if ("defaultValue" in value)
    if ("setDefaultValue" in value)
    if ("values" in value)
    if ("names" in value)
    if ("ordinals" in value)
    if ("iterator" in value)
    if ("getValue" in value)
    if ("getName" in value)
    if ("getOrdinal" in value)
    if (Symbol.iterator in value)
    if (Symbol.toStringTag in value)
        return true
    return false
}
