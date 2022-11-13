import {Enum} from "../src/util/enumerable/Enum"

export class EnumWithExcluded
    extends Enum {

    static A = new EnumWithExcluded()
    static B = new EnumWithExcluded()
    static C = new EnumWithExcluded()

    static _EXCLUDED_NAMES = ["D",]

    static D = this.A

    get _static() {
        return EnumWithExcluded
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
