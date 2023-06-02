import type {ExceptionWithValue} from "enumerable/exception/declaration/ExceptionWithValue"
import {NullPointerException}    from "./generic/NullPointerException"

/** The {@link value reference to retrieve} was not expected to be <b>null</b> */
export class NullReferenceException<const T, const ERROR extends Error = never, >
    extends NullPointerException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The value that had a <b>null</b> reference or could not be found by something */
    public get value(): T {
        return this.#value
    }

}
