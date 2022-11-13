import type {PossibleStringOrNumeric} from "../../../type"

export class ForbiddenNumericException<T extends PossibleStringOrNumeric, >
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
