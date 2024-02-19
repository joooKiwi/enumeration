/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                                   from "./Enumerable"
import type {EnumerableConstructor}                        from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}            from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "./EnumerableWithNullableParent"
import type {Singleton}                                    from "./Singleton"
import type {CompanionEnum}                                from "./companion/CompanionEnum"
import type {CompanionEnumDeclaration}                     from "./companion/CompanionEnum.declaration"
import type {CompanionEnumWithParent}                      from "./companion/CompanionEnumWithParent"
import type {CompanionEnumWithParentDeclaration}           from "./companion/CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParent}                 from "./companion/CompanionEnumWithGrandParent"
import type {CompanionEnumWithGrandParentDeclaration}      from "./companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParent}            from "./companion/CompanionEnumWithGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./companion/CompanionEnumWithGreatGrandParent.declaration"

/** A type-alias for {@link Singleton} for the {@link CompanionEnum} */
export type CompanionEnumSingleton<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnum<ENUM, ENUM_CONSTRUCTOR>>
/** A type-alias for {@link Singleton} for the {@link CompanionEnumDeclaration} */
export type CompanionEnumDeclarationSingleton<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>

/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithParent} */
export type CompanionEnumWithParentSingleton<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>
/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithParent} */
export type CompanionEnumWithParentDeclarationSingleton<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>

/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithGrandParent} */
export type CompanionEnumWithGrandParentSingleton<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends Enumerable,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>
/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithGrandParent} */
export type CompanionEnumWithGrandParentDeclarationSingleton<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends Enumerable,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>

/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithGreatGrandParentDeclaration} */
export type CompanionEnumWithGreatGrandParentSingleton<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclaration<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>

/** A type-alias for {@link Singleton} for the {@link CompanionEnumWithGreatGrandParentDeclaration} */
export type CompanionEnumWithGreatGrandParentDeclarationSingleton<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclaration<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGreatGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>
