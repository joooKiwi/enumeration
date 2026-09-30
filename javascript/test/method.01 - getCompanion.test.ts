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

import {EmptyEnum}                    from "./instance/EmptyEnum"
import {invalidInstances, nullValues} from "./value/constants"

import {InvalidInstanceException} from "../src/exception/InvalidInstanceException"
import {NonExistantKeyException}  from "../src/exception/NonExistantKeyException"
import {NullInstanceException}    from "../src/exception/NullInstanceException"
import {NullReferenceException}   from "../src/exception/NullReferenceException"
import {getCompanion}             from "../src/helper/getCompanion"

describe("methodTests (getCompanion)", () => {

    describe("with invalid companion reference", () => {
        test.each(nullValues,)("%s",                   it => expect(() => getCompanion(it,),).toThrow(NullInstanceException,),)
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => getCompanion(it,),).toThrow(InvalidInstanceException,),)
    },)
    describe("companion reference", () => {
        // @ts-expect-error
        test("nothing",                                 () => expect(() => getCompanion(class EmptyInvalidEnum {},),).toThrow(NonExistantKeyException,),)
        // @ts-expect-error
        test.each(nullValues,)("%s",                    it => expect(() => getCompanion(class InvalidEnumWithNullCompanionEnum { static readonly CompanionEnum = it },),).toThrow(NullReferenceException,),)
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(() => getCompanion(class InvalidEnumWithInvalidInstanceCompanionEnum { static readonly CompanionEnum = it },),).toThrow(InvalidInstanceException,),)

    },)
    // @ts-expect-error
    test("companion enum reference with no get", () => expect(() => getCompanion(class InvalidEnumWithNonFunctionCompanionEnum { static readonly CompanionEnum = class InvalidEmptyCompanionEnum {} },),).toThrow(NonExistantKeyException,),)
    describe("companion enum reference with invalid value", () => {
        test.each(nullValues,)("%s",                   it => expect(() => getCompanion(class InvalidEnumWithGetNullOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithNullGet { static readonly get = it } },),).toThrow(NullReferenceException,),)
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => getCompanion(class InvalidEnumWithGetInvalidInstanceOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithInvalidInstanceGet { static readonly get = it } },),).toThrow(InvalidInstanceException,),)
    },)
    describe("valid test", () => {
        const instance = EmptyEnum.CompanionEnum.get
        test("by EnumerableConstructor", () => expect(getCompanion(EmptyEnum,),).toBe(instance,),)
        test("by CompanionEnum",         () => expect(getCompanion(instance,),).toBe(instance,),)
    },)

},)
