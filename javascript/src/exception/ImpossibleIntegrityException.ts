/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, NullOr}           from "../general type"
import type {ExceptionWithNullableCause} from "./declaration/ExceptionWithNullableCause"

/**
 * Tell that the integrity is impossible for the value received on the specified instance
 *
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassCastException.html Java ClassCastException
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-class-cast-exception Kotlin ClassCastException
 * @see https://learn.microsoft.com/dotnet/api/system.invalidcastexception C# InvalidCastException
 */
export class ImpossibleIntegrityException<const out INSTANCE,
    const out CAUSE extends Error = never, >
    extends TypeError
    implements ExceptionWithNullableCause<CAUSE> {

    public override readonly name = this.constructor.name
    readonly #instance
    readonly #cause

    public constructor(message: string, instance: INSTANCE, cause?: Nullable<CAUSE>,) {
        super(message,)
        this.#instance = instance
        this.#cause = cause ?? null
    }

    /** The instance that has an impossible integrity */
    public get instance() {
        return this.#instance
    }

    public override get cause(): NullOr<CAUSE> {
        return this.#cause
    }

}
