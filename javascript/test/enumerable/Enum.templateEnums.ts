import type {Nullable, PossibleStringOrNumeric}                       from "../../src/type"
import type {CollectionHolder}                                        from "collection/CollectionHolder"
import type {EnumerableConstructor, EnumerableConstructorWithDefault} from "enumerable/EnumerableConstructor.type"

import {Enum} from "enumerable/Enum"

export class SimpleEmptyEnum
    extends Enum<number, never> {

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructor<number, never> {
        return SimpleEmptyEnum
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEmptyEnum>,): SimpleEmptyEnum {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEmptyEnum> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

type Names = | 'A' | 'B'

export class SimpleEnum1
    extends Enum<number, Names> {

    public static readonly A = new SimpleEnum1()
    public static readonly B = new SimpleEnum1()

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructor<number, Names> {
        return SimpleEnum1
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnum1>,): SimpleEnum1 {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnum1> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class SimpleEnum2
    extends Enum<number, Names> {

    public static readonly A = new SimpleEnum2()
    public static readonly B = new SimpleEnum2()

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructor<number, Names> {
        return SimpleEnum2
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnum2>,): SimpleEnum2 {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnum2> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class SimpleEnumWithVariables
    extends Enum<number, never> {

    public static readonly VARIABLE_STRING = ""
    public static readonly VARIABLE_NUMBER = 0
    public static readonly VARIABLE_BIGINT = BigInt(0,)
    public static readonly VARIABLE_SIMPLE_ENUM_1_A = SimpleEnum1.A

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructor<number, never> {
        return SimpleEnumWithVariables
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnumWithVariables>,): SimpleEnumWithVariables {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnumWithVariables> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}


export class SimpleEnumWithDefault
    extends Enum<number, Names> {

    public static readonly A = new SimpleEnumWithDefault()
    public static readonly B = new SimpleEnumWithDefault()

    protected static _DEFAULT = this.A

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructorWithDefault<number, Names> {
        return SimpleEnumWithDefault
    }

    public static get default(): SimpleEnumWithDefault {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: Nullable<| PossibleStringOrNumeric | SimpleEnumWithDefault>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: Nullable<| PossibleStringOrNumeric | SimpleEnumWithDefault>,): typeof SimpleEnumWithDefault {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnumWithDefault>,): SimpleEnumWithDefault {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnumWithDefault> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class SimpleEnumWithLateDefault
    extends Enum<number, Names> {

    public static readonly A = new SimpleEnumWithLateDefault()
    public static readonly B = new SimpleEnumWithLateDefault()

    static [index: number]: SimpleEmptyEnum

    protected override get _static(): EnumerableConstructorWithDefault<number, Names> {
        return SimpleEnumWithLateDefault
    }

    public static get default(): SimpleEnumWithLateDefault {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: Nullable<| PossibleStringOrNumeric | SimpleEnumWithLateDefault>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: Nullable<| PossibleStringOrNumeric | SimpleEnumWithLateDefault>,): typeof SimpleEnumWithLateDefault {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | SimpleEnumWithLateDefault>,): SimpleEnumWithLateDefault {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SimpleEnumWithLateDefault> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}
