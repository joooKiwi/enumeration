import {Enum} from "../src/util/enumerable/Enum"

export class EnumWithDefault
    extends Enum {

    static A = new EnumWithDefault()
    static B = new EnumWithDefault()
    static C = new EnumWithDefault()

    static _DEFAULT = this.A // This is optional if the setDefault() is called before the getDefault()

    get _static() {
        return EnumWithDefault
    }

    static get default() {
        return Enum.getDefaultOn(this,)
    }

    static set default(value,) {
        this.setDefault(value,)
    }

    static setDefault(value,) {
        return Enum.setDefaultOn(this, value,)
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
