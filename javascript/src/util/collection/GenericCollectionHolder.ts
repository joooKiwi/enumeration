import {AbstractCollectionHolder}                                                       from "./AbstractCollectionHolder"
import type {BooleanCallback, MapCallback, MapIndexCallback, RestrainedBooleanCallback} from "./CollectionHolder"

export class GenericCollectionHolder<T = any, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    //#region -------------------- Filter methods --------------------

    public override filter<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): GenericCollectionHolder<S>
    public override filter(callback: BooleanCallback<T>,): GenericCollectionHolder<T>
    public override filter<S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return new GenericCollectionHolder(this._array.filter(callback,),)
    }

    //#endregion -------------------- Filter methods --------------------

    public override map<U>(callback: MapCallback<T, U>,): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((value, index,) => callback(value, index,),),)
    }

    public override mapIndex<U>(callback: MapIndexCallback<U>,): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((_, index,) => callback(index,),),)
    }

    //#endregion -------------------- Loop methods --------------------

    //#endregion -------------------- Methods --------------------

}
