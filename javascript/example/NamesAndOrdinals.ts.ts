import type {CollectionHolder}                          from "collection/CollectionHolder"
import type {EnumerableConstructorWithNamesAndOrdinals} from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}                           from "./type"
import type {PossibleValueByEnumerable}                 from "enumerable/Enumerable.types"

import {Enum} from "enumerable/Enum"

export class EnumWithNamesAndOrdinals
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithNamesAndOrdinals()
    public static readonly B = new EnumWithNamesAndOrdinals()
    public static readonly C = new EnumWithNamesAndOrdinals()

    static [index: number]: EnumWithNamesAndOrdinals

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructorWithNamesAndOrdinals<Ordinals, Names> {
        return EnumWithNamesAndOrdinals
    }

    public static getValue(value: PossibleValueByEnumerable<EnumWithNamesAndOrdinals>,): EnumWithNamesAndOrdinals {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithNamesAndOrdinals> {
        return Enum.getValuesOn(this,)
    }

    public static get names(): CollectionHolder<Names> {
        return Enum.getNamesOn(this,)
    }

    public static get ordinals(): CollectionHolder<Ordinals> {
        return Enum.getOrdinalsOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
