/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, PossibleStringOrNumeric} from "../general type"
import type {ExceptionWithValue}                from "./declaration/ExceptionWithValue"

import {ClassCastException} from "./generic/ClassCastException"

/**
 * Tell that the value was not convertible to a {@link Enumerable.ordinal} by being a negative,
 *  over the {@link EnumConstants.MAX_VALUE_AS_NUMBER maximum number}
 *  or a floating {@link Number number} value
 */
export class ImpossibleOrdinalException<const T extends PossibleStringOrNumeric, const ERROR extends Error = never, >
    extends ClassCastException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /**
     * The value that was negative,
     * over the {@link Number.MAX_VALUE maximum number}
     * or a floating {@link Number number}
     */
    public get value(): T {
        return this.#value
    }

}
