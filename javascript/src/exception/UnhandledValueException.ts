/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr} from "@joookiwi/type"

import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * An {@link Error exception} made to tell that the type received by
 * {@link CompanionEnumDeclaration.getValue getValue}, {@link CompanionEnumDeclaration.getName getName}
 * and {@link CompanionEnumDeclaration.getOrdinal getOrdinal}
 * that the value received was not a {@link String}, {@link Number}, {@link BigInt} or {@link Enumerable}
 *
 * @see https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/ClassCastException.html Java ClassCastException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-class-cast-exception Kotlin ClassCastException
 * @see https://learn.microsoft.com/dotnet/api/system.invalidcastexception C# InvalidCastException
 * @uniqueToJavascript
 */
export class UnhandledValueException<const T extends NonNullable<unknown>,
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

    /** The value that was in an invalid type */
    public get value(): T {
        return this.#value
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
