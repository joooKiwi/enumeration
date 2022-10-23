import type {PossibleStringOrNumeric} from "../../../type"
import type {Enumerable}              from "enumerable/Enumerable"

export class InvalidEnumerableReferenceException<T extends | PossibleStringOrNumeric | Enumerable = | PossibleStringOrNumeric | Enumerable, >
    extends TypeError {

    readonly #value

    public constructor(message: string, value: T,) {
        super(message,)
        this.#value = value
    }

    public get value(): T {
        return this.#value
    }

}
