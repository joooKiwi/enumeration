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

import type {CompanionEnumSingleton} from "../../src/type/singleton"

import {Enum} from "../../src/Enum"
import {CompanionEnum} from "../../src/companion/CompanionEnum"

/** An {@link Enum} that has the purpose to be empty with nothing to specify */
export class EmptyEnum
    extends Enum<never, never> {

    public static readonly CompanionEnum: CompanionEnumSingleton<EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnum
        extends CompanionEnum<EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnum

        private constructor() {
            super(EmptyEnum,)
        }

        static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnum()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnum() {}

}
