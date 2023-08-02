/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable}           from "../general type"
import type {ExceptionWithValue} from "./declaration/ExceptionWithValue"

import {ClassCastException} from "./generic/ClassCastException"

/**
 * A simple exception made to tell that the type received by
 * {@link CompanionEnumDeclaration.getValue getValue}, {@link CompanionEnumDeclaration.getName getName}
 * and {@link CompanionEnumDeclaration.getOrdinal getOrdinal}
 * that the value received was not a {@link String}, {@link Number}, {@link BigInt} or {@link Enumerable}
 *
 * @uniqueToJavascript
 */
export class UnhandledValueException<const T, const ERROR extends Error = never, >
    extends ClassCastException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The value that was in an invalid type */
    public get value(): T {
        return this.#value
    }

}
