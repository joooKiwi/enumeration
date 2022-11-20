import type {BasicEnumerableConstructor} from "enumerable/BasicEnumerableConstructor"
import type {Enumerable}                 from "enumerable/Enumerable"
import type {CollectionHolder}           from "collection/CollectionHolder"

/**
 * A basic <i>static</i> {@link Enumerable} definition.
 *
 * It contains everything from the {@link BasicEnumerableConstructor} plus
 * the names & ordinals implementation.
 */
export interface BasicEnumerableConstructorWithNamesAndOrdinals<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    extends BasicEnumerableConstructor<ORDINAL, NAME, ENUMERABLE> {

    /** Every {@link Enumerable.name name} for the possible {@link Enumerable} instance */
    get names(): CollectionHolder<ENUMERABLE["name"]>

    /** Every {@link Enumerable.ordinal ordinal} for the possible {@link Enumerable} instance */
    get ordinals(): CollectionHolder<ENUMERABLE["ordinal"]>

}
