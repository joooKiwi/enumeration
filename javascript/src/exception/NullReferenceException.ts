//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Nullable, NullOr} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * The {@link value reference to retrieve} was not expected to be <b>null</b>
 *
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/NullPointerException.html Java NullPointerException
 * @see https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-null-pointer-exception Kotlin NullPointerException
 * @see https://learn.microsoft.com/dotnet/api/system.nullreferenceexception C# NullReferenceException
 */
export class NullReferenceException<const T,
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

    /** The value that had a <b>null</b> reference or could not be found by something */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
