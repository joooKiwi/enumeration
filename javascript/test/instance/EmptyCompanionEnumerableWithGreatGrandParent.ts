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

import type {Array} from "@joookiwi/type"
import {expect} from "vitest"

import type {CompanionEnumerableWithGreatGrandParent} from "../../src/companion/CompanionEnumerableWithGreatGrandParent"

import {EmptyEnum}                     from "./EmptyEnum"
import {EmptyEnumWithGrandParent}      from "./EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent} from "./EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}           from "./EmptyEnumWithParent"

/** A {@link CompanionEnumerableWithGreatGrandParent} that has the purpose to be empty with nothing to specify */
export class EmptyCompanionEnumerableWithGreatGrandParent
    implements CompanionEnumerableWithGreatGrandParent<EmptyEnumWithGreatGrandParent, typeof EmptyEnumWithGreatGrandParent, EmptyEnumWithGrandParent, typeof EmptyEnumWithGrandParent, EmptyEnumWithParent, typeof EmptyEnumWithParent, EmptyEnum, typeof EmptyEnum> {

    public constructor() {}

    public readonly greatGrandParentInstance = EmptyEnum
    public readonly grandParentInstance = EmptyEnumWithParent
    public readonly parentInstance = EmptyEnumWithGrandParent
    public readonly instance = EmptyEnumWithGreatGrandParent

    public get defaultValue(): never { return expect.fail("The getter method “defaultValue” was not expected to be called.",) }
    public set defaultValue(_: unknown,) { expect.fail("The setter method “defaultValue” was not expected to be called.",) }
    public setDefaultValue(..._: Array<unknown>): never
    public setDefaultValue() { expect.fail("The method “setDefaultValue” was not expected to be called.",) }

    public get values(): never { return expect.fail("The getter method “values” was not expected to be called.",) }
    public get names(): never { return expect.fail("The getter method “names” was not expected to be called.",) }
    public get ordinals(): never { return expect.fail("The getter method “ordinals” was not expected to be called.",) }
    public get iterator(): never { return expect.fail("The getter method “iterator” was not expected to be called.",) }

    public getValue(..._: Array<unknown>): never
    public getValue() { expect.fail("The method “getValue” was not expected to be called.",) }

    public getName(..._: Array<unknown>): never
    public getName() { expect.fail("The method “getName” was not expected to be called.",) }

    public getOrdinal(..._: Array<unknown>): never
    public getOrdinal() { expect.fail("The method “getOrdinal” was not expected to be called.",) }

    public [Symbol.iterator](..._: Array<unknown>): never
    public [Symbol.iterator]() { expect.fail("The method “Symbol.iterator” was not expected to be called.",) }

    public get [Symbol.toStringTag](): never { return expect.fail("The getter method “Symbol.toStringTag” was not expected to be called.",) }

    public methodFromEmptyCompanionEnumDeclaration() {}

}
