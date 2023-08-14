/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable}           from "../general type"
import type {ExceptionWithValue} from "./declaration/ExceptionWithValue"

import {ClassCastException} from "./generic/ClassCastException"

/** The {@link value value received} was expected to be in a specific structure or an instance */
export class InvalidInstanceException<const T, const ERROR extends Error = never, >
    extends ClassCastException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The value that was an invalid instance */
    public get value(): T {
        return this.#value
    }

}
