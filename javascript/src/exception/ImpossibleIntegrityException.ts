/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable} from "../general type"

import {ClassCastException} from "./generic/ClassCastException"

/** Tell that the integrity is impossible for the value received on the specified instance */
export class ImpossibleIntegrityException<const INSTANCE, const ERROR extends Error = never, >
    extends ClassCastException<ERROR> {

    readonly #instance

    public constructor(message: string, instance: INSTANCE, cause?: Nullable<ERROR>,) {
        super(message, cause,)
        this.#instance = instance
    }

    /** The instance that has an impossible integrity */
    public get instance() {
        return this.#instance
    }
}