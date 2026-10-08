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

import {Enum}          from "../../src/Enum"
import {CompanionEnum} from "../../src/companion/CompanionEnum"

export class BasicEnum
    extends Enum<0, 'A'> {

    public static readonly A = new BasicEnum()

    private constructor() { super() }

    public static CompanionEnum = class CompanionEnum_BasicEnum
        extends CompanionEnum<BasicEnum, any> {

        static #instance?: CompanionEnum_BasicEnum
        private constructor() { super(BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnum() }

    }

}
