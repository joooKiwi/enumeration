/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable} from "../Enumerable"

/**
 * Tell if the value received has the structure of a {@link Enumerable}
 * without verifying its typing on the fields directly
 *
 * @param value The value to compare
 */
export function isEnumByStructure(value: unknown,): value is (& object & Record<keyof Enumerable, unknown>) {
    return value != null && typeof value == "object"
        && "name" in value && "ordinal" in value
        && Symbol.toPrimitive in value && Symbol.toStringTag in value
}
