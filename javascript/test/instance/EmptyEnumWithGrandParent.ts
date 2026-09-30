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
import {EnumWithGrandParent}          from "../../src/EnumWithGrandParent"
import {EmptyEnum}                    from "./EmptyEnum"
import {EmptyEnumWithParent}          from "./EmptyEnumWithParent"

/** An {@link EnumWithGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithGrandParent
    extends EnumWithGrandParent<EmptyEnumWithParent, EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithGrandParent
        extends CompanionEnumWithGrandParent<EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithGrandParent

        private constructor() {
            super(EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,)
        }

        static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithGrandParent() {}

}
