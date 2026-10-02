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

import type {Enumerable}                                                                                                                               from "../../src/Enumerable"
import type {EnumerableConstructor}                                                                                                                    from "../../src/EnumerableConstructor"
import type {CompanionEnumerable}                                                                                                                      from "../../src/companion/CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}                                                                                                       from "../../src/companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent}                                                                                                  from "../../src/companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}                                                                                                            from "../../src/companion/CompanionEnumerableWithParent"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../../src/type/general"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"

export class CompanionEnumWithGreatGrandParent_TestClassHelper
    extends CompanionEnumWithGreatGrandParent<EnumerableWithNullableGreatGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumerableWithGreatGrandParent<any, any, any, any, any, any, any, any>>,
        EnumerableWithNullableGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumerableWithGrandParent<any, any, any, any, any, any>>,
        EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumerableWithParent<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumerable<any, any>>> {

    public constructor(instance: EnumerableConstructor<any, CompanionEnumerableWithGreatGrandParent<any, any, any, any, any, any, any, any>>,
                       parentInstance: EnumerableConstructor<any, CompanionEnumerableWithGrandParent<any, any, any, any, any, any>>,
                       grandParentInstance: EnumerableConstructor<any, CompanionEnumerableWithParent<any, any, any, any>>,
                       greatGrandParentInstance: EnumerableConstructor<any, CompanionEnumerable<any, any>>,) {
        super(instance, parentInstance, grandParentInstance, greatGrandParentInstance,)
    }

}
