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

import type {CollectionHolder}   from "@joookiwi/collection"

import {KnownEnumConstructors as NewKnownEnumConstructors} from "../KnownEnumConstructors"

/**
 * The known {@link Enum}-like types that can be validated on {@link getLastPrototype}
 *
 * @deprecated Replace with the same name inside "@joookiwi/enumerable" instead. This will be removed in version 3.14
 * @singleton
 */
export class KnownEnumConstructors {

    //#region -------------------- Singleton usage --------------------

    static #instance?: KnownEnumConstructors

    /** @internal */
    protected constructor() {}

    public static get get(): KnownEnumConstructors {
        return KnownEnumConstructors.#instance ??= new KnownEnumConstructors()
    }

    //#endregion -------------------- Singleton usage --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * Get a copy of the known {@link EnumerableConstructor} {@link Array} as a {@link CollectionHolder}.
     *
     * Or the same instance if nothing was changed in between the calls of this method.
     */
    public get values(): CollectionHolder<Function> { return NewKnownEnumConstructors.values }

    /** An alias toward the {@link KnownEnumConstructors} instance {@link KnownEnumConstructors.values "values method"} */
    public static get values() {
        return NewKnownEnumConstructors.values
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    /**
     * Add the known {@link EnumerableConstructor} to the {@link KnownEnumConstructors.values "get values method"}.
     *
     * Note that no duplicate value can be inserted.
     *
     * @param values The values to add
     */
    public add(...values: readonly Function[]): this {
        const size = values.length
        let index = -1
        while (++index < size)
            NewKnownEnumConstructors.add(values[index]!,)
        return this
    }

    /**
     * An alias toward the {@link KnownEnumConstructors} instance {@link KnownEnumConstructors.add "add(...values) method"}.
     *
     * Note that no duplicate value can be inserted.
     *
     * @param values The values to add
     */
    public static add(...values: readonly Function[]) {
        const size = values.length
        let index = -1
        while (++index < size)
            NewKnownEnumConstructors.add(values[index]!,)
    }


    /**
     * Add the known {@link EnumerableConstructor} to the {@link KnownEnumConstructors.values "get values method"}
     *
     * @param values The values to remove
     */
    public remove(...values: Function[]): this {
        const size = values.length
        let index = -1
        while (++index < size)
            NewKnownEnumConstructors.remove(values[index]!,)
        return this
    }

    /**
     * An alias toward the {@link KnownEnumConstructors} instance {@link KnownEnumConstructors.remove "remove(...values) method"}
     *
     * @param values The values to remove
     */
    public static remove(...values: readonly Function[]) {
        const size = values.length
        let index = -1
        while (++index < size)
            NewKnownEnumConstructors.remove(values[index]!,)
    }

    //#endregion -------------------- Methods --------------------

}
