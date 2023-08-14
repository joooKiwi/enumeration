import type {CompanionEnumWithGrandParentSingleton}                from "@joookiwi/enumerable"
import {CompanionEnumWithGrandParent, EnumWithNullableGrandParent} from "@joookiwi/enumerable"

import type {Names3, Ordinals3} from "../type"

import {SimpleEnum}   from "simple/example.ts"
import {ExtendedEnum} from "extended (parent)/example.ts"

export class SecondExtendedEnum
    extends EnumWithNullableGrandParent<ExtendedEnum, SimpleEnum, Names3, Ordinals3> {

    public static readonly A = new SecondExtendedEnum()
    public static readonly B = new SecondExtendedEnum()
    public static readonly C = new SecondExtendedEnum()
    public static readonly D = new SecondExtendedEnum(ExtendedEnum.D, null,)
    public static readonly E = new SecondExtendedEnum(ExtendedEnum.E, null,)
    public static readonly F = new SecondExtendedEnum(ExtendedEnum.F, null,)
    public static readonly G = new SecondExtendedEnum(null, null,)
    public static readonly H = new SecondExtendedEnum(null, null,)
    public static readonly I = new SecondExtendedEnum(null, null,)

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<SecondExtendedEnum, typeof SecondExtendedEnum, ExtendedEnum, typeof ExtendedEnum, SimpleEnum, typeof SimpleEnum> = class CompanionEnum_SecondExtendedEnum
        extends CompanionEnumWithGrandParent<SecondExtendedEnum, typeof SecondExtendedEnum,
            ExtendedEnum, typeof ExtendedEnum,
            SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_SecondExtendedEnum

        private constructor() { super(SecondExtendedEnum, ExtendedEnum, SimpleEnum,) }

        public static get get() { return CompanionEnum_SecondExtendedEnum.#instance ??= new CompanionEnum_SecondExtendedEnum() }

    }

    private constructor()
    private constructor(parent: ExtendedEnum | null,)
    private constructor(parent: ExtendedEnum, grandParent: SimpleEnum | null,)
    private constructor(...args: readonly [(ExtendedEnum | null)?, (SimpleEnum | null)?]) {
        super(...args,)
    }

}
