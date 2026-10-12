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

import {BasicCompanionEnumWithGrandParent}     from "./instance/BasicCompanionEnumWithGrandParent"
import {BasicEnum}                             from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}              from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent}         from "./instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}                   from "./instance/BasicEnumWithParent"
import {CompanionEnum_GrandParentConstructor}  from "./instance/CompanionEnum_GrandParentConstructor"
import {CompanionEnum_GrandParentConstructor1} from "./instance/CompanionEnum_GrandParentConstructor1"
import {CompanionEnum_GrandParentConstructor2} from "./instance/CompanionEnum_GrandParentConstructor2"
import {CompanionEnum_GrandParentConstructor3} from "./instance/CompanionEnum_GrandParentConstructor3"

import {ImpossibleOrdinalException} from "../src/exception/ImpossibleOrdinalException"
import {InvalidEnumerableException} from "../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../src/exception/InvalidInstanceException"
import {NullEnumerableException}    from "../src/exception/NullEnumerableException"
import {NullInstanceException}      from "../src/exception/NullInstanceException"
import {NullReferenceException}     from "../src/exception/NullReferenceException"

describe("companionTests (CompanionEnumWithGrandParent)", () => {

    describe("constructor", () => {
        // @ts-expect-error
        test("1st parameter - null",          () => expect(() => new CompanionEnum_GrandParentConstructor1(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - undefined",     () => expect(() => new CompanionEnum_GrandParentConstructor1(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string",        () => expect(() => new CompanionEnum_GrandParentConstructor1("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string object", () => expect(() => new CompanionEnum_GrandParentConstructor1(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number",        () => expect(() => new CompanionEnum_GrandParentConstructor1(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number object", () => expect(() => new CompanionEnum_GrandParentConstructor1(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - bigint",        () => expect(() => new CompanionEnum_GrandParentConstructor1(0n,),)               .toThrow(InvalidInstanceException,),)
        test("1st parameter - bigint object", () => expect(() => new CompanionEnum_GrandParentConstructor1(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - symbol",        () => expect(() => new CompanionEnum_GrandParentConstructor1(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("1st parameter - symbol object", () => expect(() => new CompanionEnum_GrandParentConstructor1(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - object",        () => expect(() => new CompanionEnum_GrandParentConstructor1({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - function",      () => expect(() => new CompanionEnum_GrandParentConstructor1(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - array",         () => expect(() => new CompanionEnum_GrandParentConstructor1([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - set",           () => expect(() => new CompanionEnum_GrandParentConstructor1(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak set",      () => expect(() => new CompanionEnum_GrandParentConstructor1(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - map",           () => expect(() => new CompanionEnum_GrandParentConstructor1(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak map",      () => expect(() => new CompanionEnum_GrandParentConstructor1(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("2nd parameter - null",          () => expect(() => new CompanionEnum_GrandParentConstructor2(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - undefined",     () => expect(() => new CompanionEnum_GrandParentConstructor2(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string",        () => expect(() => new CompanionEnum_GrandParentConstructor2("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string object", () => expect(() => new CompanionEnum_GrandParentConstructor2(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number",        () => expect(() => new CompanionEnum_GrandParentConstructor2(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number object", () => expect(() => new CompanionEnum_GrandParentConstructor2(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - bigint",        () => expect(() => new CompanionEnum_GrandParentConstructor2(0n,),)               .toThrow(InvalidInstanceException,),)
        test("2nd parameter - bigint object", () => expect(() => new CompanionEnum_GrandParentConstructor2(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - symbol",        () => expect(() => new CompanionEnum_GrandParentConstructor2(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("2nd parameter - symbol object", () => expect(() => new CompanionEnum_GrandParentConstructor2(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - object",        () => expect(() => new CompanionEnum_GrandParentConstructor2({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - function",      () => expect(() => new CompanionEnum_GrandParentConstructor2(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - array",         () => expect(() => new CompanionEnum_GrandParentConstructor2([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - set",           () => expect(() => new CompanionEnum_GrandParentConstructor2(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak set",      () => expect(() => new CompanionEnum_GrandParentConstructor2(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - map",           () => expect(() => new CompanionEnum_GrandParentConstructor2(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak map",      () => expect(() => new CompanionEnum_GrandParentConstructor2(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("3rd parameter - null",          () => expect(() => new CompanionEnum_GrandParentConstructor3(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - undefined",     () => expect(() => new CompanionEnum_GrandParentConstructor3(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - string",        () => expect(() => new CompanionEnum_GrandParentConstructor3("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - string object", () => expect(() => new CompanionEnum_GrandParentConstructor3(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - number",        () => expect(() => new CompanionEnum_GrandParentConstructor3(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - number object", () => expect(() => new CompanionEnum_GrandParentConstructor3(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - bigint",        () => expect(() => new CompanionEnum_GrandParentConstructor3(0n,),)               .toThrow(InvalidInstanceException,),)
        test("3rd parameter - bigint object", () => expect(() => new CompanionEnum_GrandParentConstructor3(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - symbol",        () => expect(() => new CompanionEnum_GrandParentConstructor3(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("3rd parameter - symbol object", () => expect(() => new CompanionEnum_GrandParentConstructor3(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - object",        () => expect(() => new CompanionEnum_GrandParentConstructor3({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - function",      () => expect(() => new CompanionEnum_GrandParentConstructor3(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - array",         () => expect(() => new CompanionEnum_GrandParentConstructor3([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - set",           () => expect(() => new CompanionEnum_GrandParentConstructor3(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - weak set",      () => expect(() => new CompanionEnum_GrandParentConstructor3(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - map",           () => expect(() => new CompanionEnum_GrandParentConstructor3(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - weak map",      () => expect(() => new CompanionEnum_GrandParentConstructor3(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("order - child, parent, grandparent", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, grandparent, parent", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, child, grandparent", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, grandparent, child", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, child, parent", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)

        test("valid", () => expect(() => new CompanionEnum_GrandParentConstructor(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
    },)

    describe("set defaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = null,)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = undefined,)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 0,)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new Number(),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 0n,)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = Object(0n,),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = '0',)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String(0,),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 1,)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new Number(1,),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 1n,)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = Object(1n,),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = '1',)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String(1,),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 2,)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new Number(2,),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 2n,)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = Object(2n,),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = '2',)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String(2,),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 3,)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new Number(3,),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 3n,)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = Object(3n,),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = '3',)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String(3,),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 4,)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new Number(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 4n,)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = Object(4n,),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = '4',)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 'A',)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String('A',),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 'B',)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String('B',),)               .not.toThrow(),)
        test("C as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 'C',)                            .not.toThrow(),)
        test("C as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String('C',),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 'D',)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String('D',),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = 'E',)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = new String('E',),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnum.A,)                    .not.toThrow(),)
        test("instance.B",          () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnum.B,)                    .not.toThrow(),)
        test("instance.C",          () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnum.C,)                    .not.toThrow(),)
        test("instance.D",          () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnum.D,)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithParent.A,)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithParent.B,)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithParent.C,)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithParent.D,)          .not.toThrow(),)
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithGrandParent.A,)     .not.toThrow(),)
        test("grandparent.B",       () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithGrandParent.B,)     .not.toThrow(),)
        test("grandparent.C",       () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithGrandParent.C,)     .not.toThrow(),)
        test("grandparent.D",       () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithGrandParent.D,)     .not.toThrow(),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGrandParent().defaultValue = BasicEnumWithGreatGrandParent.A,).toThrow(InvalidEnumerableException,),)
    },)
    describe("setDefaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(null,),)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(undefined,),)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(0,),)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new Number(),),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(0n,),)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(Object(0n,),),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('0',),)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String(0,),),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(1,),)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new Number(1,),),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(1n,),)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(Object(1n,),),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('1',),)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String(1,),),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(2,),)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new Number(2,),),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(2n,),)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(Object(2n,),),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('2',),)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String(2,),),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(3,),)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new Number(3,),),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(3n,),)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(Object(3n,),),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('3',),)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String(3,),),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('A',),)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String('A',),),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('B',),)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String('B',),),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('D',),)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String('D',),),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnum.A,),)                    .not.toThrow(),)
        test("instance.B",          () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnum.B,),)                    .not.toThrow(),)
        test("instance.C",          () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnum.C,),)                    .not.toThrow(),)
        test("instance.D",          () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnum.D,),)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithParent.A,),)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithParent.B,),)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithParent.C,),)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithParent.D,),)          .not.toThrow(),)
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithGrandParent.A,),)     .not.toThrow(),)
        test("grandparent.B",       () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithGrandParent.C,),)     .not.toThrow(),)
        test("grandparent.C",       () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithGrandParent.B,),)     .not.toThrow(),)
        test("grandparent.D",       () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithGrandParent.D,),)     .not.toThrow(),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGrandParent().setDefaultValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(0,),)                              .toBe(BasicEnumWithGrandParent.A,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new Number(),),)                   .toBe(BasicEnumWithGrandParent.A,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(0n,),)                             .toBe(BasicEnumWithGrandParent.A,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(Object(0n,),),)                    .toBe(BasicEnumWithGrandParent.A,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('0',),)                            .toBe(BasicEnumWithGrandParent.A,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String(0,),),)                 .toBe(BasicEnumWithGrandParent.A,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(1,),)                              .toBe(BasicEnumWithGrandParent.B,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new Number(1,),),)                 .toBe(BasicEnumWithGrandParent.B,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(1n,),)                             .toBe(BasicEnumWithGrandParent.B,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(Object(1n,),),)                    .toBe(BasicEnumWithGrandParent.B,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('1',),)                            .toBe(BasicEnumWithGrandParent.B,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String(1,),),)                 .toBe(BasicEnumWithGrandParent.B,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(2,),)                              .toBe(BasicEnumWithGrandParent.C,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new Number(2,),),)                 .toBe(BasicEnumWithGrandParent.C,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(2n,),)                             .toBe(BasicEnumWithGrandParent.C,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(Object(2n,),),)                    .toBe(BasicEnumWithGrandParent.C,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('2',),)                            .toBe(BasicEnumWithGrandParent.C,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String(2,),),)                 .toBe(BasicEnumWithGrandParent.C,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(3,),)                              .toBe(BasicEnumWithGrandParent.D,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new Number(3,),),)                 .toBe(BasicEnumWithGrandParent.D,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue(3n,),)                             .toBe(BasicEnumWithGrandParent.D,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(Object(3n,),),)                    .toBe(BasicEnumWithGrandParent.D,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('3',),)                            .toBe(BasicEnumWithGrandParent.D,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String(3,),),)                 .toBe(BasicEnumWithGrandParent.D,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('A',),)                            .toBe(BasicEnumWithGrandParent.A,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String('A',),),)               .toBe(BasicEnumWithGrandParent.A,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('B',),)                            .toBe(BasicEnumWithGrandParent.B,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String('B',),),)               .toBe(BasicEnumWithGrandParent.B,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('C',),)                            .toBe(BasicEnumWithGrandParent.C,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String('C',),),)               .toBe(BasicEnumWithGrandParent.C,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getValue('D',),)                            .toBe(BasicEnumWithGrandParent.D,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getValue(new String('D',),),)               .toBe(BasicEnumWithGrandParent.D,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnum.A,),)                    .toBe(BasicEnumWithGrandParent.A,),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnum.B,),)                    .toBe(BasicEnumWithGrandParent.B,),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnum.C,),)                    .toBe(BasicEnumWithGrandParent.C,),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnum.D,),)                    .toBe(BasicEnumWithGrandParent.D,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithParent.A,),)          .toBe(BasicEnumWithGrandParent.A,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithParent.B,),)          .toBe(BasicEnumWithGrandParent.B,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithParent.C,),)          .toBe(BasicEnumWithGrandParent.C,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithParent.D,),)          .toBe(BasicEnumWithGrandParent.D,),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithGrandParent.A,),)     .toBe(BasicEnumWithGrandParent.A,),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithGrandParent.B,),)     .toBe(BasicEnumWithGrandParent.B,),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithGrandParent.C,),)     .toBe(BasicEnumWithGrandParent.C,),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithGrandParent.D,),)     .toBe(BasicEnumWithGrandParent.D,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGrandParent().getValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getName", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGrandParent().getName(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGrandParent().getName(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(0,),)                              .toBe('A',),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new Number(),),)                   .toBe('A',),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(0n,),)                             .toBe('A',),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(Object(0n,),),)                    .toBe('A',),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('0',),)                            .toBe('A',),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String(0,),),)                 .toBe('A',),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(1,),)                              .toBe('B',),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new Number(1,),),)                 .toBe('B',),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(1n,),)                             .toBe('B',),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(Object(1n,),),)                    .toBe('B',),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('1',),)                            .toBe('B',),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String(1,),),)                 .toBe('B',),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(2,),)                              .toBe('C',),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new Number(2,),),)                 .toBe('C',),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(2n,),)                             .toBe('C',),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(Object(2n,),),)                    .toBe('C',),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('2',),)                            .toBe('C',),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String(2,),),)                 .toBe('C',),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(3,),)                              .toBe('D',),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new Number(3,),),)                 .toBe('D',),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getName(3n,),)                             .toBe('D',),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(Object(3n,),),)                    .toBe('D',),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('3',),)                            .toBe('D',),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String(3,),),)                 .toBe('D',),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().getName(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getName(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().getName(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getName(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getName('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getName(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('A',),)                            .toBe('A',),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String('A',),),)               .toBe('A',),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('B',),)                            .toBe('B',),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String('B',),),)               .toBe('B',),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('C',),)                            .toBe('C',),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String('C',),),)               .toBe('C',),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getName('D',),)                            .toBe('D',),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getName(new String('D',),),)               .toBe('D',),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getName('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getName(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnum.A,),)                    .toBe('A',),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnum.B,),)                    .toBe('B',),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnum.C,),)                    .toBe('C',),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnum.D,),)                    .toBe('D',),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithParent.A,),)          .toBe('A',),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithParent.B,),)          .toBe('B',),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithParent.C,),)          .toBe('C',),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithParent.D,),)          .toBe('D',),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithGrandParent.A,),)     .toBe('A',),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithGrandParent.B,),)     .toBe('B',),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithGrandParent.C,),)     .toBe('C',),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithGrandParent.D,),)     .toBe('D',),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGrandParent().getName(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getOrdinal", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(0,),)                              .toBe(0,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new Number(),),)                   .toBe(0,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(0n,),)                             .toBe(0,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(Object(0n,),),)                    .toBe(0,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('0',),)                            .toBe(0,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String(0,),),)                 .toBe(0,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(1,),)                              .toBe(1,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new Number(1,),),)                 .toBe(1,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(1n,),)                             .toBe(1,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(Object(1n,),),)                    .toBe(1,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('1',),)                            .toBe(1,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String(1,),),)                 .toBe(1,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(2,),)                              .toBe(2,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new Number(2,),),)                 .toBe(2,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(2n,),)                             .toBe(2,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(Object(2n,),),)                    .toBe(2,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('2',),)                            .toBe(2,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String(2,),),)                 .toBe(2,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(3,),)                              .toBe(3,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new Number(3,),),)                 .toBe(3,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(3n,),)                             .toBe(3,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(Object(3n,),),)                    .toBe(3,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('3',),)                            .toBe(3,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String(3,),),)                 .toBe(3,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('A',),)                            .toBe(0,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String('A',),),)               .toBe(0,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('B',),)                            .toBe(1,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String('B',),),)               .toBe(1,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('C',),)                            .toBe(2,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String('C',),),)               .toBe(2,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal('D',),)                            .toBe(3,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(new String('D',),),)               .toBe(3,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("instance.A",          () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnum.A,),)                    .toBe(0,),)
        test("instance.B",          () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnum.B,),)                    .toBe(1,),)
        test("instance.C",          () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnum.C,),)                    .toBe(2,),)
        test("instance.D",          () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnum.D,),)                    .toBe(3,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithParent.A,),)          .toBe(0,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithParent.B,),)          .toBe(1,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithParent.C,),)          .toBe(2,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithParent.D,),)          .toBe(3,),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithGrandParent.A,),)     .toBe(0,),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithGrandParent.B,),)     .toBe(1,),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithGrandParent.C,),)     .toBe(2,),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithGrandParent.D,),)     .toBe(3,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGrandParent().getOrdinal(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)

},)
