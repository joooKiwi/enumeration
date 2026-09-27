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

import {BasicEnum as Child}                                                                  from "../instance/BasicEnum"
import {BasicEnumWithGrandParent as GrandParent}                                             from "../instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent as GreatGrandParent}                                   from "../instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent as Parent}                                                       from "../instance/BasicEnumWithParent"
import {CompanionEnum_TestClassHelper as InstanceHelper}                                     from "../instance/CompanionEnum_TestClassHelper"
import {CompanionEnumWithGrandParent_TestClassHelper as GrandParentInstanceHelper}           from "../instance/CompanionEnumWithGrandParent_TestClassHelper"
import {CompanionEnumWithParent_TestClassHelper as ParentInstanceHelper}                     from "../instance/CompanionEnumWithParent_TestClassHelper"
import {CompanionEnumWithGreatGrandParent_TestClassHelper as GreatGrandParentInstanceHelper} from "../instance/CompanionEnumWithGreatGrandParent_TestClassHelper"
import {invalidInstances, nullValues, validValues}                                           from "../value/constants"

import {CompanionEnumWithGrandParent}      from "../../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../../src/companion/CompanionEnumWithParent"
import {InvalidEnumerableException}        from "../../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}          from "../../src/exception/InvalidInstanceException"
import {NonExistantKeyException}           from "../../src/exception/NonExistantKeyException"
import {NullEnumerableException}           from "../../src/exception/NullEnumerableException"
import {NullInstanceException}             from "../../src/exception/NullInstanceException"

