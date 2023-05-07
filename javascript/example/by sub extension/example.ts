import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names2, Ordinals2} from "../type"

export class EnumWithSubExtension
    extends Enum<Ordinals2, Names2> {

    private static readonly SubClass1 = class EnumWithSubExtension_SubClass1
        extends EnumWithSubExtension {

        public override comportment() {
            return "a comportment from SubClass1"
        }

    }
    private static readonly SubClass2 = class EnumWithSubExtension_SubClass2
        extends EnumWithSubExtension {

        public override comportment() {
            return "a comportment from SubClass2"
        }

    }

    public static readonly A = new EnumWithSubExtension()
    public static readonly B = new EnumWithSubExtension.SubClass2()
    public static readonly C = new EnumWithSubExtension.SubClass1()
    public static readonly D = new EnumWithSubExtension()
    public static readonly E = new EnumWithSubExtension.SubClass2()
    public static readonly F = new EnumWithSubExtension()

    private constructor() {
        super()
    }

    public comportment() {
        return "A comportment by the default Enum"
    }

}
export namespace EnumWithSubExtension {

    class CompanionEnum_EnumWithSubExtension
        extends BasicCompanionEnum<EnumWithSubExtension, typeof EnumWithSubExtension> {

        static #instance

        private constructor() {
            super(EnumWithSubExtension,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    export const CompanionEnum = CompanionEnum_EnumWithSubExtension

}
