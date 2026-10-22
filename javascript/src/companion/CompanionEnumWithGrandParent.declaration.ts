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

import type {Enumerable}                         from "../Enumerable"
import type {EnumerableConstructor}              from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}  from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}       from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                from "./CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent} from "./CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithParent}      from "./CompanionEnumerableWithParent"

/** @deprecated Replace with {@link CompanionEnumerableWithGrandParent} instead. This will be removed in version 3.14 */
export interface CompanionEnumWithGrandParentDeclaration<out ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GRAND_PARENT_ENUM extends Enumerable,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerable<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR> {
}
