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

import type {PossibleEnumSymbol} from "../src/type/symbol"

import {BasicEnum}                   from "./instance/BasicEnum"
import {BasicEnumWithNullableParent} from "./instance/BasicEnumWithNullableParent"

import {EnumConstants}          from "../src/EnumConstants"
import {NullReferenceException} from "../src/exception/NullReferenceException"

describe("EnumWithNullableParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableParent(null,)                                                                .parent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableParent(undefined,)                                                           .parent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableParent(() => null,)                                                          .parent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableParent(() => undefined,)                                                     .parent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableParent('A',)                                                                 .parent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableParent(new String('A',),)                                                    .parent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableParent(() => 'A',)                                                           .parent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableParent(() => new String('A',),)                                              .parent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableParent('B',)                                                                 .parent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableParent(new String('B',),)                                                    .parent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableParent(() => 'B',)                                                           .parent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableParent(() => new String('B',),)                                              .parent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableParent('C',)                                                                 .parent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableParent(new String('C',),)                                                    .parent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableParent(() => 'C',)                                                           .parent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableParent(() => new String('C',),)                                              .parent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableParent('D',)                                                                 .parent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableParent(new String('D',),)                                                    .parent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableParent(() => 'D',)                                                           .parent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableParent(() => new String('D',),)                                              .parent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("child.A",                 () => expect(      new BasicEnumWithNullableParent(BasicEnum.A,)                                                         .parent,).toBe(BasicEnum.A,),)
        test("() → child.A",            () => expect(      new BasicEnumWithNullableParent(() => BasicEnum.A,)                                                   .parent,).toBe(BasicEnum.A,),)
        test("child.B",                 () => expect(      new BasicEnumWithNullableParent(BasicEnum.B,)                                                         .parent,).toBe(BasicEnum.B,),)
        test("() → child.B",            () => expect(      new BasicEnumWithNullableParent(() => BasicEnum.B,)                                                   .parent,).toBe(BasicEnum.B,),)
        test("child.C",                 () => expect(      new BasicEnumWithNullableParent(BasicEnum.C,)                                                         .parent,).toBe(BasicEnum.C,),)
        test("() → child.C",            () => expect(      new BasicEnumWithNullableParent(() => BasicEnum.C,)                                                   .parent,).toBe(BasicEnum.C,),)
        test("child.D",                 () => expect(      new BasicEnumWithNullableParent(BasicEnum.D,)                                                         .parent,).toBe(BasicEnum.D,),)
        test("() → child.D",            () => expect(      new BasicEnumWithNullableParent(() => BasicEnum.D,)                                                   .parent,).toBe(BasicEnum.D,),)
    },)

},)
