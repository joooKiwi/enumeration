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

import type {Lazy}             from "@joookiwi/lazy"
import type {Nullable, NullOr} from "@joookiwi/type"
import {CommonLazy, lazy}                  from "@joookiwi/lazy"

import type {Enumerable}                                     from "./Enumerable"
import type {EnumerableWithNullableParent}                   from "./EnumerableWithNullableParent"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {Enum}                    from "./Enum"
import {EnumConstants}           from "./EnumConstants"
import {KnownEnumConstructors}   from "./KnownEnumConstructors"
import {_getParentValueFromName} from "./method/_getParentValueFromName"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithNullableParent}.
 *
 * Compared to its sibling {@link EnumWithParent}, it can receive `null`.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithParentDeclaration.getValue getValue()}
 *
 * @see EnumWithParent
 */
export abstract class EnumWithNullableParent<const PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends Enum<ORDINAL, NAME>
    implements EnumerableWithNullableParent<PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<NullOr<PARENT>>

    static {
        KnownEnumConstructors.add(EnumWithNullableParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with a {@link EnumerableWithNullableParent.parent parent} reference
     * having the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    /**
     * Create the instance with a {@link EnumerableWithNullableParent.parent parent} reference
     *
     * @param parent The parent reference
     */
    protected constructor(parent: Nullable<PARENT>,)
    /**
     * Create the instance with a {@link EnumerableWithNullableParent.parent parent} {@link Enumerable.name name} reference
     *
     * @param parentName The parent reference retrieved from the {@link Enumerable.name name} value
     */
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithNullableParent.parent parent} reference
     * via a callback
     *
     * @param lateParent The late parent reference
     */
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithNullableParent.parent parent} {@link Enumerable.name name} reference
     * via a callback
     *
     * @param lateParentName The late parent reference retrieved from the {@link Enumerable.name name} value
     */
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    /**
     * Create the instance with a parent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>,)
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>,) {
        super()
        if (arguments.length === 0) {
            this.#parent = lazy(() => _getParentValueFromName(this, this.name,),)
            return
        }

        if (parent instanceof Function)
            parent = parent()
        if (parent == null) {
            this.#parent = CommonLazy.NULL
            return
        }
        this.#parent = lazy(() => {
            if (typeof parent == "string")
                return _getParentValueFromName(this, parent,)

            if (parent === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
                return null
            if (parent === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
                return _getParentValueFromName(this, this.name,)

            if (parent instanceof String)
                return _getParentValueFromName(this, parent.valueOf(),)
            return parent
        },)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} parent of the current instance
     *
     * @lazy
     * @throws NullReferenceException An error happened while attempting to retrieve the parent value
     */
    public get parent(): NullOr<PARENT> {
        return this.#parent.value
    }

    //#endregion -------------------- Getter methods --------------------

}
