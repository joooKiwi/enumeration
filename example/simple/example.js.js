import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class SimpleEnum
    extends Enum {

    static A = new SimpleEnum()
    static B = new SimpleEnum()
    static C = new SimpleEnum()

    static CompanionEnum = class CompanionEnum_SimpleEnum
        extends CompanionEnum {

        static #instance

        constructor() { super(SimpleEnum,) }

        static get get() { return CompanionEnum_SimpleEnum.#instance ??= new CompanionEnum_SimpleEnum() }

    }

}
