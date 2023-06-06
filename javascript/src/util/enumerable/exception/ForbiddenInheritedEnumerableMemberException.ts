import type {Nullable, PossibleString} from "../../../general type"
import type {ExceptionWithValue}       from "./declaration/ExceptionWithValue"

import {IllegalAccessException} from "./generic/IllegalAccessException"

/**
 * An exception to tell that an {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS inherited Enumerable member} was used
 *
 * @see EnumConstants.INHERITED_ENUMERABLE_MEMBERS
 */
export class ForbiddenInheritedEnumerableMemberException<const T extends PossibleString, const ERROR extends Error = never, >
    extends IllegalAccessException<ERROR>
    implements ExceptionWithValue<T> {

    readonly #value

    public constructor(message: string, value: T, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#value = value
    }

    /** The invalid {@link String} value that was not an {@link EnumConstants.INHERITED_ENUMERABLE_MEMBERS inherited Enumerable member} */
    public get value(): T {
        return this.#value
    }

}