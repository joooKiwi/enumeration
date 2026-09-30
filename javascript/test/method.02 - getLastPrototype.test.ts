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

import {Enum_Enum, Enum_Enumerable, Enum_Enum_GrandParentEnumerable, Enum_GrandParentEnumerable, Enum_Enum_GreatGrandParentEnumerable, Enum_GreatGrandParentEnumerable, Enum_Enum_ParentEnumerable, Enum_ParentEnumerable, Enum_ParentEnum, Enum_NullableParentEnum, Enum_GrandParentEnum, Enum_NullableGrandParentEnum, Enum_NullableGreatGrandParentEnum, Enum_GreatGrandParentEnum, Enum_ParentEnum_GrandParentEnumerable, Enum_NullableParentEnum_GrandParentEnumerable, Enum_NullableParentEnum_GreatGrandParentEnumerable, Enum_ParentEnum_GreatGrandParentEnumerable, Enum_GrandParentEnum_GreatGrandParentEnumerable, Enum_NullableGrandParentEnum_GreatGrandParentEnumerable} from "./BasicEnums"
import {invalidInstances, nullValues}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from "./value/constants"

import type {Enumerable} from "../src/Enumerable"

import {NullReferenceException} from "../src/exception/NullReferenceException"
import {getLastPrototype}       from "../src/helper/getLastPrototype"

