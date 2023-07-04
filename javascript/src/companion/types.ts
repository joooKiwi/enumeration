/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants}                                from "../EnumConstants"
import type {Enumerable}                                   from "../Enumerable"
import type {CompanionOf}                                  from "../Enumerable.types"
import type {EnumerableConstructor}                        from "../EnumerableConstructor"
import type {CompanionEnumDeclaration}                     from "./CompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}           from "./CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "./CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./CompanionEnumWithGreatGrandParent.declaration"

/** The <b>companion enum</b> name in a {@link Object.toString toString()} method */
export type CompanionEnumName = typeof EnumConstants["COMPANION_ENUM_TO_STRING_TAG"]

export type CompanionEnumFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance<any>, >
    = T extends EnumerableConstructor<any, any> ? CompanionOf<T>
    : T extends CompanionEnumDeclaration<any, any> ? T : never

/** The possible {@link Enumerable} instances. Either a {@link EnumerableConstructor} or a {@link CompanionEnumDeclaration} */
export type PossibleEnumerableInstance<ENUMERABLE extends Enumerable = Enumerable, > =
    | CompanionEnumDeclaration<ENUMERABLE, any>
    | CompanionEnumWithParentDeclaration<any, any, ENUMERABLE, any>
    | CompanionEnumWithGrandParentDeclaration<any, any, any, any, ENUMERABLE, any>
    | CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, ENUMERABLE, any>
    | EnumerableConstructor<ENUMERABLE, any>
