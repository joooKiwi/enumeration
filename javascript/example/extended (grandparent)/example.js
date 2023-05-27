import {CompanionEnumWithGrandParent, Enum} from "@joookiwi/enumerable"

import {SimpleEnum}   from "../simple/example.js"
import {ExtendedEnum} from "../extended (parent)/example.js"

export class SecondExtendedEnum
    extends Enum {

    static A = new SecondExtendedEnum(ExtendedEnum.A, SimpleEnum.A,)
    static B = new SecondExtendedEnum(ExtendedEnum.B, SimpleEnum.B,)
    static C = new SecondExtendedEnum(ExtendedEnum.C, SimpleEnum.C,)
    static D = new SecondExtendedEnum(ExtendedEnum.D,)
    static E = new SecondExtendedEnum(ExtendedEnum.E,)
    static F = new SecondExtendedEnum(ExtendedEnum.F,)
    static G = new SecondExtendedEnum()
    static H = new SecondExtendedEnum()
    static I = new SecondExtendedEnum()

    #parent
    #grandParent

    constructor(parent = null, grandParent = null,) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
    }

    get parent() { return this.#parent }

    get grandParent() { return this.#grandParent }

    static CompanionEnum = class CompanionEnum_SecondExtendedEnum
        extends CompanionEnumWithGrandParent {

        static #instance

        constructor() { super(SecondExtendedEnum, ExtendedEnum, SimpleEnum,) }

        static get get() { return this.#instance ??= new CompanionEnum_SecondExtendedEnum() }

    }

}
