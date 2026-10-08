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

import {CompanionEnumWithParent}    from "../../src/companion/CompanionEnumWithParent"
import {EmptyEnum}                  from "./EmptyEnum"
import {UnregisteredEnumWithParent} from "./UnregisteredEnumWithParent"

/** An unregistered {@link EnumWithParent} that has the purpose to be empty with nothing to specify */
export class EmptyEnumWithUnregisteredParent
    extends UnregisteredEnumWithParent<EmptyEnum> {

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnumWithUnregisteredParent
        extends CompanionEnumWithParent<EmptyEnumWithUnregisteredParent, typeof EmptyEnumWithUnregisteredParent, EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnumWithUnregisteredParent

        private constructor() {
            super(EmptyEnumWithUnregisteredParent, EmptyEnum,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithUnregisteredParent()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithUnregisteredParent() {}

}
