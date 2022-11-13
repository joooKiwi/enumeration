import type {Nullable, PossibleStringOrNumeric}                       from "../../src/type"
import type {CollectionHolder}                                        from "collection/CollectionHolder"
import type {EnumerableConstructor, EnumerableConstructorWithDefault} from "enumerable/EnumerableConstructor.type"

import {Enum} from "enumerable/Enum"

export class EmptyEnum
    extends Enum<number, never> {

    static [index: number]: EmptyEnum

    protected override get _static(): EnumerableConstructor<number, never> {
        return EmptyEnum
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | EmptyEnum>,): EmptyEnum {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EmptyEnum> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

type Names = | 'A' | 'B'
type Names2 = | Names | 'C'

export class Enum1
    extends Enum<number, Names> {

    public static readonly A = new Enum1()
    public static readonly B = new Enum1()

    static [index: number]: Enum1

    protected override get _static(): EnumerableConstructor<number, Names> {
        return Enum1
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | Enum1>,): Enum1 {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Enum1> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class Enum2
    extends Enum<number, Names> {

    public static readonly A = new Enum2()
    public static readonly B = new Enum2()

    static [index: number]: Enum2

    protected override get _static(): EnumerableConstructor<number, Names> {
        return Enum2
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | Enum2>,): Enum2 {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Enum2> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class EnumWithVariables
    extends Enum<number, never> {

    public static readonly VARIABLE_STRING = ""
    public static readonly VARIABLE_NUMBER = 0
    public static readonly VARIABLE_BIGINT = BigInt(0,)
    public static readonly VARIABLE_SIMPLE_ENUM_1_A = Enum1.A

    static [index: number]: EnumWithVariables

    protected override get _static(): EnumerableConstructor<number, never> {
        return EnumWithVariables
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | EnumWithVariables>,): EnumWithVariables {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithVariables> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}


export class EnumWithExcludedFields
    extends Enum<number, Names> {

    public static readonly A = new EnumWithExcludedFields()
    public static readonly B = new EnumWithExcludedFields()
    public static readonly C = this.A

    static [index: number]: Enum2

    protected static override readonly _EXCLUDED_NAMES = ['C',]

    protected override get _static(): EnumerableConstructor<number, Names> {
        return EnumWithExcludedFields
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | EnumWithExcludedFields>,): EnumWithExcludedFields {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithExcludedFields> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}


export class EnumWithDefault
    extends Enum<number, Names> {

    public static readonly A = new EnumWithDefault()
    public static readonly B = new EnumWithDefault()

    protected static _DEFAULT = this.A

    static [index: number]: EnumWithDefault

    protected override get _static(): EnumerableConstructorWithDefault<number, Names> {
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

export class EnumWithLateDefault
    extends Enum<number, Names> {

    public static readonly A = new EnumWithLateDefault()
    public static readonly B = new EnumWithLateDefault()

    static [index: number]: EnumWithDefault

    protected override get _static(): EnumerableConstructorWithDefault<number, Names> {
        return EnumWithLateDefault
    }

    public static get default(): EnumWithLateDefault {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: Nullable<| PossibleStringOrNumeric | EnumWithLateDefault>,) {
        this.setDefault(value,)
    }

    public static setDefault(value: Nullable<| PossibleStringOrNumeric | EnumWithLateDefault>,): typeof EnumWithLateDefault {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | EnumWithLateDefault>,): EnumWithLateDefault {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EnumWithLateDefault> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}


export class ParentEnum
    extends Enum<number, Names> {

    public static readonly A = new ParentEnum()
    public static readonly B = new ParentEnum()

    static [index: number]: ParentEnum

    public override get _static(): EnumerableConstructor<number, Names> {
        return ParentEnum
    }

    public static getValue(value: Nullable<PossibleStringOrNumeric | ParentEnum>,): ParentEnum {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ParentEnum> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class Child1Enum
    extends ParentEnum {

    public static override readonly A = new Child1Enum()
    public static override readonly B = new Child1Enum()
    public static readonly C = new Child1Enum()

    static [index: number]: Child1Enum

    // @ts-ignore
    public override get _static(): EnumerableConstructor<number, Names2> {
        return Child1Enum
    }

    public static override getValue(value: Nullable<PossibleStringOrNumeric | ParentEnum | Child1Enum>,): Child1Enum {
        return Enum.getValueOn(this, value,)
    }

    public static override get values(): CollectionHolder<Child1Enum> {
        return Enum.getValuesOn(this,)
    }

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class Child2Enum
    extends Child1Enum {

    public static override readonly A = new Child2Enum()
    public static override readonly B = new Child2Enum()
    public static override readonly C = new Child2Enum()

    static [index: number]: Child2Enum

    public override get _static(): EnumerableConstructor<number, Names2> {
        return Child2Enum
    }

    public static override getValue(value: Nullable<PossibleStringOrNumeric | ParentEnum | Child1Enum | Child2Enum>,): Child2Enum {
        return Enum.getValueOn(this, value,)
    }

    public static override get values(): CollectionHolder<Child2Enum> {
        return Enum.getValuesOn(this,)
    }

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}

export class AnotherChildEnum
    extends ParentEnum {

    public static override readonly A = new AnotherChildEnum()
    public static override readonly B = new AnotherChildEnum()
    public static readonly C = new AnotherChildEnum()

    static [index: number]: AnotherChildEnum

    // @ts-ignore
    public override get _static(): EnumerableConstructor<number, Names2> {
        return AnotherChildEnum
    }

    public static override getValue(value: Nullable<PossibleStringOrNumeric | ParentEnum | AnotherChildEnum>,): AnotherChildEnum {
        return Enum.getValueOn(this, value,)
    }

    public static override get values(): CollectionHolder<AnotherChildEnum> {
        return Enum.getValuesOn(this,)
    }

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

}