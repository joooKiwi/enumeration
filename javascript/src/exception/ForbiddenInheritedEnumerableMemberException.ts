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

import {Nullable, NullOr, StringOrObject} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * An exception to tell that an {@link EnumConstants.EVERY_ENUMERABLE_MEMBERS enumerable member} was used
 *
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/IllegalArgumentException.html Java IllegalArgumentException
 * @see https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-illegal-argument-exception Kotlin IllegalArgumentException
 * @see https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception C# ArgumentOutOfRangeException
 */
export class ForbiddenInheritedEnumerableMemberException<const T extends StringOrObject,
    const CAUSE extends Error = never, >
    extends ReferenceError
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

    /** The invalid {@link String} value that was not an {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS inherited Enumerable member} */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
