import {nonPresentItem, sizeValues, templateCollection, templateItems} from "./CollectionHolder.constants"
import {GenericCollectionHolder as Collection}                         from "../../../src"

describe("CollectionHolerTest", () => {
    describe("size", () => describe.each(sizeValues,)("%s", ({value: {collection: it, size,},},) => {
        test("size", () => expect(it.size,).toEqual(size),)
        test("length", () => expect(it.length,).toEqual(size),)
        test("count", () => expect(it.count,).toEqual(size),)
    },),)
    describe("has / includes", () => {
        describe("one", () => describe.each(templateItems,)("%s", it => {
            test("has", () => expect(templateCollection.hasOne(it,),).toBe(true,),)
            test("includes", () => expect(templateCollection.includesOne(it,),).toBe(true,),)

            test("has with not present", () => expect(templateCollection.hasOne(it, nonPresentItem,),).toBe(true,),)
            test("includes with not present", () => expect(templateCollection.includesOne(it, nonPresentItem,),).toBe(true,),)

            test('has not Object(value)', () => expect(templateCollection.hasOne(Object(it,),),).toBe(false,),)
            test('includes not Object(value)', () => expect(templateCollection.includesOne(Object(it,),),).toBe(false,),)

            test('has not [value]', () => expect(templateCollection.hasOne([it,],),).toBe(false,),)
            test('includes not [value]', () => expect(templateCollection.includesOne([it,],),).toBe(false,),)

            test('has not {value}', () => expect(templateCollection.hasOne({it,},),).toBe(false,),)
            test('includes not {value}', () => expect(templateCollection.includesOne({it,},),).toBe(false,),)
        },),)
        describe("all", () => describe.each(templateItems,)("%s", it => {
            test("has", () => expect(templateCollection.hasAll(it,),).toBe(true,),)
            test("includes", () => expect(templateCollection.includesAll(it,),).toBe(true,),)

            test("has not with not present", () => expect(templateCollection.hasAll(it, nonPresentItem,),).toBe(false,),)
            test("includes not with not present", () => expect(templateCollection.includesAll(it, nonPresentItem,),).toBe(false,),)

            test('has not Object(value)', () => expect(templateCollection.hasAll(Object(it,),),).toBe(false,),)
            test('includes not Object(value)', () => expect(templateCollection.includesAll(Object(it,),),).toBe(false,),)

            test('has not [value]', () => expect(templateCollection.hasAll([it,],),).toBe(false,),)
            test('includes not [value]', () => expect(templateCollection.includesAll([it,],),).toBe(false,),)

            test('has not {value}', () => expect(templateCollection.hasAll({it,},),).toBe(false,),)
            test('includes not {value}', () => expect(templateCollection.includesAll({it,},),).toBe(false,),)
        },),)
    },)
    describe("join", () => {
        test("a,b", () => expect(new Collection(["a", "b",],).join(),).toBe("a,b"),)
        test("a;b", () => expect(new Collection(["a", "b",],).join(';',),).toBe("a;b"),)
    },)
    describe("filter", () => {
        test("[a,b,c,d].filter() == [a,c,c]", () => expect(new Collection(['a', 'b', 'c', 'd',],).filter(it => it != 'd',).toArray(),).toEqual(['a', 'b', 'c',],),)
        test("[a,b,1,2].filter() == [a,b]", () => expect(new Collection(['a', 'b', 1, 2,],).filter((it): it is string => typeof it != 'number',).toArray(),).toEqual(['a', 'b',],),)
        test("[a,null,b,undefined].filter() == [a,b]", () => expect(new Collection(['a', null, 'b', undefined,],).filterNonNull().toArray(),).toEqual(['a', 'b',],),)
    },)
},)
