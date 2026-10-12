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

import type {BasicEnumWithParent} from "./BasicEnumWithParent"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithGrandParent}     from "./BasicEnumWithGrandParent"

/** A {@link CompanionEnumWithGrandParent} made to test its constructor 2nd parameter */
export class CompanionEnum_GrandParentConstructor2
    extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(parentInstance: typeof BasicEnumWithParent,) {
        super(BasicEnumWithGrandParent, parentInstance, BasicEnum,)
    }

}
