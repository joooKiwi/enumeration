//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {NullOrUndefined, StringOrObject} from "@joookiwi/type"

import type {CompanionEnumWithGreatGrandParentSingleton}     from "../../src/type/singleton"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "../../src/type/possibleInstance"
import type {PossibleEnumSymbol}                             from "../../src/type/symbol"

import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnum}                         from "./BasicEnum"
import {BasicEnumWithGrandParent}          from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

/**
 * An {@link EnumWithGreatGrandParent} having
 * the {@link BasicEnumWithGrandParent} as its parent,
 * the {@link BasicEnumWithParent} as its grandparent and
 * the {@link BasicEnum} as its great-grandparent
 * plus an opened constructor for the tests
 */
export class BasicEnumWithGreatGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGreatGrandParent<BasicEnumWithGrandParent<ORDINAL, NAME>, BasicEnumWithParent<ORDINAL, NAME>, BasicEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly A = new BasicEnumWithGreatGrandParent<0, 'A'>(BasicEnumWithGrandParent.A, BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGreatGrandParent<1, 'B'>(BasicEnumWithGrandParent.B, BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGreatGrandParent<2, 'C'>(BasicEnumWithGrandParent.C,)
    public static readonly D = new BasicEnumWithGreatGrandParent<3, 'D'>()

    public constructor()
    public constructor(neverParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(parent: (() => BasicEnumWithGrandParent<ORDINAL, NAME>) | BasicEnumWithGrandParent<ORDINAL, NAME>,)
    public constructor(parentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(neverParent: null, neverGrandParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(neverParent: null, grandParent: (() => BasicEnumWithParent<ORDINAL, NAME>) | BasicEnumWithParent<ORDINAL, NAME>,)
    public constructor(neverParent: null, grandParentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(neverParent: null, specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(neverParent: null, neverGrandParent: null, neverGreatGrandParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(neverParent: null, neverGrandParent: null, greatGrandParent: (() => BasicEnum<ORDINAL, NAME>) | BasicEnum<ORDINAL, NAME>,)
    public constructor(neverParent: null, neverGrandParent: null, greatGrandParentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(neverParent: null, neverGrandParent: null, specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(parent: BasicEnumWithGrandParent<ORDINAL, NAME>, grandParent: BasicEnumWithParent<ORDINAL, NAME>,)
    public constructor(parent: BasicEnumWithGrandParent<ORDINAL, NAME>, grandParent: BasicEnumWithParent<ORDINAL, NAME>, greatGrandParent: BasicEnum<ORDINAL, NAME>,)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent<ORDINAL, NAME>>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent<ORDINAL, NAME>>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum<ORDINAL, NAME>>,) {
        const argumentsSize = arguments.length
        if (argumentsSize === 0)
            super()
        else if (argumentsSize === 1)
            super(parent,)
        else if (argumentsSize === 2)
            super(parent, grandParent,)
        else
            super(parent, grandParent, greatGrandParent,)
    }

    public static CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<BasicEnumWithGreatGrandParent, typeof BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> = class CompanionEnum_BasicEnumWithGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, typeof BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithGreatGrandParent
        private constructor() { super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGreatGrandParent() }

    }

    public methodFromBasicEnumWithGreatGrandParent() {}

}
