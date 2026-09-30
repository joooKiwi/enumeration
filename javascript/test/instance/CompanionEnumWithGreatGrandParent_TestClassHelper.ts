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
import type {CompanionEnumDeclaration}                                                                                                                 from "../../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                  from "../../src/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}                                                                                             from "../../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                       from "../../src/companion/CompanionEnumWithParent.declaration"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../../src/type/general"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"

export class CompanionEnumWithGreatGrandParent_TestClassHelper
    extends CompanionEnumWithGreatGrandParent<EnumerableWithNullableGreatGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, any, any>>,
        EnumerableWithNullableGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
        EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {

    public constructor(instance: EnumerableConstructor<any, CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, any, any>>,
                       parentInstance: EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
                       grandParentInstance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                       greatGrandParentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>,) {
        super(instance, parentInstance, grandParentInstance, greatGrandParentInstance,)
    }

}
