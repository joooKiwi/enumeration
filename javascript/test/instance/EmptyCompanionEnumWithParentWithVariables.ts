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

import {CompanionEnumWithParent}          from "../../src/companion/CompanionEnumWithParent"
import {EmptyEnumWithParentWithVariables} from "./EmptyEnumWithParentWithVariables"
import {EmptyEnumWithVariables}           from "./EmptyEnumWithVariables"

/**
 * A {@link CompanionEnumWithParent} that has the purpose to be empty with nothing to specify
 * Plus, it contains variable for the tests in the {@link EmptyEnumWithParentWithVariables} and {@link EmptyEnumWithVariables}
 */
export class EmptyCompanionEnumWithParentWithVariables
    extends CompanionEnumWithParent<EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

    public constructor() {
        super(EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
    }

    public methodFromEmptyCompanionEnumWithParentWithVariable() {}

}
