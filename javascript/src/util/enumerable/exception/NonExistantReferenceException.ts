import type {PossibleStringOrNumeric} from "../../../type"
import type {Enumerable}              from "enumerable/Enumerable"

export class NonExistantReferenceException<T extends PossibleStringOrNumeric | Enumerable = PossibleStringOrNumeric | Enumerable, >
    extends ReferenceError {

    readonly #value

    public constructor(message: string, value: T,) {
        super(message,)
        this.#value = value
    }

    public get value(): T {
        return this.#value
    }

}
