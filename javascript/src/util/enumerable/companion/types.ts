/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants}                                           from "../EnumConstants"
import type {Enumerable}                                              from "../Enumerable"
import type {CompanionOf, NameOf, OrdinalOf, PossibleEnumerableValue} from "../Enumerable.types"
import type {EnumerableConstructor}                                   from "../EnumerableConstructor"
import type {BasicCompanionEnumDeclaration}                           from "./BasicCompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                      from "./CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                 from "./CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}            from "./CompanionEnumWithGreatGrandParent.declaration"

/** The <b>companion enum</b> name in a {@link Object.toString toString()} method */
export type CompanionEnumName = typeof EnumConstants["COMPANION_ENUM_TO_STRING_TAG"]

export type CompanionEnumFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance<any>, >
    = T extends EnumerableConstructor<any, any> ? CompanionOf<T>
    : T extends BasicCompanionEnumDeclaration<any, any> ? T : never
export type EnumerableConstructorFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance<any>, >
    = T extends EnumerableConstructor<any, any> ? T
    : T extends BasicCompanionEnumDeclaration<any, any> ? T["instance"] : never

/** The possible {@link Enumerable} instances. Either a {@link EnumerableConstructor} or a {@link BasicCompanionEnumDeclaration} */
export type PossibleEnumerableInstance<ENUMERABLE extends Enumerable = Enumerable, > =
    | BasicCompanionEnumDeclaration<ENUMERABLE, any>
    | CompanionEnumWithParentDeclaration<any, any, ENUMERABLE, any>
    | CompanionEnumWithGrandParentDeclaration<any, any, any, any, ENUMERABLE, any>
    | CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, ENUMERABLE, any>
    | EnumerableConstructor<ENUMERABLE, any>

export type CompanionEnumIfNameOfEnumerable<NAME extends string,
    ENUMERABLE extends Enumerable,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>,
    COMPANION_ENUM extends BasicCompanionEnumDeclaration<any, any>, >
    = NAME extends (& keyof ENUMERABLE_CONSTRUCTOR & NameOf<ENUMERABLE>) ? COMPANION_ENUM : never
export type CompanionEnumIfOrdinalOfEnumerable<ORDINAL extends number,
    ENUMERABLE extends Enumerable,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>,
    COMPANION_ENUM extends BasicCompanionEnumDeclaration<any, any>, >
    = ORDINAL extends (& keyof ENUMERABLE_CONSTRUCTOR & OrdinalOf<ENUMERABLE>) ? COMPANION_ENUM : never

export type CompanionEnumIfOrdinalOrNameOfEnumerable<ENUMERABLE extends Enumerable,
    INSTANCE extends PossibleEnumerableInstance<any>,
    VALUE extends PossibleEnumerableValue<any>, >
    = & VALUE extends (| OrdinalOf<ENUMERABLE> | `${OrdinalOf<ENUMERABLE>}` | NameOf<ENUMERABLE> | ENUMERABLE) ? CompanionEnumFromEnumerableConstructorOrCompanionEnum<INSTANCE> : never
