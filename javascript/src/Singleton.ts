/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/** A singleton signature to retrieve the instance via a getter method */
export interface Singleton<T, > {

    /** Get or create the instance */
    get get(): T

}
