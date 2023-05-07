import type {ExceptionWithNullableCause} from "enumerable/exception/declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to be outside a limit
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/IndexOutOfBoundsException.html Java IndexOutOfBoundsException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-index-out-of-bounds-exception Kotlin IndexOutOfBoundsException
 * @see https://learn.microsoft.com/dotnet/api/system.indexoutofrangeexception C# IndexOutOfRangeException
 */
export class IndexOutOfBoundsException<const ERROR extends Error = never, >
    extends RangeError
    implements ExceptionWithNullableCause<ERROR> {

    public override readonly name = this.constructor.name
    readonly #cause

    public constructor(message: string, cause?: Nullable<ERROR>,) {
        super(message,)
        this.#cause = cause ?? null
    }

    public override get cause(): NullOr<ERROR> {
        return this.#cause
    }

}
