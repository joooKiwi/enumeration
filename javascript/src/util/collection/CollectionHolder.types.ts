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

/** A simple object encapsulation of a value */
export type ObjectOf<T, > =
    | (T extends string ? String : never)
    | (T extends boolean ? Boolean : never)
    | (T extends number ? Number : never)
    | (T extends bigint ? BigInt : never)
    | (T extends null ? {} : never)
    | (T extends undefined ? {} : never)
    | (T extends symbol ? Symbol : never)
    | (& T & object)
