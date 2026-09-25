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

import {Enum}                  from "../../src/Enum"
import {KnownEnumConstructors} from "../../src/helper/KnownEnumConstructors"

describe("KnownEnumConstructorsTest", () => {
    /**The value to add and remove with the tests */
    const value: Function = () => {}
    function newInstance(): KnownEnumConstructors { return new class extends KnownEnumConstructors { constructor() { super() } }() }

    test("values", () => expect(newInstance().values.toArray(),).toStrictEqual([Enum,],),)
    describe("add", () => {
        test('0', () => expect(newInstance().add().values.toArray(),).toStrictEqual([Enum,],),)
        test('1', () => expect(newInstance().add(value,).values.toArray(),).toStrictEqual([Enum, value,],),)
        test('2', () => expect(newInstance().add(value, value,).values.toArray(),).toStrictEqual([Enum, value,],),)
    },)
    describe("remove", () => {
        test('0', () => expect(newInstance().remove().values.toArray(),).toStrictEqual([Enum,],),)
        test('1', () => expect(newInstance().remove(value,).values.toArray(),).toStrictEqual([Enum,],),)
        test('2', () => expect(newInstance().remove(value, value,).values.toArray(),).toStrictEqual([Enum,],),)
        describe("after add", () => {
            test('0', () => expect(newInstance().add(value,).remove().values.toArray(),).toStrictEqual([Enum, value,],),)
            test('1', () => expect(newInstance().add(value,).remove(value,).values.toArray(),).toStrictEqual([Enum,],),)
            test('2', () => expect(newInstance().add(value,).remove(value, value,).values.toArray(),).toStrictEqual([Enum,],),)
        },)
    },)

},)
