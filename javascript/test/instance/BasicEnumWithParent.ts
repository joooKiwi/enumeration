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

import type {PossibleEnumerableValueOrNameByValueOrCallback} from "../../src/type/possibleInstance"
import type {CompanionEnumWithParentSingleton}               from "../../src/type/singleton"
import type {PossibleEnumSymbol}                             from "../../src/type/symbol"

import {EnumWithParent}          from "../../src/EnumWithParent"
import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {BasicEnum}               from "./BasicEnum"

/**
 * An {@link EnumWithParent} having
 * the {@link BasicEnum} as its parent
 * plus an opened constructor for the tests
 */
export class BasicEnumWithParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithParent<BasicEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly A = new BasicEnumWithParent<0, 'A'>(BasicEnum.A,)
    public static readonly B = new BasicEnumWithParent<1, 'B'>()
    public static readonly C = new BasicEnumWithParent<2, 'C'>()
    public static readonly D = new BasicEnumWithParent<3, 'D'>()

    public constructor()
    public constructor(neverParent: (() => NullOrUndefined) | NullOrUndefined,)
    public constructor(parent: (() => BasicEnum<ORDINAL, NAME>) | BasicEnum<ORDINAL, NAME>,)
    public constructor(parentName: (() => StringOrObject<NAME>) | StringOrObject<NAME>,)
    public constructor(specialCase: (() => PossibleEnumSymbol) | PossibleEnumSymbol,)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum<ORDINAL, NAME>>,) {
        if (arguments.length === 0)
            super()
        else
            super(parent,)
    }

    public static CompanionEnum: CompanionEnumWithParentSingleton<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> = class CompanionEnum_BasicEnumWithParent
        extends CompanionEnumWithParent<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithParent
        private constructor() { super(BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithParent() }

    }

    public methodFromBasicEnumWithParent() {}

}
