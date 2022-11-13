import {Enum} from "../src/util/enumerable/Enum"

export class EnumWithEverything
    extends Enum {

    static A = new EnumWithEverything()
    static B = new EnumWithEverything()
    static C = new EnumWithEverything()

    static _DEFAULT = this.A // This is optional if the setDefault() is called before the getDefault()

    get _static() {
        return EnumWithEverything
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

    static get names() {
        return Enum.getNamesOn(this,)
    }

    static get ordinals() {
        return Enum.getOrdinalsOn(this,)
    }

    static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
