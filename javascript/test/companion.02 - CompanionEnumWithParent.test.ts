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

import {BasicCompanionEnumWithParent}     from "./instance/BasicCompanionEnumWithParent"
import {BasicEnum}                        from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}         from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent}    from "./instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}              from "./instance/BasicEnumWithParent"
import {CompanionEnum_ParentConstructor}  from "./instance/CompanionEnum_ParentConstructor"
import {CompanionEnum_ParentConstructor1} from "./instance/CompanionEnum_ParentConstructor1"
import {CompanionEnum_ParentConstructor2} from "./instance/CompanionEnum_ParentConstructor2"

import {ImpossibleOrdinalException} from "../src/exception/ImpossibleOrdinalException"
import {InvalidEnumerableException} from "../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../src/exception/InvalidInstanceException"
import {NullEnumerableException}    from "../src/exception/NullEnumerableException"
import {NullInstanceException}      from "../src/exception/NullInstanceException"
import {NullReferenceException}     from "../src/exception/NullReferenceException"

describe("companionTests (CompanionEnumWithParent)", () => {

    describe("constructor", () => {
        // @ts-expect-error
        test("1st parameter - null",          () => expect(() => new CompanionEnum_ParentConstructor1(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - undefined",     () => expect(() => new CompanionEnum_ParentConstructor1(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string",        () => expect(() => new CompanionEnum_ParentConstructor1("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string object", () => expect(() => new CompanionEnum_ParentConstructor1(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number",        () => expect(() => new CompanionEnum_ParentConstructor1(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number object", () => expect(() => new CompanionEnum_ParentConstructor1(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - bigint",        () => expect(() => new CompanionEnum_ParentConstructor1(0n,),)               .toThrow(InvalidInstanceException,),)
        test("1st parameter - bigint object", () => expect(() => new CompanionEnum_ParentConstructor1(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - symbol",        () => expect(() => new CompanionEnum_ParentConstructor1(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("1st parameter - symbol object", () => expect(() => new CompanionEnum_ParentConstructor1(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - object",        () => expect(() => new CompanionEnum_ParentConstructor1({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - function",      () => expect(() => new CompanionEnum_ParentConstructor1(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - array",         () => expect(() => new CompanionEnum_ParentConstructor1([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - set",           () => expect(() => new CompanionEnum_ParentConstructor1(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak set",      () => expect(() => new CompanionEnum_ParentConstructor1(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - map",           () => expect(() => new CompanionEnum_ParentConstructor1(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak map",      () => expect(() => new CompanionEnum_ParentConstructor1(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("2nd parameter - null",          () => expect(() => new CompanionEnum_ParentConstructor2(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - undefined",     () => expect(() => new CompanionEnum_ParentConstructor2(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string",        () => expect(() => new CompanionEnum_ParentConstructor2("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string object", () => expect(() => new CompanionEnum_ParentConstructor2(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number",        () => expect(() => new CompanionEnum_ParentConstructor2(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number object", () => expect(() => new CompanionEnum_ParentConstructor2(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - bigint",        () => expect(() => new CompanionEnum_ParentConstructor2(0n,),)               .toThrow(InvalidInstanceException,),)
        test("2nd parameter - bigint object", () => expect(() => new CompanionEnum_ParentConstructor2(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - symbol",        () => expect(() => new CompanionEnum_ParentConstructor2(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("2nd parameter - symbol object", () => expect(() => new CompanionEnum_ParentConstructor2(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - object",        () => expect(() => new CompanionEnum_ParentConstructor2({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - function",      () => expect(() => new CompanionEnum_ParentConstructor2(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - array",         () => expect(() => new CompanionEnum_ParentConstructor2([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - set",           () => expect(() => new CompanionEnum_ParentConstructor2(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak set",      () => expect(() => new CompanionEnum_ParentConstructor2(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - map",           () => expect(() => new CompanionEnum_ParentConstructor2(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak map",      () => expect(() => new CompanionEnum_ParentConstructor2(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("invalid order", () => expect(() => new CompanionEnum_ParentConstructor(BasicEnum, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)

        test("valid", () => expect(() => new CompanionEnum_ParentConstructor(BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
    },)

    describe("set defaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithParent().defaultValue = null,)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithParent().defaultValue = undefined,)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 0,)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new Number(),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 0n,)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = Object(0n,),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = '0',)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String(0,),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 1,)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new Number(1,),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 1n,)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = Object(1n,),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = '1',)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String(1,),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 2,)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new Number(2,),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 2n,)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = Object(2n,),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = '2',)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String(2,),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 3,)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new Number(3,),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 3n,)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = Object(3n,),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = '3',)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String(3,),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 4,)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new Number(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 4n,)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = Object(4n,),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = '4',)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 'A',)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String('A',),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 'B',)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String('B',),)               .not.toThrow(),)
        test("C as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 'C',)                            .not.toThrow(),)
        test("C as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String('C',),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 'D',)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String('D',),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithParent().defaultValue = 'E',)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithParent().defaultValue = new String('E',),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnum.A,)                    .not.toThrow(),)
        test("instance.B",          () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnum.B,)                    .not.toThrow(),)
        test("instance.C",          () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnum.C,)                    .not.toThrow(),)
        test("instance.D",          () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnum.D,)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithParent.A,)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithParent.B,)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithParent.C,)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithParent.D,)          .not.toThrow(),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithGrandParent.A,)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithParent().defaultValue = BasicEnumWithGreatGrandParent.A,).toThrow(InvalidEnumerableException,),)
    },)
    describe("setDefaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(null,),)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(undefined,),)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(0,),)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new Number(),),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(0n,),)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(Object(0n,),),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('0',),)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String(0,),),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(1,),)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new Number(1,),),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(1n,),)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(Object(1n,),),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('1',),)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String(1,),),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(2,),)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new Number(2,),),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(2n,),)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(Object(2n,),),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('2',),)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String(2,),),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(3,),)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new Number(3,),),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(3n,),)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(Object(3n,),),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('3',),)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String(3,),),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('A',),)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String('A',),),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('B',),)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String('B',),),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('D',),)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String('D',),),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnum.A,),)                    .not.toThrow(),)
        test("instance.B",          () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnum.B,),)                    .not.toThrow(),)
        test("instance.C",          () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnum.C,),)                    .not.toThrow(),)
        test("instance.D",          () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnum.D,),)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithParent.A,),)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithParent.B,),)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithParent.C,),)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithParent.D,),)          .not.toThrow(),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithParent().setDefaultValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithParent().getValue(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithParent().getValue(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithParent().getValue(0,),)                              .toBe(BasicEnumWithParent.A,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new Number(),),)                   .toBe(BasicEnumWithParent.A,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getValue(0n,),)                             .toBe(BasicEnumWithParent.A,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getValue(Object(0n,),),)                    .toBe(BasicEnumWithParent.A,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('0',),)                            .toBe(BasicEnumWithParent.A,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String(0,),),)                 .toBe(BasicEnumWithParent.A,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithParent().getValue(1,),)                              .toBe(BasicEnumWithParent.B,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new Number(1,),),)                 .toBe(BasicEnumWithParent.B,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getValue(1n,),)                             .toBe(BasicEnumWithParent.B,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getValue(Object(1n,),),)                    .toBe(BasicEnumWithParent.B,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('1',),)                            .toBe(BasicEnumWithParent.B,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String(1,),),)                 .toBe(BasicEnumWithParent.B,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithParent().getValue(2,),)                              .toBe(BasicEnumWithParent.C,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new Number(2,),),)                 .toBe(BasicEnumWithParent.C,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getValue(2n,),)                             .toBe(BasicEnumWithParent.C,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getValue(Object(2n,),),)                    .toBe(BasicEnumWithParent.C,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('2',),)                            .toBe(BasicEnumWithParent.C,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String(2,),),)                 .toBe(BasicEnumWithParent.C,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithParent().getValue(3,),)                              .toBe(BasicEnumWithParent.D,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new Number(3,),),)                 .toBe(BasicEnumWithParent.D,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getValue(3n,),)                             .toBe(BasicEnumWithParent.D,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getValue(Object(3n,),),)                    .toBe(BasicEnumWithParent.D,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('3',),)                            .toBe(BasicEnumWithParent.D,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String(3,),),)                 .toBe(BasicEnumWithParent.D,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithParent().getValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithParent().getValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().getValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().getValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithParent().getValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithParent().getValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('A',),)                            .toBe(BasicEnumWithParent.A,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String('A',),),)               .toBe(BasicEnumWithParent.A,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('B',),)                            .toBe(BasicEnumWithParent.B,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String('B',),),)               .toBe(BasicEnumWithParent.B,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('C',),)                            .toBe(BasicEnumWithParent.C,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String('C',),),)               .toBe(BasicEnumWithParent.C,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithParent().getValue('D',),)                            .toBe(BasicEnumWithParent.D,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithParent().getValue(new String('D',),),)               .toBe(BasicEnumWithParent.D,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithParent().getValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithParent().getValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnum.A,),)                    .toBe(BasicEnumWithParent.A,),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnum.B,),)                    .toBe(BasicEnumWithParent.B,),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnum.C,),)                    .toBe(BasicEnumWithParent.C,),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnum.D,),)                    .toBe(BasicEnumWithParent.D,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.A,),)          .toBe(BasicEnumWithParent.A,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.B,),)          .toBe(BasicEnumWithParent.B,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.C,),)          .toBe(BasicEnumWithParent.C,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.D,),)          .toBe(BasicEnumWithParent.D,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithParent().getValue(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithParent().getValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getName", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithParent().getName(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithParent().getName(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithParent().getName(0,),)                              .toBe('A',),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithParent().getName(new Number(),),)                   .toBe('A',),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getName(0n,),)                             .toBe('A',),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getName(Object(0n,),),)                    .toBe('A',),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithParent().getName('0',),)                            .toBe('A',),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String(0,),),)                 .toBe('A',),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithParent().getName(1,),)                              .toBe('B',),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithParent().getName(new Number(1,),),)                 .toBe('B',),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getName(1n,),)                             .toBe('B',),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getName(Object(1n,),),)                    .toBe('B',),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithParent().getName('1',),)                            .toBe('B',),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String(1,),),)                 .toBe('B',),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithParent().getName(2,),)                              .toBe('C',),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithParent().getName(new Number(2,),),)                 .toBe('C',),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getName(2n,),)                             .toBe('C',),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getName(Object(2n,),),)                    .toBe('C',),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithParent().getName('2',),)                            .toBe('C',),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String(2,),),)                 .toBe('C',),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithParent().getName(3,),)                              .toBe('D',),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithParent().getName(new Number(3,),),)                 .toBe('D',),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getName(3n,),)                             .toBe('D',),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getName(Object(3n,),),)                    .toBe('D',),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithParent().getName('3',),)                            .toBe('D',),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String(3,),),)                 .toBe('D',),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithParent().getName(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithParent().getName(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().getName(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().getName(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithParent().getName('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithParent().getName(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithParent().getName('A',),)                            .toBe('A',),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String('A',),),)               .toBe('A',),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithParent().getName('B',),)                            .toBe('B',),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String('B',),),)               .toBe('B',),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithParent().getName('C',),)                            .toBe('C',),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String('C',),),)               .toBe('C',),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithParent().getName('D',),)                            .toBe('D',),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithParent().getName(new String('D',),),)               .toBe('D',),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithParent().getName('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithParent().getName(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnum.A,),)                    .toBe('A',),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnum.B,),)                    .toBe('B',),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnum.C,),)                    .toBe('C',),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnum.D,),)                    .toBe('D',),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.A,),)          .toBe('A',),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.B,),)          .toBe('B',),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.C,),)          .toBe('C',),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.D,),)          .toBe('D',),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithParent().getName(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithParent().getName(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getOrdinal", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(0,),)                              .toBe(0,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new Number(),),)                   .toBe(0,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(0n,),)                             .toBe(0,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(Object(0n,),),)                    .toBe(0,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('0',),)                            .toBe(0,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String(0,),),)                 .toBe(0,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(1,),)                              .toBe(1,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new Number(1,),),)                 .toBe(1,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(1n,),)                             .toBe(1,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(Object(1n,),),)                    .toBe(1,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('1',),)                            .toBe(1,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String(1,),),)                 .toBe(1,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(2,),)                              .toBe(2,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new Number(2,),),)                 .toBe(2,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(2n,),)                             .toBe(2,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(Object(2n,),),)                    .toBe(2,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('2',),)                            .toBe(2,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String(2,),),)                 .toBe(2,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(3,),)                              .toBe(3,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new Number(3,),),)                 .toBe(3,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal(3n,),)                             .toBe(3,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(Object(3n,),),)                    .toBe(3,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('3',),)                            .toBe(3,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String(3,),),)                 .toBe(3,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithParent().getOrdinal('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('A',),)                            .toBe(0,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String('A',),),)               .toBe(0,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('B',),)                            .toBe(1,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String('B',),),)               .toBe(1,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('C',),)                            .toBe(2,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String('C',),),)               .toBe(2,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithParent().getOrdinal('D',),)                            .toBe(3,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithParent().getOrdinal(new String('D',),),)               .toBe(3,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithParent().getOrdinal('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.A,),)                    .toBe(0,),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.B,),)                    .toBe(1,),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.C,),)                    .toBe(2,),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.D,),)                    .toBe(3,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.A,),)          .toBe(0,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.B,),)          .toBe(1,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.C,),)          .toBe(2,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.D,),)          .toBe(3,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)

},)
