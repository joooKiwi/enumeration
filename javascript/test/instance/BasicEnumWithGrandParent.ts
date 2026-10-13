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

import type {CompanionEnumWithGrandParentSingleton}          from "../../src/type/singleton"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "../../src/type/possibleInstance"
import type {PossibleEnumSymbol}                             from "../../src/type/symbol"

import {EnumWithGrandParent}          from "../../src/EnumWithGrandParent"
import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

/**
 * An {@link EnumWithGrandParent} having
 * the {@link BasicEnumWithParent} as its parent and
 * the {@link BasicEnum} as its grandparent
 * plus an opened constructor for the tests
 */
export class BasicEnumWithGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGrandParent<BasicEnumWithParent<ORDINAL, NAME>, BasicEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly A = new BasicEnumWithGrandParent<0, 'A'>(BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGrandParent<1, 'B'>(BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGrandParent<2, 'C'>()
    public static readonly D = new BasicEnumWithGrandParent<3, 'D'>()

    public constructor()
    public constructor(neverParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(parent: (() => BasicEnumWithParent<ORDINAL, NAME>) | BasicEnumWithParent<ORDINAL, NAME>,)
    public constructor(parentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(neverParent: null, neverGrandParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(neverParent: null, grandParent: (() => BasicEnum<ORDINAL, NAME>) | BasicEnum<ORDINAL, NAME>,)
    public constructor(neverParent: null, grandParentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(neverParent: null, specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(parent: BasicEnumWithParent<ORDINAL, NAME>, grandParent: BasicEnum<ORDINAL, NAME>,)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent<ORDINAL, NAME>>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum<ORDINAL, NAME>>,) {
        const argumentsSize = arguments.length
        if (argumentsSize === 0)
            super()
        else if (argumentsSize === 1)
            super(parent,)
        else
            super(parent, grandParent,)
    }

    public static CompanionEnum: CompanionEnumWithGrandParentSingleton<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> = class CompanionEnum_BasicEnumWithGrandParent
        extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithGrandParent
        private constructor() { super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGrandParent() }

    }

    public methodFromBasicEnumWithGrandParent() {}

}
