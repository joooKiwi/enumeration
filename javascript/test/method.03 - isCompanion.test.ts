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

import {EmptyCompanionEnum}                                from "./instance/EmptyCompanionEnum"
import {EmptyCompanionEnumDeclaration}                     from "./instance/EmptyCompanionEnumDeclaration"
import {EmptyCompanionEnumWithGrandParent}                 from "./instance/EmptyCompanionEnumWithGrandParent"
import {EmptyCompanionEnumWithGrandParentDeclaration}      from "./instance/EmptyCompanionEnumWithGrandParentDeclaration"
import {EmptyCompanionEnumWithGreatGrandParent}            from "./instance/EmptyCompanionEnumWithGreatGrandParent"
import {EmptyCompanionEnumWithGreatGrandParentDeclaration} from "./instance/EmptyCompanionEnumWithGreatGrandParentDeclaration"
import {EmptyCompanionEnumWithParent}                      from "./instance/EmptyCompanionEnumWithParent"
import {EmptyCompanionEnumWithParentDeclaration}           from "./instance/EmptyCompanionEnumWithParentDeclaration"
import {invalidInstances, nullValues}                      from "./value/constants"

import {isCompanionEnum}                                from "../src/helper/isCompanionEnum"
import {isCompanionEnumByStructure}                     from "../src/helper/isCompanionEnumByStructure"
import {isCompanionEnumWithParent}                      from "../src/helper/isCompanionEnumWithParent"
import {isCompanionEnumWithParentByStructure}           from "../src/helper/isCompanionEnumWithParentByStructure"
import {isCompanionEnumWithGrandParent}                 from "../src/helper/isCompanionEnumWithGrandParent"
import {isCompanionEnumWithGrandParentByStructure}      from "../src/helper/isCompanionEnumWithGrandParentByStructure"
import {isCompanionEnumWithGreatGrandParent}            from "../src/helper/isCompanionEnumWithGreatGrandParent"
import {isCompanionEnumWithGreatGrandParentByStructure} from "../src/helper/isCompanionEnumWithGreatGrandParentByStructure"

describe("methodsTests (isCompanion)", () => {

    describe("isCompanionEnum", () => {
        const method = isCompanionEnum

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeTrue(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumByStructure", () => {
        const method = isCompanionEnumByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeTrue(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithParent", () => {
        const method = isCompanionEnumWithParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithParentByStructure", () => {
        const method = isCompanionEnumWithParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithGrandParent", () => {
        const method = isCompanionEnumWithGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithGrandParentByStructure", () => {
        const method = isCompanionEnumWithGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithGreatGrandParent", () => {
        const method = isCompanionEnumWithGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithGreatGrandParentByStructure", () => {
        const method = isCompanionEnumWithGreatGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new EmptyCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new EmptyCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new EmptyCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new EmptyCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new EmptyCompanionEnumWithGrandParent(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new EmptyCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new EmptyCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new EmptyCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)

},)
