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
import type {EnumerableWithNullableGrandParent}       from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}  from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}            from "../EnumerableWithNullableParent"
import type {EnumerableConstructor}                   from "../EnumerableConstructor"
import type {CompanionEnum}                           from "../companion/CompanionEnum"
import type {CompanionEnumerable}                     from "../companion/CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}      from "../companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent} from "../companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}           from "../companion/CompanionEnumerableWithParent"
import type {CompanionEnumWithParent}                 from "../companion/CompanionEnumWithParent"
import type {CompanionEnumWithGrandParent}            from "../companion/CompanionEnumWithGrandParent"
import type {CompanionEnumWithGreatGrandParent}       from "../companion/CompanionEnumWithGreatGrandParent"

/** A type for the {@link CompanionEnum} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumType<ENUM extends Enumerable, >
    = CompanionEnum<ENUM, EnumerableConstructor<ENUM, CompanionEnumType<ENUM>>>
/** A type for the {@link CompanionEnumerable} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumerableType<ENUM extends Enumerable, >
    = CompanionEnumerable<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableType<ENUM>>>

/** A type for the {@link CompanionEnumWithParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableType<PARENT_ENUM>>>
/** A type for the {@link CompanionEnumerableWithParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumerableWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>, PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableType<PARENT_ENUM>>>

/** A type for the {@link CompanionEnumWithGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParentType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableType<GRAND_PARENT_ENUM>>>
/** A type for the {@link CompanionEnumerableWithGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumerableWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParentType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableType<GRAND_PARENT_ENUM>>>

/** A type for the {@link CompanionEnumWithGreatGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParentType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParentType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerableType<GREAT_GRAND_PARENT_ENUM>>>
/** A type for the {@link CompanionEnumerableWithGreatGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumerableWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParentType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParentType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerableType<GREAT_GRAND_PARENT_ENUM>>>
