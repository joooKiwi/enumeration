import {Enum} from "../src/util/enumerable/Enum"

export class SimpleEnum
    extends Enum {

    static A = new SimpleEnum()
    static B = new SimpleEnum()
    static C = new SimpleEnum()

    get _static() {
        return SimpleEnum
    }

    static getValue(value,) {
        return Enum.getValueOn(this, value,)
    }

    static get values() {
        return Enum.getValuesOn(this,)
    }

    static* [Symbol.iterator]() {
        yield* this.values
    }

}
