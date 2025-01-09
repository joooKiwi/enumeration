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

import {Enum}                  from "../../src/Enum"
import {KnownEnumConstructors} from "../../src/helper/KnownEnumConstructors"

describe("KnownEnumConstructorsTest", () => {
    let instance: KnownEnumConstructors
    /**The value to add and remove with the tests */
    const value: Function = () => {}
    function newInstance(): KnownEnumConstructors { return new class extends KnownEnumConstructors { constructor() { super() } }() }

    test("values", () => expect(newInstance().values.toArray(),).toStrictEqual([Enum,],),)
    describe("add", () => {
        beforeEach(() => instance = newInstance(),)

        test('0', () => expect(instance.add().values.toArray(),).toStrictEqual([Enum,],),)
        test('1', () => expect(instance.add(value,).values.toArray(),).toStrictEqual([Enum, value,],),)
        test('2', () => expect(instance.add(value, value,).values.toArray(),).toStrictEqual([Enum, value,],),)
    },)
    describe("remove", () => {
        beforeEach(() => instance = newInstance(),)

        test('0', () => expect(instance.remove().values.toArray(),).toStrictEqual([Enum,],),)
        test('1', () => expect(instance.remove(value,).values.toArray(),).toStrictEqual([Enum,],),)
        test('2', () => expect(instance.remove(value, value,).values.toArray(),).toStrictEqual([Enum,],),)
        describe("after add", () => {
            beforeEach(() => instance = newInstance().add(value,),)

            test('0', () => expect(instance.remove().values.toArray(),).toStrictEqual([Enum, value,],),)
            test('1', () => expect(instance.remove(value,).values.toArray(),).toStrictEqual([Enum,],),)
            test('2', () => expect(instance.remove(value, value,).values.toArray(),).toStrictEqual([Enum,],),)
        },)
    },)

},)
