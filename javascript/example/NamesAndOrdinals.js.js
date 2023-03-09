import {Enum} from "../src/util/enumerable/Enum"

export class EnumWithNamesAndOrdinals
    extends Enum {

    static A = new EnumWithNamesAndOrdinals()
    static B = new EnumWithNamesAndOrdinals()
    static C = new EnumWithNamesAndOrdinals()

    get _static() {
        return EnumWithNamesAndOrdinals
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

    static* [Symbol.iterator]() {
        yield* this.values
    }

}
