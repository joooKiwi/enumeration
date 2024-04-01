/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"

/**
 * An {@link Enumerable} was expected to not be <b>null</b>
 *
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/NullPointerException.html Java NullPointerException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-null-pointer-exception Kotlin NullPointerException
 * @see https://learn.microsoft.com/dotnet/api/system.nullreferenceexception C# NullReferenceException
 */
export class NullEnumerableException<const out CAUSE extends Error = never, >
    extends TypeError
    implements ExceptionWithNullableCause<CAUSE> {

    public override readonly name = this.constructor.name
    readonly #cause

    public constructor(message: string, cause?: Nullable<CAUSE>,) {
        super(message,)
        this.#cause = cause ?? null
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
