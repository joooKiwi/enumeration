import type {EnumerableWithGrandParent}     from "@joookiwi/enumerable/dist/types"
import {CompanionEnumWithGrandParent, Enum} from "@joookiwi/enumerable"

import type {Names3, Ordinals3} from "../type"

import {SimpleEnum}   from "../simple/example"
import {ExtendedEnum} from "../extended (parent)/example"

export class SecondExtendedEnum
    extends Enum<Names3, Ordinals3>
    implements EnumerableWithGrandParent<Names3, Ordinals3, ExtendedEnum, SimpleEnum> {

    public static readonly A = new SecondExtendedEnum(ExtendedEnum.A, SimpleEnum.A,)
    public static readonly B = new SecondExtendedEnum(ExtendedEnum.B, SimpleEnum.B,)
    public static readonly C = new SecondExtendedEnum(ExtendedEnum.C, SimpleEnum.C,)
    public static readonly D = new SecondExtendedEnum(ExtendedEnum.D,)
    public static readonly E = new SecondExtendedEnum(ExtendedEnum.E,)
    public static readonly F = new SecondExtendedEnum(ExtendedEnum.F,)
    public static readonly G = new SecondExtendedEnum()
    public static readonly H = new SecondExtendedEnum()
    public static readonly I = new SecondExtendedEnum()

    readonly #parent
    readonly #grandParent

    private constructor(parent: ExtendedEnum | null = null, grandParent: SimpleEnum | null = null,) {
        super()
        this.#grandParent = grandParent
        this.#parent = parent
    }

    public get parent(): ExtendedEnum | null { return this.#parent }
    public get grandParent(): SimpleEnum | null { return this.#grandParent }

}
export namespace SecondExtendedEnum {

    class CompanionEnum_SecondExtendedEnum
        extends CompanionEnumWithGrandParent<SecondExtendedEnum, typeof SecondExtendedEnum, ExtendedEnum, typeof ExtendedEnum, SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_SecondExtendedEnum

        private constructor() { super(SecondExtendedEnum, ExtendedEnum, SimpleEnum,) }

        public static get get() { return this.#instance ??= new this() }

    }

    export const CompanionEnum = CompanionEnum_SecondExtendedEnum
}
