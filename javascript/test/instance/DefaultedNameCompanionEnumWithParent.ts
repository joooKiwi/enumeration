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

import type {Nullable, StringOrObject} from "@joookiwi/type"

import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {BasicEnum}               from "./BasicEnum"
import {BasicEnumWithParent}     from "./BasicEnumWithParent"

/**
 * A {@link CompanionEnumWithParent} that has the purpose to give
 * the {@link BasicEnumWithParent} for its {@link EnumWithParent} type and
 * the {@link BasicEnum} for its {@link Enum} type
 * plus a default name
 */
export class DefaultedNameCompanionEnumWithParent<const DEFAULT_NAME extends Nullable<StringOrObject>, >
    extends CompanionEnumWithParent<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT_NAME: DEFAULT_NAME

    public constructor(public readonly defaultName: DEFAULT_NAME,) {
        super(BasicEnumWithParent, BasicEnum,)
        this._DEFAULT_NAME = defaultName
    }

}
