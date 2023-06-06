import type {Nullable} from "../../../general type"

import {NullPointerException} from "./generic/NullPointerException"

/** An {@link Enumerable} was expected to not be <b>null</b> */
export class NullEnumerableException<const ERROR extends Error = never, >
    extends NullPointerException<ERROR> {

    public constructor(message: string, cause?: Nullable<ERROR>,) {
        super(message, cause,)
    }

}
