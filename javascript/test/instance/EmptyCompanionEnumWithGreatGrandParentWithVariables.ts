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

import {CompanionEnumWithGreatGrandParent}          from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EmptyEnumWithGrandParentWithVariables}      from "./EmptyEnumWithGrandParentWithVariables"
import {EmptyEnumWithGreatGrandParentWithVariables} from "./EmptyEnumWithGreatGrandParentWithVariables"
import {EmptyEnumWithParentWithVariables}           from "./EmptyEnumWithParentWithVariables"
import {EmptyEnumWithVariables}                     from "./EmptyEnumWithVariables"

/**
 * A {@link CompanionEnumWithGreatGrandParent} that has the purpose to be empty with nothing to specify
 * Plus, it contains variable for the tests in the {@link EmptyEnumWithGreatGrandParentWithVariables}, {@link EmptyEnumWithGrandParentWithVariables}, {@link EmptyEnumWithParentWithVariables} and {@link EmptyEnumWithVariables}
 */
export class EmptyCompanionEnumWithGreatGrandParentWithVariables
    extends CompanionEnumWithGreatGrandParent<EmptyEnumWithGreatGrandParentWithVariables, typeof EmptyEnumWithGreatGrandParentWithVariables, EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

    public constructor() {
        super(EmptyEnumWithGreatGrandParentWithVariables, EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
    }

    public methodFromEmptyCompanionEnumWithGreatGrandParentWithVariable() {}

}
