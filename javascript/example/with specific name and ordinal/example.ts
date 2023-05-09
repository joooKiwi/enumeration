import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export class EnumWithSpecificNameAndOrdinal<ORDINAL extends Ordinals = Ordinals, NAME extends Names = Names,>
    extends Enum<ORDINAL, NAME> {

    public static readonly A = new EnumWithSpecificNameAndOrdinal<0, 'A'>()
    public static readonly B = new EnumWithSpecificNameAndOrdinal<1, 'B'>()
    public static readonly C = new EnumWithSpecificNameAndOrdinal<2, 'C'>()

    public static readonly 0: typeof EnumWithSpecificNameAndOrdinal.A
    public static readonly 1: typeof EnumWithSpecificNameAndOrdinal.B
    public static readonly 2: typeof EnumWithSpecificNameAndOrdinal.C

    private constructor() { super() }

}
export namespace SimpleEnum {

    class CompanionEnum_EnumWithSpecificNameAndOrdinal
        extends BasicCompanionEnum<EnumWithSpecificNameAndOrdinal, typeof EnumWithSpecificNameAndOrdinal> {

        static #instance?: CompanionEnum_EnumWithSpecificNameAndOrdinal

        private constructor() { super(EnumWithSpecificNameAndOrdinal,) }

        public static get get() { return this.#instance ??= new this() }

    }
    export const CompanionEnum = CompanionEnum_EnumWithSpecificNameAndOrdinal

}
