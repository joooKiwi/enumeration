import type {Enumerable}            from "enumerable/Enumerable"
import type {EnumerableConstructor} from "enumerable/EnumerableConstructor.type"

export class InvalidEnumerableException<EXPECTED_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor, INVALID_ENUMERABLE extends Enumerable, >
    extends TypeError {

    readonly #expectedEnumerableConstructor
    readonly #invalidEnumerable

    public constructor(message: string, expectedEnumerableConstructor: EXPECTED_ENUMERABLE_CONSTRUCTOR, invalidEnumerable: INVALID_ENUMERABLE,) {
        super(message,)
        this.#expectedEnumerableConstructor = expectedEnumerableConstructor
        this.#invalidEnumerable = invalidEnumerable
    }

    public get expectedEnumerableConstructor(): EXPECTED_ENUMERABLE_CONSTRUCTOR {
        return this.#expectedEnumerableConstructor
    }

    public get invalidEnumerable(): INVALID_ENUMERABLE {
        return this.#invalidEnumerable
    }

}
