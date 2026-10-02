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

import type {Enumerable}                              from "../Enumerable"
import type {EnumerableConstructor}                   from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}       from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}  from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}            from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                     from "./CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}      from "./CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent} from "./CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}           from "./CompanionEnumerableWithParent"

/** @deprecated Replace with {@link CompanionEnumerableWithGreatGrandParent} instead. This will be removed in version 3.14 */
export interface CompanionEnumWithGreatGrandParentDeclaration<out ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParent<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerable<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR> {
}
