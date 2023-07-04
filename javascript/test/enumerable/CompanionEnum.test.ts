/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {invalidInstances, nullValues, validValues} from "./Enum.constants"

import type {NullOr}                                       from "../../src/general type"
import type {Enumerable}                                   from "../../src/Enumerable"
import type {EnumerableWithGrandParent}                    from "../../src/EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}               from "../../src/EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                         from "../../src/EnumerableWithParent"
import type {EnumerableConstructor}                        from "../../src/EnumerableConstructor"
import type {CompanionEnumDeclaration}                     from "../../src/companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "../../src/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "../../src/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}           from "../../src/companion/CompanionEnumWithParent.declaration"

import {Enum}                              from "../../src/Enum"
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

class BasicEnum extends Enum<number, string> {
    static readonly A = new BasicEnum()
    static CompanionEnum = class CompanionEnum_BasicEnum extends CompanionEnum<BasicEnum, any> {
        static #instance?: CompanionEnum_BasicEnum
        private constructor() { super(BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnum() }
    }
}

class BasicEnumWithParent extends Enum<number, string> implements EnumerableWithParent<number, string, BasicEnum> {
    static readonly A = new BasicEnumWithParent(BasicEnum.A,)
    static readonly B = new BasicEnumWithParent()
    readonly #parent: NullOr<BasicEnum>
    constructor(parent: NullOr<BasicEnum> = null,) {
        super()
        this.#parent = parent
    }
    get parent(): NullOr<BasicEnum> { return this.#parent }
    static CompanionEnum = class CompanionEnum_BasicEnumWithParent extends CompanionEnumWithParent<BasicEnumWithParent, any, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithParent
        private constructor() { super(BasicEnumWithParent, BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithParent() }
    }
}

class BasicEnumWithGrandParent extends Enum<number, string> implements EnumerableWithGrandParent<number, string, BasicEnumWithParent, BasicEnum> {
    static readonly A = new BasicEnumWithGrandParent(BasicEnumWithParent.A, BasicEnum.A,)
    static readonly B = new BasicEnumWithGrandParent(BasicEnumWithParent.B,)
    static readonly C = new BasicEnumWithGrandParent()
    readonly #parent: NullOr<BasicEnumWithParent>
    readonly #grandParent: NullOr<BasicEnum>
    constructor(parent: NullOr<BasicEnumWithParent> = null, grandParent: NullOr<BasicEnum> = null,) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
    }
    get parent(): NullOr<BasicEnumWithParent> { return this.#parent }
    get grandParent(): NullOr<BasicEnum> { return this.#grandParent }
    static CompanionEnum = class CompanionEnum_BasicEnumWithGrandParent extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, any, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithGrandParent
        private constructor() { super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        static get get() { return this.#instance ??= new CompanionEnum_BasicEnumWithGrandParent() }
    }
}

class BasicEnumWithGreatGrandParent extends Enum<number, string> implements EnumerableWithGreatGrandParent<number, string, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum> {
    static readonly A = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.A, BasicEnumWithParent.A, BasicEnum.A,)
    static readonly B = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.B, BasicEnumWithParent.B,)
    static readonly C = new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.C,)
    static readonly D = new BasicEnumWithGreatGrandParent()
    readonly #parent: NullOr<BasicEnumWithGrandParent>
    readonly #grandParent: NullOr<BasicEnumWithParent>
    readonly #greatGrandParent: NullOr<BasicEnum>
    constructor(parent: NullOr<BasicEnumWithGrandParent> = null, grandParent: NullOr<BasicEnumWithParent> = null, greatGrandParent: NullOr<BasicEnum> = null,) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
        this.#greatGrandParent = greatGrandParent
    }
    get parent(): NullOr<BasicEnumWithGrandParent> { return this.#parent }
    get grandParent(): NullOr<BasicEnumWithParent> { return this.#grandParent }
    get greatGrandParent(): NullOr<BasicEnum> { return this.#greatGrandParent }
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
    extends CompanionEnumWithParent<EnumerableWithParent, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                parentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>) {
        super(instance, parentInstance,)
    }
}

class CompanionEnumWithGrandParent_TestClassHelper
    extends CompanionEnumWithGrandParent<EnumerableWithGrandParent, EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
        EnumerableWithParent, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
        Enumerable, EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>> {
    constructor(instance: EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
                parentInstance: EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
                grandParentInstance: EnumerableConstructor<any, CompanionEnumDeclaration<any, any>>,) {
        super(instance, parentInstance, grandParentInstance,)
    }
}

class CompanionEnumWithGreatGrandParent_TestClassHelper
    extends CompanionEnumWithGreatGrandParent<EnumerableWithGreatGrandParent, EnumerableConstructor<any, CompanionEnumWithGreatGrandParentDeclaration<any, any, any, any, any, any, any, any>>,
        EnumerableWithGrandParent, EnumerableConstructor<any, CompanionEnumWithGrandParentDeclaration<any, any, any, any, any, any>>,
        EnumerableWithParent, EnumerableConstructor<any, CompanionEnumWithParentDeclaration<any, any, any, any>>,
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

    describe("BasicCompanionEnum", () => {
        describe("invalid argument", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnum_TestClassHelper(it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnum_TestClassHelper(it,),).toThrow(InvalidInstanceException,),)
        },)
        test("valid construction", () => expect(() => new CompanionEnum_TestClassHelper(BasicEnum,),).not.toThrow(),)
        describe("methods", () => {
            const value = BasicEnum.A,
                parentValue = BasicEnumWithParent.A,
                grandParentValue = BasicEnumWithGrandParent.A,
                greatGrandParentValue = BasicEnumWithGreatGrandParent.A,
                name = 'A',
                ordinal = 0
            let instance: CompanionEnum_TestClassHelper
            beforeEach(() => instance = new CompanionEnum_TestClassHelper(BasicEnum,),)

            describe("setDefault", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefault(it,),).not.toThrow()
                    expect(() => instance.default,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefault(it,).default,).toEqual(value,),)
                test("instance.A", () => expect(instance.setDefault(value,).default,).toEqual(value,),)
                test("instance with parent.A", () => expect(() => instance.setDefault(parentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with grandparent.A", () => expect(() => instance.setDefault(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefault(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
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
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithParent_TestClassHelper(it, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithParent_TestClassHelper(it, BasicEnum,),).toThrow(InvalidInstanceException),)
            // @ts-expect-error
            test("parent not present", () => expect(() => new CompanionEnumWithParent_TestClassHelper(BasicEnum, BasicEnum,),).toThrow(NonExistantKeyException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithParent_TestClassHelper(BasicEnumWithParent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithParent_TestClassHelper(BasicEnumWithParent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent", () => expect(() => new CompanionEnumWithParent_TestClassHelper(BasicEnum, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new CompanionEnumWithParent_TestClassHelper(BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
        describe("methods", () => {
            const value = BasicEnum.A,
                parentValue = BasicEnumWithParent.A,
                grandParentValue = BasicEnumWithGrandParent.A,
                greatGrandParentValue = BasicEnumWithGreatGrandParent.A,
                name = 'A',
                ordinal = 0
            let instance: CompanionEnumWithParent_TestClassHelper
            beforeEach(() => instance = new CompanionEnumWithParent_TestClassHelper(BasicEnumWithParent, BasicEnum,),)

            describe("setDefault", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefault(it,),).not.toThrow()
                    expect(() => instance.default,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefault(it,).default,).toEqual(parentValue,),)
                test("instance.A", () => expect(instance.setDefault(value,).default,).toEqual(parentValue,),)
                test("instance with parent.A", () => expect(instance.setDefault(parentValue,).default,).toEqual(parentValue,),)
                test("instance with grandparent.A", () => expect(() => instance.setDefault(grandParentValue,),).toThrow(InvalidEnumerableException,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefault(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
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
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(it, BasicEnumWithParent, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(it, BasicEnumWithParent, BasicEnum,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, it, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, it, BasicEnum,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
        describe("methods", () => {
            const value = BasicEnum.A,
                parentValue = BasicEnumWithParent.A,
                grandParentValue = BasicEnumWithGrandParent.A,
                greatGrandParentValue = BasicEnumWithGreatGrandParent.A,
                name = 'A',
                ordinal = 0
            let instance: CompanionEnumWithGrandParent_TestClassHelper
            beforeEach(() => instance = new CompanionEnumWithGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),)

            describe("setDefault", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefault(it,),).not.toThrow()
                    expect(() => instance.default,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefault(it,).default,).toEqual(grandParentValue,),)
                test("instance.A", () => expect(instance.setDefault(value,).default,).toEqual(grandParentValue,),)
                test("instance with parent.A", () => expect(instance.setDefault(parentValue,).default,).toEqual(grandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.setDefault(grandParentValue,).default,).toEqual(grandParentValue,),)
                test("instance with great-grandparent.A", () => expect(() => instance.setDefault(greatGrandParentValue,),).toThrow(InvalidEnumerableException,),)
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
        describe("invalid argument #1", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(it, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(it, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #2", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, it, BasicEnumWithGrandParent, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, it, BasicEnumWithGrandParent, BasicEnum,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #3", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, it, BasicEnum,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, it, BasicEnum,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid argument #4", () => {
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, it,),).toThrow(NullInstanceException),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, it,),).toThrow(InvalidInstanceException),)
        },)
        describe("invalid order", () => {
            // @ts-expect-error
            test("child, parent, grandparent, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, parent, great-grandparent, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, parent, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, grandparent, great-grandparent, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, grandparent, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("child, great-grandparent, parent, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("parent, child, grandparent, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, child, great-grandparent, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, child, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, grandparent, great-grandparent, child", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnum,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, child, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("parent, great-grandparent, grandparent, child", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("grandparent, child, parent, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, child, great-grandparent, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, child, great-grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, BasicEnumWithGreatGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, parent, great-grandparent, child", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnum,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, parent, child", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnum,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("grandparent, great-grandparent, child, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)

            // @ts-expect-error
            test("great-grandparent, child, parent, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, child, grandparent, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, child, grandparent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, parent, grandparent, child", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test("great-grandparent, grandparent, child, parent", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(NonExistantKeyException,),)
        },)
        test("valid construction", () => expect(() => new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
        describe("methods", () => {
            const value = BasicEnum.A,
                parentValue = BasicEnumWithParent.A,
                grandParentValue = BasicEnumWithGrandParent.A,
                greatGrandParentValue = BasicEnumWithGreatGrandParent.A,
                name = 'A',
                ordinal = 0
            let instance: CompanionEnumWithGreatGrandParent_TestClassHelper
            beforeEach(() => instance = new CompanionEnumWithGreatGrandParent_TestClassHelper(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),)

            describe("setDefault", () => {
                test.each(nullValues,)("%s", it => {
                    expect(() => instance.setDefault(it,),).not.toThrow()
                    expect(() => instance.default,).toThrowWithMessage(NullEnumerableException, /The default value was set to null or removed.+/,)
                },)
                test.each(validValues)("%s", ({value: it,},) => expect(instance.setDefault(it,).default,).toEqual(greatGrandParentValue,),)
                test("instance.A", () => expect(instance.setDefault(value,).default,).toEqual(greatGrandParentValue,),)
                test("instance with parent.A", () => expect(instance.setDefault(parentValue,).default,).toEqual(greatGrandParentValue,),)
                test("instance with grandparent.A", () => expect(instance.setDefault(grandParentValue,).default,).toEqual(greatGrandParentValue,),)
                test("instance with great-grandparent.A", () => expect(instance.setDefault(greatGrandParentValue,).default,).toEqual(greatGrandParentValue,),)
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
