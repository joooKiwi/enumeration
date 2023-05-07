import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class EnumWithExcluded
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithExcluded()
    public static readonly B = new EnumWithExcluded()
    public static readonly C = new EnumWithExcluded()

    public static readonly D = this.A

    private constructor() {
        super()
    }

}
export namespace EnumWithExcluded {

    class CompanionEnum_EnumWithExcluded
        extends BasicCompanionEnum {

        static #instance?: CompanionEnum_EnumWithExcluded

        private constructor() {
            super(EnumWithExcluded,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }


        protected readonly _EXCLUDED_NAMES = ['D',]

    }
    export const CompanionEnum = CompanionEnum_EnumWithExcluded

}
