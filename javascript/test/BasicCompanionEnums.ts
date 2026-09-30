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

import type {Enumerable}                                                                                                       from "../src/Enumerable"
import type {CompanionEnumDeclaration}                                                                                         from "../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                          from "../src/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}                                                                     from "../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                               from "../src/companion/CompanionEnumWithParent.declaration"
import type {EnumerableWithGrandParentGeneralType, EnumerableWithGreatGrandParentGeneralType, EnumerableWithParentGeneralType} from "../src/type/general"

import {CompanionEnum}                       from "../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}        from "../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent}   from "../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}             from "../src/companion/CompanionEnumWithParent"
import {EmptyEnum}                           from "./instance/EmptyEnum"
import {EmptyEnumerable}                     from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}      from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent} from "./instance/EmptyEnumerableWithGreatGrandParent"
import {EmptyEnumerableWithParent}           from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumWithGrandParent}            from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}       from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}                 from "./instance/EmptyEnumWithParent"

export class BasicCompanionEnumByBasicCompanionEnum extends CompanionEnum<Enumerable, any> {
    constructor() { super(EmptyEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithParent extends CompanionEnumWithParent<EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(EmptyEnumWithParent, EmptyEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGrandParent extends CompanionEnumWithGrandParent<EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParent extends CompanionEnumWithGreatGrandParent<EnumerableWithGreatGrandParentGeneralType, any, EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, EmptyEnumWithParent, EmptyEnum,) }
}

export class BasicCompanionEnumByBasicCompanionEnumDeclaration implements CompanionEnumDeclaration<EmptyEnumerable, any> {

    get instance() { return EmptyEnumerable }

    get defaultValue(): never { throw new Error() }
    set defaultValue(_value: unknown,) {}
    setDefaultValue(): never { throw new Error() }

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
export class BasicCompanionEnumByCompanionEnumWithParentDeclaration implements CompanionEnumWithParentDeclaration<EmptyEnumerableWithParent, any, EmptyEnumerable, any> {

    get parentInstance() { return EmptyEnumerableWithParent }
    get instance() { return EmptyEnumerable }

    get defaultValue(): never { throw new Error() }
    set defaultValue(_value: unknown,) {}
    setDefaultValue(): never { throw new Error() }

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
export class BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration implements CompanionEnumWithGrandParentDeclaration<EmptyEnumerableWithGrandParent, any, EmptyEnumerableWithParent, any, EmptyEnumerable, any> {

    get grandParentInstance() { return EmptyEnumerableWithGrandParent }
    get parentInstance() { return EmptyEnumerableWithParent }
    get instance() { return EmptyEnumerable }

    get defaultValue(): never { throw new Error() }
    set defaultValue(_value: unknown,) {}
    setDefaultValue(): never { throw new Error() }

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
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration implements CompanionEnumWithGreatGrandParentDeclaration<EmptyEnumerableWithGreatGrandParent, any, EmptyEnumerableWithGrandParent, any, EmptyEnumerableWithParent, any, EmptyEnumerable, any> {

    get greatGrandParentInstance() { return EmptyEnumerableWithGreatGrandParent }
    get grandParentInstance() { return EmptyEnumerableWithGrandParent }
    get parentInstance() { return EmptyEnumerableWithParent }
    get instance() { return EmptyEnumerable }

    get defaultValue(): never { throw new Error() }
    set defaultValue(_value: unknown,) {}
    setDefaultValue(): never { throw new Error() }

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
