/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * The {@link value value received} was expected to be in a specific structure or an instance
 *
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/ClassCastException.html Java ClassCastException
 * @see https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-class-cast-exception Kotlin ClassCastException
 * @see https://learn.microsoft.com/dotnet/api/system.invalidcastexception C# InvalidCastException
 */
export class InvalidInstanceException<const T,
    const CAUSE extends Error = never, >
    extends TypeError
    implements ExceptionWithValue<T>,
               ExceptionWithNullableCause<CAUSE> {

    public override readonly name = this.constructor.name
    readonly #value
    readonly #cause

    public constructor(message: string, value: T, cause?: Nullable<CAUSE>,) {
        super(message,)
        this.#value = value
        this.#cause = cause ?? null
    }

    /** The value that was an invalid instance */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
