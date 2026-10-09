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

/** A {@link CompanionEnum} that has the purpose to give the {@link BasicEnum} for its {@link Enum} type */
export class BasicCompanionEnum
    extends CompanionEnum<BasicEnum, typeof BasicEnum> {

    public constructor() {
        super(BasicEnum,)
    }

}
