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

import type {Enumerable}                             from "../Enumerable"
import type {EnumerableWithNullableGrandParent}      from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}           from "../EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}              from "../EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}         from "../EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                   from "../EnumerableWithParent"
import type {EnumWithNullableGrandParent}            from "../EnumWithNullableGrandParent"
import type {EnumWithNullableGreatGrandParent}       from "../EnumWithNullableGreatGrandParent"
import type {EnumWithNullableParent}                 from "../EnumWithNullableParent"
import type {EnumWithGrandParent}                    from "../EnumWithGrandParent"
import type {EnumWithGreatGrandParent}               from "../EnumWithGreatGrandParent"
import type {EnumWithParent}                         from "../EnumWithParent"

/** The generic value of an {@link EnumWithNullableParent} with its default values */
export type EnumWithNullableParentGeneralType = EnumWithNullableParent<Enumerable>
/** The generic value of an {@link EnumWithParent} with its default values */
export type EnumWithParentGeneralType = EnumWithParent<Enumerable>
/** The generic value of an {@link EnumWithNullableGrandParent} with its default values */
export type EnumWithNullableGrandParentGeneralType = EnumWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithGrandParent} with its default values */
export type EnumWithGrandParentGeneralType = EnumWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithNullableGreatGrandParent} with its default values */
export type EnumWithNullableGreatGrandParentGeneralType = EnumWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>, EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumWithGreatGrandParent} with its default values */
export type EnumWithGreatGrandParentGeneralType = EnumWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>, EnumerableWithParent<Enumerable>, Enumerable>


/** The generic value of an {@link EnumerableWithNullableParent} with its default values */
export type EnumerableWithNullableParentGeneralType = EnumerableWithNullableParent<Enumerable>
/** The generic value of an {@link EnumerableWithParent} with its default values */
export type EnumerableWithParentGeneralType = EnumerableWithParent<Enumerable>
/** The generic value of an {@link EnumerableWithNullableGrandParent} with its default values */
export type EnumerableWithNullableGrandParentGeneralType = EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithGrandParent} with its default values */
export type EnumerableWithGrandParentGeneralType = EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithNullableGreatGrandParent} with its default values */
export type EnumerableWithNullableGreatGrandParentGeneralType = EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<Enumerable>, Enumerable>, EnumerableWithNullableParent<Enumerable>, Enumerable>
/** The generic value of an {@link EnumerableWithGreatGrandParent} with its default values */
export type EnumerableWithGreatGrandParentGeneralType = EnumerableWithGreatGrandParent<EnumerableWithGrandParent<EnumerableWithParent<Enumerable>, Enumerable>, EnumerableWithParent<Enumerable>, Enumerable>

//TODO: Add general type for the companionEnum too
