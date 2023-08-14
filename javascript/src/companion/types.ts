/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants}                                from "../EnumConstants"
import type {Enumerable}                                   from "../Enumerable"
import type {CompanionOf, PossibleEnumerableMembers}       from "../Enumerable.types"
import type {EnumerableWithNullableGrandParent}            from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "../EnumerableWithNullableParent"
import type {EnumerableConstructor}                        from "../EnumerableConstructor"
import type {PossibleEdgeCaseNumericName}                  from "../general type"
import type {CompanionEnum}                                from "./CompanionEnum"
import type {CompanionEnumDeclaration}                     from "./CompanionEnum.declaration"
import type {CompanionEnumWithParent}                      from "./CompanionEnumWithParent"
import type {CompanionEnumWithParentDeclaration}           from "./CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParent}                 from "./CompanionEnumWithGrandParent"
import type {CompanionEnumWithGrandParentDeclaration}      from "./CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParent}            from "./CompanionEnumWithGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./CompanionEnumWithGreatGrandParent.declaration"

/** The <b>companion enum</b> name in a {@link Object.toString toString()} method */
export type CompanionEnumName = typeof EnumConstants["COMPANION_ENUM_TO_STRING_TAG"]


/**
 * Every possible string that throws an {@link ForbiddenNameException}
 * when being retrieving in a {@link CompanionEnumDeclaration}
 */
export type ImpossibleNames = | PossibleEdgeCaseNumericName
                              | Exclude<PossibleEnumerableMembers, typeof Symbol["toStringTag" | "toPrimitive"] | `[Symbol.${| "toStringTag" | "toPrimitive"}]` | "toStringTag" | "toPrimitive">

/**
 * The possible {@link CompanionEnumDeclaration} members itself
 * or by an inheritor (in the project)
 *
 * @see EnumConstants.EVERY_COMPANION_ENUM_MEMBERS
 */
export type PossibleCompanionEnumMembers = | keyof CompanionEnumDeclaration<never, never>
                                           | keyof CompanionEnumWithParentDeclaration<never, never, never, never>
                                           | keyof CompanionEnumWithGrandParentDeclaration<never, never, never, never, never, never>
                                           | keyof CompanionEnumWithGreatGrandParentDeclaration<never, never, never, never, never, never, never, never>

export type CompanionEnumFromEnumerableConstructorOrCompanionEnum<T extends PossibleEnumerableInstance<any>, >
    = T extends EnumerableConstructor<any, any> ? CompanionOf<T>
    : T extends CompanionEnumDeclaration<any, any> ? T : never

/** The possible {@link Enumerable} instances. Either a {@link EnumerableConstructor} or a {@link CompanionEnumDeclaration} */
export type PossibleEnumerableInstance<ENUMERABLE extends Enumerable = Enumerable, > =
    | CompanionEnumDeclarationType<ENUMERABLE>
    | CompanionEnumWithParentDeclaration<any, any, ENUMERABLE, any>
    | CompanionEnumWithGrandParentDeclaration<any, any, any, any, ENUMERABLE, any>
    | CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, ENUMERABLE, any>
    | EnumerableConstructor<ENUMERABLE, CompanionEnumDeclarationType<ENUMERABLE>>

//#region -------------------- Recursive companion enum type --------------------

export type CompanionEnumType<ENUM extends Enumerable, >
    = CompanionEnum<ENUM, EnumerableConstructor<ENUM, CompanionEnumType<ENUM>>>
export type CompanionEnumDeclarationType<ENUM extends Enumerable, >
    = CompanionEnumDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumDeclarationType<ENUM>>>

export type CompanionEnumWithParentType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclarationType<PARENT_ENUM>>>
export type CompanionEnumWithParentDeclarationType<ENUM extends EnumerableWithNullableParent<PARENT_ENUM>, PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithParentDeclarationType<ENUM, PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumDeclarationType<PARENT_ENUM>>>

export type CompanionEnumWithGrandParentType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GRAND_PARENT_ENUM>>>
export type CompanionEnumWithGrandParentDeclarationType<ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGrandParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclarationType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GRAND_PARENT_ENUM>>>

export type CompanionEnumWithGreatGrandParentType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParent<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclarationType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GREAT_GRAND_PARENT_ENUM>>>
export type CompanionEnumWithGreatGrandParentDeclarationType<ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GREAT_GRAND_PARENT_ENUM extends Enumerable, >
    = CompanionEnumWithGreatGrandParentDeclaration<ENUM, EnumerableConstructor<ENUM, CompanionEnumWithGreatGrandParentType<ENUM, PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    PARENT_ENUM, EnumerableConstructor<PARENT_ENUM, CompanionEnumWithGrandParentDeclarationType<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GRAND_PARENT_ENUM, EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumWithParentDeclarationType<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>>,
    GREAT_GRAND_PARENT_ENUM, EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumDeclarationType<GREAT_GRAND_PARENT_ENUM>>>

//#endregion -------------------- Recursive companion enum type --------------------
