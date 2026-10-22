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

import {CompanionEnum} from "../../src/companion/CompanionEnum"
import {BasicEnum}     from "./BasicEnum"

/** A {@link CompanionEnum} made to test its constructor */
export class CompanionEnum_Constructor
    extends CompanionEnum<BasicEnum, typeof BasicEnum> {

    public constructor(instance: typeof BasicEnum,) {
        super(instance,)
    }

}
