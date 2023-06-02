import type {BasicCompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import {BasicCompanionEnum, Enum}         from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class EnumWithExcluded
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithExcluded()
    public static readonly B = new EnumWithExcluded()
    public static readonly C = new EnumWithExcluded()

    public static readonly D = this.A

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<EnumWithExcluded, typeof EnumWithExcluded> = class CompanionEnum_EnumWithExcluded
        extends BasicCompanionEnum<EnumWithExcluded, typeof EnumWithExcluded> {

        static #instance?: CompanionEnum_EnumWithExcluded

        private constructor() { super(EnumWithExcluded,) }

        public static get get() { return this.#instance ??= new CompanionEnum_EnumWithExcluded() }


        protected override readonly _EXCLUDED_NAMES = ['D',]

    }

    private constructor() { super() }

}
