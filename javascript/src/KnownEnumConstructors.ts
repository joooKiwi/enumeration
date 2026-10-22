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

import type {CollectionHolder}     from "@joookiwi/collection"
import type {NullOr, MutableArray} from "@joookiwi/type"
import {ArrayAsCollectionHolder}   from "@joookiwi/collection"

import {Enum}                          from "./Enum"
import {InvalidInstanceException}      from "./exception/InvalidInstanceException"
import {NullReferenceException}        from "./exception/NullReferenceException"
import {_getSimplifiedPrototypeChains} from "./method/_getSimplifiedPrototypeChains"

/**
 * The known {@link Enum} (and close relative) to it
 * that will be used when using {@link getLastPrototype}
 *
 * Note, that no type specificity can be used, but some errors will be thrown if an invalid type is being sent.
 *
 * @see Enum
 * @see EnumWithParent
 * @see EnumWithNullableParent
 * @see EnumWithGrandParent
 * @see EnumWithNullableGrandParent
 * @see EnumWithGreatGrandParent
 * @see EnumWithNullableGreatGrandParent
 */
export class KnownEnumConstructors {

    //#region -------------------- Singleton usage --------------------

    static #instance?: KnownEnumConstructors

    /** @internal */
    protected constructor() {}

    /** @internal */
    public static get get(): KnownEnumConstructors {
        return KnownEnumConstructors.#instance ??= new KnownEnumConstructors()
    }

    //#endregion -------------------- Singleton usage --------------------

    #isValuesDifferentBetweenCalls: boolean = false
    #values?: MutableArray<Function>
    #collection?: NullOr<CollectionHolder<Function>>

    get #rawValues(): MutableArray<Function> {
        return this.#values ??= [Enum,]
    }

    /** @internal */
    protected get _encapsulatedValues(): CollectionHolder<Function> {
        if (!this.#isValuesDifferentBetweenCalls)
            return this.#collection ??= new ArrayAsCollectionHolder<Function>(this.#rawValues,)

        const collection = this.#collection = new ArrayAsCollectionHolder<Function>(this.#rawValues,)
        this.#isValuesDifferentBetweenCalls = false
        return collection
    }


    #validateType(value: Function,): void {
        if (value == null)
            throw new NullReferenceException("Null reference exception. No null value can be added|removed to the “KnownEnumConstructors”.", value,)
        if (!(value instanceof Function))
            throw new InvalidInstanceException("Invalid instance exception. The value was not of type “Function”", value,)

        /** The prototype chain associated to the value received in parameter up to {@link Object} */
        const prototypeChain: MutableArray<object> = []
        let prototype: NullOr<object> = value
        while (prototype != null) {
            prototypeChain.push(prototype,)
            prototype = Reflect.getPrototypeOf(prototype,)
        }

        let index = prototypeChain.length - 1
        if (prototypeChain[index] === Object.prototype)
            if (prototypeChain[index - 1] === Function.prototype)
                index-- // We ignore the last items since most of the time a class has Object then Function at their last inheritors
        while (index-- > 0) {
            const chain = prototypeChain[index] as object
            if (chain === Enum)
                return // It is valid since one of its chain is Enum

            const chainPrototypeDescriptor = Reflect.getOwnPropertyDescriptor(chain, "prototype",)
            if (chainPrototypeDescriptor == null)
                continue // We cannot proceed since the prototype cannot be found on the chain

            // We then check if the prototype of the chain has the structure of an Enumerable
            const chainPrototype = chainPrototypeDescriptor.value
            if (typeof chainPrototype == "object")
            if ("name" in chainPrototype)
            if ("ordinal" in chainPrototype)
            if (Symbol.toPrimitive in chainPrototype)
            if (Symbol.toStringTag in chainPrototype)
                return // It has the structure like an Enumerable
        }

        // We will give a simplified architecture for the prototype chain name
        throw new InvalidInstanceException(`Invalid instance exception. The ${_getSimplifiedPrototypeChains(prototypeChain,)} was not of type “Enum” or did not have the structure of an “Enumerable”.`, value,)
    }

    /** @internal */
    protected _has(value: Function,): boolean {
        this.#validateType(value,)
        const values = this.#rawValues
        const size = values.length
        let index = -1
        while (++index < size)
            if (values[index] === value)
                return true
        return false
    }

    /** @internal */
    protected _add(value: Function,): boolean {
        this.#validateType(value,)
        const values = this.#rawValues
        const size = values.length
        let index = -1
        while (++index < size)
            if (values[index] === value) // We do have it, so we do not add it
                return false

        values.push(value,)
        this.#isValuesDifferentBetweenCalls = true
        return true
    }

    /** @internal */
    protected _remove(value: Function,): boolean {
        this.#validateType(value,)
        const values = this.#rawValues
        const sizeMinus1 = values.length - 1

        if (values[0] === value) { // We see if it is the first index since "shift" is more optimal
            values.shift()
            this.#isValuesDifferentBetweenCalls = true
            this.#collection = null
            return true
        }

        let index = 0
        while (++index < sizeMinus1) {
            const instanceValue = values[index]!
            if (instanceValue !== value)
                continue

            // We have the index to remove
            values.splice(index, 1,)
            this.#isValuesDifferentBetweenCalls = true
            this.#collection = null
            return true
        }

        if (values[sizeMinus1] === value) { // We see if it is the last index since "pop" is more optimal
            values.pop()
            this.#isValuesDifferentBetweenCalls = true
            this.#collection = null
            return true
        }

        // We have nothing removed
        return false
    }


    /** All the known {@link Enum} (and close relative) to be used in {@link getLastPrototype} */
    public static get values(): CollectionHolder<Function> { return KnownEnumConstructors.get._encapsulatedValues }

    /**
     * Verify the existence of the {@link Enum} (and close relative) in the {@link values}
     *
     * @param value The value to verify its existence
     * @return {boolean} The valus is present
     * @throws NullReferenceException   The {@link value} is `null`|`undefined`
     * @throws InvalidInstanceException The {@link value} is not of type {@link Function}
     * @throws InvalidInstanceException The inheritor of the {@link value} is not {@link Enum} (by instance) or {@link Enumerable} (by structure)
     */
    public static has(value: Function,): boolean { return KnownEnumConstructors.get._has(value,) }

    /**
     * Add the known {@link Enum} (and close relative) to the {@link values}
     *
     * @param value The value to add
     * @return {boolean} The value was added
     * @throws NullReferenceException   The {@link value} is `null`|`undefined`
     * @throws InvalidInstanceException The {@link value} is not of type {@link Function}
     * @throws InvalidInstanceException The inheritor of the {@link value} is not {@link Enum} (by instance) or {@link Enumerable} (by structure)
     */
    public static add(value: Function,): boolean { return KnownEnumConstructors.get._add(value,) }

    /**
     * Remove the known {@link Enum} (and close relative) to the {@link values}
     *
     * @param value The value to remove
     * @return {boolean} The value was removed
     * @throws NullReferenceException   The {@link value} is `null`|`undefined`
     * @throws InvalidInstanceException The {@link value} is not of type {@link Function}
     * @throws InvalidInstanceException The inheritor of the {@link value} is not {@link Enum} (by instance) or {@link Enumerable} (by structure)
     */
    public static remove(value: Function,): boolean { return KnownEnumConstructors.get._remove(value,) }

}
