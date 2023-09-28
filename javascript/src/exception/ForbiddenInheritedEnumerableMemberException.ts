/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr, PossibleString} from "../general type"
import type {ExceptionWithNullableCause}       from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}               from "./declaration/ExceptionWithValue"

/**
 * An exception to tell that an {@link EnumConstants.EVERY_ENUMERABLE_MEMBERS enumerable member} was used
 *
 * @see EnumConstants.EVERY_ENUMERABLE_MEMBERS
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IllegalArgumentException.html Java IllegalArgumentException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-argument-exception Kotlin IllegalArgumentException
 * @see https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception C# ArgumentOutOfRangeException
 */
export class ForbiddenInheritedEnumerableMemberException<const out T extends PossibleString,
    const out CAUSE extends Error = never, >
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