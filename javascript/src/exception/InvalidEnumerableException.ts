/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr} from "@joookiwi/type"

import type {Enumerable}                 from "../Enumerable"
import type {EnumerableConstructor}      from "../EnumerableConstructor"
import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"
import type {ExceptionWithValue}         from "./declaration/ExceptionWithValue"

/**
 * An exception to tell that the {@link value value received} was not one of
 * the {@link expectedEnumerableConstructors enumerable instances (constructors) expected}
 *
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassCastException.html Java ClassCastException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-class-cast-exception Kotlin ClassCastException
 * @see https://learn.microsoft.com/dotnet/api/system.invalidcastexception C# InvalidCastException
 */
export class InvalidEnumerableException<const out ENUMERABLE extends Enumerable,
    const out EXPECTED_ENUMERABLE_CONSTRUCTORS extends readonly EnumerableConstructor<any, any>[],
    const out CAUSE extends Error = never, >
    extends TypeError
    implements ExceptionWithValue<ENUMERABLE>,
               ExceptionWithNullableCause<CAUSE> {

    public override readonly name = this.constructor.name
    readonly #value
    readonly #expectedEnumerableConstructors
    readonly #cause

    public constructor(message: string, value: ENUMERABLE, expectedEnumerableConstructors: EXPECTED_ENUMERABLE_CONSTRUCTORS, cause?: Nullable<CAUSE>,) {
        super(message,)
        this.#value = value
        this.#expectedEnumerableConstructors = expectedEnumerableConstructors
        this.#cause = cause ?? null
    }

    /** The {@link Enumerable} value that was invalid */
    public get value(): ENUMERABLE {
        return this.#value
    }

    /** The expected {@link EnumerableConstructor enumerable constructors} that were assumed to be one of them */
    public get expectedEnumerableConstructors(): EXPECTED_ENUMERABLE_CONSTRUCTORS {
        return this.#expectedEnumerableConstructors
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
