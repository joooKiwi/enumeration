import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

export class SimpleEnum
    extends Enum {

    static A = new SimpleEnum()
    static B = new SimpleEnum()
    static C = new SimpleEnum()

    static CompanionEnum = class CompanionEnum_SimpleEnum
        extends BasicCompanionEnum {

        static #instance

        constructor() { super(SimpleEnum,) }

        static get get() { return this.#instance ??= new CompanionEnum_SimpleEnum() }

    }

}
