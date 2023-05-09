import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class SimpleEnum
    extends Enum<Ordinals, Names> {

    public static readonly A = new SimpleEnum()
    public static readonly B = new SimpleEnum()
    public static readonly C = new SimpleEnum()

    private constructor() { super() }

}
export namespace SimpleEnum {

    class CompanionEnum_SimpleEnum
        extends BasicCompanionEnum<Ordinals, Names> {

        static #instance?: CompanionEnum_SimpleEnum

        private constructor() { super(SimpleEnum,) }

        public static get get() { return this.#instance ??= new this() }

    }
    export const CompanionEnum = CompanionEnum_SimpleEnum

}
