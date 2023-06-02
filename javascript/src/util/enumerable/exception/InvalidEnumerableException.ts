import type {Enumerable}            from "enumerable/Enumerable"
import type {EnumerableConstructor} from "enumerable/EnumerableConstructor"
import type {ExceptionWithValue}    from "enumerable/exception/declaration/ExceptionWithValue"
import {ClassCastException}         from "./generic/ClassCastException"

/**
 * An exception to tell that the {@link value value received} was not one of
 * the {@link expectedEnumerableConstructors enumerable instances (constructors) expected}
 */
export class InvalidEnumerableException<const ENUMERABLE extends Enumerable,
    const EXPECTED_ENUMERABLE_CONSTRUCTORS extends readonly EnumerableConstructor<any, any>[],
    const ERROR extends Error = never, >
    extends ClassCastException<ERROR>
    implements ExceptionWithValue<ENUMERABLE> {

    readonly #value
    readonly #expectedEnumerableConstructors

    public constructor(message: string, value: ENUMERABLE, expectedEnumerableConstructors: EXPECTED_ENUMERABLE_CONSTRUCTORS, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
        this.#expectedEnumerableConstructors = expectedEnumerableConstructors
    }

    /** The {@link Enumerable} value that was invalid */
    public get value(): ENUMERABLE {
        return this.#value
    }

    /** The expected {@link EnumerableConstructor enumerable constructors} that was assumed to be one of them */
    public get expectedEnumerableConstructors(): EXPECTED_ENUMERABLE_CONSTRUCTORS {
        return this.#expectedEnumerableConstructors
    }

}
