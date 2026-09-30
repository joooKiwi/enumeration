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

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumByStructure", () => {
        const method = isEnumByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse(),)
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeTrue(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeTrue(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeTrue(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeTrue(),)
    },)
    describe("isEnumWithParent", () => {
        const method = isEnumWithParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableParent", () => {
        const method = isEnumWithNullableParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithParentByStructure", () => {
        const method = isEnumWithParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeTrue(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeTrue(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeTrue(),)
    },)
    describe("isEnumWithGrandParent", () => {
        const method = isEnumWithGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGrandParent", () => {
        const method = isEnumWithNullableGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithGrandParentByStructure", () => {
        const method = isEnumWithGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeTrue(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeTrue(),)
    },)
    describe("isEnumWithGreatGrandParent", () => {
        const method = isEnumWithGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGreatGrandParent", () => {
        const method = isEnumWithNullableGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeFalse(),)
    },)
    describe("isEnumWithGreatGrandParentByStructure", () => {
        const method = isEnumWithGreatGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new EmptyEnum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new EmptyEnumerable(),),).toBeFalse(),)

        test("EnumWithParent", () =>                                               expect(method(new EmptyEnumWithParent(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new EmptyEnumWithNullableParent(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new EmptyEnumerableWithParent(),),).toBeFalse(),)

        test("EnumWithGrandParent", () =>                                          expect(method(new EmptyEnumWithGrandParent(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new EmptyEnumWithNullableGrandParent(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new EmptyEnumerableWithGrandParent(),),).toBeFalse(),)

        test("EnumWithGreatGrandParent", () =>                                     expect(method(new EmptyEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new EmptyEnumWithNullableGreatGrandParent(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new EmptyEnumerableWithGreatGrandParent(),),).toBeTrue(),)
    },)

},)
