import {Enum} from "../src/util/enumerable/Enum"
import {SimpleEnum} from "./Simple.js.js"

export class ExtendedEnum
    extends SimpleEnum {

    static A = new ExtendedEnum()
    static B = new ExtendedEnum()
    static C = new ExtendedEnum()

    static _PARENT = SimpleEnum

    get _static() {
        return ExtendedEnum
    }

    static getValue(value,) {
        return Enum.getValueOn(this, value,)
    }

    static get values() {
        return Enum.getValuesOn(this,)
    }

    static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
