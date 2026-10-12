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

import type {CompanionEnumWithGrandParentSingleton} from "../../src/type/singleton"

import {EnumWithGrandParent}          from "../../src/EnumWithGrandParent"
import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

export class BasicEnumWithGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGrandParent<BasicEnumWithParent<ORDINAL, NAME>, BasicEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly A = new BasicEnumWithGrandParent<0, 'A'>(BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGrandParent<1, 'B'>(BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGrandParent<2, 'C'>()
    public static readonly D = new BasicEnumWithGrandParent<3, 'D'>()

    private constructor(parent?: BasicEnumWithParent<ORDINAL, NAME>, grandParent?: BasicEnum<ORDINAL, NAME>,) {
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

}
