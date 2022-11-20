import type {CollectionHolder}                    from "collection/CollectionHolder"
import type {EnumerableConstructorWithEverything} from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}                     from "./type"
import type {PossibleValueByEnumerable}           from "enumerable/Enumerable.types"

import {Enum} from "enumerable/Enum"

export class EnumWithEverything
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithEverything()
    public static readonly B = new EnumWithEverything()
    public static readonly C = new EnumWithEverything()

    protected static readonly _DEFAULT = this.A // This is optional if the setDefault() is called before the getDefault()

    static [index: number]: EnumWithEverything

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructorWithEverything<Ordinals, Names> {
        return EnumWithEverything
    }

    public static get default(): EnumWithEverything {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: PossibleValueByEnumerable<EnumWithEverything>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: PossibleValueByEnumerable<EnumWithEverything>,): typeof EnumWithEverything {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: PossibleValueByEnumerable<EnumWithEverything>,): EnumWithEverything {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithEverything> {
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
