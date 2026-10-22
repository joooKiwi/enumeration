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
import type {NameOf} from "../../src/type/nameOf"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {BasicEnum}                         from "./BasicEnum"
import {BasicEnumWithGrandParent}          from "./BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent}     from "./BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}               from "./BasicEnumWithParent"

/**
 * A {@link CompanionEnumWithGreatGrandParent} that has the purpose to give
 * the {@link BasicEnumWithGreatGrandParent} for its {@link EnumWithGreatGrandParent} type,
 * the {@link BasicEnumWithGrandParent} for its {@link EnumWithGrandParent} type,
 * the {@link BasicEnumWithParent} for its {@link EnumWithParent} type and
 * the {@link BasicEnum} for its {@link Enum} type
 * plus a default name
 */
export class DefaultedNameCompanionEnumWithGreatGrandParent<const DEFAULT_NAME extends Nullable<StringOrObject>, >
    extends CompanionEnumWithGreatGrandParent<BasicEnumWithGreatGrandParent, typeof BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT_NAME: DEFAULT_NAME

    public constructor(public readonly defaultName: DEFAULT_NAME,) {
        super(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,)
        this._DEFAULT_NAME = defaultName
    }

}
