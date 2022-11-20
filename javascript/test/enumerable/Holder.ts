export class Holder<T, MESSAGE extends string, > {

    readonly value
    readonly toString

    public constructor(value: T, message: MESSAGE,) {
        this.value = value
        this.toString = () => message
    }

}
