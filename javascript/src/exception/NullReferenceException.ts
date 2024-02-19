/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr}           from "../general type"
import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * The {@link value reference to retrieve} was not expected to be <b>null</b>
 *
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/NullPointerException.html Java NullPointerException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-null-pointer-exception Kotlin NullPointerException
 * @see https://learn.microsoft.com/dotnet/api/system.nullreferenceexception C# NullReferenceException
 */
export class NullReferenceException<const out T,
    const out CAUSE extends Error = never, >
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

    /** The value that had a <b>null</b> reference or could not be found by something */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
