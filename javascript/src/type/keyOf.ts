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
import type {CompanionEnumerable}                     from "../companion/CompanionEnumerable"
import type {CompanionEnumerableWithGrandParent}      from "../companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGreatGrandParent} from "../companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithParent}           from "../companion/CompanionEnumerableWithParent"

/** The keys applicable to an {@link Enumerable} */
export type KeyOfEnumerable = keyof Enumerable<never, never>

/** The keys applicable to an {@link EnumerableWithParent} or an {@link EnumerableWithNullableParent} */
export type KeyOfEnumerableWithParent = keyof EnumerableWithNullableParent<never, never, never>

/** The keys applicable to an {@link EnumerableWithGrandParent} or an {@link EnumerableWithNullableGrandParent} */
export type KeyOfEnumerableWithGrandParent = keyof EnumerableWithNullableGrandParent<never, never, never, never>

/** The keys applicable to an {@link EnumerableWithGreatGrandParent} or an {@link EnumerableWithNullableGreatGrandParent} */
export type KeyOfEnumerableWithGreatGrandParent = keyof EnumerableWithNullableGreatGrandParent<never, never, never, never, never>


/** The keys applicable to an {@link CompanionEnumerable} */
export type KeyOfCompanionEnum = keyof CompanionEnumerable<never, never>

/** The keys applicable to an {@link CompanionEnumerableWithParent} */
export type KeyOfCompanionEnumWithParent = keyof CompanionEnumerableWithParent<never, never, never, never>

/** The keys applicable to an {@link CompanionEnumerableWithGrandParent} */
export type KeyOfCompanionEnumWithGrandParent = keyof CompanionEnumerableWithGrandParent<never, never, never, never, never, never>

/** The keys applicable to an {@link CompanionEnumerableWithGreatGrandParent} */
export type KeyOfCompanionEnumWithGreatGrandParent = keyof CompanionEnumerableWithGreatGrandParent<never, never, never, never, never, never, never, never>
