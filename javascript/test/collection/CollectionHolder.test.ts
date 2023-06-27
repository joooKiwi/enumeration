/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {A, A_NULL_B_UNDEFINED, AB, AB12, AB_OBJECT, ABAB, ABCD, ABCD_ABCD, ABCD_NULL, ABCD_UNDEFINED, ABCDEFGHIJ, EMPTY, NULL_ABCD, SINGULAR_A_OBJECT, SINGULAR_B_OBJECT, UNDEFINED_ABCD} from "./constantCollections"
import {nonPresentItem, sizeValues, collectionOfTemplateItems, templateItems}                                                                                                             from "./constantValues"

describe("CollectionHolderTest", () => {
    describe("size", () => describe.each(sizeValues(),)("%s", ({value: {collection: it, size,},},) => {
        test("size", () => expect(it.size,).toStrictEqual(size),)
        test("length", () => expect(it.length,).toStrictEqual(size),)
        test("count", () => expect(it.count,).toStrictEqual(size),)
        if (size === 0) {
            test("isEmpty", () => expect(it.isEmpty).toBeTrue(),)
            test("isNotEmpty", () => expect(it.isNotEmpty).toBeFalse(),)
        } else {
            test("isEmpty", () => expect(it.isEmpty).toBeFalse(),)
            test("isNotEmpty", () => expect(it.isNotEmpty).toBeTrue(),)
        }
    },),)
    describe("value", () => {
        describe("get / at", () => {
            describe("simple", () => {
                describe("[](0)", () => {
                    test("index", () => expect(() => EMPTY()[0],).toThrow(ReferenceError,),)
                    test("get", () => expect(() => EMPTY().get(0,),).toThrow(ReferenceError,),)
                    test("at", () => expect(() => EMPTY().at(0,),).toThrow(ReferenceError,),)
                },)
                describe("[a,b](0)", () => {
                    test("index", () => expect(AB()[0],).toEqual('a',),)
                    test("get", () => expect(AB().get(0,),).toEqual('a',),)
                    test("at", () => expect(AB().at(0,),).toEqual('a',),)
                },)
                describe("[a,b](3)", () => {
                    test("index", () => expect(() => AB()[3],).toThrow(ReferenceError,),)
                    test("get", () => expect(() => AB().get(3,),).toThrow(ReferenceError,),)
                    test("at", () => expect(() => AB().at(3,),).toThrow(ReferenceError,),)
                },)
                describe("[a,b,c,d](1)", () => {
                    test("index", () => expect(ABCD()[1],).toEqual('b',),)
                    test("get", () => expect(ABCD().get(1,),).toEqual('b',),)
                    test("at", () => expect(ABCD().at(1,),).toEqual('b',),)
                },)
                describe("[a,b,c,d](-1)", () => {
                    test("index", () => expect(ABCD()[-1],).toEqual('d',),)
                    test("get", () => expect(ABCD().get(-1,),).toEqual('d',),)
                    test("at", () => expect(ABCD().at(-1,),).toEqual('d',),)
                },)
                describe("[a,b,c,d](-4)", () => {
                    test("index", () => expect(ABCD()[-4],).toEqual('a',),)
                    test("get", () => expect(ABCD().get(-4,),).toEqual('a',),)
                    test("at", () => expect(ABCD().at(-4,),).toEqual('a',),)
                },)
                describe("[a,b,c,d](-5)", () => {
                    test("index", () => expect(() => ABCD()[-5],).toThrow(ReferenceError,),)
                    test("get", () => expect(() => ABCD().get(-5,),).toThrow(ReferenceError,),)
                    test("at", () => expect(() => ABCD().at(-5,),).toThrow(ReferenceError,),)
                },)
            },)
            describe("or else", () => {
                const value = Infinity,
                    callback = () => Infinity

                describe("[].orElse(0, () => ∞)", () => {
                    test("get", () => expect(EMPTY().getOrElse(0, callback,),).toEqual(value,),)
                    test("at", () => expect(EMPTY().atOrElse(0, callback,),).toEqual(value,),)
                },)
                describe("[a,b].orElse(0, () => ∞)", () => {
                    test("get", () => expect(AB().getOrElse(0, callback,),).toEqual('a',),)
                    test("at", () => expect(AB().atOrElse(0, callback,),).toEqual('a',),)
                },)
                describe("[a,b].orElse(3, () => ∞)", () => {
                    test("get", () => expect(AB().getOrElse(3, callback,),).toEqual(value,),)
                    test("at", () => expect(AB().atOrElse(3, callback,),).toEqual(value,),)
                },)
                describe("[a,b,c,d].orElse(1, () => ∞)", () => {
                    test("get", () => expect(ABCD().getOrElse(1, callback,),).toEqual('b',),)
                    test("at", () => expect(ABCD().atOrElse(1, callback,),).toEqual('b',),)
                },)
                describe("[a,b,c,d].orElse(-1, () => ∞)", () => {
                    test("get", () => expect(ABCD().getOrElse(-1, callback,),).toEqual('d',),)
                    test("at", () => expect(ABCD().atOrElse(-1, callback,),).toEqual('d',),)
                },)
                describe("[a,b,c,d].orElse(-5, () => ∞)", () => {
                    test("get", () => expect(ABCD().getOrElse(-5, callback,),).toEqual(value,),)
                    test("at", () => expect(ABCD().atOrElse(-5, callback,),).toEqual(value,),)
                },)
            },)
            describe("or null", () => {
                describe("[].orNull(0)", () => {
                    test("get", () => expect(EMPTY().getOrNull(0,),).toBeNull(),)
                    test("at", () => expect(EMPTY().atOrNull(0,),).toBeNull(),)
                },)
                describe("[a,b].orNull(0)", () => {
                    test("get", () => expect(AB().getOrNull(0,),).toEqual('a',),)
                    test("at", () => expect(AB().atOrNull(0,),).toEqual('a',),)
                },)
                describe("[a,b].orNull(3)", () => {
                    test("get", () => expect(AB().getOrNull(3,),).toBeNull(),)
                    test("at", () => expect(AB().atOrNull(3,),).toBeNull(),)
                },)
                describe("[a,b,c,d].orNull(1)", () => {
                    test("get", () => expect(ABCD().getOrNull(1,),).toEqual('b',),)
                    test("at", () => expect(ABCD().atOrNull(1,),).toEqual('b',),)
                },)
                describe("[a,b,c,d].orNull(-1)", () => {
                    test("get", () => expect(ABCD().getOrNull(-1,),).toEqual('d',),)
                    test("at", () => expect(ABCD().atOrNull(-1,),).toEqual('d',),)
                },)
                describe("[a,b,c,d].orNull(-5)", () => {
                    test("get", () => expect(ABCD().getOrNull(-5,),).toBeNull(),)
                    test("at", () => expect(ABCD().atOrNull(-5,),).toBeNull(),)
                },)
            },)
        },)
        describe("index of", () => {
            describe("index of", () => {
                test("[].(a) == null", () => expect(EMPTY().indexOf('a',),).toBeNull(),)

                test("[a,b].(a) == 0", () => expect(AB().indexOf('a',),).toBe(0,),)
                test("[a,b].(b) == 1", () => expect(AB().indexOf('b',),).toBe(1,),)
                test("[a,b].(c) == null", () => expect(AB().indexOf('c',),).toBeNull(),)

                test("[a,b,c,d].(a,2) == null", () => expect(ABCD().indexOf('a', 2,),).toBeNull(),)
                test("[a,b,c,d].(b,2) == null", () => expect(ABCD().indexOf('b', 2,),).toBeNull(),)
                test("[a,b,c,d].(c,2) == 2", () => expect(ABCD().indexOf('c', 2,),).toBe(2,),)
                test("[a,b,c,d].(d,2) == 3", () => expect(ABCD().indexOf('d', 2,),).toBe(3,),)

                test("[a,b,c,d].(a,null,2) == 0", () => expect(ABCD().indexOf('a', null, 2,),).toBe(0,),)
                test("[a,b,c,d].(b,null,2) == 1", () => expect(ABCD().indexOf('b', null, 2,),).toBe(1,),)
                test("[a,b,c,d].(c,null,2) == null", () => expect(ABCD().indexOf('c', null, 2,),).toBeNull(),)
                test("[a,b,c,d].(d,null,2) == null", () => expect(ABCD().indexOf('d', null, 2,),).toBeNull(),)


                test("[a,b,a,b].(a) == 0", () => expect(ABAB().indexOf('a',),).toBe(0,),)
                test("[a,b,a,b].(b) == 1", () => expect(ABAB().indexOf('b',),).toBe(1,),)

                test("[a,b,a,b].(a,2) == 2", () => expect(ABAB().indexOf('a', 2,),).toBe(2,),)
                test("[a,b,a,b].(b,2) == 3", () => expect(ABAB().indexOf('b', 2,),).toBe(3,),)

                test("[a,b,a,b].(a,null,2) == null", () => expect(ABCD().indexOf('a', null, 2,),).toBe(0,),)
                test("[a,b,a,b].(b,null,2) == null", () => expect(ABCD().indexOf('b', null, 2,),).toBe(1,),)


                test("[a,b].(a,500) == null", () => expect(AB().indexOf('a', 500,),).toBeNull(),)
                test("[a,b].(a,-500) == 0", () => expect(AB().indexOf('a', -500,),).toBe(0,),)
                test("[a,b].(a,null,500) == 0", () => expect(AB().indexOf('a', null, 500,),).toBe(0,),)
                test("[a,b].(a,null,-500) == 0", () => expect(AB().indexOf('a', null, -500,),).toBeNull(),)
                test("[a,b,c,d].(a,-2) == null", () => expect(ABCD().indexOf('a', -2,),).toBeNull(),)
                test("[a,b,c,d].(a,null,-2) == 0", () => expect(ABCD().indexOf('a', null, -2,),).toBe(0,),)
            },)
            describe("last index of", () => {
                test("[].(a) == null", () => expect(EMPTY().lastIndexOf('a',),).toBeNull(),)

                test("[a,b].(a) == 0", () => expect(AB().lastIndexOf('a',),).toBe(0,),)
                test("[a,b].(b) == 1", () => expect(AB().lastIndexOf('b',),).toBe(1,),)
                test("[a,b].(c) == null", () => expect(AB().lastIndexOf('c',),).toBeNull(),)

                test("[a,b,c,d].(a,2) == null", () => expect(ABCD().lastIndexOf('a', 2,),).toBeNull(),)
                test("[a,b,c,d].(b,2) == null", () => expect(ABCD().lastIndexOf('b', 2,),).toBeNull(),)
                test("[a,b,c,d].(c,2) == 2", () => expect(ABCD().lastIndexOf('c', 2,),).toBe(2,),)
                test("[a,b,c,d].(d,2) == 3", () => expect(ABCD().lastIndexOf('d', 2,),).toBe(3,),)

                test("[a,b,c,d].(a,null,2) == 0", () => expect(ABCD().lastIndexOf('a', null, 2,),).toBe(0,),)
                test("[a,b,c,d].(b,null,2) == 1", () => expect(ABCD().lastIndexOf('b', null, 2,),).toBe(1,),)
                test("[a,b,c,d].(c,null,2) == null", () => expect(ABCD().lastIndexOf('c', null, 2,),).toBeNull(),)
                test("[a,b,c,d].(d,null,2) == null", () => expect(ABCD().lastIndexOf('d', null, 2,),).toBeNull(),)


                test("[a,b,a,b].(a) == 2", () => expect(ABAB().lastIndexOf('a',),).toBe(2,),)
                test("[a,b,a,b].(b) == 3", () => expect(ABAB().lastIndexOf('b',),).toBe(3,),)

                test("[a,b,a,b].(a,2) == 2", () => expect(ABAB().lastIndexOf('a', 2,),).toBe(2,),)
                test("[a,b,a,b].(b,2) == 3", () => expect(ABAB().lastIndexOf('b', 2,),).toBe(3,),)

                test("[a,b,a,b].(a,null,2) == null", () => expect(ABAB().lastIndexOf('a', null, 2,),).toBe(0,),)
                test("[a,b,a,b].(b,null,2) == null", () => expect(ABAB().lastIndexOf('b', null, 2,),).toBe(1,),)


                test("[a,b].(a,500) == null", () => expect(AB().lastIndexOf('a', 500,),).toBeNull(),)
                test("[a,b].(a,-500) == 0", () => expect(AB().lastIndexOf('a', -500,),).toBe(0,),)
                test("[a,b].(a,null,500) == 0", () => expect(AB().lastIndexOf('a', null, 500,),).toBe(0,),)
                test("[a,b].(a,null,-500) == null", () => expect(AB().lastIndexOf('a', null, -500,),).toBeNull(),)
                test("[a,b,c,d].(a,-2) == null", () => expect(ABCD().lastIndexOf('a', -2,),).toBeNull(),)
                test("[a,b,c,d].(a,null,-2) == 0", () => expect(ABCD().lastIndexOf('a', null, -2,),).toBe(0,),)
            },)
        },)
        describe("first",() => {
            describe("[].first() == throw|null", () => {
                test("throw", () => expect(() => EMPTY().first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(EMPTY().firstOrNull(),).toBeNull(),)
            },)

            test("[a,b,c,d].first() == a", () => expect(ABCD().first(),).toBe('a',),)
            describe("[null,a,b,c,d].first() == throw|null", () => {
                test("throw", () => expect(() => NULL_ABCD().first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(NULL_ABCD().firstOrNull(),).toBeNull(),)
            },)
            test("[a,b,c,d,null].first() == a", () => expect(ABCD_NULL().first(),).toBe('a',),)
            describe("[undefined,a,b,c,d].first() == throw|null", () => {
                test("throw", () => expect(() => UNDEFINED_ABCD().first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(UNDEFINED_ABCD().firstOrNull(),).toBeUndefined(),)
            },)
            test("[a,b,c,d,undefined].first() == a", () => expect(ABCD_UNDEFINED().first(),).toBe('a',),)

            test("[a,b,c,d].first(!a) == b", () => expect(ABCD().first(it => it !== 'a',),).toBe('b',),)
            describe("[null,a,b,c,d].first(!a) == throw|null", () => {
                test("throw", () => expect(() => NULL_ABCD().first(it => it !== 'a',),).toThrow(ReferenceError,),)
                test("or null", () => expect(NULL_ABCD().firstOrNull(it => it !== 'a',),).toBeNull(),)
            },)
            test("[a,b,c,d,null].first(!a) == b", () => expect(ABCD_NULL().first(it => it !== 'a',),).toBe('b',),)
            describe("[undefined,a,b,c,d].first(!a) == throw|null", () => {
                test("throw", () => expect(() => UNDEFINED_ABCD().first(it => it !== 'a',),).toThrow(ReferenceError,),)
                test("or null", () => expect(UNDEFINED_ABCD().firstOrNull(it => it !== 'a',),).toBeUndefined(),)
            },)
            test("[a,b,c,d,undefined].first(!a) == b", () => expect(ABCD_UNDEFINED().first(it => it !== 'a',),).toBe('b',),)
        },)
        describe("last",() => {
            describe("[]", () => {
                test("throw", () => expect(() => EMPTY().last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(EMPTY().lastOrNull(),).toBeNull(),)
            },)

            test("[a,b,c,d].last() == d", () => expect(ABCD().last(),).toBe('d',),)
            test("[null,a,b,c,d].last() == d", () => expect(NULL_ABCD().last(),).toBe('d',),)
            describe("[a,b,c,d,null].last() == throw|null", () => {
                test("throw", () => expect(() => ABCD_NULL().last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_NULL().lastOrNull(),).toBeNull(),)
            },)
            test("[undefined,a,b,c,d].last() == d", () => expect(UNDEFINED_ABCD().last(),).toBe('d',),)
            describe("[a,b,c,d,undefined].last() == throw|null", () => {
                test("throw", () => expect(() => ABCD_UNDEFINED().last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_UNDEFINED().lastOrNull(),).toBeUndefined(),)
            },)

            test("[a,b,c,d].last(!d) == c", () => expect(ABCD().last(it => it !== 'd',),).toBe('c',),)
            test("[null,a,b,c,d].last(!d) == c", () => expect(NULL_ABCD().last(it => it !== 'd',),).toBe('c',),)
            describe("[a,b,c,d,null].last(!d) == throw|null", () => {
                test("throw", () => expect(() => ABCD_NULL().last(it => it !== 'd',),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_NULL().lastOrNull(it => it !== 'd',),).toBeNull(),)
            },)
            test("[undefined,a,b,c,d].last(!d) == c", () => expect(UNDEFINED_ABCD().last(it => it !== 'd',),).toBe('c',),)
            describe("[a,b,c,d,undefined].last(!d) == throw|null", () => {
                test("throw", () => expect(() => ABCD_UNDEFINED().last(it => it !== 'd',),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_UNDEFINED().lastOrNull(it => it !== 'd',),).toBeUndefined(),)
            },)
        },)
    },)
    describe("has / includes / contains …", () => {
        describe("null", () => {
            describe("has", () => {
                test("[a,b] == false", () => expect(AB().hasNull,).toBeFalse(),)
                test("[a,b,null,c,d,undefined] == true", () => expect(A_NULL_B_UNDEFINED().hasNull,).toBeTrue(),)
                test("[a,b,1,2] == false", () => expect(AB12().hasNull,).toBeFalse(),)
                test("[null,a,b,c,d] == true", () => expect(ABCD_NULL().hasNull,).toBeTrue(),)
                test("[a,b,c,d,null] == true", () => expect(ABCD_NULL().hasNull,).toBeTrue(),)
                test("[undefined,a,b,c,d] == true", () => expect(UNDEFINED_ABCD().hasNull,).toBeTrue(),)
                test("[a,b,c,d,undefined] == true", () => expect(ABCD_UNDEFINED().hasNull,).toBeTrue(),)
            },)
            describe("includes", () => {
                test("[a,b] == false", () => expect(AB().includesNull,).toBeFalse(),)
                test("[a,b,null,c,d,undefined] == true", () => expect(A_NULL_B_UNDEFINED().includesNull,).toBeTrue(),)
                test("[a,b,1,2] == false", () => expect(AB12().includesNull,).toBeFalse(),)
                test("[null,a,b,c,d] == true", () => expect(ABCD_NULL().includesNull,).toBeTrue(),)
                test("[a,b,c,d,null] == true", () => expect(ABCD_NULL().includesNull,).toBeTrue(),)
                test("[undefined,a,b,c,d] == true", () => expect(UNDEFINED_ABCD().includesNull,).toBeTrue(),)
                test("[a,b,c,d,undefined] == true", () => expect(ABCD_UNDEFINED().includesNull,).toBeTrue(),)
            },)
            describe("contains", () => {
                test("[a,b] == false", () => expect(AB().containsNull,).toBeFalse(),)
                test("[a,b,null,c,d,undefined] == true", () => expect(A_NULL_B_UNDEFINED().containsNull,).toBeTrue(),)
                test("[a,b,1,2] == false", () => expect(AB12().containsNull,).toBeFalse(),)
                test("[null,a,b,c,d] == true", () => expect(ABCD_NULL().containsNull,).toBeTrue(),)
                test("[a,b,c,d,null] == true", () => expect(ABCD_NULL().containsNull,).toBeTrue(),)
                test("[undefined,a,b,c,d] == true", () => expect(UNDEFINED_ABCD().containsNull,).toBeTrue(),)
                test("[a,b,c,d,undefined] == true", () => expect(ABCD_UNDEFINED().containsNull,).toBeTrue(),)
            },)
        },)
    },)
    describe("all / any / none", () => {
        describe("all", () => {
            test("[a,b].all(a|b) == true", () => expect(AB().all(it => it === 'a' || it === 'b'),).toBeTrue(),)
            test("[a,b].all(c|d) == false", () => expect(AB().all((it: string) => it === 'c' || it === 'd'),).toBeFalse(),)
            test("[a,b,c,d].all(a|b) == false", () => expect(ABCD().all(it => it === 'a' || it === 'b'),).toBeFalse(),)
        },)
        describe("any", () => {
            test("[].any() == false", () => expect(EMPTY().any(),).toBeFalse(),)
            test("[a,b].any() == true", () => expect(AB().any(),).toBeTrue(),)

            test("[a,b].any(a|b) == true", () => expect(AB().any(it => it === 'a' || it === 'b'),).toBeTrue(),)
            test("[a,b].any(c|d) == false", () => expect(AB().any((it: string) => it === 'c' || it === 'd'),).toBeFalse(),)
            test("[a,b,c,d].any(a|b) == true", () => expect(ABCD().any(it => it === 'a' || it === 'b'),).toBeTrue(),)
        },)
        describe("none", () => {
            test("[].none() == true", () => expect(EMPTY().none(),).toBeTrue(),)
            test("[a,b].none() == false", () => expect(AB().none(),).toBeFalse(),)

            test("[a,b].none(a|b) == false", () => expect(AB().none(it => it === 'a' || it === 'b'),).toBeFalse(),)
            test("[a,b].none(c|d) == true", () => expect(AB().none((it: string) => it === 'c' || it === 'd'),).toBeTrue(),)
            test("[a,b,c,d].none(a|b) == false", () => expect(ABCD().none(it => it === 'a' || it === 'b'),).toBeFalse(),)
        },)
    },)
    describe("has / includes / contains", () => {
        describe("one", () => {
            describe("singular item", () => {
                describe('a', () => {
                    test("has", () => expect(A().hasOne('a',),).toBeTrue(),)
                    test("includes", () => expect(A().includesOne('a',),).toBeTrue(),)
                    test("contains", () => expect(A().containsOne('a',),).toBeTrue(),)
                },)
                describe('b', () => {
                    test("has", () => expect(A().hasOne('b',),).toBeFalse(),)
                    test("includes", () => expect(A().includesOne('b',),).toBeFalse(),)
                    test("contains", () => expect(A().containsOne('b',),).toBeFalse(),)
                },)
                describe("a,b", () => {
                    test("has", () => expect(A().hasOne('a', 'b',),).toBeTrue(),)
                    test("includes", () => expect(A().includesOne('a', 'b',),).toBeTrue(),)
                    test("contains", () => expect(A().containsOne('a', 'b',),).toBeTrue(),)
                },)
                describe("b,a", () => {
                    test("has", () => expect(A().hasOne('b', 'a',),).toBeTrue(),)
                    test("includes", () => expect(A().includesOne('b', 'a',),).toBeTrue(),)
                    test("contains", () => expect(A().containsOne('b', 'a',),).toBeTrue(),)
                },)
            },)
            describe.each(templateItems(),)("%s", it => {
                test("has", () => expect(collectionOfTemplateItems().hasOne(it,),).toBeTrue(),)
                test("includes", () => expect(collectionOfTemplateItems().includesOne(it,),).toBeTrue(),)
                test("contains", () => expect(collectionOfTemplateItems().containsOne(it,),).toBeTrue(),)

                describe("value + nonPresentItem", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasOne(it, nonPresentItem,),).toBeTrue(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesOne(it, nonPresentItem,),).toBeTrue(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsOne(it, nonPresentItem,),).toBeTrue(),)
                },)
                describe("Object(value)", () => {
                    test("has not", () => expect(collectionOfTemplateItems().hasOne(Object(it,),),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesOne(Object(it,),),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsOne(Object(it,),),).toBeFalse(),)
                },)
                describe("[value]", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasOne([it,],),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesOne([it,],),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsOne([it,],),).toBeFalse(),)
                },)
                describe("{value}", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasOne({it,},),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesOne({it,},),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsOne({it,},),).toBeFalse(),)
                },)
            },)
        },)
        describe("all", () => {
            describe('singular item', () => {
                describe('singular item', () => {
                    describe('a', () => {
                        test("has", () => expect(A().hasAll('a',),).toBeTrue(),)
                        test("includes", () => expect(A().includesAll('a',),).toBeTrue(),)
                        test("contains", () => expect(A().containsAll('a',),).toBeTrue(),)
                    },)
                    describe('b', () => {
                        test("has", () => expect(A().hasAll('b',),).toBeFalse(),)
                        test("includes", () => expect(A().includesAll('b',),).toBeFalse(),)
                        test("contains", () => expect(A().containsAll('b',),).toBeFalse(),)
                    },)
                    describe("a,b", () => {
                        test("has", () => expect(A().hasAll('a', 'b',),).toBeFalse(),)
                        test("includes", () => expect(A().includesAll('a', 'b',),).toBeFalse(),)
                        test("contains", () => expect(A().containsAll('a', 'b',),).toBeFalse(),)
                    },)
                    describe("b,a", () => {
                        test("has", () => expect(A().hasAll('b', 'a',),).toBeFalse(),)
                        test("includes", () => expect(A().includesAll('b', 'a',),).toBeFalse(),)
                        test("contains", () => expect(A().containsAll('b', 'a',),).toBeFalse(),)
                    },)
                },)
            },)
            describe.each(templateItems(),)("%s", it => {
                test("has", () => expect(collectionOfTemplateItems().hasAll(it,),).toBeTrue(),)
                test("includes", () => expect(collectionOfTemplateItems().includesAll(it,),).toBeTrue(),)
                test("contains", () => expect(collectionOfTemplateItems().containsAll(it,),).toBeTrue(),)

                describe("value + nonPresentItem", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasAll(it, nonPresentItem,),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesAll(it, nonPresentItem,),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsAll(it, nonPresentItem,),).toBeFalse(),)
                },)
                describe("Object(value)", () => {
                    test("has not", () => expect(collectionOfTemplateItems().hasAll(Object(it,),),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesAll(Object(it,),),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsAll(Object(it,),),).toBeFalse(),)
                },)
                describe("[value]", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasAll([it,],),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesAll([it,],),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsAll([it,],),).toBeFalse(),)
                },)
                describe("{value}", () => {
                    test("has", () => expect(collectionOfTemplateItems().hasAll({it,},),).toBeFalse(),)
                    test("includes", () => expect(collectionOfTemplateItems().includesAll({it,},),).toBeFalse(),)
                    test("contains", () => expect(collectionOfTemplateItems().containsAll({it,},),).toBeFalse(),)
                },)
            },)
        },)
    },)
    describe("join", () => {
        test("[a,b].join()", () => expect(AB().join(),).toBe("[a, b]",),)
        test("[a,b].join(;)", () => expect(AB().join(';',),).toBe("[a;b]",),)
        test("[a,b].join(null, <)", () => expect(AB().join(null,'<', null,),).toBe("<a, b]",),)
        test("[a,b].join(null, null, >)", () => expect(AB().join(null,null, '>',),).toBe("[a, b>",),)
        test("[a,b].join(null, null, null, 1)", () => expect(AB().join(null,null, null, 1,),).toBe("[a, …]",),)
        test("[a,b].join(null, null, null, null, \"...\")", () => expect(AB().join(null,null, null, null, "...",),).toBe("[a, b]",),)
        test("[a,b].join(null, null, null, 1, \"...\")", () => expect(AB().join(null,null, null, 1, "...",),).toBe("[a, ...]",),)
        test("[a,b].join(null, null, null, null, () => toUpperCase)", () => expect(AB().join(null,null, null, null, null, it => it.toUpperCase(),),).toBe("[A, B]",),)
    },)
    describe("filter", () => {
        test("[a,b,c,d].filter(d) == [d]", () => expect(ABCD().filter(it => it === 'd',).toArray(),).toStrictEqual(['d',],),)
        test("[a,b,c,d].filterIndexed(3) == [d]", () => expect(ABCD().filterIndexed(it => it === 3,).toArray(),).toStrictEqual(['d',],),)
        test("[a,b,c,d].filterNot(d) == [a,b,c]", () => expect(ABCD().filterNot(it => it === 'd',).toArray(),).toStrictEqual(['a', 'b', 'c',],),)
        test("[a,b,c,d].filterIndexedNot(3) == [a,b,c]", () => expect(ABCD().filterIndexedNot(it => it === 3,).toArray(),).toStrictEqual(['a', 'b', 'c',],),)
        test("[a,b,1,2].filter(number) == [1,2]", () => expect(AB12().filter(it => typeof it == "number",).toArray(),).toStrictEqual([1, 2,],),)
        test("[a,b,1,2].filterNot(number) == [a,b]", () => expect(AB12().filterNot(it => typeof it == "number",).toArray(),).toStrictEqual(['a', 'b',],),)
    },)
    describe("filterNotNull", () => {
        test("[a,null,b,undefined].filterNotNull() == [a,b]", () => expect(A_NULL_B_UNDEFINED().filterNotNull().toArray(),).toStrictEqual(['a', 'b',],),)
        test("[a,null,b,undefined].filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED().filterNotNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(null).filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED().filterNot(it => it === null).filterNotNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(undefined).filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED().filterNot(it => it === undefined).filterNotNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(undefined).filterNot(null).filterNotNull() == last iteration", () => {
            const lastIteration = A_NULL_B_UNDEFINED().filterNot(it => it === undefined).filterNot(it => it === null)
            expect(lastIteration.filterNotNull(),).toStrictEqual(lastIteration,)
        },)
        test("[a,null,b,undefined].filterNot(null).filterNot(undefined).filterNotNull() == last iteration", () => {
            const lastIteration = A_NULL_B_UNDEFINED().filterNot(it => it === null).filterNot(it => it === undefined)
            expect(lastIteration.filterNotNull(),).toStrictEqual(lastIteration,)
        },)
        test("[a,b].filterNotNull() == this", () => expect(AB().filterNotNull(),).toStrictEqual(AB,),)
    },)
    describe("requireNoNulls", () => {
        test("[a,null,b,undefined].requireNotNull() → throw", () => expect(() => A_NULL_B_UNDEFINED().requireNoNulls(),).toThrow(TypeError,),)
        test("[a,null,b,undefined].filterNot(null).requireNotNull() → throw", () => expect(() => A_NULL_B_UNDEFINED().filterNot(it => it === null).requireNoNulls(),).toThrow(TypeError,),)
        test("[a,null,b,undefined].filterNot(undefined).requireNotNull() → throw", () => expect(() => A_NULL_B_UNDEFINED().filterNot(it => it === undefined).requireNoNulls(),).toThrow(TypeError),)
        test("[a,null,b,undefined].filterNonNull().requireNotNull() == last iteration", () => {
            const lastIteration = A_NULL_B_UNDEFINED().filterNotNull()
            expect(lastIteration.requireNoNulls(),).toStrictEqual(lastIteration,)
        },)
        test("[a,b].requireNotNull() == this", () => expect(AB().requireNoNulls(),).toStrictEqual(AB,),)
    },)
    describe("find", () => {
        test("[a,b,c,d,A,B,C,D].find(anyCase b) == b", () => expect(ABCD_ABCD().find(it => it.toLowerCase() === 'b',),).toBe('b',),)
        test("[a,b,c,d,A,B,C,D].find(a) == a", () => expect(ABCD_ABCD().find(it => it === 'a',),).toBe('a',),)
        test("[a,b,c,d,A,B,C,D].find(D) == D", () => expect(ABCD_ABCD().find(it => it === 'D',),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].find(anyCase e) == null", () => expect(ABCD_ABCD().find(it => it.toLowerCase() === 'e',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findByIndex(odd) == b", () => expect(ABCD_ABCD().findByIndex(it => it % 2 === 1,),).toBe('b',),)
        test("[a,b,c,d,A,B,C,D].findByIndex(0) == a", () => expect(ABCD_ABCD().findByIndex(it => it === 0,),).toBe('a',),)
        test("[a,b,c,d,A,B,C,D].findByIndex(7) == D", () => expect(ABCD_ABCD().findByIndex(it => it === 7,),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].findByIndex(26) == null", () => expect(ABCD_ABCD().findByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findIndex(anyCase b) == 1", () => expect(ABCD_ABCD().findIndex(it => it.toLowerCase() === 'b',),).toBe(1,),)
        test("[a,b,c,d,A,B,C,D].findIndex(a) == 0", () => expect(ABCD_ABCD().findIndex(it => it === 'a',),).toBe(0,),)
        test("[a,b,c,d,A,B,C,D].findIndex(D) == 7", () => expect(ABCD_ABCD().findIndex(it => it === 'D',),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findIndex(anyCase e) == null", () => expect(ABCD_ABCD().findIndex(it => it.toLowerCase() === 'e',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findIndexByIndex(odd) == 1", () => expect(ABCD_ABCD().findIndexByIndex(it => it % 2 === 1,),).toBe(1,),)
        test("[a,b,c,d,A,B,C,D].findIndexByIndex(0) == 0", () => expect(ABCD_ABCD().findIndexByIndex(it => it === 0,),).toBe(0,),)
        test("[a,b,c,d,A,B,C,D].findIndexByIndex(7) == 7", () => expect(ABCD_ABCD().findIndexByIndex(it => it === 7,),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findIndexByIndex(26) == null", () => expect(ABCD_ABCD().findIndexByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLast(anyCase B) == B", () => expect(ABCD_ABCD().findLast(it => it.toUpperCase() === 'B',),).toBe('B',),)
        test("[a,b,c,d,A,B,C,D].findLast(a) == a", () => expect(ABCD_ABCD().findLast(it => it === 'a',),).toBe('a',),)
        test("[a,b,c,d,A,B,C,D].findLast(D) == D", () => expect(ABCD_ABCD().findLast(it => it === 'D',),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].findLast(anyCase E) == null", () => expect(ABCD_ABCD().findLast(it => it.toUpperCase() === 'E',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastByIndex(odd) == D", () => expect(ABCD_ABCD().findLastByIndex(it => it % 2 === 1,),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].findLastByIndex(0) == a", () => expect(ABCD_ABCD().findLastByIndex(it => it === 0,),).toBe('a',),)
        test("[a,b,c,d,A,B,C,D].findLastByIndex(7) == D", () => expect(ABCD_ABCD().findLastByIndex(it => it === 7,),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].findLastByIndex(26) == null", () => expect(ABCD_ABCD().findLastByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastIndex(anyCase B) == 5", () => expect(ABCD_ABCD().findLastIndex(it => it.toUpperCase() === 'B',),).toBe(5,),)
        test("[a,b,c,d,A,B,C,D].findLastIndex(a) == 0", () => expect(ABCD_ABCD().findLastIndex(it => it === 'a',),).toBe(0,),)
        test("[a,b,c,d,A,B,C,D].findLastIndex(D) == 7", () => expect(ABCD_ABCD().findLastIndex(it => it === 'D',),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findLastIndex(anyCase E) == null", () => expect(ABCD_ABCD().findLastIndex(it => it.toUpperCase() === 'E',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(odd) == 7", () => expect(ABCD_ABCD().findLastIndexByIndex(it => it % 2 === 1,),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(0) == 0", () => expect(ABCD_ABCD().findLastIndexByIndex(it => it === 0,),).toBe(0,),)
        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(7) == 7", () => expect(ABCD_ABCD().findLastIndexByIndex(it => it === 7,),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(26) == null", () => expect(ABCD_ABCD().findLastIndexByIndex(it => it === 26,),).toBeNull(),)
    },)
    describe("reverse", () => {
        test("[a,b,c,d,e,f,g,h,i,j].reverse() == [j,i,h,g,f,e,d,c,b,a]", () => expect(ABCDEFGHIJ().reverse().toArray(),).toStrictEqual(['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a',],),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(2) == [j,i,h,g,f,e,d,c]", () => expect(ABCDEFGHIJ().reverse(2,).toArray(),).toStrictEqual(['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, 2) == [j,i]", () => expect(ABCDEFGHIJ().reverse(null, 2,).toArray(),).toStrictEqual(['b', 'a',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(2, 5) == [e,d,c]", () => expect(ABCDEFGHIJ().reverse(2, 5,).toArray(),).toStrictEqual(['e', 'd', 'c',],),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(-2) == [j,i]", () => expect(ABCDEFGHIJ().reverse(-2,).toArray(),).toStrictEqual(['j', 'i',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, -2) == [h,g,f,e,d,c,b,a]", () => expect(ABCDEFGHIJ().reverse(null, -2,).toArray(),).toStrictEqual(['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(-5, -2) == [g,f,e,d,c]", () => expect(ABCDEFGHIJ().reverse(-5, -2,).toArray(),).toStrictEqual(['h', 'g', 'f',],),)

        test('[a,b,c,d,e,f,g,h,i,j].reverse(2, 1) => error', () => expect(() => ABCDEFGHIJ().reverse(2, 1,),).toThrow(RangeError,),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(400) => error", () => expect(() => ABCDEFGHIJ().reverse(400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(-400) => error", () => expect(() => ABCDEFGHIJ().reverse(-400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, 400) => error", () => expect(() => ABCDEFGHIJ().reverse(null, 400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, -400) => error", () => expect(() => ABCDEFGHIJ().reverse(null, -400,),).toThrow(RangeError,),)
    },)
    describe("iterator", () => {
        const iterator = AB()[Symbol.iterator]()
        test("1st: a", () => expect(iterator.next().value,).toBe('a',),)
        test("2nd: b", () => expect(iterator.next().value,).toBe('b',),)
        test("3rd: done", () => expect(iterator.next().done,).toBe(true,),)
    },)
    describe("conversion", () => {
        describe("to array", () => {
            test("basic", () => expect(AB().toArray(),).toStrictEqual(['a', 'b',],),)
            test("frozen", () => expect(AB().toArray(),).toBeFrozen(),)
            test("size", () => expect(AB().toArray(),).toHaveLength(2,),)
        })
        describe("to mutable array", () => {
            test("basic", () => expect(AB().toMutableArray(),).toStrictEqual(['a', 'b',],),)
            test("frozen", () => expect(AB().toMutableArray(),).not.toBeFrozen(),)
            test("size", () => expect(AB().toMutableArray(),).toHaveLength(2,),)
        })
        describe("to set", () => {
            test("basic", () => expect(AB().toSet(),).toStrictEqual(new Set(['a', 'b',],),),)
            test("frozen", () => expect(AB().toSet(),).toBeFrozen(),)
            test("size", () => expect(AB().toSet().size,).toBe(2,),)
        })
        describe("to mutable set", () => {
            test("basic", () => expect(AB().toMutableSet(),).toStrictEqual(new Set(['a', 'b',],),),)
            test("frozen", () => expect(AB().toMutableSet(),).not.toBeFrozen(),)
            test("size", () => expect(AB().toMutableSet().size,).toBe(2,),)
        })
        describe("to weak set", () => {
            test("basic", () => expect(AB_OBJECT().toWeakSet(),).toStrictEqual(new WeakSet([SINGULAR_A_OBJECT, SINGULAR_B_OBJECT,],),),)
            test("frozen", () => expect(AB().toWeakSet(),).toBeFrozen(),)
        })
        describe("to mutable weak set", () => {
            test("basic", () => expect(AB_OBJECT().toMutableWeakSet(),).toStrictEqual(new WeakSet([SINGULAR_A_OBJECT, SINGULAR_B_OBJECT,],),),)
            test("frozen", () => expect(AB().toMutableWeakSet(),).not.toBeFrozen(),)
        })
        describe("to map", () => {
            test("basic", () => expect(AB().toMap(),).toStrictEqual(new Map([[0, 'a',], [1, 'b',],],),),)
            test("frozen", () => expect(AB().toMap(),).toBeFrozen(),)
            test("size", () => expect(AB().toMap().size,).toBe(2,),)
        })
        describe("to mutable map", () => {
            test("basic", () => expect(AB().toMutableMap(),).toStrictEqual(new Map([[0, 'a',], [1, 'b',],],),),)
            test("frozen", () => expect(AB().toMutableMap(),).not.toBeFrozen(),)
            test("size", () => expect(AB().toMutableMap().size,).toBe(2,),)
        })
    },)
},)
