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

import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {BasicEnumWithParent}     from "./BasicEnumWithParent"

/** A {@link CompanionEnumWithParent} made to test its constructor 2nd parameter */
export class CompanionEnum_ParentConstructor2
    extends CompanionEnumWithParent<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    public constructor(instance: typeof BasicEnum,) {
        super(BasicEnumWithParent, instance,)
    }

}
