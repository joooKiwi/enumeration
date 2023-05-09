import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

export class EnumWithExcluded
    extends Enum {

    static A = new EnumWithExcluded()
    static B = new EnumWithExcluded()
    static C = new EnumWithExcluded()

    static D = this.A

}
EnumWithExcluded.CompanionEnum = class CompanionEnum_EnumWithExcluded
    extends BasicCompanionEnum {

    static #instance

    constructor() { super(EnumWithExcluded,) }

    static get get() { return this.#instance ??= new this() }


    _EXCLUDED_NAMES = ['D',]

}