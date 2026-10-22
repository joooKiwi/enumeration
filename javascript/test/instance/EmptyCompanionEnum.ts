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
import {EmptyEnum}     from "./EmptyEnum"

/** A {@link CompanionEnum} that has the purpose to be empty with nothing to specify */
export class EmptyCompanionEnum
    extends CompanionEnum<EmptyEnum, typeof EmptyEnum> {

    public constructor() {
        super(EmptyEnum,)
    }

    public methodFromEmptyCompanionEnum() {}

}
