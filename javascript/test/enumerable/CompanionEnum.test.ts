//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {NullOr} from "@joookiwi/type"

import {invalidInstances, nullValues, validValues} from "./Enum.constants"

import type {Enumerable}                                                                                                                               from "../../src/Enumerable"
import type {EnumerableConstructor}                                                                                                                    from "../../src/EnumerableConstructor"
import type {CompanionEnumDeclaration}                                                                                                                 from "../../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                  from "../../src/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}                                                                                             from "../../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                       from "../../src/companion/CompanionEnumWithParent.declaration"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType} from "../../src/Enumerable.types"

import {Enum}                              from "../../src/Enum"
import {EnumWithNullableGrandParent}       from "../../src/EnumWithNullableGrandParent"
import {EnumWithNullableGreatGrandParent}  from "../../src/EnumWithNullableGreatGrandParent"
import {EnumWithNullableParent}            from "../../src/EnumWithNullableParent"
import {CompanionEnum}                     from "../../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../../src/companion/CompanionEnumWithParent"
import {InvalidEnumerableException}        from "../../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}          from "../../src/exception/InvalidInstanceException"
import {NonExistantKeyException}           from "../../src/exception/NonExistantKeyException"
import {NullEnumerableException}           from "../../src/exception/NullEnumerableException"
import {NullInstanceException}             from "../../src/exception/NullInstanceException"

//#region -------------------- Helper class declaration --------------------

//#region -------------------- Helper enum class declaration --------------------

class BasicEnum extends Enum {
    static readonly A = new BasicEnum()
    static CompanionEnum = class CompanionEnum_BasicEnum extends CompanionEnum<BasicEnum, any> {
        static #instance?: CompanionEnum_BasicEnum
        private constructor() { super(BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnum() }
    }
}

class BasicEnumWithParent extends EnumWithNullableParent<BasicEnum> {
    static readonly A = new BasicEnumWithParent(BasicEnum.A,)
    static readonly B = new BasicEnumWithParent()
    constructor(parent: NullOr<BasicEnum> = null,) {
        super(parent,)
    }
    static CompanionEnum = class CompanionEnum_BasicEnumWithParent extends CompanionEnumWithParent<BasicEnumWithParent, any, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithParent
        private constructor() { super(BasicEnumWithParent, BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithParent() }
    }
}

class BasicEnumWithGrandParent extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum> {
    static readonly A = new BasicEnumWithGrandParent(BasicEnumWithParent.A, BasicEnum.A,)
    static readonly B = new BasicEnumWithGrandParent(BasicEnumWithParent.B,)
    static readonly C = new BasicEnumWithGrandParent()
    constructor(parent: NullOr<BasicEnumWithParent> = null, grandParent: NullOr<BasicEnum> = null,) {
        super(parent, grandParent,)
    }
    static CompanionEnum = class CompanionEnum_BasicEnumWithGrandParent extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, any, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithGrandParent
        private constructor() { super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGrandParent() }
    }
}

class BasicEnumWithGreatGrandParent extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum> {
    static readonly A = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.A, BasicEnumWithParent.A, BasicEnum.A,)
    static readonly B = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.B, BasicEnumWithParent.B,)
    static readonly C = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.C,)
    static readonly D = new BasicEnumWithGreatGrandParent()
    constructor(parent: NullOr<BasicEnumWithGrandParent> = null, grandParent: NullOr<BasicEnumWithParent> = null, greatGrandParent: NullOr<BasicEnum> = null,) {
        super(parent, grandParent, greatGrandParent,)
    }
    static CompanionEnum = class CompanionEnum_BasicEnumWithGreatGrandParent extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, any, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithGreatGrandParent
        private constructor() { super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGreatGrandParent() }
    }
}

//#endregion -------------------- Helper enum class declaration --------------------
//#region -------------------- Helper companion class declaration --------------------

class CompanionEnum_TestClassHelper
    extends CompanionEnum<Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>,) {
        super(instance,)
    }
}

class CompanionEnumWithParent_TestClassHelper
    extends CompanionEnumWithParent<EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                parentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>) {
        super(instance, parentInstance,)
    }
}

class CompanionEnumWithGrandParent_TestClassHelper
    extends CompanionEnumWithGrandParent<EnumerableWithNullableGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
        EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
                parentInstance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                grandParentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>,) {
        super(instance, parentInstance, grandParentInstance,)
    }
}

class CompanionEnumWithGreatGrandParent_TestClassHelper
    extends CompanionEnumWithGreatGrandParent<EnumerableWithNullableGreatGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, any, any>>,
        EnumerableWithNullableGrandParentGeneralType, EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
        EnumerableWithNullableParentGeneralType, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, any, any>>,
                parentInstance: EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
                grandParentInstance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                greatGrandParentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>,) {
        super(instance, parentInstance, grandParentInstance, greatGrandParentInstance,)
    }
}

