/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable}           from "../general type"
import type {ExceptionWithValue} from "./declaration/ExceptionWithValue"

import {NullPointerException} from "./generic/NullPointerException"

/** The {@link value reference to retrieve} was not expected to be <b>null</b> */
export class NullReferenceException<const T, const ERROR extends Error = never, >
    extends NullPointerException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The value that had a <b>null</b> reference or could not be found by something */
    public get value(): T {
        return this.#value
    }

}