/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {BasicEnumByEnum, BasicEnumByEnumerable, BasicEnumByGrandParentEnumerable, BasicEnumByGrandParentEnum, BasicEnumByParentEnumerable, BasicEnumByParentEnum, BasicEnumByGreatGrandParentEnumerable, BasicEnumByGreatGrandParentEnum} from "./BasicEnums"

import type {Enumerable}                                   from "../src/Enumerable"
import type {EnumerableWithGrandParent}                    from "../src/EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}               from "../src/EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                         from "../src/EnumerableWithParent"
import {CompanionEnum}                                     from "../src/companion/CompanionEnum"
import type {CompanionEnumDeclaration}                     from "../src/companion/CompanionEnum.declaration"
import {CompanionEnumWithGrandParent}                      from "../src/companion/CompanionEnumWithGrandParent"
import type {CompanionEnumWithGrandParentDeclaration}      from "../src/companion/CompanionEnumWithGrandParent.declaration"
import {CompanionEnumWithGreatGrandParent}                 from "../src/companion/CompanionEnumWithGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import {CompanionEnumWithParent}                           from "../src/companion/CompanionEnumWithParent"
import type {CompanionEnumWithParentDeclaration}           from "../src/companion/CompanionEnumWithParent.declaration"

export class BasicCompanionEnumByBasicCompanionEnum extends CompanionEnum<Enumerable, any> {
    constructor() { super(BasicEnumByEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithParent extends CompanionEnumWithParent<EnumerableWithParent, any, Enumerable, any> {
    constructor() { super(BasicEnumByParentEnum, BasicEnumByEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGrandParent extends CompanionEnumWithGrandParent<EnumerableWithGrandParent, any, EnumerableWithParent, any, Enumerable, any> {
    constructor() { super(BasicEnumByGrandParentEnum, BasicEnumByParentEnum, BasicEnumByEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParent extends CompanionEnumWithGreatGrandParent<EnumerableWithGreatGrandParent, any, EnumerableWithGrandParent, any, EnumerableWithParent, any, Enumerable, any> {
    constructor() { super(BasicEnumByGreatGrandParentEnum, BasicEnumByGrandParentEnum, BasicEnumByParentEnum, BasicEnumByEnum,) }
}

export class BasicCompanionEnumByBasicCompanionEnumDeclaration implements CompanionEnumDeclaration<Enumerable, any> {

    get instance() { return BasicEnumByEnumerable }

    get default(): never { throw new Error() }
    set default(_value: unknown,) {}
    setDefault(): never { throw new Error() }

    get values(): never { throw new Error() }
    get names(): never { throw new Error() }
    get ordinals(): never { throw new Error() }
    get iterator(): never { throw new Error() }

    getValue(): never { throw new Error() }
    getName(): never { throw new Error() }
    getOrdinal(): never { throw new Error() }

    [Symbol.iterator](): never { throw new Error() }
    get [Symbol.toStringTag](): never { throw new Error() }

}
export class BasicCompanionEnumByCompanionEnumWithParentDeclaration implements CompanionEnumWithParentDeclaration<EnumerableWithParent, any, Enumerable, any> {

    get parentInstance() { return BasicEnumByParentEnumerable }
    get instance() { return BasicEnumByEnumerable }

    get default(): never { throw new Error() }
    set default(_value: unknown,) {}
    setDefault(): never { throw new Error() }

    get values(): never { throw new Error() }
    get names(): never { throw new Error() }
    get ordinals(): never { throw new Error() }
    get iterator(): never { throw new Error() }

    getValue(): never { throw new Error() }
    getName(): never { throw new Error() }
    getOrdinal(): never { throw new Error() }

    [Symbol.iterator](): never { throw new Error() }
    get [Symbol.toStringTag](): never { throw new Error() }

}
export class BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration implements CompanionEnumWithGrandParentDeclaration<EnumerableWithGrandParent, any, EnumerableWithParent, any, Enumerable, any> {

    get grandParentInstance() { return BasicEnumByGrandParentEnumerable }
    get parentInstance() { return BasicEnumByParentEnumerable }
    get instance() { return BasicEnumByEnumerable }

    get default(): never { throw new Error() }
    set default(_value: unknown,) {}
    setDefault(): never { throw new Error() }

    get values(): never { throw new Error() }
    get names(): never { throw new Error() }
    get ordinals(): never { throw new Error() }
    get iterator(): never { throw new Error() }

    getValue(): never { throw new Error() }
    getName(): never { throw new Error() }
    getOrdinal(): never { throw new Error() }

    [Symbol.iterator](): never { throw new Error() }
    get [Symbol.toStringTag](): never { throw new Error() }

}
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration implements CompanionEnumWithGreatGrandParentDeclaration<EnumerableWithGreatGrandParent, any, EnumerableWithGrandParent, any, EnumerableWithParent, any, Enumerable, any> {

    get greatGrandParentInstance() { return BasicEnumByGreatGrandParentEnumerable }
    get grandParentInstance() { return BasicEnumByGrandParentEnumerable }
    get parentInstance() { return BasicEnumByParentEnumerable }
    get instance() { return BasicEnumByEnumerable }

    get default(): never { throw new Error() }
    set default(_value: unknown,) {}
    setDefault(): never { throw new Error() }

    get values(): never { throw new Error() }
    get names(): never { throw new Error() }
    get ordinals(): never { throw new Error() }
    get iterator(): never { throw new Error() }

    getValue(): never { throw new Error() }
    getName(): never { throw new Error() }
    getOrdinal(): never { throw new Error() }

    [Symbol.iterator](): never { throw new Error() }
    get [Symbol.toStringTag](): never { throw new Error() }

}
