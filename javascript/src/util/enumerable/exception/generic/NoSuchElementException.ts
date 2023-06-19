/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, NullOr}           from "../../../../general type"
import type {ExceptionWithNullableCause} from "../declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to tell that a field, method is not present in the chain of operation or via reflection
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/NoSuchElementException.html Java NoSuchElementException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/ Kotlin NoSuchElementException
 * @see https://learn.microsoft.com/dotnet/api/system.missingmemberexception C# MissingMemberException
 */
export class NoSuchElementException<const ERROR extends Error = never, >
    extends TypeError
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
