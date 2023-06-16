/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder} from "./CollectionHolder"

import {AbstractCollectionHolder} from "./AbstractCollectionHolder"

export class GenericCollectionHolder<const T = unknown, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    protected override _new<const U, >(iterable: Iterable<U>): CollectionHolder<U> {
        return new GenericCollectionHolder(iterable)
    }

    //#endregion -------------------- Loop methods --------------------

    //#endregion -------------------- Methods --------------------

}
