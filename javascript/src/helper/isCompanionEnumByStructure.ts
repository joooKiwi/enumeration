/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CompanionEnumDeclaration} from "../companion/CompanionEnum.declaration"

/**
 * Tell if the value received has the structure of a {@link CompanionEnumDeclaration}
 * without verifying its typing on the field directly
 *
 * @param value The value to compare
 */
export function isCompanionEnumByStructure(value: unknown,): value is (& object & Record<keyof CompanionEnumDeclaration<never, never>, unknown>) {
    return value != null && typeof value == "object"
        && "instance" in value
        && "default" in value
        && "values" in value && "names" in value && "ordinals" in value && "iterator" in value
        && "getValue" in value && "getName" in value && "getOrdinal" in value && Symbol.iterator in value
}
