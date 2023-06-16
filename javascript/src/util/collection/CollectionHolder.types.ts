/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder} from "./CollectionHolder"

/** A simple {@link Symbol.toStringTag} of a {@link CollectionHolder} */
export type CollectionHolderName = 'CollectionHolder'

export type BooleanCallback<T, > = (value: T, index: number,) => boolean
export type BooleanIndexCallback = (index: number,) => boolean
export type RestrainedBooleanCallback<T, S extends T, > = (value: T, index: number,) => value is S

export type JoinCallback<T, > = (value: T,) => string

export type MapCallback<T, U> = (value: T, index: number,) => U
export type MapIndexCallback<U> = (index: number,) => U

export type ForEachCallback<T> = (value: T, index: number,) => void
export type ForEachIndexCallback = (index: number,) => void

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
