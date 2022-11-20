import type {BasicEnumerableConstructorWithDefault}          from "enumerable/BasicEnumerableConstructorWithDefault"
import type {BasicEnumerableConstructorWithNamesAndOrdinals} from "enumerable/BasicEnumerableConstructorWithNamesAndOrdinals"
import type {Enumerable}                                     from "enumerable/Enumerable"

/**
 * A basic <i>static</i> {@link Enumerable} implementation.
 *
 * It has everything from {@link BasicEnumerableConstructor} as well as the {@link BasicEnumerableConstructorWithDefault} & {@link BasicEnumerableConstructorWithNamesAndOrdinals}
 */
export interface BasicEnumerableConstructorWithEverything<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    extends BasicEnumerableConstructorWithDefault<ORDINAL, NAME, ENUMERABLE>, BasicEnumerableConstructorWithNamesAndOrdinals<ORDINAL, NAME, ENUMERABLE> {
}
