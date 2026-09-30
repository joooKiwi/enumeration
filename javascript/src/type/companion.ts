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

import type {Enumerable}                                   from "../Enumerable"
import type {EnumerableWithNullableGrandParent}            from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "../EnumerableWithNullableParent"
import type {EnumerableConstructor}                        from "../EnumerableConstructor"
import type {CompanionEnum}                                from "../companion/CompanionEnum"
import type {CompanionEnumDeclaration}                     from "../companion/CompanionEnum.declaration"
import type {CompanionEnumWithParent}                      from "../companion/CompanionEnumWithParent"
import type {CompanionEnumWithParentDeclaration}           from "../companion/CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParent}                 from "../companion/CompanionEnumWithGrandParent"
import type {CompanionEnumWithGrandParentDeclaration}      from "../companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParent}            from "../companion/CompanionEnumWithGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "../companion/CompanionEnumWithGreatGrandParent.declaration"

/** A type for the {@link CompanionEnum} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumType<ENUM extends Enumerable, >
    = CompanionEnum<ENUM, EnumerableConstructor<ENUM, CompanionEnumType<ENUM>>>
/** A type for the {@link CompanionEnumDeclaration} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumDeclarationType<ENUM extends Enumerable, >
    = CompanionEnumDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumDeclarationType<ENUM>>>

/** A type for the {@link CompanionEnumWithParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclarationType<PARENT_ENUM>>>
/** A type for the {@link CompanionEnumWithParentDeclaration} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithParentDeclarationType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>, PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentDeclarationType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclarationType<PARENT_ENUM>>>

/** A type for the {@link CompanionEnumWithGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GRAND_PARENT_ENUM>>>
/** A type for the {@link CompanionEnumWithGrandParentDeclaration} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGrandParentDeclarationType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclarationType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GRAND_PARENT_ENUM>>>

/** A type for the {@link CompanionEnumWithGreatGrandParent} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclarationType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GREAT_GRAND_PARENT_ENUM>>>
/** A type for the {@link CompanionEnumWithGreatGrandParentDeclaration} with its {@link EnumerableConstructor} referencing itself */
export type CompanionEnumWithGreatGrandParentDeclarationType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclarationType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GREAT_GRAND_PARENT_ENUM>>>
