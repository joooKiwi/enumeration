import type {ExceptionWithNullableCause} from "enumerable/exception/declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to tell that a field, method is not present in the chain of operation or via reflection
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/NoSuchElementException.html Java NoSuchElementException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/ Kotlin NoSuchElementException
 * @see https://learn.microsoft.com/dotnet/api/system.missingmemberexception C# MissingMemberException
 */
export class NoSuchElementException<const ERROR extends Error = never, >
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
