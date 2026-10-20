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

import {BasicEnum}                             from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}              from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithNullableGreatGrandParent} from "./instance/BasicEnumWithNullableGreatGrandParent"
import {BasicEnumWithParent}                   from "./instance/BasicEnumWithParent"

import {EnumConstants}                from "../src/EnumConstants"
import {ImpossibleIntegrityException} from "../src/exception/ImpossibleIntegrityException"
import {NullReferenceException}       from "../src/exception/NullReferenceException"

describe("EnumWithNullableGreatGrandParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableGreatGrandParent(null,)                                                                .parent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableGreatGrandParent(undefined,)                                                           .parent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableGreatGrandParent(() => null,)                                                          .parent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableGreatGrandParent(() => undefined,)                                                     .parent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableGreatGrandParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableGreatGrandParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent('A',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(new String('A',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(() => 'A',)                                                           .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(() => new String('A',),)                                              .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent('B',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(new String('B',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(() => 'B',)                                                           .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(() => new String('B',),)                                              .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent('C',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(new String('C',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(() => 'C',)                                                           .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(() => new String('C',),)                                              .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent('D',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(new String('D',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(() => 'D',)                                                           .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(() => new String('D',),)                                              .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableGreatGrandParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableGreatGrandParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableGreatGrandParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableGreatGrandParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithNullableGreatGrandParent(BasicEnumWithGrandParent.A,)                                                         .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithNullableGreatGrandParent(() => BasicEnumWithGrandParent.A,)                                                   .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithNullableGreatGrandParent(BasicEnumWithGrandParent.B,)                                                         .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithNullableGreatGrandParent(() => BasicEnumWithGrandParent.B,)                                                   .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithNullableGreatGrandParent(BasicEnumWithGrandParent.C,)                                                         .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithNullableGreatGrandParent(() => BasicEnumWithGrandParent.C,)                                                   .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithNullableGreatGrandParent(BasicEnumWithGrandParent.D,)                                                         .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithNullableGreatGrandParent(() => BasicEnumWithGrandParent.D,)                                                   .parent,).toBe(BasicEnumWithGrandParent.D,),)
    },)
    describe("impossible parent", () => {
        test('A',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, 'A',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('B',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, 'B',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('C',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, 'C',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test('D',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, 'D',)        .parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.A", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.A,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.B", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.B,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.C", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.C,).parent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.D", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.D,).parent,).toThrow(ImpossibleIntegrityException,),)
    },)
    describe("grandParent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null,)                                                                .grandParent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableGreatGrandParent(null, undefined,)                                                           .grandParent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => null,)                                                          .grandParent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => undefined,)                                                     .grandParent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .grandParent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).grandParent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, 'A',)                                                                 .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, new String('A',),)                                                    .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => 'A',)                                                           .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => new String('A',),)                                              .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, 'B',)                                                                 .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, new String('B',),)                                                    .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => 'B',)                                                           .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => new String('B',),)                                              .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, 'C',)                                                                 .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, new String('C',),)                                                    .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => 'C',)                                                           .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => new String('C',),)                                              .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, 'D',)                                                                 .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, new String('D',),)                                                    .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => 'D',)                                                           .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => new String('D',),)                                              .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, 'E',)                                                                 .grandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, new String('E',),)                                                    .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, () => 'E',)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, () => new String('E',),)                                              .grandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.A,)                                                         .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => BasicEnumWithParent.A,)                                                   .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.B,)                                                         .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => BasicEnumWithParent.B,)                                                   .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.C,)                                                         .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => BasicEnumWithParent.C,)                                                   .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, BasicEnumWithParent.D,)                                                         .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, () => BasicEnumWithParent.D,)                                                   .grandParent,).toBe(BasicEnumWithParent.D,),)
    },)
    describe("impossible grandparent", () => {
        test('A',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, 'A',)        .grandParent,).toThrow(ImpossibleIntegrityException,),)
        test('B',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, 'B',)        .grandParent,).toThrow(ImpossibleIntegrityException,),)
        test('C',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, 'C',)        .grandParent,).toThrow(ImpossibleIntegrityException,),)
        test('D',          () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, 'D',)        .grandParent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.A", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.A,).grandParent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.B", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.B,).grandParent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.C", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.C,).grandParent,).toThrow(ImpossibleIntegrityException,),)
        test("instance.D", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.D,).grandParent,).toThrow(ImpossibleIntegrityException,),)
    },)
    describe("great-grandparent", () => {
        test("null",                    () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, null,)                                                                .greatGrandParent,).toBe(null,),)
        test("undefined",               () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, undefined,)                                                           .greatGrandParent,).toBe(null,),)
        test("() → null",               () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => null,)                                                          .greatGrandParent,).toBe(null,),)
        test("() → undefined",          () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => undefined,)                                                     .greatGrandParent,).toBe(null,),)
        test("null symbol",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .greatGrandParent,).toBe(null,),)
        test("() → null symbol",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).greatGrandParent,).toBe(null,),)
        test("A as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, 'A',)                                                                 .greatGrandParent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, new String('A',),)                                                    .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => 'A',)                                                           .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => new String('A',),)                                              .greatGrandParent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, 'B',)                                                                 .greatGrandParent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, new String('B',),)                                                    .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => 'B',)                                                           .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => new String('B',),)                                              .greatGrandParent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, 'C',)                                                                 .greatGrandParent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, new String('C',),)                                                    .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => 'C',)                                                           .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => new String('C',),)                                              .greatGrandParent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, 'D',)                                                                 .greatGrandParent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, new String('D',),)                                                    .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => 'D',)                                                           .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => new String('D',),)                                              .greatGrandParent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, 'E',)                                                                 .greatGrandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, new String('E',),)                                                    .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, () => 'E',)                                                           .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithNullableGreatGrandParent(null, null, () => new String('E',),)                                              .greatGrandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.A,)                                                         .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => BasicEnum.A,)                                                   .greatGrandParent,).toBe(BasicEnum.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.B,)                                                         .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => BasicEnum.B,)                                                   .greatGrandParent,).toBe(BasicEnum.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.C,)                                                         .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => BasicEnum.C,)                                                   .greatGrandParent,).toBe(BasicEnum.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, BasicEnum.D,)                                                         .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithNullableGreatGrandParent(null, null, () => BasicEnum.D,)                                                   .greatGrandParent,).toBe(BasicEnum.D,),)
    },)

},)
