import type {CollectionHolder}                  from "collection/CollectionHolder"
import type {EnumerableConstructor}             from "enumerable/EnumerableConstructor.type"
import type {Names, Ordinals}                   from "./type"
import type {Nullable, PossibleStringOrNumeric} from "../src/type"

import {Enum} from "enumerable/Enum"

export abstract class EnumWithComportement
    extends Enum<Ordinals, Names> {

    public static readonly A = new class extends EnumWithComportement {

        public override aComportement(): void {
            console.log("Doing stuff from the class \"A\"")
        }

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"A\"")
        }

    }()
    public static readonly B = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"B\"")
        }

    }()
    public static readonly C = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"C\"")
        }

    }()

    static [index: number]: EnumWithComportement

    private constructor() {
        super()
    }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EnumWithComportement
    }

    public aComportement(): void {
        console.log("Doing some generic stuff")
    }

    public abstract aComportmentDifferentInEachInstance(): void

    public static getValue(value: Nullable<PossibleStringOrNumeric | EnumWithComportement>,): EnumWithComportement {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithComportement> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
