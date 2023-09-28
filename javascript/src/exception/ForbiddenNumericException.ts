/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr, PossibleStringOrNumeric} from "../general type"
import type {ExceptionWithNullableCause}                from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}                        from "./declaration/ExceptionWithValue"

/**
 * An exception to tell that an edge case numeric ({@link Number} or {@link BigInt})
 * or a name ({@link EnumConstants.EDGE_CASE_NUMERIC_NAME ±∞ / NaN}) was used
 *
 * @see EnumConstants.EDGE_CASE_NUMERIC_NAMES
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IllegalArgumentException.html Java IllegalArgumentException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-argument-exception Kotlin IllegalArgumentException
 * @see https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception C# ArgumentOutOfRangeException
 */
export class ForbiddenNumericException<const T extends PossibleStringOrNumeric, const ERROR extends Error = never, >
    extends ReferenceError
    implements ExceptionWithValue<T>,
               ExceptionWithNullableCause<ERROR> {

    public override readonly name = this.constructor.name
    readonly #value
    readonly #cause

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message,)
        this.#value = value
        this.#cause = cause ?? null
    }

    /**
     * The forbidden numeric value (as a {@link String}, {@link Number} or {@link BigInt})
     * that was {@link EnumConstants.EDGE_CASE_NUMERIC_NAME ±∞ or NaN}
     */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<ERROR> {
        return this.#cause
    }

}
