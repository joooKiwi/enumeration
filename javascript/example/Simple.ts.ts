import type {CollectionHolder}                  from "collection/CollectionHolder"
import type {EnumerableConstructor}             from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}                   from "./type"
import type {Nullable, PossibleStringOrNumeric} from "../src/type"

import {Enum} from "enumerable/Enum"

export class SimpleEnum
    extends Enum<Ordinals, Names> {

    public static readonly A = new SimpleEnum()
    public static readonly B = new SimpleEnum()
    public static readonly C = new SimpleEnum()

    static [index: number]: SimpleEnum

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return SimpleEnum
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnum>,): SimpleEnum {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnum> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