//#endregion -------------------- Helper companion class declaration --------------------

//#endregion -------------------- Helper class declaration --------------------

describe("CompanionEnumTest", () => {
    /** An alias to the {@link BasicEnum} */
    const Child = BasicEnum
    /** An alias to the {@link BasicEnumWithParent} */
    const Parent = BasicEnumWithParent
    /** An alias to the {@link BasicEnumWithGreatGrandParent} */
    const GrandParent = BasicEnumWithGrandParent
    /** An alias to the {@link BasicEnumWithGreatGrandParent} */
    const GreatGrandParent = BasicEnumWithGreatGrandParent

    describe("CompanionEnum", () => {
        /** An alias to the {@link CompanionEnum_TestClassHelper} */
        const InstanceHelper = CompanionEnum_TestClassHelper

        describe("invalid argument", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(it,),).toThrow(InvalidInstanceException,),)
        },)
        test("valid construction", () => expect(() => new InstanceHelper(Child,),).not.toThrow(),)
        describe("methods", () => {
            const value = Child.A
            const parentValue = Parent.A
            const grandParentValue = GrandParent.A
            const greatGrandParentValue = GreatGrandParent.A
            const name = 'A'
            const ordinal = 0
            let instance: CompanionEnum_TestClassHelper
            beforeEach(() => instance = new InstanceHelper(Child,),)

            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefaultValue(it,),).not.toThrow()
                    expect(() => instance.defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefaultValue(it,).defaultValue,).toEqual(value,),)
                test("instance.A", () => expect(instance.setDefaultValue(value,).defaultValue,).toEqual(value,),)
                test("instance with parent.A", () => expect(() => instance.setDefaultValue(parentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A", () => expect(() => instance.setDefaultValue(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefaultValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getValue(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getValue(it,),).toEqual(value,),)
                test("instance.A", () => expect(instance.getValue(value,),).toEqual(value,),)
                test("instance with parent.A", () => expect(() => instance.getValue(parentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A", () => expect(() => instance.getValue(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getName(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getName(it,),).toEqual(name,),)
                test("instance.A", () => expect(instance.getName(value,),).toEqual(name,),)
                test("instance with parent.A", () => expect(() => instance.getName(parentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A", () => expect(() => instance.getName(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getName(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getOrdinal(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getOrdinal(it,),).toEqual(ordinal,),)
                test("instance.A", () => expect(instance.getOrdinal(value,),).toEqual(ordinal,),)
                test("instance with parent.A", () => expect(() => instance.getOrdinal(parentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A", () => expect(() => instance.getOrdinal(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getOrdinal(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithParent", () => {
        /** An alias to the {@link CompanionEnumWithParent_TestClassHelper} */
        const InstanceHelper = CompanionEnumWithParent_TestClassHelper

        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(it, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(it, Child,),).toThrow(InvalidInstanceException),)
            // @ts-expect-error
            test("parent not present", () => expect(() => new InstanceHelper(Child, Child,),).toThrow(NonExistantKeyException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(Parent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(Parent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent", () => expect(() => new InstanceHelper(Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new InstanceHelper(Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            const value = Child.A
            const parentValue = Parent.A
            const grandParentValue = GrandParent.A
            const greatGrandParentValue = GreatGrandParent.A
            const name = 'A'
            const ordinal = 0
            let instance: CompanionEnumWithParent_TestClassHelper
            beforeEach(() => instance = new InstanceHelper(Parent, Child,),)

            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefaultValue(it,),).not.toThrow()
                    expect(() => instance.defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefaultValue(it,).defaultValue,).toEqual(parentValue,),)
                test("instance.A", () => expect(instance.setDefaultValue(value,).defaultValue,).toEqual(parentValue,),)
                test("instance with parent.A", () => expect(instance.setDefaultValue(parentValue,).defaultValue,).toEqual(parentValue,),)
                test("instance with grandparent.A", () => expect(() => instance.setDefaultValue(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefaultValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getValue(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getValue(it,),).toEqual(parentValue,),)
                test("instance.A", () => expect(instance.getValue(value,),).toEqual(parentValue,),)
                test("instance with parent.A", () => expect(instance.getValue(parentValue,),).toEqual(parentValue,),)
                test("instance with grandparent.A", () => expect(() => instance.getValue(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getName(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getName(it,),).toEqual(name,),)
                test("instance.A", () => expect(instance.getName(value,),).toEqual(name,),)
                test("instance with parent.A", () => expect(instance.getName(parentValue,),).toEqual(name,),)
                test("instance with grandparent.A", () => expect(() => instance.getName(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getName(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getOrdinal(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getOrdinal(it,),).toEqual(ordinal,),)
                test("instance.A", () => expect(instance.getOrdinal(value,),).toEqual(ordinal,),)
                test("instance with parent.A", () => expect(instance.getOrdinal(parentValue,),).toEqual(ordinal,),)
                test("instance with grandparent.A", () => expect(() => instance.getOrdinal(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getOrdinal(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithGrandParent", () => {
        /** An alias to the {@link CompanionEnumWithGrandParent_TestClassHelper} */
        const InstanceHelper = CompanionEnumWithGrandParent_TestClassHelper

        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(it, Parent, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(it, Parent, Child,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(GrandParent, it, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(GrandParent, it, Child,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(GrandParent, Parent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(GrandParent, Parent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent", () => expect(() => new InstanceHelper(Child, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent", () => expect(() => new InstanceHelper(Child, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent", () => expect(() => new InstanceHelper(Parent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child", () => expect(() => new InstanceHelper(Parent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent", () => expect(() => new InstanceHelper(GrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new InstanceHelper(GrandParent, Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            const value = Child.A
            const parentValue = Parent.A
            const grandParentValue = GrandParent.A
            const greatGrandParentValue = GreatGrandParent.A
            const name = 'A'
            const ordinal = 0
            let instance: CompanionEnumWithGrandParent_TestClassHelper
            beforeEach(() => instance = new InstanceHelper(GrandParent, Parent, Child,),)

            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefaultValue(it,),).not.toThrow()
                    expect(() => instance.defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefaultValue(it,).defaultValue,).toEqual(grandParentValue,),)
                test("instance.A", () => expect(instance.setDefaultValue(value,).defaultValue,).toEqual(grandParentValue,),)
                test("instance with parent.A", () => expect(instance.setDefaultValue(parentValue,).defaultValue,).toEqual(grandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.setDefaultValue(grandParentValue,).defaultValue,).toEqual(grandParentValue,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefaultValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getValue(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getValue(it,),).toEqual(grandParentValue,),)
                test("instance.A", () => expect(instance.getValue(value,),).toEqual(grandParentValue,),)
                test("instance with parent.A", () => expect(instance.getValue(parentValue,),).toEqual(grandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.getValue(grandParentValue,),).toEqual(grandParentValue,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getValue(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getName(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getName(it,),).toEqual(name,),)
                test("instance.A", () => expect(instance.getName(value,),).toEqual(name,),)
                test("instance with parent.A", () => expect(instance.getName(parentValue,),).toEqual(name,),)
                test("instance with grandparent.A", () => expect(instance.getName(grandParentValue,),).toEqual(name,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getName(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getOrdinal(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getOrdinal(it,),).toEqual(ordinal,),)
                test("instance.A", () => expect(instance.getOrdinal(value,),).toEqual(ordinal,),)
                test("instance with parent.A", () => expect(instance.getOrdinal(parentValue,),).toEqual(ordinal,),)
                test("instance with grandparent.A", () => expect(instance.getOrdinal(grandParentValue,),).toEqual(ordinal,),)
                test("instance with great-grandparent.A", () => expect(() => instance.getOrdinal(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)
    describe("CompanionEnumWithGreatGrandParent", () => {
        /** An alias to the {@link CompanionEnumWithGreatGrandParent_TestClassHelper} */
        const InstanceHelper = CompanionEnumWithGreatGrandParent_TestClassHelper

        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(it, GrandParent, Parent, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(it, GrandParent, Parent, Child,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(GreatGrandParent, it, GrandParent, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(GreatGrandParent, it, GrandParent, Child,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, it, Child,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, it, Child,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #4", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, Parent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, Parent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent, great-grandparent", () => expect(() => new InstanceHelper(Child, Parent, GrandParent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, parent, great-grandparent, grandparent", () => expect(() => new InstanceHelper(Child, Parent, GreatGrandParent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent, great-grandparent", () => expect(() => new InstanceHelper(Child, GrandParent, Parent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, great-grandparent, parent", () => expect(() => new InstanceHelper(Child, GrandParent, GreatGrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, grandparent, parent", () => expect(() => new InstanceHelper(Child, GreatGrandParent, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, parent, grandparent", () => expect(() => new InstanceHelper(Child, GreatGrandParent, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent, great-grandparent", () => expect(() => new InstanceHelper(Parent, Child, GrandParent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, child, great-grandparent, grandparent", () => expect(() => new InstanceHelper(Parent, Child, GreatGrandParent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child, great-grandparent", () => expect(() => new InstanceHelper(Parent, GrandParent, Child, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, great-grandparent, child", () => expect(() => new InstanceHelper(Parent, GrandParent, GreatGrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, child, grandparent", () => expect(() => new InstanceHelper(Parent, GreatGrandParent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, grandparent, child", () => expect(() => new InstanceHelper(Parent, GreatGrandParent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent, great-grandparent", () => expect(() => new InstanceHelper(GrandParent, Child, Parent, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, child, great-grandparent, parent", () => expect(() => new InstanceHelper(GrandParent, Child, GreatGrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, child, great-grandparent", () => expect(() => new InstanceHelper(GrandParent, Parent, Child, GreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, great-grandparent, child", () => expect(() => new InstanceHelper(GrandParent, Parent, GreatGrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, parent, child", () => expect(() => new InstanceHelper(GrandParent, GreatGrandParent, Parent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, child, parent", () => expect(() => new InstanceHelper(GrandParent, GreatGrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("great-grandparent, child, parent, grandparent", () => expect(() => new InstanceHelper(GreatGrandParent, Child, Parent, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, child, grandparent, parent", () => expect(() => new InstanceHelper(GreatGrandParent, Child, GrandParent, Parent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, child, grandparent", () => expect(() => new InstanceHelper(GreatGrandParent, Parent, Child, GrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, grandparent, child", () => expect(() => new InstanceHelper(GreatGrandParent, Parent, GrandParent, Child,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, grandparent, child, parent", () => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, Child, Parent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new InstanceHelper(GreatGrandParent, GrandParent, Parent, Child,),).not.toThrow(),)
        describe("methods", () => {
            const value = Child.A
            const parentValue = Parent.A
            const grandParentValue = GrandParent.A
            const greatGrandParentValue = GreatGrandParent.A
            const name = 'A'
            const ordinal = 0
            let instance: CompanionEnumWithGreatGrandParent_TestClassHelper
            beforeEach(() => instance = new InstanceHelper(GreatGrandParent, GrandParent, Parent, Child,),)

            describe("setDefaultValue", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefaultValue(it,),).not.toThrow()
                    expect(() => instance.defaultValue,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefaultValue(it,).defaultValue,).toEqual(greatGrandParentValue,),)
                test("instance.A", () => expect(instance.setDefaultValue(value,).defaultValue,).toEqual(greatGrandParentValue,),)
                test("instance with parent.A", () => expect(instance.setDefaultValue(parentValue,).defaultValue,).toEqual(greatGrandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.setDefaultValue(grandParentValue,).defaultValue,).toEqual(greatGrandParentValue,),)
                test("instance with great-grandparent.A", () => expect(instance.setDefaultValue(greatGrandParentValue,).defaultValue,).toEqual(greatGrandParentValue,),)
            },)
            describe("getValue", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getValue(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getValue(it,),).toEqual(greatGrandParentValue,),)
                test("instance.A", () => expect(instance.getValue(value,),).toEqual(greatGrandParentValue,),)
                test("instance with parent.A", () => expect(instance.getValue(parentValue,),).toEqual(greatGrandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.getValue(grandParentValue,),).toEqual(greatGrandParentValue,),)
                test("instance with great-grandparent.A", () => expect(instance.getValue(greatGrandParentValue,),).toEqual(greatGrandParentValue,),)
            },)
            describe("getName", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getName(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getName(it,),).toEqual(name,),)
                test("instance.A", () => expect(instance.getName(value,),).toEqual(name,),)
                test("instance with parent.A", () => expect(instance.getName(parentValue,),).toEqual(name,),)
                test("instance with grandparent.A", () => expect(instance.getName(grandParentValue,),).toEqual(name,),)
                test("instance with great-grandparent.A", () => expect(instance.getName(greatGrandParentValue,),).toEqual(name,),)
            },)
            describe("getOrdinal", () => {
                test.each(nullValues,)("%s", it => expect(() => instance.getOrdinal(it,),).toThrow(NullEnumerableException,),)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.getOrdinal(it,),).toEqual(ordinal,),)
                test("instance.A", () => expect(instance.getOrdinal(value,),).toEqual(ordinal,),)
                test("instance with parent.A", () => expect(instance.getOrdinal(parentValue,),).toEqual(ordinal,),)
                test("instance with grandparent.A", () => expect(instance.getOrdinal(grandParentValue,),).toEqual(ordinal,),)
                test("instance with great-grandparent.A", () => expect(instance.getOrdinal(greatGrandParentValue,),).toEqual(ordinal,),)
            },)
        },)
    },)

},)
