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

import type {NullOr} from "@joookiwi/type"

import {EnumWithNullableGrandParent}  from "../../src/EnumWithNullableGrandParent"
import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

export class BasicEnumWithGrandParent
    extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum, | 0 | 1 | 2, | 'A' | 'B' | 'C'> {

    public static readonly A = new BasicEnumWithGrandParent(BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGrandParent(BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGrandParent()

    private constructor(parent: NullOr<BasicEnumWithParent> = null, grandParent: NullOr<BasicEnum> = null,) {
        super(parent, grandParent,)
    }

    public static CompanionEnum = class CompanionEnum_BasicEnumWithGrandParent
        extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, any, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithGrandParent
        private constructor() { super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGrandParent() }

    }

}
