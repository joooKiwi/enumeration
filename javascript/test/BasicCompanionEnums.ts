/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {Enum_Enum, Enum_Enumerable, Enum_GrandParentEnumerable, Enum_Enum_GrandParentEnumerable, Enum_ParentEnumerable, Enum_Enum_ParentEnumerable, Enum_GreatGrandParentEnumerable, Enum_Enum_GreatGrandParentEnumerable} from "./BasicEnums"

import type {Enumerable}                                                                                                       from "../src/Enumerable"
import type {EnumerableWithGrandParentGeneralType, EnumerableWithGreatGrandParentGeneralType, EnumerableWithParentGeneralType} from "../src/Enumerable.types"
import type {CompanionEnumDeclaration}                                                                                         from "../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                          from "../src/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}                                                                     from "../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                               from "../src/companion/CompanionEnumWithParent.declaration"

import {CompanionEnum}                     from "../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../src/companion/CompanionEnumWithParent"

export class BasicCompanionEnumByBasicCompanionEnum extends CompanionEnum<Enumerable, any> {
    constructor() { super(Enum_Enum,) }
}
export class BasicCompanionEnumByCompanionEnumWithParent extends CompanionEnumWithParent<EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(Enum_Enum_ParentEnumerable, Enum_Enum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGrandParent extends CompanionEnumWithGrandParent<EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(Enum_Enum_GrandParentEnumerable, Enum_Enum_ParentEnumerable, Enum_Enum,) }
}
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParent extends CompanionEnumWithGreatGrandParent<EnumerableWithGreatGrandParentGeneralType, any, EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {
    constructor() { super(Enum_Enum_GreatGrandParentEnumerable, Enum_Enum_GrandParentEnumerable, Enum_Enum_ParentEnumerable, Enum_Enum,) }
}

export class BasicCompanionEnumByBasicCompanionEnumDeclaration implements CompanionEnumDeclaration<Enumerable, any> {

    get instance() { return Enum_Enumerable }

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
export class BasicCompanionEnumByCompanionEnumWithParentDeclaration implements CompanionEnumWithParentDeclaration<EnumerableWithParentGeneralType, any, Enumerable, any> {

    get parentInstance() { return Enum_ParentEnumerable }
    get instance() { return Enum_Enumerable }

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
export class BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration implements CompanionEnumWithGrandParentDeclaration<EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {

    get grandParentInstance() { return Enum_GrandParentEnumerable }
    get parentInstance() { return Enum_ParentEnumerable }
    get instance() { return Enum_Enumerable }

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
export class BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration implements CompanionEnumWithGreatGrandParentDeclaration<EnumerableWithGreatGrandParentGeneralType, any, EnumerableWithGrandParentGeneralType, any, EnumerableWithParentGeneralType, any, Enumerable, any> {

    get greatGrandParentInstance() { return Enum_GreatGrandParentEnumerable }
    get grandParentInstance() { return Enum_GrandParentEnumerable }
    get parentInstance() { return Enum_ParentEnumerable }
    get instance() { return Enum_Enumerable }

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
