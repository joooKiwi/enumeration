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

import type {BasicEnum} from "./BasicEnum"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnumWithGrandParent}          from "./BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent}     from "./BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

/** A {@link CompanionEnumWithGreatGrandParent} made to test its constructor 4th parameter */
export class CompanionEnum_GreatGrandParentConstructor4
    extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, typeof BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(greatGrandParentInstance: typeof BasicEnum,) {
        super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, greatGrandParentInstance,)
    }

}
