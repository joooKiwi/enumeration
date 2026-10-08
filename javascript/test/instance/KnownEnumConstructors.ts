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

import type {CollectionHolder} from "@joookiwi/collection"
import type {Array} from "@joookiwi/type"
import {expect} from "vitest"

import {KnownEnumConstructors as SourceKnownEnumConstructors} from "../../src/KnownEnumConstructors"

/**
 * An instance of {@link SourceKnownEnumConstructors KnownEnumConstructors} to be used for the tests.
 *
 * Meaning that no static method can be called.
 *
 * This class is meant to test the functionalities without any glocal interference.
 * But the real implementation using the static context could be changed.
 */
export class KnownEnumConstructors
    extends SourceKnownEnumConstructors {

    public constructor() {
        super()
    }

    /** An alias of the {@link KnownEnumConstructors._encapsulatedValues} */
    public get values(): CollectionHolder<Function> {
        return this._encapsulatedValues
    }

    /**
     * An alias of the {@link KnownEnumConstructors._has}
     *
     * @param value The value to verify its existence
     * @return {boolean} The {@link value} is present
     */
    public has(value: Function,): boolean
    public has() {
        //@ts-ignore: We will send the amount of arguments to the super._has(...)
        return this._has(...arguments,)
    }

    /**
     * An alias of the {@link KnownEnumConstructors._add}
     *
     * @param value The value to add
     * @return {boolean} The {@link value} was added
     */
    public add(value: Function,): boolean
    public add() {
        //@ts-ignore: We will send the amount of arguments to the super._add(...)
        return this._add(...arguments,)
    }

    /**
     * An alias of the {@link KnownEnumConstructors._remove}
     *
     * @param value The value to remove
     * @return {boolean} The {@link value} was removed
     */
    public remove(value: Function,): boolean
    public remove() {
        //@ts-ignore: We will send the amount of arguments to the super._remove(...)
        return this._remove(...arguments,)
    }

    /**
     * A test method to add, then do something else by return the current instance afterward
     *
     * @param value The value to add
     * @return {this} The current instance
     */
    public addAnd(value: Function,): this {
        this._add(value,)
        return this
    }


    public static override get values(): never { return expect.fail("The static getter method “values” was not expected to be called.") }

    public static override has(..._: Array<unknown>): never
    public static override has() { expect.fail("The static method “has” was not expected to be called.") }

    public static override add(..._: Array<unknown>): never
    public static override add() { expect.fail("The static method “add” was not expected to be called.") }

    public static override remove(..._: Array<unknown>): never
    public static override remove() { expect.fail("The static method “remove” was not expected to be called.") }

}
