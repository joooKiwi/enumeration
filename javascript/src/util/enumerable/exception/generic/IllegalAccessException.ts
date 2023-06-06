import type {Nullable, NullOr}           from "../../../../general type"
import type {ExceptionWithNullableCause} from "../declaration/ExceptionWithNullableCause"

/**
 * A simple generic exception made to tell that the access should not be done
 *
 * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/NoSuchFieldException.html Java IllegalAccessException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect.full/-illegal-callable-access-exception Kotlin IllegalCallableAccessException
 * @see https://learn.microsoft.com/dotnet/api/system.indexoutofrangeexception C# IndexOutOfRangeException
 */
export class IllegalAccessException<const ERROR extends Error = never, >
    extends ReferenceError
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
