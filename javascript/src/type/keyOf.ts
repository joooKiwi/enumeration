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
import type {CompanionEnumDeclaration}                     from "../companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "../companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "../companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}           from "../companion/CompanionEnumWithParent.declaration"

/** The keys applicable to an {@link Enumerable} */
export type KeyOfEnumerable = keyof Enumerable<never, never>

/** The keys applicable to an {@link EnumerableWithParent} or an {@link EnumerableWithNullableParent} */
export type KeyOfEnumerableWithParent = keyof EnumerableWithNullableParent<never, never, never>

/** The keys applicable to an {@link EnumerableWithGrandParent} or an {@link EnumerableWithNullableGrandParent} */
export type KeyOfEnumerableWithGrandParent = keyof EnumerableWithNullableGrandParent<never, never, never, never>

/** The keys applicable to an {@link EnumerableWithGreatGrandParent} or an {@link EnumerableWithNullableGreatGrandParent} */
export type KeyOfEnumerableWithGreatGrandParent = keyof EnumerableWithNullableGreatGrandParent<never, never, never, never, never>


/** The keys applicable to an {@link CompanionEnumDeclaration} */
export type KeyOfCompanionEnum = keyof CompanionEnumDeclaration<never, never>

/** The keys applicable to an {@link CompanionEnumWithParentDeclaration} */
export type KeyOfCompanionEnumWithParent = keyof CompanionEnumWithParentDeclaration<never, never, never, never>

/** The keys applicable to an {@link CompanionEnumWithGrandParentDeclaration} */
export type KeyOfCompanionEnumWithGrandParent = keyof CompanionEnumWithGrandParentDeclaration<never, never, never, never, never, never>

/** The keys applicable to an {@link CompanionEnumWithGreatGrandParentDeclaration} */
export type KeyOfCompanionEnumWithGreatGrandParent = keyof CompanionEnumWithGreatGrandParentDeclaration<never, never, never, never, never, never, never, never>
