import {CompanionEnumWithParent, EnumWithNullableParent} from "@joookiwi/enumerable"

import {SimpleEnum} from "../simple/example.js.js"

export class ExtendedEnum
    extends EnumWithNullableParent {

    static A = new ExtendedEnum()
    static B = new ExtendedEnum()
    static C = new ExtendedEnum()
    static D = new ExtendedEnum(null,)
    static E = new ExtendedEnum(null,)
    static F = new ExtendedEnum(null,)

    static CompanionEnum = class Companion_ExtendedEnum
        extends CompanionEnumWithParent {

        static #instance

        constructor() { super(ExtendedEnum, SimpleEnum,) }

        static get get() { return Companion_ExtendedEnum.#instance ??= new Companion_ExtendedEnum() }

    }

}
