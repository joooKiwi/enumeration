import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names2, Ordinals2} from "../type"

export class EnumWithSubExtension
    extends Enum {

    static SubClass1 = class EnumWithSubExtension_SubClass1
        extends EnumWithSubExtension {

        comportment() {
            return "a comportment from SubClass1"
        }

    }
    static SubClass2 = class EnumWithSubExtension_SubClass2
        extends EnumWithSubExtension {

        comportment() {
            return "a comportment from SubClass2"
        }

    }

    static A = new EnumWithSubExtension()
    static B = new EnumWithSubExtension.SubClass2()
    static C = new EnumWithSubExtension.SubClass1()
    static D = new EnumWithSubExtension()
    static E = new EnumWithSubExtension.SubClass2()
    static F = new EnumWithSubExtension()

    public comportment() {
        return "A comportment by the default Enum"
    }

}
EnumWithSubExtension.CompanionEnum = class CompanionEnum_EnumWithSubExtension
    extends BasicCompanionEnum {

    static #instance

    constructor() {
        super(EnumWithSubExtension,)
    }

    static get get() {
        return this.#instance ??= new this()
    }

}
