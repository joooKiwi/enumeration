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

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EmptyEnum}                         from "./EmptyEnum"
import {EmptyEnumWithGrandParent}          from "./EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}     from "./EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}               from "./EmptyEnumWithParent"

/** A {@link CompanionEnumWithGreatGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyCompanionEnumWithGreatGrandParent
    extends CompanionEnumWithGreatGrandParent<EmptyEnumWithGreatGrandParent, typeof EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

    public constructor() {
        super(EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,)
    }

    public methodFromEmptyCompanionEnumWithGreatGrandParent() {}

}
