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
