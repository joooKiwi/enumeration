import type {ExceptionWithNullableCause} from "enumerable/exception/declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to tell that a value could not be converted to the specified type
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/ClassCastException.html Java ClassCastException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-class-cast-exception Kotlin ClassCastException
 * @see https://learn.microsoft.com/dotnet/api/system.invalidcastexception C# InvalidCastException
 */
export class ClassCastException<const ERROR extends Error = never, >
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
