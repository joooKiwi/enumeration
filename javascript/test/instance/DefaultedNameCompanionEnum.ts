//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {NameOf} from "../../src/type/nameOf"

import {CompanionEnum} from "../../src/companion/CompanionEnum"
import {BasicEnum}     from "./BasicEnum"

/**
 * A {@link CompanionEnum} that has the purpose to give the {@link BasicEnum} for its {@link Enum} type
 * plus a default name
 */
export class DefaultedNameCompanionEnum<const DEFAULT_NAME extends NameOf<BasicEnum>, >
    extends CompanionEnum<BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT_NAME: DEFAULT_NAME

    public constructor(public readonly defaultName: DEFAULT_NAME,) {
        super(BasicEnum,)
        this._DEFAULT_NAME = defaultName
    }

}
