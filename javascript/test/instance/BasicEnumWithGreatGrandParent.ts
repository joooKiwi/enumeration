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

import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnum}                         from "./BasicEnum"
import {BasicEnumWithGrandParent}          from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

export class BasicEnumWithGreatGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGreatGrandParent<BasicEnumWithGrandParent<ORDINAL, NAME>, BasicEnumWithParent<ORDINAL, NAME>, BasicEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly A = new BasicEnumWithGreatGrandParent<0, 'A'>(BasicEnumWithGrandParent.A, BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGreatGrandParent<1, 'B'>(BasicEnumWithGrandParent.B, BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGreatGrandParent<2, 'C'>(BasicEnumWithGrandParent.C,)
    public static readonly D = new BasicEnumWithGreatGrandParent<3, 'D'>()

    private constructor(parent?: BasicEnumWithGrandParent<ORDINAL, NAME>, grandParent?: BasicEnumWithParent<ORDINAL, NAME>, greatGrandParent?: BasicEnum<ORDINAL, NAME>,) {
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

    public static CompanionEnum = class CompanionEnum_BasicEnumWithGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, any, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithGreatGrandParent
        private constructor() { super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGreatGrandParent() }

    }

}
