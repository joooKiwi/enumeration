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

/**
 * A hint was received as <b>null</b> value
 *
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/NullPointerException.html Java NullPointerException
 * @see https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-null-pointer-exception Kotlin NullPointerException
 * @see https://learn.microsoft.com/dotnet/api/system.nullreferenceexception C# NullReferenceException
 */
export class NullHintException<const CAUSE extends Error = never, >
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
