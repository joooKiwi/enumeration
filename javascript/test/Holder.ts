export class Holder<const T, const MESSAGE extends string, > {

    readonly value
    readonly toString

    public constructor(value: T, message: MESSAGE,) {
        this.value = value
        this.toString = () => message
    }

}
