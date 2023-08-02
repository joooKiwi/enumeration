/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, PossibleStringOrNumeric} from "../general type"
import type {ExceptionWithValue}                from "./declaration/ExceptionWithValue"

import {IllegalArgumentException} from "./generic/IllegalArgumentException"

/**
 * An exception to tell that an edge case numeric ({@link Number} or {@link BigInt})
 * or a name ({@link EnumConstants.EDGE_CASE_NUMERIC_NAME ±∞ / NaN}) was used
 *
 * @see EnumConstants.EDGE_CASE_NUMERIC_NAME
 */
export class ForbiddenNumericException<const T extends PossibleStringOrNumeric, const ERROR extends Error = never, >
    extends IllegalArgumentException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /**
     * The forbidden numeric value (as a {@link String}, {@link Number} or {@link BigInt})
     * that was {@link EnumConstants.EDGE_CASE_NUMERIC_NAME ±∞ or NaN}
     */
    public get value(): T {
        return this.#value
    }

}
