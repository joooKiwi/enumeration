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

import {CompanionEnumWithGrandParent}          from "../../src/companion/CompanionEnumWithGrandParent"
import {EmptyEnumWithGrandParentWithVariables} from "./EmptyEnumWithGrandParentWithVariables"
import {EmptyEnumWithParentWithVariables}      from "./EmptyEnumWithParentWithVariables"
import {EmptyEnumWithVariables}                from "./EmptyEnumWithVariables"

/**
 * A {@link CompanionEnumWithGrandParent} that has the purpose to be empty with nothing to specify
 * Plus, it contains variable for the tests in the {@link EmptyEnumWithGrandParentWithVariables}, {@link EmptyEnumWithParentWithVariables} and {@link EmptyEnumWithVariables}
 */
export class EmptyCompanionEnumWithGrandParentWithVariables
    extends CompanionEnumWithGrandParent<EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

    public constructor() {
        super(EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
    }

    public methodFromEmptyCompanionEnumWithGrandParentWithVariable() {}

}
