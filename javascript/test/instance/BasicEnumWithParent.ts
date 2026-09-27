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

import {EnumWithNullableParent}  from "../../src/EnumWithNullableParent"
import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {BasicEnum}               from "./BasicEnum"

export class BasicEnumWithParent
    extends EnumWithNullableParent<BasicEnum> {

    public static readonly A = new BasicEnumWithParent(BasicEnum.A,)
    public static readonly B = new BasicEnumWithParent()

    private constructor(parent: NullOr<BasicEnum> = null,) {
        super(parent,)
    }

    public static CompanionEnum = class CompanionEnum_BasicEnumWithParent
        extends CompanionEnumWithParent<BasicEnumWithParent, any, BasicEnum, typeof BasicEnum> {

        static #instance?: CompanionEnum_BasicEnumWithParent
        private constructor() { super(BasicEnumWithParent, BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithParent() }

    }

}
