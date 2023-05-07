import type {ExceptionWithValue} from "enumerable/exception/declaration/ExceptionWithValue"
import {IllegalAccessException}  from "./generic/IllegalAccessException"

/**
 * An exception to tell that an edge case numeric ({@link Number} or {@link BigInt})
 * or a name ({@link EnumHelper.EDGE_CASE_NUMERIC_NAME ±∞ / NaN}) was used
 *
 * @see EnumConstants.EDGE_CASE_NUMERIC_NAME
 */
export class ForbiddenNumericException<const T extends PossibleStringOrNumeric, const ERROR extends Error = never, >
    extends IllegalAccessException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The forbidden numeric value (as a {@link String}, {@link Number} or {@link BigInt}) that was {@link EnumHelper.EDGE_CASE_NUMERIC_NAME ±∞ or NaN} */
    public get value(): T {
        return this.#value
    }

}
