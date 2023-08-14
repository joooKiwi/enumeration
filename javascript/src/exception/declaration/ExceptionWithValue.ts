/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/** A simple {@link Error exception} with a value */
export interface ExceptionWithValue<T, >
    extends Error {

    /** A generic value in the {@link ExceptionWithValue exception} */
    get value(): T

}
