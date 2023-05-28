import type {EnumConstants}                                           from "enumerable/EnumConstants"
import type {Enumerable}                                              from "enumerable/Enumerable"
import type {CompanionOf, NameOf, OrdinalOf, PossibleEnumerableValue} from "enumerable/Enumerable.types"
import type {EnumerableConstructor}                                   from "enumerable/EnumerableConstructor"
import type {BasicCompanionEnumDeclaration}                           from "enumerable/companion/BasicCompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                      from "enumerable/companion/CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                 from "enumerable/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}            from "enumerable/companion/CompanionEnumWithGreatGrandParent.declaration"

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
