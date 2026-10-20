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

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {EmptyEnum}                    from "./EmptyEnum"
import {EmptyEnumWithGrandParent}     from "./EmptyEnumWithGrandParent"
import {EmptyEnumWithParent}          from "./EmptyEnumWithParent"

/** A {@link CompanionEnumWithGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyCompanionEnumWithGrandParent
    extends CompanionEnumWithGrandParent<EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

    public constructor() {
        super(EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,)
    }

    public methodFromEmptyCompanionEnumWithGrandParent() {}

}
