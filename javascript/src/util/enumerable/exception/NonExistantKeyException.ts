import type {ExceptionWithValue} from "./declaration/ExceptionWithValue"
import type {Nullable}           from "../../../general type"

import {NoSuchElementException} from "./generic/NoSuchElementException"

/** The property (or reference) by a {@link key} was not existant on the {@link value value received} */
export class NonExistantKeyException<const K extends string, const T, const ERROR extends Error = never, >
    extends NoSuchElementException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #key
    readonly #value

    public constructor(message: string, key: K, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#key = key
        this.#value = value
    }


    /** The key that was not found */
    public get key(): K {
        return this.#key
    }

    /** The value that did not have the {@link key} */
    public get value(): T {
        return this.#value
    }

}
