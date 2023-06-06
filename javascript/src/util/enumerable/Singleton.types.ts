import type {Enumerable}                                   from "./Enumerable"
import type {EnumerableConstructor}                        from "./EnumerableConstructor"
import type {EnumerableWithGrandParent}                    from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}               from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                         from "./EnumerableWithParent"
import type {PossibleNameOf, PossibleOrdinalOf}            from "./Enumerable.types"
import type {Singleton}                                    from "./Singleton"
import type {BasicCompanionEnum}                           from "./companion/BasicCompanionEnum"
import type {BasicCompanionEnumDeclaration}                from "./companion/BasicCompanionEnum.declaration"
import type {CompanionEnumWithParent}                      from "./companion/CompanionEnumWithParent"
import type {CompanionEnumWithParentDeclaration}           from "./companion/CompanionEnumWithParent.declaration"
import type {CompanionEnumWithGrandParent}                 from "./companion/CompanionEnumWithGrandParent"
import type {CompanionEnumWithGrandParentDeclaration}      from "./companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParent}            from "./companion/CompanionEnumWithGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./companion/CompanionEnumWithGreatGrandParent.declaration"

/** A simple type-alias for {@link Singleton} for the {@link BasicCompanionEnum} */
export type BasicCompanionEnumSingleton<ENUMERABLE extends Enumerable,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, BasicCompanionEnumDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>, >
    = Singleton<BasicCompanionEnum<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>>

/** A simple type-alias for {@link Singleton} for the {@link CompanionEnumWithParent} */
export type CompanionEnumWithParentSingleton<ENUMERABLE extends EnumerableWithParent<PossibleOrdinalOf<number, PARENT_ENUMERABLE>, PossibleNameOf<string, PARENT_ENUMERABLE>, PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends Enumerable,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithParent<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>

/** A simple type-alias for {@link Singleton} for the {@link CompanionEnumWithGrandParent} */
export type CompanionEnumWithGrandParentSingleton<ENUMERABLE extends EnumerableWithGrandParent<PossibleOrdinalOf<number, PARENT_ENUMERABLE>, PossibleNameOf<string, PARENT_ENUMERABLE>, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithParent<PossibleOrdinalOf<number, GRAND_PARENT_ENUMERABLE>, PossibleNameOf<string, GRAND_PARENT_ENUMERABLE>, GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends Enumerable,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGrandParent<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>

/** A simple type-alias for {@link Singleton} for the {@link CompanionEnumWithGreatGrandParent} */
export type CompanionEnumWithGreatGrandParentSingleton<ENUMERABLE extends EnumerableWithGreatGrandParent<number, string, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGreatGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithGrandParent<number, string, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithGrandParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends EnumerableWithParent<number, string, GREAT_GRAND_PARENT_ENUMERABLE>,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUMERABLE extends Enumerable,
    GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    = Singleton<CompanionEnumWithGreatGrandParent<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>
