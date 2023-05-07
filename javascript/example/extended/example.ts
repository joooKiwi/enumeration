import type {EnumerableWithParent}       from "@joookiwi/enumerable/dist/types"
import {CompanionEnumWithParent, Enum}   from "@joookiwi/enumerable"

import type {Names2, Ordinals2} from "../type"

import {SimpleEnum} from "../simple/example"

export class ExtendedEnum
    extends Enum<Names2, Ordinals2>
    implements EnumerableWithParent<Names2, Ordinals2> {

    public static readonly A = new ExtendedEnum(SimpleEnum.A,)
    public static readonly B = new ExtendedEnum(SimpleEnum.B,)
    public static readonly C = new ExtendedEnum(SimpleEnum.C,)
    public static readonly D = new ExtendedEnum()
    public static readonly E = new ExtendedEnum()
    public static readonly F = new ExtendedEnum()

    readonly #parent

    private constructor(parent: SimpleEnum | null = null,) {
        super()
        this.#parent = parent
    }

    public get parent(): SimpleEnum | null {
        return this.#parent
    }

}
export namespace ExtendedEnum {

    class CompanionEnum_ExtendedEnum
        extends CompanionEnumWithParent<ExtendedEnum, typeof ExtendedEnum, SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_ExtendedEnum

        constructor() {
            super(ExtendedEnum, SimpleEnum,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    export const CompanionEnum = CompanionEnum_ExtendedEnum
}
