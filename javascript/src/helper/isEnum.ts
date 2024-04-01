/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {Enum} from "../Enum"

/**
 * Tell if the value received is a {@link Enum}
 *
 * @param value The value to compare
 * @see isEnumByStructure
 */
export function isEnum(value: unknown,): value is Enum {
    return value instanceof Enum
}
