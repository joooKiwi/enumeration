/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, PossiblePrimitiveHint, StringOrObject} from "@joookiwi/type"

import type {Enumerable}                            from "./Enumerable"
import type {EnumerableName, EnumerableToPrimitive} from "./Enumerable.types"
import type {CompanionEnumDeclarationType}          from "./companion/types"

import {EnumConstants}          from "./EnumConstants"
import {InvalidHintException}   from "./exception/InvalidHintException"
import {NullHintException}      from "./exception/NullHintException"
import {NullReferenceException} from "./exception/NullReferenceException"
import {getCompanion}           from "./helper/getCompanion"
import {getLastPrototype}       from "./helper/getLastPrototype"

export abstract class Enum<const ORDINAL extends number = number,
    const NAME extends string = string, >
    implements Enumerable<ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    #name?: NAME
    readonly #ordinal: ORDINAL
    readonly #prototypeConstructor
    #companion?: CompanionEnumDeclarationType<Enum>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create a new {@link Enum} instance with an {@link Enum.ordinal} defined at the construction.
     *
     * Note that the use of {@link Enum.#Companion companion} is present so it <b>reflectively</b> set the instance received to <b>this</b>.
     */
    protected constructor() {
        Reflect.set(this.#prototypeConstructor = getLastPrototype(this,), this.#ordinal = this.#lastOrdinalPlus1, this,)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name ??= this.#nameOnCurrentInstance
    }

    public get ordinal(): ORDINAL {
        return this.#ordinal
    }

    get #__companion() {
        return this.#companion ??= getCompanion(this.#prototypeConstructor,)
    }

    public [Symbol.toPrimitive]<const HINT extends string, >(hint: Nullable<HINT>,): EnumerableToPrimitive<HINT, this>
    public [Symbol.toPrimitive](hint: Nullable<StringOrObject>,): EnumerableToPrimitive<PossiblePrimitiveHint, this>
    public [Symbol.toPrimitive](hint: Nullable<StringOrObject>,): | ORDINAL | NAME {
        if (hint == null)
            throw new NullHintException(`Invalid null hint: The "${this.#__companion.instance.name}" cannot be converted to a string or number primitive.`,)
        if (hint instanceof String)
            return this[Symbol.toPrimitive](hint.valueOf(),)

        const lowerCaseHint = hint.toLowerCase()
        if (lowerCaseHint === "number")
            return this.ordinal
        if (lowerCaseHint === "string")
            return this.name
        if (lowerCaseHint === "default")
            return this.name
        throw new InvalidHintException(`Invalid hint "${hint}": The "${this.#__companion.instance.name}" could only be converted to a string or number primitive.`, hint,)
    }

    public get [Symbol.toStringTag](): EnumerableName {
        return "Enum"
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    /**
     * Get the last ordinal from the current prototype constructor (plus 1).
     * Or 0 if it is the first element.
     *
     * @see Enumerable.ordinal
     * @onlyCalledAtConstruction
     */
    get #lastOrdinalPlus1(): ORDINAL {
        const instance = this.#prototypeConstructor
        const map = EnumConstants.LAST_ORDINAL_MAP
        const nextValue = (map.get(instance,) ?? -1) + 1 as ORDINAL
        map.set(instance, nextValue,)
        return nextValue
    }

    /**
     * Get the {@link Enumerable enumerable} {@link Enumerable.name name}
     * by using the {@link CompanionEnumDeclaration.values companion values}
     *
     * @throws {NullReferenceException} The current instance was not found in the {@link CompanionEnumDeclaration.values companion values}
     */
    get #nameOnCurrentInstance(): NAME {
        const companion = this.#__companion
        const iterator = companion.iterator
        while (iterator.hasNext)
            if (iterator.nextValue === this)
                return companion.names.get(iterator.index - 1,) as NAME
        throw new NullReferenceException(`Reference not found! No name to the "${companion.instance.name}" were found. Or it was called during its construction.`, this,)
    }

    //#endregion -------------------- Methods --------------------

}
