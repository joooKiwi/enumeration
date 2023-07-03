/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable} from "../general type"

import {NullPointerException} from "./generic/NullPointerException"

/** An {@link Enumerable} was expected to not be <b>null</b> */
export class NullEnumerableException<const ERROR extends Error = never, >
    extends NullPointerException<ERROR> {

    public constructor(message: string, cause?: Nullable<ERROR>,) {
        super(message, cause,)
    }

}
