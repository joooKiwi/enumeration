import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithSpecificNameAndOrdinal
    extends Enum {

    static A = new EnumWithSpecificNameAndOrdinal()
    static B = new EnumWithSpecificNameAndOrdinal()
    static C = new EnumWithSpecificNameAndOrdinal()

    static CompanionEnum = class CompanionEnum_EnumWithSpecificNameAndOrdinal
        extends BasicCompanionEnum {

        static #instance

        constructor() { super(EnumWithSpecificNameAndOrdinal,) }

        static get get() { return this.#instance ??= new CompanionEnum_EnumWithSpecificNameAndOrdinal() }

    }

}