/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder} from "./CollectionHolder"

/** A simple {@link Symbol.toStringTag} of a {@link CollectionHolder} */
export type CollectionHolderName = "CollectionHolder"

export type BooleanCallback<T, > = (value: T, index: number,) => boolean
export type ReverseBooleanCallback<T, > = (index: number, value: T,) => boolean
export type BooleanIndexCallback = (index: number,) => boolean
export type RestrainedBooleanCallback<T, S extends T, > = (value: T, index: number,) => value is S
export type ReverseRestrainedBooleanCallback<T, S extends T, > = (index: number, value: T,) => value is S

export type IndexWithReturnCallback<U, > = (index: number,) => U

export type ValueIndexCallback<T, > = (value: T, index: number,) => void
export type IndexValueCallback<T, > = (index: number, value: T,) => void

export type ValueIndexWithReturnCallback<T, U, > = (value: T, index: number,) => U
export type IndexValueWithReturnCallback<T, U, > = (index: number, value: T,) => U


export type ValueWithStringReturnCallback<T, > = (value: T,) => string

//#region -------------------- Validation type --------------------

/** A simple representation type to tell that a {@link CollectionHolder.size} is of 0 */
export type IsEmpty<T extends CollectionHolder, > = T["size"] extends 0 ? true : false
/** A simple representation type to tell that a {@link CollectionHolder.size} is not of 0 */
export type IsNotEmpty<T extends CollectionHolder, > = T["size"] extends 0 ? false : true

/**
 * A simple type representation to tell if the {@link CollectionHolder.hasNull},
 *  then the current instance is returned,
 *  otherwise, it is a new {@link CollectionHolder} with {@link NonNullable} values
 */
export type FilterNonNull<T, COLLECTION extends CollectionHolder<T>, > = COLLECTION["hasNull"] extends false ? COLLECTION : CollectionHolder<NonNullable<T>>

//#endregion -------------------- Validation type --------------------
