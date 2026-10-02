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

import type {Enumerable}                              from "../../src/Enumerable"
import type {EnumerableConstructor}                   from "../../src/EnumerableConstructor"
import type {CompanionEnumerable}                     from "../../src/companion/CompanionEnumerable"
import type {CompanionEnumerableWithParent}           from "../../src/companion/CompanionEnumerableWithParent"
import type {EnumerableWithNullableParentGeneralType} from "../../src/type/general"

import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"

export class CompanionEnumWithParent_TestClassHelper
    extends CompanionEnumWithParent<EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumerableWithParent<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumerable<any, any>>> {

    public constructor(instance: EnumerableConstructor<any, CompanionEnumerableWithParent<any, any, any, any>>,
                       parentInstance: EnumerableConstructor<any, CompanionEnumerable<any, any>>) {
        super(instance, parentInstance,)
    }

}
