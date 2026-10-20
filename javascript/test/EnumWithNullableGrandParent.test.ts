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

import {BasicEnum}                        from "./instance/BasicEnum"
import {BasicEnumWithNullableGrandParent} from "./instance/BasicEnumWithNullableGrandParent"
import {BasicEnumWithParent}              from "./instance/BasicEnumWithParent"

import {EnumConstants}                from "../src/EnumConstants"
import {ImpossibleIntegrityException} from "../src/exception/ImpossibleIntegrityException"
import {NullReferenceException}       from "../src/exception/NullReferenceException"

describe("EnumWithNullableGrandParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableGrandParent(null,)                                                                .parent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableGrandParent(undefined,)                                                           .parent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableGrandParent(() => null,)                                                          .parent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableGrandParent(() => undefined,)                                                     .parent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableGrandParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableGrandParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableGrandParent('A',)                                                                 .parent,).toBe(BasicEnumWithParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableGrandParent(new String('A',),)                                                    .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableGrandParent(() => 'A',)                                                           .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableGrandParent(() => new String('A',),)                                              .parent,).toBe(BasicEnumWithParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableGrandParent('B',)                                                                 .parent,).toBe(BasicEnumWithParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableGrandParent(new String('B',),)                                                    .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableGrandParent(() => 'B',)                                                           .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableGrandParent(() => new String('B',),)                                              .parent,).toBe(BasicEnumWithParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableGrandParent('C',)                                                                 .parent,).toBe(BasicEnumWithParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableGrandParent(new String('C',),)                                                    .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableGrandParent(() => 'C',)                                                           .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableGrandParent(() => new String('C',),)                                              .parent,).toBe(BasicEnumWithParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableGrandParent('D',)                                                                 .parent,).toBe(BasicEnumWithParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableGrandParent(new String('D',),)                                                    .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableGrandParent(() => 'D',)                                                           .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableGrandParent(() => new String('D',),)                                              .parent,).toBe(BasicEnumWithParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableGrandParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableGrandParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableGrandParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableGrandParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithNullableGrandParent(BasicEnumWithParent.A,)                                                         .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithNullableGrandParent(() => BasicEnumWithParent.A,)                                                   .parent,).toBe(BasicEnumWithParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithNullableGrandParent(BasicEnumWithParent.B,)                                                         .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithNullableGrandParent(() => BasicEnumWithParent.B,)                                                   .parent,).toBe(BasicEnumWithParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithNullableGrandParent(BasicEnumWithParent.C,)                                                         .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithNullableGrandParent(() => BasicEnumWithParent.C,)                                                   .parent,).toBe(BasicEnumWithParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithNullableGrandParent(BasicEnumWithParent.D,)                                                         .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithNullableGrandParent(() => BasicEnumWithParent.D,)                                                   .parent,).toBe(BasicEnumWithParent.D,),)
    },)
    describe("impossible parent", () => {
        test('A',          () => expect(() => new BasicEnumWithNullableGrandParent(null, 'A',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('B',          () => expect(() => new BasicEnumWithNullableGrandParent(null, 'B',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('C',          () => expect(() => new BasicEnumWithNullableGrandParent(null, 'C',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('D',          () => expect(() => new BasicEnumWithNullableGrandParent(null, 'D',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.A", () => expect(() => new BasicEnumWithNullableGrandParent(null, BasicEnum.A,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.B", () => expect(() => new BasicEnumWithNullableGrandParent(null, BasicEnum.B,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.C", () => expect(() => new BasicEnumWithNullableGrandParent(null, BasicEnum.C,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.D", () => expect(() => new BasicEnumWithNullableGrandParent(null, BasicEnum.D,).parent,).toThrow(ImpossibleIntegrityException,),)
    },)
    describe("grandParent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableGrandParent(null, null,)                                                                .grandParent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableGrandParent(null, undefined,)                                                           .grandParent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableGrandParent(null, () => null,)                                                          .grandParent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableGrandParent(null, () => undefined,)                                                     .grandParent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableGrandParent(null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .grandParent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableGrandParent(null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).grandParent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableGrandParent(null, 'A',)                                                                 .grandParent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableGrandParent(null, new String('A',),)                                                    .grandParent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableGrandParent(null, () => 'A',)                                                           .grandParent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableGrandParent(null, () => new String('A',),)                                              .grandParent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableGrandParent(null, 'B',)                                                                 .grandParent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableGrandParent(null, new String('B',),)                                                    .grandParent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableGrandParent(null, () => 'B',)                                                           .grandParent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableGrandParent(null, () => new String('B',),)                                              .grandParent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableGrandParent(null, 'C',)                                                                 .grandParent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableGrandParent(null, new String('C',),)                                                    .grandParent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableGrandParent(null, () => 'C',)                                                           .grandParent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableGrandParent(null, () => new String('C',),)                                              .grandParent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableGrandParent(null, 'D',)                                                                 .grandParent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableGrandParent(null, new String('D',),)                                                    .grandParent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableGrandParent(null, () => 'D',)                                                           .grandParent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableGrandParent(null, () => new String('D',),)                                              .grandParent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableGrandParent(null, 'E',)                                                                 .grandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableGrandParent(null, new String('E',),)                                                    .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableGrandParent(null, () => 'E',)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableGrandParent(null, () => new String('E',),)                                              .grandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithNullableGrandParent(null, BasicEnum.A,)                                                         .grandParent,).toBe(BasicEnum.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithNullableGrandParent(null, () => BasicEnum.A,)                                                   .grandParent,).toBe(BasicEnum.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithNullableGrandParent(null, BasicEnum.B,)                                                         .grandParent,).toBe(BasicEnum.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithNullableGrandParent(null, () => BasicEnum.B,)                                                   .grandParent,).toBe(BasicEnum.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithNullableGrandParent(null, BasicEnum.C,)                                                         .grandParent,).toBe(BasicEnum.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithNullableGrandParent(null, () => BasicEnum.C,)                                                   .grandParent,).toBe(BasicEnum.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithNullableGrandParent(null, BasicEnum.D,)                                                         .grandParent,).toBe(BasicEnum.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithNullableGrandParent(null, () => BasicEnum.D,)                                                   .grandParent,).toBe(BasicEnum.D,),)
    },)

},)
