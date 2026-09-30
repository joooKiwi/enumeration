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

import {isEnum}                                from "../src/helper/isEnum"
import {isEnumByStructure}                     from "../src/helper/isEnumByStructure"
import {isEnumWithNullableGrandParent}         from "../src/helper/isEnumWithNullableGrandParent"
import {isEnumWithNullableGreatGrandParent}    from "../src/helper/isEnumWithNullableGreatGrandParent"
import {isEnumWithNullableParent}              from "../src/helper/isEnumWithNullableParent"
import {isEnumWithGrandParent}                 from "../src/helper/isEnumWithGrandParent"
import {isEnumWithGrandParentByStructure}      from "../src/helper/isEnumWithGrandParentByStructure"
import {isEnumWithGreatGrandParent}            from "../src/helper/isEnumWithGreatGrandParent"
import {isEnumWithGreatGrandParentByStructure} from "../src/helper/isEnumWithGreatGrandParentByStructure"
import {isEnumWithParent}                      from "../src/helper/isEnumWithParent"
import {isEnumWithParentByStructure}           from "../src/helper/isEnumWithParentByStructure"

describe("methodsTests (isEnum)", () => {

    describe("isEnum", () => {
        const method = isEnum

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumByStructure", () => {
        const method = isEnumByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse(),)
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithParent", () => {
        const method = isEnumWithParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableParent", () => {
        const method = isEnumWithNullableParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithParentByStructure", () => {
        const method = isEnumWithParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithGrandParent", () => {
        const method = isEnumWithGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGrandParent", () => {
        const method = isEnumWithNullableGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithGrandParentByStructure", () => {
        const method = isEnumWithGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithGreatGrandParent", () => {
        const method = isEnumWithGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGreatGrandParent", () => {
        const method = isEnumWithNullableGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithGreatGrandParentByStructure", () => {
        const method = isEnumWithGreatGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)

},)
