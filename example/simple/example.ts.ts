import type {BasicCompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import {BasicCompanionEnum, Enum}         from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class SimpleEnum
    extends Enum<Ordinals, Names> {

    public static readonly A = new SimpleEnum()
    public static readonly B = new SimpleEnum()
    public static readonly C = new SimpleEnum()

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<SimpleEnum, typeof SimpleEnum> = class CompanionEnum_SimpleEnum
        extends BasicCompanionEnum<SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_SimpleEnum

        private constructor() { super(SimpleEnum,) }

        public static get get() { return this.#instance ??= new CompanionEnum_SimpleEnum() }

    }

    private constructor() { super() }

}
