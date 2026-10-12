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

import type {BasicEnum}                from "./BasicEnum"
import type {BasicEnumWithGrandParent} from "./BasicEnumWithGrandParent"
import type {BasicEnumWithParent}      from "./BasicEnumWithParent"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"

/** A {@link CompanionEnumWithGrandParent} made to test its constructor parameters */
export class CompanionEnum_GrandParentConstructor
    extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(instance: typeof BasicEnumWithGrandParent, parentInstance: typeof BasicEnumWithParent, grandParentInstance: typeof BasicEnum,) {
        super(instance, parentInstance, grandParentInstance,)
    }

}
