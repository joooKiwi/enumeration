import type {EnumerableName, EnumerableToPrimitive}           from "enumerable/Enumerable.types"
import type {Nullable, PossiblePrimitiveHint, PossibleString} from "../../type"

export interface Enumerable<ORDINAL extends number = number, NAME extends string = string, > {

    /**
     * Get the name on the current enum instance (not to be confused with the class name)
     *
     * @failAtConstruction
     */
    get name(): NAME

    /** Get the ordinal on the current enum instance. */
    get ordinal(): ORDINAL

    /**
     * Convert the {@link Enumerable} to a {@link String} or {@link Number}.
     *
     * If it receive a <b>null</b>, then a {@link TypeError} will be thrown.
     *
     * @param value The value (either "string", "number" or "default")
     * @throws TypeError
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
     */
    [Symbol.toPrimitive]<HINT extends PossiblePrimitiveHint, >(value: Nullable<HINT>,): EnumerableToPrimitive<HINT, this>

    /**
     * Convert the {@link Enumerable} to a {@link String} or {@link Number}.
     *
     * If it receive a <b>null</b> or a value that is not {@link PossiblePrimitiveHint a hint}, then a {@link TypeError} will be thrown.
     *
     * @param value The value (either "string", "number" or "default") as an object or a primitive
     * @throws TypeError
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
     */
    [Symbol.toPrimitive](value: Nullable<PossibleString>,): EnumerableToPrimitive<PossiblePrimitiveHint, this>

    /**
     * Gives an output for the call from {@link Object.prototype.toString.call} [object Enum] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: EnumerableName

}
