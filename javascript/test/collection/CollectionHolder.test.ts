import {A_NULL_B_UNDEFINED, AB, AB12, ABCD, ABCD_ABCD, ABCD_NULL, ABCD_UNDEFINED, EMPTY, NULL_ABCD, UNDEFINED_ABCD} from "./constantCollections"
import {nonPresentItem, sizeValues, templateCollection, templateItems}                                              from "./constantValues"

describe("CollectionHolderTest", () => {
    describe("size", () => describe.each(sizeValues,)("%s", ({value: {collection: it, size,},},) => {
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
        describe("first",() => {
            describe("[].first() == throw|null", () => {
                test("throw", () => expect(() => EMPTY.first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(EMPTY.firstOrNull(),).toBeNull(),)
            },)

            test("[a,b,c,d].first() == a", () => expect(ABCD.first(),).toBe('a',),)
            describe("[null,a,b,c,d].first() == throw|null", () => {
                test("throw", () => expect(() => NULL_ABCD.first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(NULL_ABCD.firstOrNull(),).toBeNull(),)
            },)
            test("[a,b,c,d,null].first() == a", () => expect(ABCD_NULL.first(),).toBe('a',),)
            describe("[undefined,a,b,c,d].first() == throw|null", () => {
                test("throw", () => expect(() => UNDEFINED_ABCD.first(),).toThrow(ReferenceError,),)
                test("or null", () => expect(UNDEFINED_ABCD.firstOrNull(),).toBeUndefined(),)
            },)
            test("[a,b,c,d,undefined].first() == a", () => expect(ABCD_UNDEFINED.first(),).toBe('a',),)

            test("[a,b,c,d].first(!a) == b", () => expect(ABCD.first(it => it !== 'a',),).toBe('b',),)
            describe("[null,a,b,c,d].first(!a) == throw|null", () => {
                test("throw", () => expect(() => NULL_ABCD.first(it => it !== 'a',),).toThrow(ReferenceError,),)
                test("or null", () => expect(NULL_ABCD.firstOrNull(it => it !== 'a',),).toBeNull(),)
            },)
            test("[a,b,c,d,null].first(!a) == b", () => expect(ABCD_NULL.first(it => it !== 'a',),).toBe('b',),)
            describe("[undefined,a,b,c,d].first(!a) == throw|null", () => {
                test("throw", () => expect(() => UNDEFINED_ABCD.first(it => it !== 'a',),).toThrow(ReferenceError,),)
                test("or null", () => expect(UNDEFINED_ABCD.firstOrNull(it => it !== 'a',),).toBeNull(),)
            },)
            test("[a,b,c,d,undefined].first(!a) == b", () => expect(ABCD_UNDEFINED.first(it => it !== 'a',),).toBe('b',),)
        },)
        describe("last",() => {
            describe("[]", () => {
                test("throw", () => expect(() => EMPTY.last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(EMPTY.lastOrNull(),).toBeNull(),)
            },)

            test("[a,b,c,d].last() == d", () => expect(ABCD.last(),).toBe('d',),)
            test("[null,a,b,c,d].last() == d", () => expect(NULL_ABCD.last(),).toBe('d',),)
            describe("[a,b,c,d,null].last() == throw|null", () => {
                test("throw", () => expect(() => ABCD_NULL.last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_NULL.lastOrNull(),).toBeNull(),)
            },)
            test("[undefined,a,b,c,d].last() == d", () => expect(UNDEFINED_ABCD.last(),).toBe('d',),)
            describe("[a,b,c,d,undefined].last() == throw|null", () => {
                test("throw", () => expect(() => ABCD_UNDEFINED.last(),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_UNDEFINED.lastOrNull(),).toBeUndefined(),)
            },)

            test("[a,b,c,d].last(!d) == c", () => expect(ABCD.last(it => it !== 'd',),).toBe('c',),)
            test("[null,a,b,c,d].last(!d) == c", () => expect(NULL_ABCD.last(it => it !== 'd',),).toBe('c',),)
            describe("[a,b,c,d,null].last(!d) == throw|null", () => {
                test("throw", () => expect(() => ABCD_NULL.last(it => it !== 'd',),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_NULL.lastOrNull(it => it !== 'd',),).toBeNull(),)
            },)
            test("[undefined,a,b,c,d].last(!d) == c", () => expect(UNDEFINED_ABCD.last(it => it !== 'd',),).toBe('c',),)
            describe("[a,b,c,d,undefined].last(!d) == throw|null", () => {
                test("throw", () => expect(() => ABCD_UNDEFINED.last(it => it !== 'd',),).toThrow(ReferenceError,),)
                test("or null", () => expect(ABCD_UNDEFINED.lastOrNull(it => it !== 'd',),).toBeUndefined(),)
            },)
        },)
    },)
    describe("has / includes / contains", () => {
        describe("one", () => describe.each(templateItems,)("%s", it => {
            test("has", () => expect(templateCollection.hasOne(it,),).toBeTrue(),)
            test("includes", () => expect(templateCollection.includesOne(it,),).toBeTrue(),)
            test("contains", () => expect(templateCollection.containsOne(it,),).toBeTrue(),)

            test("has with not present", () => expect(templateCollection.hasOne(it, nonPresentItem,),).toBeTrue(),)
            test("includes with not present", () => expect(templateCollection.includesOne(it, nonPresentItem,),).toBeTrue(),)
            test("contains with not present", () => expect(templateCollection.containsOne(it, nonPresentItem,),).toBeTrue(),)

            test('has not Object(value)', () => expect(templateCollection.hasOne(Object(it,),),).toBeFalse(),)
            test('includes not Object(value)', () => expect(templateCollection.includesOne(Object(it,),),).toBeFalse(),)
            test('contains not Object(value)', () => expect(templateCollection.containsAll(Object(it,),),).toBeFalse(),)

            test('has not [value]', () => expect(templateCollection.hasOne([it,],),).toBeFalse(),)
            test('includes not [value]', () => expect(templateCollection.includesOne([it,],),).toBeFalse(),)
            test('contains not [value]', () => expect(templateCollection.containsOne([it,],),).toBeFalse(),)

            test('has not {value}', () => expect(templateCollection.hasOne({it,},),).toBeFalse(),)
            test('includes not {value}', () => expect(templateCollection.includesOne({it,},),).toBeFalse(),)
            test('contains not {value}', () => expect(templateCollection.containsOne({it,},),).toBeFalse(),)
        },),)
        describe("all", () => describe.each(templateItems,)("%s", it => {
            test("has", () => expect(templateCollection.hasAll(it,),).toBeTrue(),)
            test("includes", () => expect(templateCollection.includesAll(it,),).toBeTrue(),)
            test("contains", () => expect(templateCollection.containsAll(it,),).toBeTrue(),)

            test("has not with not present", () => expect(templateCollection.hasAll(it, nonPresentItem,),).toBeFalse(),)
            test("includes not with not present", () => expect(templateCollection.includesAll(it, nonPresentItem,),).toBeFalse(),)
            test("contains not with not present", () => expect(templateCollection.containsAll(it, nonPresentItem,),).toBeFalse(),)

            test('has not Object(value)', () => expect(templateCollection.hasAll(Object(it,),),).toBeFalse(),)
            test('includes not Object(value)', () => expect(templateCollection.includesAll(Object(it,),),).toBeFalse(),)
            test('contains not Object(value)', () => expect(templateCollection.containsAll(Object(it,),),).toBeFalse(),)

            test('has not [value]', () => expect(templateCollection.hasAll([it,],),).toBeFalse(),)
            test('includes not [value]', () => expect(templateCollection.includesAll([it,],),).toBeFalse(),)
            test('contains not [value]', () => expect(templateCollection.containsAll([it,],),).toBeFalse(),)

            test('has not {value}', () => expect(templateCollection.hasAll({it,},),).toBeFalse(),)
            test('includes not {value}', () => expect(templateCollection.includesAll({it,},),).toBeFalse(),)
            test('contains not {value}', () => expect(templateCollection.containsAll({it,},),).toBeFalse(),)
        },),)
    },)
    describe("join", () => {
        test("[a,b].join()", () => expect(AB.join(),).toBe("[a, b]",),)
        test("[a,b].join(;)", () => expect(AB.join(';',),).toBe("[a;b]",),)
        test("[a,b].join(null, <)", () => expect(AB.join(null,'<', null,),).toBe("<a, b]",),)
        test("[a,b].join(null, null, >)", () => expect(AB.join(null,null, '>',),).toBe("[a, b>",),)
        test("[a,b].join(null, null, null, 1)", () => expect(AB.join(null,null, null, 1,),).toBe("[a, …]",),)
        test("[a,b].join(null, null, null, null, \"...\")", () => expect(AB.join(null,null, null, null, "...",),).toBe("[a, b]",),)
        test("[a,b].join(null, null, null, 1, \"...\")", () => expect(AB.join(null,null, null, 1, "...",),).toBe("[a, ...]",),)
        test("[a,b].join(null, null, null, null, () => toUpperCase)", () => expect(AB.join(null,null, null, null, null, it => it.toUpperCase(),),).toBe("[A, B]",),)
    },)
    describe("filter", () => {
        test("[a,b,c,d].filter(d) == [d]", () => expect(ABCD.filter(it => it === 'd',).toArray(),).toStrictEqual(['d',],),)
        test("[a,b,c,d].filterByIndex(3) == [d]", () => expect(ABCD.filterByIndex(it => it === 3,).toArray(),).toStrictEqual(['d',],),)
        test("[a,b,c,d].filterNot(d) == [a,c,c]", () => expect(ABCD.filterNot(it => it === 'd',).toArray(),).toStrictEqual(['a', 'b', 'c',],),)
        test("[a,b,c,d].filterNotByIndex(3) == [a,c,c]", () => expect(ABCD.filterNotByIndex(it => it === 3,).toArray(),).toStrictEqual(['a', 'b', 'c',],),)
        test("[a,b,1,2].filter(number) == [1,2]", () => expect(AB12.filter((it): it is (| 1 | 2) => typeof it == 'number',).toArray(),).toStrictEqual([1, 2,],),)
        test("[a,b,1,2].filterNot(number) == [a,b]", () => expect(AB12.filterNot((it): it is (| 1 | 2) => typeof it == 'number',).toArray(),).toStrictEqual(['a', 'b',],),)
        test("[a,null,b,undefined].filterNotNull() == [a,b]", () => expect(A_NULL_B_UNDEFINED.filterNonNull().toArray(),).toStrictEqual(['a', 'b',],),)
        test("[a,null,b,undefined].filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED.filterNonNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(null).filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED.filterNot((it): it is null => it === null).filterNonNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(undefined).filterNotNull() != this", () => expect(A_NULL_B_UNDEFINED.filterNot((it): it is undefined => it === undefined).filterNonNull(),).not.toStrictEqual(A_NULL_B_UNDEFINED,),)
        test("[a,null,b,undefined].filterNot(undefined).filterNot(null).filterNotNull() == last iteration", () => {
            const lastIteration = A_NULL_B_UNDEFINED.filterNot((it): it is undefined => it === undefined).filterNot((it): it is null => it === null)
            expect(lastIteration.filterNonNull(),).toStrictEqual(lastIteration,)
        },)
        test("[a,null,b,undefined].filterNot(null).filterNot(undefined).filterNotNull() == last iteration", () => {
            const lastIteration = A_NULL_B_UNDEFINED.filterNot((it): it is null => it === null).filterNot((it): it is undefined => it === undefined)
            expect(lastIteration.filterNonNull(),).toStrictEqual(lastIteration,)
        },)
        test("[a,b].filterNotNull() == this", () => expect(AB.filterNonNull(),).toStrictEqual(AB,),)
    },)
    describe("find", () => {
        test("[a,b,c,d,A,B,C,D].find(anyCase b) == b", () => expect(ABCD_ABCD.find(it => it.toLowerCase() === 'b',),).toBe('b',),)
        test("[a,b,c,d,A,B,C,D].find(anyCase e) == null", () => expect(ABCD_ABCD.find(it => it.toLowerCase() === 'e',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findByIndex(odd) == b", () => expect(ABCD_ABCD.findByIndex(it => it % 2 === 1,),).toBe('b',),)
        test("[a,b,c,d,A,B,C,D].findByIndex(26) == null", () => expect(ABCD_ABCD.findByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findIndex(anyCase b) == 1", () => expect(ABCD_ABCD.findIndex(it => it.toLowerCase() === 'b',),).toBe(1,),)
        test("[a,b,c,d,A,B,C,D].findIndex(anyCase e) == null", () => expect(ABCD_ABCD.findIndex(it => it.toLowerCase() === 'e',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findIndexByIndex(odd) == 1", () => expect(ABCD_ABCD.findIndexByIndex(it => it % 2 === 1,),).toBe(1,),)
        test("[a,b,c,d,A,B,C,D].findIndexByIndex(26) == null", () => expect(ABCD_ABCD.findIndexByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLast(anyCase B) == B", () => expect(ABCD_ABCD.findLast(it => it.toUpperCase() === 'B',),).toBe('B',),)
        test("[a,b,c,d,A,B,C,D].findLast(anyCase E) == null", () => expect(ABCD_ABCD.findLast(it => it.toUpperCase() === 'E',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastByIndex(odd) == D", () => expect(ABCD_ABCD.findLastByIndex(it => it % 2 === 1,),).toBe('D',),)
        test("[a,b,c,d,A,B,C,D].findLastByIndex(26) == null", () => expect(ABCD_ABCD.findLastByIndex(it => it === 26,),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastIndex(anyCase B) == 5", () => expect(ABCD_ABCD.findLastIndex(it => it.toUpperCase() === 'B',),).toBe(5,),)
        test("[a,b,c,d,A,B,C,D].findLastIndex(anyCase E) == null", () => expect(ABCD_ABCD.findLastIndex(it => it.toUpperCase() === 'E',),).toBeNull(),)

        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(odd) == 7", () => expect(ABCD_ABCD.findLastIndexByIndex(it => it % 2 === 1,),).toBe(7,),)
        test("[a,b,c,d,A,B,C,D].findLastIndexByIndex(26) == null", () => expect(ABCD_ABCD.findLastIndexByIndex(it => it === 26,),).toBeNull(),)
    },)
    describe("reverse", () => {
        test("[a,b,c,d,e,f,g,h,i,j].reverse() == [j,i,h,g,f,e,d,c,b,a]", () => expect(ABCDEFGHIJ.reverse().toArray(),).toStrictEqual(['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a',],),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(2) == [j,i,h,g,f,e,d,c]", () => expect(ABCDEFGHIJ.reverse(2,).toArray(),).toStrictEqual(['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, 2) == [j,i]", () => expect(ABCDEFGHIJ.reverse(null, 2,).toArray(),).toStrictEqual(['b', 'a',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(2, 5) == [e,d,c]", () => expect(ABCDEFGHIJ.reverse(2, 5,).toArray(),).toStrictEqual(['e', 'd', 'c',],),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(-2) == [j,i]", () => expect(ABCDEFGHIJ.reverse(-2,).toArray(),).toStrictEqual(['j', 'i',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, -2) == [h,g,f,e,d,c,b,a]", () => expect(ABCDEFGHIJ.reverse(null, -2,).toArray(),).toStrictEqual(['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a',],),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(-5, -2) == [g,f,e,d,c]", () => expect(ABCDEFGHIJ.reverse(-5, -2,).toArray(),).toStrictEqual(['h', 'g', 'f',],),)

        test('[a,b,c,d,e,f,g,h,i,j].reverse(2, 1) => error', () => expect(() => ABCDEFGHIJ.reverse(2, 1,),).toThrow(RangeError,),)

        test("[a,b,c,d,e,f,g,h,i,j].reverse(400) => error", () => expect(() => ABCDEFGHIJ.reverse(400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(-400) => error", () => expect(() => ABCDEFGHIJ.reverse(-400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, 400) => error", () => expect(() => ABCDEFGHIJ.reverse(null, 400,),).toThrow(RangeError,),)
        test("[a,b,c,d,e,f,g,h,i,j].reverse(null, -400) => error", () => expect(() => ABCDEFGHIJ.reverse(null, -400,),).toThrow(RangeError,),)
    },)
    describe("iterator", () => {
        const iterator = AB[Symbol.iterator]()
        test("1st: a", () => expect(iterator.next().value,).toBe('a',),)
        test("2nd: b", () => expect(iterator.next().value,).toBe('b',),)
        test("3rd: done", () => expect(iterator.next().done,).toBe(true,),)
    },)
    describe("conversion", () => {
        describe("to array", () => {
            test("basic", () => expect(AB.toArray(),).toStrictEqual(['a', 'b',],),)
            test("frozen", () => expect(AB.toArray(),).toBeFrozen(),)
        })
        describe("to mutable array", () => {
            test("basic", () => expect(AB.toMutableArray(),).toStrictEqual(['a', 'b',],),)
            test("frozen", () => expect(AB.toMutableArray(),).not.toBeFrozen(),)
        })
        describe("to set", () => {
            test("basic", () => expect(AB.toSet(),).toStrictEqual(new Set(['a', 'b',],),),)
            test("frozen", () => expect(AB.toSet(),).toBeFrozen(),)
        })
        describe("to mutable set", () => {
            test("basic", () => expect(AB.toMutableSet(),).toStrictEqual(new Set(['a', 'b',],),),)
            test("frozen", () => expect(AB.toMutableSet(),).not.toBeFrozen(),)
        })
        describe("to weak set", () => {
            test("basic", () => expect(AB_OBJECT.toWeakSet(),).toStrictEqual(new WeakSet([AB_OBJECT[0]!, AB_OBJECT[1]!,],),),)
            test("frozen", () => expect(AB.toWeakSet(),).toBeFrozen(),)
        })
        describe("to mutable weak set", () => {
            test("basic", () => expect(AB_OBJECT.toMutableWeakSet(),).toStrictEqual(new WeakSet([AB_OBJECT[0]!, AB_OBJECT[1]!,],),),)
            test("frozen", () => expect(AB.toMutableWeakSet(),).not.toBeFrozen(),)
        })
    },)
},)
