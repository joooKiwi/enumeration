import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithSubExtension
    extends Enum {

    static SubClass1 = class EnumWithSubExtension_SubClass1
        extends EnumWithSubExtension {

        comportment() { return "a comportment from SubClass1" }

    }
    static SubClass2 = class EnumWithSubExtension_SubClass2
        extends EnumWithSubExtension {

        comportment() { return "a comportment from SubClass2" }

    }

    static A = new EnumWithSubExtension()
    static B = new EnumWithSubExtension.SubClass2()
    static C = new EnumWithSubExtension.SubClass1()
    static D = new EnumWithSubExtension()
    static E = new EnumWithSubExtension.SubClass2()
    static F = new EnumWithSubExtension()

    static CompanionEnum = class CompanionEnum_EnumWithSubExtension
        extends CompanionEnum {

        static #instance

        constructor() { super(EnumWithSubExtension,) }

        static get get() { return CompanionEnum_EnumWithSubExtension.#instance ??= new CompanionEnum_EnumWithSubExtension() }

    }

    comportment() { return "A comportment by the default Enum" }

}
