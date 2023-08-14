import type {CompanionEnumWithParentSingleton}           from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumWithNullableParent} from "@joookiwi/enumerable"

import type {Names2, Ordinals2} from "../type"

import {SimpleEnum} from "simple/example.ts"

export class ExtendedEnum
    extends EnumWithNullableParent<SimpleEnum, Names2, Ordinals2> {

    public static readonly A = new ExtendedEnum()
    public static readonly B = new ExtendedEnum()
    public static readonly C = new ExtendedEnum()
    public static readonly D = new ExtendedEnum(null,)
    public static readonly E = new ExtendedEnum(null,)
    public static readonly F = new ExtendedEnum(null,)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ExtendedEnum, typeof ExtendedEnum, SimpleEnum, typeof SimpleEnum> = class CompanionEnum_ExtendedEnum
        extends CompanionEnumWithParent<ExtendedEnum, typeof ExtendedEnum,
            SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_ExtendedEnum

        private constructor() { super(ExtendedEnum, SimpleEnum,) }

        public static get get() { return CompanionEnum_ExtendedEnum.#instance ??= new CompanionEnum_ExtendedEnum() }

    }

    private constructor()
    private constructor(parent: SimpleEnum | null,)
    private constructor(...args: readonly [(SimpleEnum | null)?,]) { super(...args,) }

}
