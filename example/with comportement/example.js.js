import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithComportement
    extends Enum {

    static A = new class EnumWithComportement_A extends EnumWithComportement {

        aComportement() { console.log("Doing stuff from the class \"A\"") }

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"A\"") }

    }()
    static B = new class EnumWithComportement_B extends EnumWithComportement {

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"B\"") }

    }()
    static C = new class EnumWithComportement_C extends EnumWithComportement {

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"C\"") }

    }()

    aComportement() { console.log("Doing some generic stuff") }

    static CompanionEnum = class CompanionEnum_EnumWithComportement
        extends CompanionEnum {

        static #instance

        constructor() { super(EnumWithComportement,) }

        static get get() { return CompanionEnum_EnumWithComportement.#instance ??= new CompanionEnum_EnumWithComportement() }

    }

}
