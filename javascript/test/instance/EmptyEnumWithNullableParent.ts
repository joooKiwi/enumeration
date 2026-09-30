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

import type {CompanionEnumWithParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {EnumWithNullableParent}  from "../../src/EnumWithNullableParent"
import {EmptyEnum}               from "./EmptyEnum"

/** An {@link EnumWithParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithNullableParent
    extends EnumWithNullableParent<EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithNullableParent
        extends CompanionEnumWithParent<EmptyEnumWithNullableParent, typeof EmptyEnumWithNullableParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithNullableParent

        private constructor() {
            super(EmptyEnumWithNullableParent, EmptyEnum,)
        }

        static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithNullableParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithNullableParent() {}

}
