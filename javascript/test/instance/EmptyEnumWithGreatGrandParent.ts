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
import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {EmptyEnum}                         from "./EmptyEnum"
import {EmptyEnumWithGrandParent}          from "./EmptyEnumWithGrandParent"
import {EmptyEnumWithParent}               from "./EmptyEnumWithParent"

/** An {@link EnumWithGreatGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithGreatGrandParent
    extends EnumWithGreatGrandParent<EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EmptyEnumWithGreatGrandParent, typeof EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<EmptyEnumWithGreatGrandParent, typeof EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithGreatGrandParent

        private constructor() {
            super(EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithGreatGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithGreatGrandParent() {}

}