describe("CompanionEnumTest", () => {

    describe("CompanionEnum", () => {
        describe("invalid argument", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new InstanceHelper(it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(it,),).toThrow(InvalidInstanceException,),)
        },)
        test("valid construction", () => expect(() => new InstanceHelper(Child,),).not.toThrow(),)
        describe("methods", () => {
            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => new InstanceHelper(Child,).setDefaultValue(it,),).not.toThrow()
                    expect(() => new InstanceHelper(Child,).defaultValue,)        .toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new InstanceHelper(Child,).setDefaultValue(it,).defaultValue,)     .toEqual(Child.A,),)
                test("instance.A",                        () => expect(      new InstanceHelper(Child,).setDefaultValue(Child.A,).defaultValue,).toEqual(Child.A,),)
                test("instance with parent.A",            () => expect(() => new InstanceHelper(Child,).setDefaultValue(Parent.A,),)            .toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A",       () => expect(() => new InstanceHelper(Child,).setDefaultValue(GrandParent.A,),)       .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new InstanceHelper(Child,).setDefaultValue(GreatGrandParent.A,),)  .toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s",              it => expect(() => new InstanceHelper(Child,).getValue(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new InstanceHelper(Child,).getValue(it,),)                .toEqual(Child.A,),)
                test("instance.A",                        () => expect(      new InstanceHelper(Child,).getValue(Child.A,),)           .toEqual(Child.A,),)
                test("instance with parent.A",            () => expect(() => new InstanceHelper(Child,).getValue(Parent.A,),)          .toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A",       () => expect(() => new InstanceHelper(Child,).getValue(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new InstanceHelper(Child,).getValue(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s",              it => expect(() => new InstanceHelper(Child,).getName(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new InstanceHelper(Child,).getName(it,),)                .toEqual('A',),)
                test("instance.A",                        () => expect(      new InstanceHelper(Child,).getName(Child.A,),)           .toEqual('A',),)
                test("instance with parent.A",            () => expect(() => new InstanceHelper(Child,).getName(Parent.A,),)          .toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A",       () => expect(() => new InstanceHelper(Child,).getName(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new InstanceHelper(Child,).getName(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s",              it => expect(() => new InstanceHelper(Child,).getOrdinal(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new InstanceHelper(Child,).getOrdinal(it,),)                .toEqual(0,),)
                test("instance.A",                        () => expect(      new InstanceHelper(Child,).getOrdinal(Child.A,),)           .toEqual(0,),)
                test("instance with parent.A",            () => expect(() => new InstanceHelper(Child,).getOrdinal(Parent.A,),)          .toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A",       () => expect(() => new InstanceHelper(Child,).getOrdinal(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new InstanceHelper(Child,).getOrdinal(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithParent", () => {
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new ParentInstanceHelper(it, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new ParentInstanceHelper(it, Child,),).toThrow(InvalidInstanceException,),)
            // @ts-expect-error
            test("parent not present", () => expect(() => new ParentInstanceHelper(Child, Child,),).toThrow(NonExistantKeyException,),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new ParentInstanceHelper(Parent, it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new ParentInstanceHelper(Parent, it,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent", () => expect(() => new ParentInstanceHelper(Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new ParentInstanceHelper(Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => new ParentInstanceHelper(Parent, Child,).setDefaultValue(it,),).not.toThrow()
                    expect(() => new ParentInstanceHelper(Parent, Child,).defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new ParentInstanceHelper(Parent, Child,).setDefaultValue(it,).defaultValue,)      .toEqual(Parent.A,),)
                test("instance.A",                        () => expect(      new ParentInstanceHelper(Parent, Child,).setDefaultValue(Child.A,).defaultValue,) .toEqual(Parent.A,),)
                test("instance with parent.A",            () => expect(      new ParentInstanceHelper(Parent, Child,).setDefaultValue(Parent.A,).defaultValue,).toEqual(Parent.A,),)
                test("instance with grandparent.A",       () => expect(() => new ParentInstanceHelper(Parent, Child,).setDefaultValue(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new ParentInstanceHelper(Parent, Child,).setDefaultValue(GreatGrandParent.A,),)   .toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s",              it => expect(() => new ParentInstanceHelper(Parent, Child,).getValue(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new ParentInstanceHelper(Parent, Child,).getValue(it,),)                .toEqual(Parent.A,),)
                test("instance.A",                        () => expect(      new ParentInstanceHelper(Parent, Child,).getValue(Child.A,),)           .toEqual(Parent.A,),)
                test("instance with parent.A",            () => expect(      new ParentInstanceHelper(Parent, Child,).getValue(Parent.A,),)          .toEqual(Parent.A,),)
                test("instance with grandparent.A",       () => expect(() => new ParentInstanceHelper(Parent, Child,).getValue(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new ParentInstanceHelper(Parent, Child,).getValue(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s",              it => expect(() => new ParentInstanceHelper(Parent, Child,).getName(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new ParentInstanceHelper(Parent, Child,).getName(it,),)                .toEqual('A',),)
                test("instance.A",                        () => expect(      new ParentInstanceHelper(Parent, Child,).getName(Child.A,),)           .toEqual('A',),)
                test("instance with parent.A",            () => expect(      new ParentInstanceHelper(Parent, Child,).getName(Parent.A,),)          .toEqual('A',),)
                test("instance with grandparent.A",       () => expect(() => new ParentInstanceHelper(Parent, Child,).getName(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new ParentInstanceHelper(Parent, Child,).getName(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s",              it => expect(() => new ParentInstanceHelper(Parent, Child,).getOrdinal(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new ParentInstanceHelper(Parent, Child,).getOrdinal(it,),)                .toEqual(0,),)
                test("instance.A",                        () => expect(      new ParentInstanceHelper(Parent, Child,).getOrdinal(Child.A,),)           .toEqual(0,),)
                test("instance with parent.A",            () => expect(      new ParentInstanceHelper(Parent, Child,).getOrdinal(Parent.A,),)          .toEqual(0,),)
                test("instance with grandparent.A",       () => expect(() => new ParentInstanceHelper(Parent, Child,).getOrdinal(GrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => new ParentInstanceHelper(Parent, Child,).getOrdinal(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithGrandParent", () => {
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GrandParentInstanceHelper(it, Parent, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GrandParentInstanceHelper(it, Parent, Child,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GrandParentInstanceHelper(GrandParent, it, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GrandParentInstanceHelper(GrandParent, it, Child,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, it,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent", () => expect(() => new GrandParentInstanceHelper(Child, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent", () => expect(() => new GrandParentInstanceHelper(Child, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent", () => expect(() => new GrandParentInstanceHelper(Parent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child", () => expect(() => new GrandParentInstanceHelper(Parent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent", () => expect(() => new GrandParentInstanceHelper(GrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(it,),).not.toThrow()
                    expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(it,).defaultValue,)           .toEqual(GrandParent.A,),)
                test("instance.A",                        () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(Child.A,).defaultValue,)      .toEqual(GrandParent.A,),)
                test("instance with parent.A",            () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(Parent.A,).defaultValue,)     .toEqual(GrandParent.A,),)
                test("instance with grandparent.A",       () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(GrandParent.A,).defaultValue,).toEqual(GrandParent.A,),)
                test("instance with great-grandparent.A", () => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).setDefaultValue(GreatGrandParent.A,),)        .toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(it,),)                .toEqual(GrandParent.A,),)
                test("instance.A",                        () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(Child.A,),)           .toEqual(GrandParent.A,),)
                test("instance with parent.A",            () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(Parent.A,),)          .toEqual(GrandParent.A,),)
                test("instance with grandparent.A",       () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(GrandParent.A,),)     .toEqual(GrandParent.A,),)
                test("instance with great-grandparent.A", () => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getValue(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(it,),)                .toEqual('A',),)
                test("instance.A",                        () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(Child.A,),)           .toEqual('A',),)
                test("instance with parent.A",            () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(Parent.A,),)          .toEqual('A',),)
                test("instance with grandparent.A",       () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(GrandParent.A,),)     .toEqual('A',),)
                test("instance with great-grandparent.A", () => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getName(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(it,),)                .toEqual(0,),)
                test("instance.A",                        () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(Child.A,),)           .toEqual(0,),)
                test("instance with parent.A",            () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(Parent.A,),)          .toEqual(0,),)
                test("instance with grandparent.A",       () => expect(      new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(GrandParent.A,),)     .toEqual(0,),)
                test("instance with great-grandparent.A", () => expect(() => new GrandParentInstanceHelper(GrandParent, Parent, Child,).getOrdinal(GreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithGreatGrandParent", () => {
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GreatGrandParentInstanceHelper(it, GrandParent, Parent, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GreatGrandParentInstanceHelper(it, GrandParent, Parent, Child,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, it, GrandParent, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, it, GrandParent, Child,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, it, Child,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, it, Child,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid argument #4", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s",                   it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, it,),).toThrow(InvalidInstanceException,),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Child, Parent, GrandParent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, parent, great-grandparent, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Child, Parent, GreatGrandParent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Child, GrandParent, Parent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, great-grandparent, parent", () => expect(() => new GreatGrandParentInstanceHelper(Child, GrandParent, GreatGrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, grandparent, parent", () => expect(() => new GreatGrandParentInstanceHelper(Child, GreatGrandParent, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, parent, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Child, GreatGrandParent, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Parent, Child, GrandParent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, child, great-grandparent, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Parent, Child, GreatGrandParent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Parent, GrandParent, Child, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, great-grandparent, child", () => expect(() => new GreatGrandParentInstanceHelper(Parent, GrandParent, GreatGrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, child, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(Parent, GreatGrandParent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, grandparent, child", () => expect(() => new GreatGrandParentInstanceHelper(Parent, GreatGrandParent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, Child, Parent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, child, great-grandparent, parent", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, Child, GreatGrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, child, great-grandparent", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, Parent, Child, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, great-grandparent, child", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, Parent, GreatGrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, parent, child", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, GreatGrandParent, Parent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, child, parent", () => expect(() => new GreatGrandParentInstanceHelper(GrandParent, GreatGrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("great-grandparent, child, parent, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, Child, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, child, grandparent, parent", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, Child, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, child, grandparent", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, Parent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, grandparent, child", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, Parent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, grandparent, child, parent", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(it,),).not.toThrow()
                    expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues,)("%s", ({value: it,},) => expect(new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(it,).defaultValue,)                .toEqual(GreatGrandParent.A,),)
                test("instance.A",                         () => expect(new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(Child.A,).defaultValue,)           .toEqual(GreatGrandParent.A,),)
                test("instance with parent.A",             () => expect(new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(Parent.A,).defaultValue,)          .toEqual(GreatGrandParent.A,),)
                test("instance with grandparent.A",        () => expect(new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(GrandParent.A,).defaultValue,)     .toEqual(GreatGrandParent.A,),)
                test("instance with great-grandparent.A",  () => expect(new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).setDefaultValue(GreatGrandParent.A,).defaultValue,).toEqual(GreatGrandParent.A,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValuesm)("%s", ({value: it,},) => expect(     new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(it,),)                .toEqual(GreatGrandParent.A,),)
                test("instance.A",                        () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(Child.A,),)           .toEqual(GreatGrandParent.A,),)
                test("instance with parent.A",            () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(Parent.A,),)          .toEqual(GreatGrandParent.A,),)
                test("instance with grandparent.A",       () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(GrandParent.A,),)     .toEqual(GreatGrandParent.A,),)
                test("instance with great-grandparent.A", () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getValue(GreatGrandParent.A,),).toEqual(GreatGrandParent.A,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(it,),)                .toEqual('A',),)
                test("instance.A",                        () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(Child.A,),)           .toEqual('A',),)
                test("instance with parent.A",            () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(Parent.A,),)          .toEqual('A',),)
                test("instance with grandparent.A",       () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(GrandParent.A,),)     .toEqual('A',),)
                test("instance with great-grandparent.A", () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getName(GreatGrandParent.A,),).toEqual('A',),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s",              it => expect(() => new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(it,),)                .toThrow(NullEnumerableException,),)
                test.each(validValues,)("%s", ({value: it,},) => expect(     new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(it,),)                .toEqual(0,),)
                test("instance.A",                        () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(Child.A,),)           .toEqual(0,),)
                test("instance with parent.A",            () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(Parent.A,),)          .toEqual(0,),)
                test("instance with grandparent.A",       () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(GrandParent.A,),)     .toEqual(0,),)
                test("instance with great-grandparent.A", () => expect(      new GreatGrandParentInstanceHelper(GreatGrandParent, GrandParent, Parent, Child,).getOrdinal(GreatGrandParent.A,),).toEqual(0,),)
            },)
        },)
    },)

},)
