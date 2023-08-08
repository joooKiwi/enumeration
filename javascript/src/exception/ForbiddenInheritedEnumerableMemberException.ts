/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, PossibleString} from "../general type"
import type {ExceptionWithValue}       from "./declaration/ExceptionWithValue"

import {IllegalArgumentException} from "./generic/IllegalArgumentException"

/**
 * An exception to tell that an {@link EnumConstants.EVERY_ENUMERABLE_MEMBERS enumerable member} was used
 *
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
 */
export class ForbiddenInheritedEnumerableMemberException<const T extends PossibleString, const ERROR extends Error = never, >
    extends IllegalArgumentException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The invalid {@link String} value that was not an {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS inherited Enumerable member} */
    public get value(): T {
        return this.#value
    }

}