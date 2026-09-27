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

import {EnumWithNullableGreatGrandParent}  from "../../src/EnumWithNullableGreatGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnum}                         from "./BasicEnum"
import {BasicEnumWithGrandParent}          from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

export class BasicEnumWithGreatGrandParent
    extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum> {

    public static readonly A = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.A, BasicEnumWithParent.A, BasicEnum.A,)
    public static readonly B = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.B, BasicEnumWithParent.B,)
    public static readonly C = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.C,)
    public static readonly D = new BasicEnumWithGreatGrandParent()

    private constructor(parent: NullOr<BasicEnumWithGrandParent> = null, grandParent: NullOr<BasicEnumWithParent> = null, greatGrandParent: NullOr<BasicEnum> = null,) {
        super(parent, grandParent, greatGrandParent,)
    }

    public static CompanionEnum = class CompanionEnum_BasicEnumWithGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, any, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithGreatGrandParent
        private constructor() { super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGreatGrandParent() }

    }

}
