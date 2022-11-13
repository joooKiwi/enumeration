import type {PossibleStringOrNumeric} from "../../../type"

export class IndexOutOfBoundException<T extends PossibleStringOrNumeric, >
    extends RangeError {

    readonly #value

    public constructor(message: string, value: T,) {
        super(message,)
        this.#value = value
    }

    public get value(): T {
        return this.#value
    }

}
