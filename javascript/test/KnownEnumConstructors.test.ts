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

import {Enum}                                from "../src/Enum"
import {InvalidInstanceException}            from "../src/exception/InvalidInstanceException"
import {NullReferenceException}              from "../src/exception/NullReferenceException"
import {EmptyEnum}                           from "./instance/EmptyEnum"
import {EmptyEnumerable}                     from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}      from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent} from "./instance/EmptyEnumerableWithGreatGrandParent"
import {EmptyEnumerableWithParent}           from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumWithGrandParent}            from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}       from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}                 from "./instance/EmptyEnumWithParent"
import {KnownEnumConstructors}               from "./instance/KnownEnumConstructors"

describe("KnownEnumConstructorsTest", () => {

    describe("values", () => {
        //README: We cannot use import since it auto-trigger the static calls
        test("initial",   () => expect(new KnownEnumConstructors().values.toArray(),).toStrictEqual([Enum,],),)
        test("after add", () => expect(new KnownEnumConstructors().addAnd(EmptyEnum,).values.toArray(),).toStrictEqual([Enum, EmptyEnum,],),)
    },)
    describe("has", () => {
        //@ts-expect-error
        test("null",                () => expect(() => new KnownEnumConstructors().has(null,),).toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("undefined",           () => expect(() => new KnownEnumConstructors().has(undefined,),).toThrow(NullReferenceException,),)
        test("invalid",             () => expect(() => new KnownEnumConstructors().has(String,),).toThrow(InvalidInstanceException,),)
        test("valid",               () => expect(      new KnownEnumConstructors().has(EmptyEnum,),).toBeFalse(),)
        test("after add",           () => expect(      new KnownEnumConstructors().addAnd(EmptyEnum,).has(EmptyEnum,),).toBeTrue(),)
    },)
    describe("add", () => {
        //@ts-expect-error
        test("null",                      () => expect(() => new KnownEnumConstructors().add(null,),).toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("undefined",                 () => expect(() => new KnownEnumConstructors().add(undefined,),).toThrow(NullReferenceException,),)
        test("invalid",                   () => expect(() => new KnownEnumConstructors().add(String,),).toThrow(InvalidInstanceException,),)
        test("Enum",                      () => expect(      new KnownEnumConstructors().add(EmptyEnum,),).toBeTrue(),)
        test("EnumWithParent",            () => expect(      new KnownEnumConstructors().add(EmptyEnumWithParent,),).toBeTrue(),)
        test("EnumWithGrandParent",       () => expect(      new KnownEnumConstructors().add(EmptyEnumWithGrandParent,),).toBeTrue(),)
        test("EnumWithGreatGrandParent",  () => expect(      new KnownEnumConstructors().add(EmptyEnumWithGreatGrandParent,),).toBeTrue(),)
        test("Enumerable",                () => expect(      new KnownEnumConstructors().add(EmptyEnumerable,),).toBeTrue(),)
        test("EnumerableWithParent",      () => expect(      new KnownEnumConstructors().add(EmptyEnumerableWithParent,),).toBeTrue(),)
        test("EnumerableWithGrandParent", () => expect(      new KnownEnumConstructors().add(EmptyEnumerableWithGrandParent,),).toBeTrue(),)
        test("EnumerableWithGrandParent", () => expect(      new KnownEnumConstructors().add(EmptyEnumerableWithGreatGrandParent,),).toBeTrue(),)
    },)
    describe("remove", () => {
        //@ts-expect-error
        test("null",        () => expect(() => new KnownEnumConstructors().remove(null,),).toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("undefined",   () => expect(() => new KnownEnumConstructors().remove(undefined,),).toThrow(NullReferenceException,),)
        test("invalid",     () => expect(() => new KnownEnumConstructors().remove(String,),).toThrow(InvalidInstanceException,),)
        test("valid",       () => expect(      new KnownEnumConstructors().remove(EmptyEnum,),).toBeFalse(),)
        test("after add",   () => expect(      new KnownEnumConstructors().addAnd(EmptyEnum,).remove(EmptyEnum,),).toBeTrue(),)
    },)

},)
