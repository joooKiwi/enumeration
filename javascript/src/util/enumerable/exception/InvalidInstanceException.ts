export class InvalidInstanceException<T, >
    extends TypeError {

    readonly #invalidInstance

    public constructor(message:string,invalidInstance: T,) {
        super(message,)
        this.#invalidInstance = invalidInstance
    }

    public get invalidInstance(): T {
        return this.#invalidInstance
    }

}
