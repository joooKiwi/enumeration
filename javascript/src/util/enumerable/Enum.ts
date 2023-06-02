import type {Enumerable}                            from "enumerable/Enumerable"
import type {EnumerableConstructor}                 from "enumerable/EnumerableConstructor"
import type {EnumerableName, EnumerableToPrimitive} from "enumerable/Enumerable.types"
import type {BasicCompanionEnumDeclaration}         from "enumerable/companion/BasicCompanionEnum.declaration"

import {EnumConstants}          from "./EnumConstants"
import {EnumHelper}             from "./EnumHelper"
import {NullReferenceException} from "./exception/NullReferenceException"
import {ClassCastException}     from "./exception/generic/ClassCastException"
import {NullPointerException}   from "./exception/generic/NullPointerException"

const {set} = Reflect

export abstract class Enum<const ORDINAL extends number, const NAME extends string, >
    implements Enumerable<ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    #name?: NAME
    readonly #ordinal: ORDINAL
    readonly #prototypeConstructor
    #companion?: BasicCompanionEnumDeclaration<Enum<ORDINAL, NAME>, EnumerableConstructor<Enum<ORDINAL, NAME>, any>>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create a new {@link Enum} instance with an {@link Enum.ordinal} defined at the construction.
     *
     * Note that the use of {@link Enum.#Companion companion} is present so it <b>reflectively</b> set the instance received to <b>this</b>.
     */
    protected constructor() {
        set(this.#prototypeConstructor = EnumHelper.getLastPrototype(this,), this.#ordinal = this.#lastOrdinalPlus1, this,)
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
        return this.#companion ??= EnumHelper.getCompanion(this.#prototypeConstructor)
    }

    public [Symbol.toPrimitive]<const HINT extends string, >(hint: Nullable<HINT>,): EnumerableToPrimitive<HINT, this>
    public [Symbol.toPrimitive](hint: Nullable<PossibleString>,): EnumerableToPrimitive<PossiblePrimitiveHint, this>
    public [Symbol.toPrimitive](hint: Nullable<PossibleString>,): | ORDINAL | NAME {
        if (hint == null)
            throw new NullPointerException(`Invalid null hint: The "${this.#__companion.instance.name}" cannot be converted to a string or number primitive`)
        if (hint instanceof String)
            return this[Symbol.toPrimitive](hint.valueOf())
        if (!EnumConstants.TO_PRIMITIVE_VALUES.test(hint))
            throw new ClassCastException(`Invalid hint "${hint}": The "${this.#__companion.instance.name}" could only be converted to a string or number primitive`,)
        return hint.toLowerCase() === "number" ? this.ordinal : this.name
    }

    public get [Symbol.toStringTag](): EnumerableName {
        return EnumConstants.ENUM_TO_STRING_TAG
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
        const instance = this.#prototypeConstructor,
            map = EnumConstants.LAST_ORDINAL_MAP
        const nextValue = (map.get(instance) ?? -1) + 1 as ORDINAL
        map.set(instance, nextValue,)
        return nextValue
    }

    /**
     * Get the {@link Enumerable enumerable} {@link Enumerable.name name}
     * by utilising the {@link BasicCompanionEnumDeclaration.values companion values}
     *
     * @throws {NullReferenceException} The current instance was not found in the {@link BasicCompanionEnumDeclaration.values companion values}
     */
    get #nameOnCurrentInstance(): NAME {
        const companion = this.#__companion
        const index = companion.values.findIndex(it => it === this)
        if (index == null)
            throw new NullReferenceException(`Reference not found! No name to the "${companion.instance.name}" were found. Or it was called during its construction.`, this,)
        return companion.names.findByIndex(it => it === index)!
    }

    //#endregion -------------------- Methods --------------------

}
