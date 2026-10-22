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

import type {Lazy}     from "@joookiwi/lazy"
import type {Nullable} from "@joookiwi/type"
import {lazy}          from "@joookiwi/lazy"

import type {EnumerableWithGrandParent}                      from "./EnumerableWithGrandParent"
import type {EnumerableWithParent}                           from "./EnumerableWithParent"
import type {Enumerable}                                     from "./Enumerable"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {EnumConstants}                from "./EnumConstants"
import {EnumWithParent}               from "./EnumWithParent"
import {KnownEnumConstructors}        from "./KnownEnumConstructors"
import {NullReferenceException}       from "./exception/NullReferenceException"
import {_getGrandParentValueFromName} from "./method/_getGrandParentValueFromName"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithGrandParent}.
 *
 * Compared to its sibling {@link EnumWithNullableGrandParent}, it does not want `null`.
 *
 * It can throw a {@link NullReferenceException} in different scenarios:
 *  - A `null` is received during the construction
 *  - A `null` is interpreted on the {@link EnumWithGrandParent.parent parent}
 * & {@link EnumWithGrandParent.grandParent grandparent}
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGrandParentDeclaration.getValue getValue()}
 *
 * @see EnumWithNullableGrandParent
 */
export class EnumWithGrandParent<const PARENT extends EnumerableWithParent<GRAND_PARENT>,
    const GRAND_PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithParent<PARENT, ORDINAL, NAME>
    implements EnumerableWithGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #grandParent: Lazy<GRAND_PARENT>

    static {
        KnownEnumConstructors.add(EnumWithGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with both {@link EnumerableWithGrandParent.parent parent}
     * & {@link EnumerableWithGrandParent.grandParent grandparent} references
     * with the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    protected constructor(parent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    /**
     * Create the instance with a parent & a grandparent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     * @param grandParent The grandparent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>,)
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>,) {
        if (arguments.length === 0) { // We default to the name of the instance
            super()
            this.#grandParent = lazy(() => _getGrandParentValueFromName(this, this.name,),)
            return
        }

        super(parent,)
        if (arguments.length === 1) {
            this.#grandParent = lazy(() => _getGrandParentValueFromName(this, this.name,),)
            return
        }

        if (grandParent instanceof Function)
            grandParent = grandParent()
        this.#grandParent = lazy(() => {
            if (grandParent == null)
                throw new NullReferenceException(`The value received on the “${this.constructor.name}” cannot be null on an Enumerable with non-null value.`, grandParent,)
            if (typeof grandParent == "string")
                return _getGrandParentValueFromName(this, grandParent,)

            if (grandParent === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
                return _getGrandParentValueFromName(this, this.name,)
            if (grandParent === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
                throw new NullReferenceException(`The value received on the “${this.constructor.name}” cannot be null on an Enumerable with non-null value.`, grandParent,)

            if (grandParent instanceof String)
                return _getGrandParentValueFromName(this, grandParent.valueOf(),)
            return grandParent
        },)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The grandparent of the current instance
     *
     * @lazy
     * @throws NullReferenceException An error happened while attempting to retrieve the grandparent value
     */
    public get grandParent(): GRAND_PARENT {
        return this.#grandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}
