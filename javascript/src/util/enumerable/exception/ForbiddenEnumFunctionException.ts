import type {PossibleString} from "../../../type"

export class ForbiddenEnumFunctionException<T extends PossibleString, >
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
