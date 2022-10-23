import {AbstractCollectionHolder} from "collection/AbstractCollectionHolder"

export class GenericCollectionHolder<T = any, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    public override map<U>(callback: (value: T, index: number,) => U): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((value, index,) => callback(value, index,),),)
    }

    public override mapIndex<U>(callback: (index: number) => U): GenericCollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((_, index,) => callback(index,),),)
    }

    //#endregion -------------------- Loop methods --------------------

    //#endregion -------------------- Methods --------------------

}
