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

/**
 * A type for the {@link CompanionEnum} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnum}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`,
 *             {@link CompanionEnum}<…>>>
 *
 * @see CompanionEnumerableType
 * @see CompanionEnumWithParentType
 * @see CompanionEnumWithGrandParentType
 * @see CompanionEnumWithGreatGrandParentType
 */
export type CompanionEnumType<ENUM extends Enumerable, >
    = CompanionEnum<ENUM, EnumerableConstructor<ENUM, CompanionEnumType<ENUM>>>
/**
 * A type for the {@link CompanionEnumerable} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumerable}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`,
 *             {@link CompanionEnumerable}<…>>>
 *
 * @see CompanionEnumType
 * @see CompanionEnumerableWithParentType
 * @see CompanionEnumerableWithGrandParentType
 * @see CompanionEnumerableWithGreatGrandParentType
 */
export type CompanionEnumerableType<ENUM extends Enumerable, >
    = CompanionEnumerable<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableType<ENUM>>>

/**
 * A type for the {@link CompanionEnumWithParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumWithParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumWithParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumerableType}<`PARENT_ENUM`>>
 *
 * @see CompanionEnumType
 * @see CompanionEnumerableWithParentType
 * @see CompanionEnumWithGrandParentType
 * @see CompanionEnumWithGreatGrandParentType
 */
export type CompanionEnumWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableType<PARENT_ENUM>>>
/**
 * A type for the {@link CompanionEnumerableWithParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumWithParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumWithParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumType}<`PARENT_ENUM`>>
 *
 * @see CompanionEnumerableType
 * @see CompanionEnumWithParentType
 * @see CompanionEnumerableWithGrandParentType
 * @see CompanionEnumerableWithGreatGrandParentType
 */
export type CompanionEnumerableWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableType<PARENT_ENUM>>>

/**
 * A type for the {@link CompanionEnumWithGrandParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumWithGrandParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumWithGrandParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumerableWithParentType}<`PARENT_ENUM`>,
 *         `GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableType}<`GRAND_PARENT_ENUM`>>
 *
 * @see CompanionEnumType
 * @see CompanionEnumWithParentType
 * @see CompanionEnumerableWithGrandParentType
 * @see CompanionEnumWithGreatGrandParentType
 */
export type CompanionEnumWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParentType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableType<GRAND_PARENT_ENUM>>>
/**
 * A type for the {@link CompanionEnumerableWithGrandParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumerableWithGrandParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumerableWithGrandParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumerableWithParentType}<`PARENT_ENUM`>,
 *         `GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableType}<`GRAND_PARENT_ENUM`>>
 *
 * @see CompanionEnumerablType
 * @see CompanionEnumerablWithParentType
 * @see CompanionEnumWithGrandParentType
 * @see CompanionEnumerablWithGreatGrandParentType
 */
export type CompanionEnumerableWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithParentType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableType<GRAND_PARENT_ENUM>>>

/**
 * A type for the {@link CompanionEnumWithGreatGrandParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumWithGreatGrandParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumWithGreatGrandParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumerableWithGrandParentType}<`PARENT_ENUM`>,
 *         `GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableWithParentType}<`GRAND_PARENT_ENUM`>,
 *         `GREAT_GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableType}<`GREAT_GRAND_PARENT_ENUM`>>
 *
 * @see CompanionEnumType
 * @see CompanionEnumWithParentType
 * @see CompanionEnumWithGrandParentType
 * @see CompanionEnumerableWithGreatGrandParentType
 */
export type CompanionEnumWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParentType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParentType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerableType<GREAT_GRAND_PARENT_ENUM>>>
/**
 * A type for the {@link CompanionEnumerableWithGreatGrandParent} with recursive types
 *
 * The type is equivalent to using
 *     {@link CompanionEnumerableWithGreatGrandParent}<`ENUM`,
 *         {@link EnumerableConstructor}<`ENUM`, {@link CompanionEnumerableWithGreatGrandParent}<…>>,
 *         `PARENT_ENUM`,
 *         {@link CompanionEnumerableWithGrandParentType}<`PARENT_ENUM`>,
 *         `GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableWithParentType}<`GRAND_PARENT_ENUM`>,
 *         `GREAT_GRAND_PARENT_ENUM`,
 *         {@link CompanionEnumerableType}<`GREAT_GRAND_PARENT_ENUM`>>
 *
 * @see CompanionEnumerableType
 * @see CompanionEnumerableWithParentType
 * @see CompanionEnumerableWithGrandParentType
 * @see CompanionEnumWithGreatGrandParentType
 */
export type CompanionEnumerableWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumerableWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParentType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParentType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerableType<GREAT_GRAND_PARENT_ENUM>>>
