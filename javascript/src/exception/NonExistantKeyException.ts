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
 * The property (or reference) by a {@link key} was not existant on the {@link value value received}
 *
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/NoSuchElementException.html Java NoSuchElementException
 * @see https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-no-such-element-exception/ Kotlin NoSuchElementException
 * @see https://learn.microsoft.com/dotnet/api/system.missingmemberexception C# MissingMemberException
 */
export class NonExistantKeyException<const K extends string,
    const T,
    const CAUSE extends Error = never, >
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
