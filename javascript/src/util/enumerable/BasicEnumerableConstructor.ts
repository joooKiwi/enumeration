import type {Enumerable}                                                         from "enumerable/Enumerable"
import type {Nullable, PossibleNumeric, PossibleString, PossibleStringOrNumeric} from "../../type"
import type {CollectionHolder}                                                   from "collection/CollectionHolder"

/**
 * A basic <i>static</i> {@link Enumerable} definition.
 *
 * It contains the basic methods in the static context.
 */
export interface BasicEnumerableConstructor<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    extends Function {

    [index: number]: ENUMERABLE//This part is only there to help retrieve the value in static context

    /**
     * Get an {@link Enumerable} by the ordinal (as a {@link Number number}
     * or a {@link BigInt bit int} by either a primitive or object)
     *
     * @param ordinal The ordinal to retrieve
     */
    getValue(ordinal: Nullable<PossibleNumeric>,): ENUMERABLE

    /**
     * Get an {@link Enumerable} by a name (as a {@link String string}
     * by either a primitive or an object)
     *
     * @param name The name to retrieve
     */
    getValue(name: Nullable<PossibleString>,): ENUMERABLE

    /**
     * Get an {@link Enumerable} directly
     *
     * @param instance The instance to retrieve
     */
    getValue<I extends ENUMERABLE, >(instance: Nullable<I>,): I

    /**
     * Get an {@link Enumerable} by any possible values
     * ({@link String}, {@link Number}, {@link BigInt} or an {@link Enumerable})
     *
     * @param value The value to compare and to retrieve the {@link Enumerable instance}
     */
    getValue<I extends ENUMERABLE, >(value: Nullable<| I | ENUMERABLE | PossibleStringOrNumeric>,): | I | ENUMERABLE


    /** Every {@link Enumerable instance} for the possible {@link Enumerable} instance */
    get values(): CollectionHolder<ENUMERABLE>

    /** A Javascript way to implements a "for‥of" for a {@link Enumerable instance} instance */
    [Symbol.iterator](): IterableIterator<ENUMERABLE>

}
