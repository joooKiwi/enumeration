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

import {describe, expect, test} from "vitest"

import {invalidInstances, nullValues}          from "./value/constants"
import {EmptyEnum}                             from "./instance/EmptyEnum"
import {EmptyEnumerable}                       from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}        from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent}   from "./instance/EmptyEnumerableWithGreatGrandParent"
import {EmptyEnumerableWithParent}             from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumWithNullableParent}           from "./instance/EmptyEnumWithNullableParent"
import {EmptyEnumWithNullableGrandParent}      from "./instance/EmptyEnumWithNullableGrandParent"
import {EmptyEnumWithNullableGreatGrandParent} from "./instance/EmptyEnumWithNullableGreatGrandParent"
import {EmptyEnumWithGrandParent}              from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}         from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}                   from "./instance/EmptyEnumWithParent"

import type {Enumerable} from "../src/Enumerable"

import {NullReferenceException} from "../src/exception/NullReferenceException"
import {getLastPrototype}       from "../src/helper/getLastPrototype"

describe("methodTests (getLastPrototype)", () => {
    // @ts-expect-error
    test.each(nullValues,)("%s", it => expect(() => getLastPrototype(it,),).toThrow(NullReferenceException,),)
    test.each(invalidInstances,)("%s", ({value: it,},) => expect(() => getLastPrototype(it,),).toThrow(NullReferenceException,),)

    describe("basic enums", () => {
        test("Enum", () =>                                                         expect(getLastPrototype(new EmptyEnum(),),).toStrictEqual(EmptyEnum,),)
        test("Enumerable", () =>                                                   expect(getLastPrototype(new EmptyEnumerable(),),).toStrictEqual(EmptyEnumerable,),)

        test("EnumWithParent", () =>                                               expect(getLastPrototype(new EmptyEnumWithParent(),),).toStrictEqual(EmptyEnumWithParent,),)
        test("EnumWithNullableParent", () =>                                       expect(getLastPrototype(new EmptyEnumWithNullableParent(),),).toStrictEqual(EmptyEnumWithNullableParent,),)
        test("EnumerableWithParent", () =>                                         expect(getLastPrototype(new EmptyEnumerableWithParent(),),).toStrictEqual(EmptyEnumerableWithParent,),)

        test("EnumWithGrandParent", () =>                                          expect(getLastPrototype(new EmptyEnumWithGrandParent(),),).toStrictEqual(EmptyEnumWithGrandParent,),)
        test("EnumWithNullableGrandParent", () =>                                  expect(getLastPrototype(new EmptyEnumWithNullableGrandParent(),),).toStrictEqual(EmptyEnumWithNullableGrandParent,),)
        test("EnumerableWithGrandParent", () =>                                    expect(getLastPrototype(new EmptyEnumerableWithGrandParent(),),).toStrictEqual(EmptyEnumerableWithGrandParent,),)

        test("EnumWithGreatGrandParent", () =>                                     expect(getLastPrototype(new EmptyEnumWithGreatGrandParent(),),).toStrictEqual(EmptyEnumWithGreatGrandParent,),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(getLastPrototype(new EmptyEnumWithNullableGreatGrandParent(),),).toStrictEqual(EmptyEnumWithNullableGreatGrandParent,),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(getLastPrototype(new EmptyEnumerableWithGreatGrandParent(),),).toStrictEqual(EmptyEnumerableWithGreatGrandParent,),)
    },)
    describe("class extends basic enums", () => {
        test("Enum", () =>                                                         expect(getLastPrototype(new class extends EmptyEnum{}(),),).toStrictEqual(EmptyEnum,),)
        test("Enumerable", () =>                                                   expect(getLastPrototype(new class extends EmptyEnumerable{}(),),).toStrictEqual(EmptyEnumerable,),)

        test("EnumWithParent", () =>                                               expect(getLastPrototype(new class extends EmptyEnumWithParent{}(),),).toStrictEqual(EmptyEnumWithParent,),)
        test("EnumWithNullableParent", () =>                                       expect(getLastPrototype(new class extends EmptyEnumWithNullableParent{}(),),).toStrictEqual(EmptyEnumWithNullableParent,),)
        test("EnumerableWithParent", () =>                                         expect(getLastPrototype(new class extends EmptyEnumerableWithParent{}(),),).toStrictEqual(EmptyEnumerableWithParent,),)

        test("EnumWithGrandParent", () =>                                          expect(getLastPrototype(new class extends EmptyEnumWithGrandParent{}(),),).toStrictEqual(EmptyEnumWithGrandParent,),)
        test("EnumWithNullableGrandParent", () =>                                  expect(getLastPrototype(new class extends EmptyEnumWithNullableGrandParent{}(),),).toStrictEqual(EmptyEnumWithNullableGrandParent,),)
        test("EnumerableWithGrandParent", () =>                                    expect(getLastPrototype(new class extends EmptyEnumerableWithGrandParent{}(),),).toStrictEqual(EmptyEnumerableWithGrandParent,),)

        test("EnumWithGreatGrandParent", () =>                                     expect(getLastPrototype(new class extends EmptyEnumWithGreatGrandParent{}(),),).toStrictEqual(EmptyEnumWithGreatGrandParent,),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(getLastPrototype(new class extends EmptyEnumWithNullableGreatGrandParent{}(),),).toStrictEqual(EmptyEnumWithNullableGreatGrandParent,),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(getLastPrototype(new class extends EmptyEnumerableWithGreatGrandParent{}(),),).toStrictEqual(EmptyEnumerableWithGreatGrandParent,),)
    },)
    describe("class3 extends ((class2 implements Enumerable) extends class1)", () => {
        test("class1", () => expect(() => getLastPrototype(new Class1(),),).toThrow(NullReferenceException,),)
        test("class2", () => expect(getLastPrototype(new Class2(),),).toStrictEqual(Class2,),)
        test("class3", () => expect(getLastPrototype(new class Class3 extends Class2{}(),),).toStrictEqual(Class2,),)
    },)
},)

class Class1 {}
class Class2 extends Class1 implements Enumerable {
    get name(): never { throw new Error() }
    get ordinal(): never { throw new Error() }
    get [Symbol.toStringTag]() { return "Enum" as const }
    [Symbol.toPrimitive](): never { throw new Error() }
}
