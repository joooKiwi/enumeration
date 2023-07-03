/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, NullOr}           from "../../general type"
import type {ExceptionWithNullableCause} from "../declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to be outside a limit
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/IndexOutOfBoundsException.html Java IndexOutOfBoundsException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-index-out-of-bounds-exception Kotlin IndexOutOfBoundsException
 * @see https://learn.microsoft.com/dotnet/api/system.indexoutofrangeexception C# IndexOutOfRangeException
 */
export class IndexOutOfBoundsException<const ERROR extends Error = never, >
    extends RangeError
    implements ExceptionWithNullableCause<ERROR> {

    public override readonly name = this.constructor.name
    readonly #cause

    public constructor(message: string, cause?: Nullable<ERROR>,) {
        super(message,)
        this.#cause = cause ?? null
    }

    public override get cause(): NullOr<ERROR> {
        return this.#cause
    }

}
