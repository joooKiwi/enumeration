import type {ExceptionWithNullableCause} from "enumerable/exception/declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to have a cause of a <b>null</b> value
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/NullPointerException.html Java NullPointerException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-null-pointer-exception Kotlin NullPointerException
 * @see https://learn.microsoft.com/dotnet/api/system.nullreferenceexception C# NullReferenceException
 */
export class NullPointerException<const ERROR extends Error = never, >
    extends TypeError
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
