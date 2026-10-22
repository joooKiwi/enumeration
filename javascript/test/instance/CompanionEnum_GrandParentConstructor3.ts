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

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnumWithGrandParent}     from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

/** A {@link CompanionEnumWithGrandParent} made to test its constructor 3rd parameter */
export class CompanionEnum_GrandParentConstructor3
    extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(grandParentInstance: typeof BasicEnum,) {
        super(BasicEnumWithGrandParent, BasicEnumWithParent, grandParentInstance,)
    }

}
