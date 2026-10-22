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

import type {BasicEnumWithGrandParent} from "./BasicEnumWithGrandParent"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnum}                         from "./BasicEnum"
import {BasicEnumWithGreatGrandParent}     from "./BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

/** A {@link CompanionEnumWithGreatGrandParent} made to test its constructor 2nd parameter */
export class CompanionEnum_GreatGrandParentConstructor2
    extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, typeof BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(parentInstance: typeof BasicEnumWithGrandParent,) {
        super(BasicEnumWithGreatGrandParent, parentInstance, BasicEnumWithParent, BasicEnum,)
    }

}
