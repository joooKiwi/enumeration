import type {CollectionHolder}                  from "collection/CollectionHolder"
import type {EnumerableConstructorWithDefault}  from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}                   from "./type"
import type {Nullable, PossibleStringOrNumeric} from "../src/type"

import {Enum} from "enumerable/Enum"

export class EnumWithDefault
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithDefault()
    public static readonly B = new EnumWithDefault()
    public static readonly C = new EnumWithDefault()

    protected static readonly _DEFAULT = this.A // This is optional if the setDefault() is called before the getDefault()

    static [index: number]: EnumWithDefault

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return EnumWithDefault
    }

    public static get default(): EnumWithDefault {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: Nullable<| PossibleStringOrNumeric | EnumWithDefault>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: Nullable<| PossibleStringOrNumeric | EnumWithDefault>,): typeof EnumWithDefault {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | EnumWithDefault>,): EnumWithDefault {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithDefault> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
