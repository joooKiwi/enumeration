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

export class BasicEnum<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends Enum<ORDINAL, NAME> {

    public static readonly A = new BasicEnum<0, 'A'>()
    public static readonly B = new BasicEnum<1, 'B'>()
    public static readonly C = new BasicEnum<2, 'C'>()
    public static readonly D = new BasicEnum<3, 'D'>()

    private constructor() { super() }

    public static CompanionEnum = class CompanionEnum_BasicEnum
        extends CompanionEnum<BasicEnum, any> {

        static #instance?: CompanionEnum_BasicEnum
        private constructor() { super(BasicEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_BasicEnum() }

    }

}
