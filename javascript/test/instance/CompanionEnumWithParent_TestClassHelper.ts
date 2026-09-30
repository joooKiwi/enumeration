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
import type {CompanionEnumDeclaration}                from "../../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}      from "../../src/companion/CompanionEnumWithParent.declaration"
import type {EnumerableWithNullableParentGeneralType} from "../../src/type/general"

import {CompanionEnumWithParent}                      from "../../src/companion/CompanionEnumWithParent"

export class CompanionEnumWithParent_TestClassHelper
    extends CompanionEnumWithParent<EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {

    public constructor(instance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                       parentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>) {
        super(instance, parentInstance,)
    }

}
