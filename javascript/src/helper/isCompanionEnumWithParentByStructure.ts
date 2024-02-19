/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CompanionEnumWithParentDeclaration} from "../companion/CompanionEnumWithParent.declaration"

import {EnumConstants} from "../EnumConstants"

/**
 * Tell if the value received has the structure of a {@link CompanionEnumWithParentDeclaration}
 *
 * @param value The value to compare
 *
 * @doesNotValidateTheTypes
 */
export function isCompanionEnumWithParentByStructure(value: unknown,): value is (& object & Record<keyof CompanionEnumWithParentDeclaration<never, never, never, never>, unknown>) {
    if (value == null || typeof value != "object")
        return false

    const members = EnumConstants.COMPANION_ENUM_WITH_PARENT_MEMBERS
    const size = members.length
    let index = -1
    while (++index < size)
        if (!(members[index]! in value))
            return false
    return true
}
