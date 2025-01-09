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

import type {CollectionHolder}   from "@joookiwi/collection"
import {GenericCollectionHolder} from "@joookiwi/collection"

import {Enum} from "../Enum"

/**
 * The known {@link Enum}-like types that can be validated on {@link getLastPrototype}
 *
 * @singleton
 */
export class KnownEnumConstructors {

    //#region -------------------- Singleton usage --------------------

    static #instance?: KnownEnumConstructors

    /** @internal */
    protected constructor() {
    }

    public static get get(): KnownEnumConstructors {
        return KnownEnumConstructors.#instance ??= new KnownEnumConstructors()
    }

    //#endregion -------------------- Singleton usage --------------------
    //#region -------------------- Fields --------------------

    /** Tell that the values have changed between the calls of {@link KnownEnumConstructors.values} */
    #isValuesDifferentBetweenCalls = false
    #values?: Function[]
    /** A {@link CollectionHolder} to encapsulate the values on the {@link KnownEnumConstructors.values} */
    #collection?: CollectionHolder<Function>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Getter methods --------------------

    get #__values(): Function[] {
        return this.#values ??= [Enum,]
    }

    /**
     * Get a copy of the known {@link EnumerableConstructor} {@link Array} as a {@link CollectionHolder}.
     *
     * Or the same instance if nothing was changed in between the calls of this method.
     */
    public get values(): CollectionHolder<Function> {
        if (this.#isValuesDifferentBetweenCalls) {
            const collection = this.#collection = new GenericCollectionHolder(this.#__values,)
            this.#isValuesDifferentBetweenCalls = false
            return collection
        }
        return this.#collection ??= new GenericCollectionHolder(this.#__values,)
    }

    /** An alias toward the {@link KnownEnumConstructors} instance {@link KnownEnumConstructors.values "values method"} */
    public static get values() {
        return KnownEnumConstructors.get.values
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
        if (size == 0)
            return this // Nothing can be added

        const instanceValues = this.#__values
        const instanceSize = instanceValues.length
        let index = -1
        while (++index < size) {
            const value = values[index]!
            if (!instanceValues.includes(value,))
                instanceValues.push(value,)
        }
        if (instanceValues.length === instanceSize)
            return this // Nothing was removed

        this.#isValuesDifferentBetweenCalls = true
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
        return KnownEnumConstructors.get.add(...values,)
    }


    /**
     * Add the known {@link EnumerableConstructor} to the {@link KnownEnumConstructors.values "get values method"}
     *
     * @param values The values to remove
     */
    public remove(...values: Function[]): this {
        const size = values.length
        if (size == 0)
            return this // Nothing can be removed

        const newArray = [] as Function[]

        const instanceValues = this.#__values
        const instanceSize = instanceValues.length
        let instanceIndex = -1
        instanceLoop:while (++instanceIndex < instanceSize) {
            const instanceValue = instanceValues[instanceIndex]!

            let size = values.length
            if (size === 0)
                break

            let index = -1
            while (++index < size)
                if (instanceValue === values[index]) {
                    values.splice(index, 1,)
                    continue instanceLoop
                }
            newArray.push(instanceValue,)
        }
        if (newArray.length === instanceSize)
            return this // Nothing was removed

        this.#values = newArray
        this.#isValuesDifferentBetweenCalls = true
        return this
    }

    /**
     * An alias toward the {@link KnownEnumConstructors} instance {@link KnownEnumConstructors.remove "remove(...values) method"}
     *
     * @param values The values to remove
     */
    public static remove(...values: readonly Function[]) {
        return KnownEnumConstructors.get.remove(...values,)
    }

    //#endregion -------------------- Methods --------------------

}
