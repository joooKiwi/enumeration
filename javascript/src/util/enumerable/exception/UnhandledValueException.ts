export class UnhandledValueException<T, >
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
