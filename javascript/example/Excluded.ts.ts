import type {CollectionHolder}          from "collection/CollectionHolder"
import type {EnumerableConstructor}     from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}           from "./type"
import type {PossibleValueByEnumerable} from "enumerable/Enumerable.types"

import {Enum} from "enumerable/Enum"

export class EnumWithExcluded
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithExcluded()
    public static readonly B = new EnumWithExcluded()
    public static readonly C = new EnumWithExcluded()

    protected static override readonly _EXCLUDED_NAMES = ['D',]

    public static readonly D = this.A

    static [index: number]: EnumWithExcluded

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EnumWithExcluded
    }

    public static getValue(value: PossibleValueByEnumerable<EnumWithExcluded>,): EnumWithExcluded {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithExcluded> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
