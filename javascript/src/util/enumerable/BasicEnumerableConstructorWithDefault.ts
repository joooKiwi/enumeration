import type {Enumerable}                        from "enumerable/Enumerable"
import type {BasicEnumerableConstructor}        from "enumerable/BasicEnumerableConstructor"
import type {Nullable, PossibleStringOrNumeric} from "../../type"

/**
 * A basic <i>static</i> {@link Enumerable} definition.
 *
 * It contains everything from the {@link BasicEnumerableConstructor} plus
 * the implementation to have the default integration.
 */
export interface BasicEnumerableConstructorWithDefault<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    extends BasicEnumerableConstructor<ORDINAL, NAME, ENUMERABLE> {

    /**
     * Get the default value of an {@link Enumerable} instance.
     *
     * Note that if no default value was set (in the declaration) or by using the instance setter,
     * an {@link NullEnumerableException exception} will be thrown.
     *
     * @throws NullEnumerableException
     */
    get default(): ENUMERABLE

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param value The value to set (name, ordinal or instance)
     * @see setDefault
     */
    set default(value: Nullable<| ENUMERABLE | PossibleStringOrNumeric>,)

    /**
     * Set the default value of an {@link Enumerable} instance
     *
     * @param value The value to set (name, ordinal or instance)
     */
    setDefault(value: Nullable<| ENUMERABLE | PossibleStringOrNumeric>,): this

}
