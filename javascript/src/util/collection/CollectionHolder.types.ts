import type {CollectionHolder} from "./CollectionHolder"

export type BooleanCallback<T, > = (value: T, index: number,) => boolean
export type BooleanIndexCallback = (index: number,) => boolean
export type RestrainedBooleanCallback<T, S extends T, > = (value: T, index: number,) => value is S

export type MapCallback<T, U> = (value: T, index: number,) => U
export type MapIndexCallback<U> = (index: number,) => U

export type ForEachCallback<T> = (value: T, index: number,) => void
export type ForEachIndexCallback = (index: number,) => void

//#region -------------------- Validation type --------------------

/** A simple representation type to tell that a {@link CollectionHolder.size} is of 0 */
export type IsEmpty<T extends CollectionHolder, > = T["size"] extends 0 ? true : false
/** A simple representation type to tell that a {@link CollectionHolder.size} is not of 0 */
export type IsNotEmpty<T extends CollectionHolder, > = T["size"] extends 0 ? false : true

//#endregion -------------------- Validation type --------------------
