/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable} from "../general type"

import {NullPointerException} from "./generic/NullPointerException"

/** An instance was received as <b>null</b> value */
export class NullInstanceException<const ERROR extends Error = never, >
    extends NullPointerException<ERROR> {

    public constructor(cause?: Nullable<ERROR>,) {
        super("The instance received cannot be null!", cause,)
    }

}
