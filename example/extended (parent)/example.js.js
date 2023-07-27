import {CompanionEnumWithParent, Enum} from "@joookiwi/enumerable"

import {SimpleEnum} from "../simple/example.js.js"

export class ExtendedEnum
    extends Enum {

    static A = new ExtendedEnum(SimpleEnum.A,)
    static B = new ExtendedEnum(SimpleEnum.B,)
    static C = new ExtendedEnum(SimpleEnum.C,)
    static D = new ExtendedEnum()
    static E = new ExtendedEnum()
    static F = new ExtendedEnum()

    static CompanionEnum = class Companion_ExtendedEnum
        extends CompanionEnumWithParent {

        static #instance

        constructor() { super(ExtendedEnum, SimpleEnum,) }

        static get get() { return Companion_ExtendedEnum.#instance ??= new Companion_ExtendedEnum() }

    }

    #parent

    constructor(parent,) {
        super()
        this.#parent = parent
    }

    get parent() { return this.#parent }

}
