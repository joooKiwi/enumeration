import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithSpecificNameAndOrdinal
    extends Enum {

    static A = new EnumWithSpecificNameAndOrdinal()
    static B = new EnumWithSpecificNameAndOrdinal()
    static C = new EnumWithSpecificNameAndOrdinal()

    static CompanionEnum = class CompanionEnum_EnumWithSpecificNameAndOrdinal
        extends CompanionEnum {

        static #instance

        constructor() { super(EnumWithSpecificNameAndOrdinal,) }

        static get get() { return CompanionEnum_EnumWithSpecificNameAndOrdinal.#instance ??= new CompanionEnum_EnumWithSpecificNameAndOrdinal() }

    }

}
