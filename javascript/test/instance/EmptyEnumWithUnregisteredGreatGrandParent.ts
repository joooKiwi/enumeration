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

import {CompanionEnumWithGreatGrandParent}    from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EmptyEnum}                            from "./EmptyEnum"
import {EmptyEnumWithUnregisteredParent}      from "./EmptyEnumWithUnregisteredParent"
import {UnregisteredEnumWithGreatGrandParent} from "./UnregisteredEnumWithGreatGrandParent"
import {EmptyEnumWithUnregisteredGrandParent} from "./EmptyEnumWithUnregisteredGrandParent"

/** An unregistered {@link EnumWithGreatGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithUnregisteredGreatGrandParent
    extends UnregisteredEnumWithGreatGrandParent<EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, EmptyEnum> {

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EmptyEnumWithUnregisteredGreatGrandParent, typeof EmptyEnumWithUnregisteredGreatGrandParent, EmptyEnumWithUnregisteredGrandParent, typeof EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithUnregisteredGrandParent
        extends CompanionEnumWithGreatGrandParent<EmptyEnumWithUnregisteredGreatGrandParent, typeof EmptyEnumWithUnregisteredGreatGrandParent, EmptyEnumWithUnregisteredGrandParent, typeof EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithUnregisteredGrandParent

        private constructor() {
            super(EmptyEnumWithUnregisteredGreatGrandParent, EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithUnregisteredGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithUnregisteredGreatGrandParent() {}

}
