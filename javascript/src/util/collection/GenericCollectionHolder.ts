import {AbstractCollectionHolder}           from "./AbstractCollectionHolder"
import type {MapCallback, MapIndexCallback} from "./CollectionHolder"

export class GenericCollectionHolder<T = any, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    public override map<U>(callback: MapCallback<T, U>,): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((value, index,) => callback(value, index,),),)
    }

    public override mapIndex<U>(callback: MapIndexCallback<U>,): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((_, index,) => callback(index,),),)
    }

    //#endregion -------------------- Loop methods --------------------

    //#endregion -------------------- Methods --------------------

}
