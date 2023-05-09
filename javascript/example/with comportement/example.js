import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithComportement
    extends Enum {

    static A = new class extends EnumWithComportement {

        aComportement() { console.log("Doing stuff from the class \"A\"") }

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"A\"") }

    }()
    static B = new class extends EnumWithComportement {

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"B\"") }

    }()
    static C = new class extends EnumWithComportement {

        aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"C\"") }

    }()

    aComportement() { console.log("Doing some generic stuff") }

}
EnumWithComportement.CompanionEnum = class CompanionEnum_EnumWithComportement
    extends BasicCompanionEnum {

    static #instance

    constructor() { super(EnumWithComportement,) }

    static get get() { return this.#instance ??= new this() }

}