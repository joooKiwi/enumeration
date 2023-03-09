import {Enum} from "../src/util/enumerable/Enum"

export class EnumWithComportement
    extends Enum {

    static A = new class extends EnumWithComportement {

        aComportement() {
            console.log("Doing stuff from the class \"A\"")
        }

        aComportmentDifferentInEachInstance() {
            console.log("Doing a comportement specific to the class \"A\"")
        }

    }()
    static B = new class extends EnumWithComportement {

        aComportmentDifferentInEachInstance() {
            console.log("Doing a comportement specific to the class \"B\"")
        }

    }()
    static C = new class extends EnumWithComportement {

        aComportmentDifferentInEachInstance() {
            console.log("Doing a comportement specific to the class \"C\"")
        }

    }()

    get _static() {
        return EnumWithComportement
    }

    aComportement() {
        console.log("Doing some generic stuff")
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
