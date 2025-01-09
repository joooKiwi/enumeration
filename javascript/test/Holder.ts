//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

export class Holder<const T, const MESSAGE extends string, > {

    readonly value
    readonly toString

    public constructor(value: T, message: MESSAGE,) {
        this.value = value
        this.toString = () => message
    }

}
