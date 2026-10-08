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

import {CompanionEnumWithGrandParent}    from "../../src/companion/CompanionEnumWithGrandParent"
import {EmptyEnum}                       from "./EmptyEnum"
import {EmptyEnumWithUnregisteredParent} from "./EmptyEnumWithUnregisteredParent"
import {UnregisteredEnumWithGrandParent} from "./UnregisteredEnumWithGrandParent"

/** An unregistered {@link EnumWithGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithUnregisteredGrandParent
    extends UnregisteredEnumWithGrandParent<EmptyEnumWithUnregisteredParent, EmptyEnum> {

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<EmptyEnumWithUnregisteredGrandParent, typeof EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithUnregisteredGrandParent
        extends CompanionEnumWithGrandParent<EmptyEnumWithUnregisteredGrandParent, typeof EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithUnregisteredGrandParent

        private constructor() {
            super(EmptyEnumWithUnregisteredGrandParent, EmptyEnumWithUnregisteredParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithUnregisteredGrandParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithUnregisteredGrandParent() {}

}
