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

import type {CompanionEnumWithGrandParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {EnumWithNullableGrandParent}  from "../../src/EnumWithNullableGrandParent"
import {EmptyEnum}                    from "./EmptyEnum"
import {EmptyEnumWithNullableParent}  from "./EmptyEnumWithNullableParent"

/** An {@link EnumWithNullableGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithNullableGrandParent
    extends EnumWithNullableGrandParent<EmptyEnumWithNullableParent, EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<EmptyEnumWithNullableGrandParent, typeof EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithNullableGrandParent
        extends CompanionEnumWithGrandParent<EmptyEnumWithNullableGrandParent, typeof EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithNullableGrandParent

        private constructor() {
            super(EmptyEnumWithNullableGrandParent, EmptyEnumWithNullableParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithNullableGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithNullableGrandParent() {}

}
