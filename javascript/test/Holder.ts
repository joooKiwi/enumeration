/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

export class Holder<const T, const MESSAGE extends string, > {

    readonly value
    readonly toString

    public constructor(value: T, message: MESSAGE,) {
        this.value = value
        this.toString = () => message
    }

}
