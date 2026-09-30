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
import {EnumWithParent}          from "../../src/EnumWithParent"
import {EmptyEnum}               from "./EmptyEnum"

/** An {@link EnumWithParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithParent
    extends EnumWithParent<EmptyEnum, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithParent
        extends CompanionEnumWithParent<EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithParent

        private constructor() {
            super(EmptyEnumWithParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithParent() {}

}
