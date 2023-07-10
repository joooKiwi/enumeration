/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {Enum} from "../Enum"

/**
 * Tell if the value received is an instance of {@link Enum}
 *
 * @param value The value to compare
 */
export function isEnum(value: unknown,): value is Enum<number, string> {
    return value instanceof Enum
}
