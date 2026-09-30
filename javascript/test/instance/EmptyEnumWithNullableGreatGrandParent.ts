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

import type {CompanionEnumWithGreatGrandParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EnumWithNullableGreatGrandParent}  from "../../src/EnumWithNullableGreatGrandParent"
import {EmptyEnum}                         from "./EmptyEnum"
import {EmptyEnumWithNullableGrandParent}  from "./EmptyEnumWithNullableGrandParent"
import {EmptyEnumWithNullableParent}       from "./EmptyEnumWithNullableParent"

/** An {@link EnumWithNullableGreatGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithNullableGreatGrandParent
    extends EnumWithNullableGreatGrandParent<EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EmptyEnumWithNullableGreatGrandParent, typeof EmptyEnumWithNullableGreatGrandParent, EmptyEnumWithNullableGrandParent, typeof EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithNullableGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<EmptyEnumWithNullableGreatGrandParent, typeof EmptyEnumWithNullableGreatGrandParent, EmptyEnumWithNullableGrandParent, typeof EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithNullableGreatGrandParent

        private constructor() {
            super(EmptyEnumWithNullableGreatGrandParent, EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, EmptyEnum,)
        }

        static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithNullableGreatGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithNullableGreatGrandParent() {}

}
