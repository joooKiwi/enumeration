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

import type {Enumerable}                                                                                                                                      from "../Enumerable"
import type {EnumerableWithNullableGreatGrandParent}                                                                                                          from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableGrandParent}                                                                                                               from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                    from "../EnumerableWithNullableParent"
import type {EnumerableConstructor}                                                                                                                           from "../EnumerableConstructor"
import type {Singleton}                                                                                                                                       from "../Singleton"
import type {CompanionEnumerable}                                                                                                                             from "../companion/CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}                                                                                                              from "../companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent}                                                                                                         from "../companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}                                                                                                                   from "../companion/CompanionEnumerableWithParent"
import type {CompanionEnumerableType, CompanionEnumerableWithGrandParentType, CompanionEnumerableWithGreatGrandParentType, CompanionEnumerableWithParentType} from "./companion"
import type {OrdinalOf, SpecificOrdinalOf}                                                                                                                    from "./ordinalOf"
import type {NameOf, SpecificNameOf}                                                                                                                          from "./nameOf"

/** @deprecated Replace with {@link ValueBySpecificOrdinal} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = ENUM_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueBySpecificName} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = ENUM_CONSTRUCTOR[& SpecificNameOf<NAME, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueByOrdinal} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& OrdinalOf<ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueByName} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& NameOf<ENUM> & keyof ENUM_CONSTRUCTOR]

/** @deprecated Replace with {@link OrdinalByName} instead. This will be removed in version 3.14 */
export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUM_CONSTRUCTOR[& NAME & keyof ENUM_CONSTRUCTOR] & ENUM>
/** @deprecated Replace with {@link NameByOrdinal} instead. This will be removed in version 3.14 */
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUM_CONSTRUCTOR[& ORDINAL & keyof ENUM_CONSTRUCTOR] & ENUM>

/**
 * A type for the {@link CompanionEnumerable} with its {@link EnumerableConstructor} referencing itself
 *
 * @deprecated Replace with {@link CompanionEnumerableType} instead. This will be removed in version 3.14
 */
export type CompanionEnumDeclarationType<ENUM extends Enumerable, >
    = CompanionEnumerable<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableType<ENUM>>>
/**
 * A type-alias for {@link Singleton} for the {@link CompanionEnumerable}
 *
 * @deprecated Replace with {@link CompanionEnumerableSingleton} instead. This will be removed in version 3.14
 */
export type CompanionEnumDeclarationSingleton<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type for the {@link CompanionEnumerableWithParent} with its {@link EnumerableConstructor} referencing itself
 *
 * @deprecated Replace with {@link CompanionEnumerableWithParentType} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithParentDeclarationType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>, PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableType<PARENT_ENUM>>>
/**
 * A type-alias for {@link Singleton} for the {@link CompanionEnumWithParent}
 *
 * @deprecated Replace with {@link CompanionEnumerableWithParentSingleton} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithParentDeclarationSingleton<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerable<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>

/**
 * A type for the {@link CompanionEnumerableWithGrandParent} with its {@link EnumerableConstructor} referencing itself
 *
 * @deprecated Replace with {@link CompanionEnumerableWithGrandParentType} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithGrandParentDeclarationType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParentType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableType<GRAND_PARENT_ENUM>>>
/**
 * A type-alias for {@link Singleton} for the {@link CompanionEnumWithGrandParent}
 *
 * @deprecated Replace with {@link CompanionEnumerableWithGrandParentSingleton} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithGrandParentDeclarationSingleton<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends Enumerable,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerable<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>

/**
 * A type for the {@link CompanionEnumerableWithGreatGrandParent} with its {@link EnumerableConstructor} referencing itself
 *
 * @deprecated Replace with {@link CompanionEnumerableWithGreatGrandParentType} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithGreatGrandParentDeclarationType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParentType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParentType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerableType<GREAT_GRAND_PARENT_ENUM>>>
/**
 * A type-alias for {@link Singleton} for the {@link CompanionEnumerableWithGreatGrandParent}
 *
 * @deprecated Replace with {@link CompanionEnumerableWithGreatGrandParentSingleton} instead. This will be removed in version 3.14
 */
export type CompanionEnumWithGreatGrandParentDeclarationSingleton<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParent<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerable<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>

