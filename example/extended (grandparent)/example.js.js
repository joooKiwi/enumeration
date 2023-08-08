import {CompanionEnumWithGrandParent, EnumWithNullableGrantParent} from "@joookiwi/enumerable"

import {SimpleEnum}   from "../simple/example.js.js"
import {ExtendedEnum} from "../extended (parent)/example.js.js"

export class SecondExtendedEnum
    extends EnumWithNullableGrantParent {

    static A = new SecondExtendedEnum()
    static B = new SecondExtendedEnum()
    static C = new SecondExtendedEnum()
    static D = new SecondExtendedEnum(ExtendedEnum.D, null,)
    static E = new SecondExtendedEnum(ExtendedEnum.E, null,)
    static F = new SecondExtendedEnum(ExtendedEnum.F, null,)
    static G = new SecondExtendedEnum(null, null,)
    static H = new SecondExtendedEnum(null, null,)
    static I = new SecondExtendedEnum(null, null,)

    static CompanionEnum = class CompanionEnum_SecondExtendedEnum
        extends CompanionEnumWithGrandParent {

        static #instance

        constructor() { super(SecondExtendedEnum, ExtendedEnum, SimpleEnum,) }

        static get get() { return CompanionEnum_SecondExtendedEnum.#instance ??= new CompanionEnum_SecondExtendedEnum() }

    }

}
