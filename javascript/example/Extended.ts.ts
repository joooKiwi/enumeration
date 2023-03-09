import type {CollectionHolder}          from "collection/CollectionHolder"
import type {EnumerableConstructor}     from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}           from "./type"
import type {PossibleValueByEnumerable} from "enumerable/Enumerable.types"

import {Enum}       from "enumerable/Enum"
import {SimpleEnum} from "./Simple.ts"

export class ExtendedEnum
    // @ts-ignore (This is only for the purpose of the example, normally, the parent constructor should be protected)
    extends SimpleEnum {

    public static override readonly A = new ExtendedEnum()
    public static override readonly B = new ExtendedEnum()
    public static override readonly C = new ExtendedEnum()

    static [index: number]: ExtendedEnum

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ExtendedEnum
    }

    public static override getValue(value: PossibleValueByEnumerable<| SimpleEnum | ExtendedEnum>,): ExtendedEnum {
        return Enum.getValueOn<ExtendedEnum>(this, value,)
    }

    public static override get values(): CollectionHolder<ExtendedEnum> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<ExtendedEnum> {
        yield* this.values
    }

}
