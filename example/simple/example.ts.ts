import type {CompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import {CompanionEnum, Enum}         from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class SimpleEnum
    extends Enum<Ordinals, Names> {

    public static readonly A = new SimpleEnum()
    public static readonly B = new SimpleEnum()
    public static readonly C = new SimpleEnum()

    public static readonly CompanionEnum: CompanionEnumSingleton<SimpleEnum, typeof SimpleEnum> = class CompanionEnum_SimpleEnum
        extends CompanionEnum<SimpleEnum, typeof SimpleEnum> {

        static #instance?: CompanionEnum_SimpleEnum

        private constructor() { super(SimpleEnum,) }

        public static get get() { return CompanionEnum_SimpleEnum.#instance ??= new CompanionEnum_SimpleEnum() }

    }

    private constructor() { super() }

}
