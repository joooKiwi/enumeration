/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {Nullable, PossibleString} from "../general type"
import {ExceptionWithValue}       from "./declaration/ExceptionWithValue"

import {IllegalArgumentException} from "./generic/IllegalArgumentException"


/**
 * An exception to tell that an {@link CompanionEnum._EXCLUDED_NAMES excluded name}
 * was provided in a {@link CompanionEnum}
 *
 * @see CompanionEnum._excludedNames
 */
export class ForbiddenNameException<const T extends PossibleString, const ERROR extends Error = never, >
    extends IllegalArgumentException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The invalid {@link String} value that was not an {@link CompanionEnum._EXCLUDED_NAMES excluded names (in the companion enum)} */
    public get value(): T {
        return this.#value
    }

}
