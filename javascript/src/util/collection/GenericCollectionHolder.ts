import {AbstractCollectionHolder} from "collection/AbstractCollectionHolder"
import type {CollectionHolder}    from "collection/CollectionHolder"

export class GenericCollectionHolder<T = unknown, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    protected override _new<U, >(iterable: Iterable<U>): CollectionHolder<U> {
        return new GenericCollectionHolder(iterable)
    }

    //#endregion -------------------- Loop methods --------------------

    //#endregion -------------------- Methods --------------------

}
