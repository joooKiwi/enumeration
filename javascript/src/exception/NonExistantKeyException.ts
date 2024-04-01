/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * The property (or reference) by a {@link key} was not existant on the {@link value value received}
 *
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NoSuchElementException.html Java NoSuchElementException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/ Kotlin NoSuchElementException
 * @see https://learn.microsoft.com/dotnet/api/system.missingmemberexception C# MissingMemberException
 */
export class NonExistantKeyException<const out K extends string,
    const out T,
    const out CAUSE extends Error = never, >
    extends TypeError
    implements ExceptionWithValue<T>,
               ExceptionWithNullableCause<CAUSE> {

    public override readonly name = this.constructor.name
    readonly #key
    readonly #value
    readonly #cause

    public constructor(message: string, key: K, value: T, cause?: Nullable<CAUSE>,) {
        super(message,)
        this.#key = key
        this.#value = value
        this.#cause = cause ?? null
    }


    /** The key that was not found */
    public get key(): K {
        return this.#key
    }

    /** The value that did not have the {@link key} */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