describe("methodTests (getLastPrototype)", () => {
    // @ts-expect-error
    test.each(nullValues,)("%s", it => expect(() => getLastPrototype(it,),).toThrow(NullReferenceException,),)
    test.each(invalidInstances,)("%s", ({value: it,},) => expect(() => getLastPrototype(it,),).toThrow(NullReferenceException,),)

    describe("basic enums", () => {
        test("Enum", () =>                                                         expect(getLastPrototype(new Enum_Enum(),),).toStrictEqual(Enum_Enum,),)
        test("Enumerable", () =>                                                   expect(getLastPrototype(new Enum_Enumerable(),),).toStrictEqual(Enum_Enumerable,),)

        test("Enum + EnumerableWithParent", () =>                                  expect(getLastPrototype(new Enum_Enum_ParentEnumerable(),),).toStrictEqual(Enum_Enum_ParentEnumerable,),)
        test("EnumWithParent", () =>                                               expect(getLastPrototype(new Enum_ParentEnum(),),).toStrictEqual(Enum_ParentEnum,),)
        test("EnumWithNullableParent", () =>                                       expect(getLastPrototype(new Enum_NullableParentEnum(),),).toStrictEqual(Enum_NullableParentEnum,),)
        test("EnumerableWithParent", () =>                                         expect(getLastPrototype(new Enum_ParentEnumerable(),),).toStrictEqual(Enum_ParentEnumerable,),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(getLastPrototype(new Enum_Enum_GrandParentEnumerable(),),).toStrictEqual(Enum_Enum_GrandParentEnumerable,),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(getLastPrototype(new Enum_ParentEnum_GrandParentEnumerable(),),).toStrictEqual(Enum_ParentEnum_GrandParentEnumerable,),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(getLastPrototype(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toStrictEqual(Enum_NullableParentEnum_GrandParentEnumerable,),)
        test("EnumWithGrandParent", () =>                                          expect(getLastPrototype(new Enum_GrandParentEnum(),),).toStrictEqual(Enum_GrandParentEnum,),)
        test("EnumWithNullableGrandParent", () =>                                  expect(getLastPrototype(new Enum_NullableGrandParentEnum(),),).toStrictEqual(Enum_NullableGrandParentEnum,),)
        test("EnumerableWithGrandParent", () =>                                    expect(getLastPrototype(new Enum_GrandParentEnumerable(),),).toStrictEqual(Enum_GrandParentEnumerable,),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(getLastPrototype(new Enum_Enum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_Enum_GreatGrandParentEnumerable,),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(getLastPrototype(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_ParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(getLastPrototype(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_NullableParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(getLastPrototype(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_GrandParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(getLastPrototype(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_NullableGrandParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithGreatGrandParent", () =>                                     expect(getLastPrototype(new Enum_GreatGrandParentEnum(),),).toStrictEqual(Enum_GreatGrandParentEnum,),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(getLastPrototype(new Enum_NullableGreatGrandParentEnum(),),).toStrictEqual(Enum_NullableGreatGrandParentEnum,),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(getLastPrototype(new Enum_GreatGrandParentEnumerable(),),).toStrictEqual(Enum_GreatGrandParentEnumerable,),)
    },)
    describe("class extends basic enums", () => {
        test("Enum", () =>                                                         expect(getLastPrototype(new class extends Enum_Enum{}(),),).toStrictEqual(Enum_Enum,),)
        test("Enumerable", () =>                                                   expect(getLastPrototype(new class extends Enum_Enumerable{}(),),).toStrictEqual(Enum_Enumerable,),)

        test("Enum + EnumerableWithParent", () =>                                  expect(getLastPrototype(new class extends Enum_Enum_ParentEnumerable{}(),),).toStrictEqual(Enum_Enum_ParentEnumerable,),)
        test("EnumWithParent", () =>                                               expect(getLastPrototype(new class extends Enum_ParentEnum{}(),),).toStrictEqual(Enum_ParentEnum,),)
        test("EnumWithNullableParent", () =>                                       expect(getLastPrototype(new class extends Enum_NullableParentEnum{}(),),).toStrictEqual(Enum_NullableParentEnum,),)
        test("EnumerableWithParent", () =>                                         expect(getLastPrototype(new class extends Enum_ParentEnumerable{}(),),).toStrictEqual(Enum_ParentEnumerable,),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(getLastPrototype(new class extends Enum_Enum_GrandParentEnumerable{}(),),).toStrictEqual(Enum_Enum_GrandParentEnumerable,),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(getLastPrototype(new class extends Enum_ParentEnum_GrandParentEnumerable{}(),),).toStrictEqual(Enum_ParentEnum_GrandParentEnumerable,),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(getLastPrototype(new class extends Enum_NullableParentEnum_GrandParentEnumerable{}(),),).toStrictEqual(Enum_NullableParentEnum_GrandParentEnumerable,),)
        test("EnumWithGrandParent", () =>                                          expect(getLastPrototype(new class extends Enum_GrandParentEnum{}(),),).toStrictEqual(Enum_GrandParentEnum,),)
        test("EnumWithNullableGrandParent", () =>                                  expect(getLastPrototype(new class extends Enum_NullableGrandParentEnum{}(),),).toStrictEqual(Enum_NullableGrandParentEnum,),)
        test("EnumerableWithGrandParent", () =>                                    expect(getLastPrototype(new class extends Enum_GrandParentEnumerable{}(),),).toStrictEqual(Enum_GrandParentEnumerable,),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(getLastPrototype(new class extends Enum_Enum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_Enum_GreatGrandParentEnumerable,),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(getLastPrototype(new class extends Enum_ParentEnum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_ParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(getLastPrototype(new class extends Enum_NullableParentEnum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_NullableParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(getLastPrototype(new class extends Enum_GrandParentEnum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_GrandParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(getLastPrototype(new class extends Enum_NullableGrandParentEnum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_NullableGrandParentEnum_GreatGrandParentEnumerable,),)
        test("EnumWithGreatGrandParent", () =>                                     expect(getLastPrototype(new class extends Enum_GreatGrandParentEnum{}(),),).toStrictEqual(Enum_GreatGrandParentEnum,),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(getLastPrototype(new class extends Enum_NullableGreatGrandParentEnum{}(),),).toStrictEqual(Enum_NullableGreatGrandParentEnum,),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(getLastPrototype(new class extends Enum_GreatGrandParentEnumerable{}(),),).toStrictEqual(Enum_GreatGrandParentEnumerable,),)
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
