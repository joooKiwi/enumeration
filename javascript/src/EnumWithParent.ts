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

import type {Enumerable}                                     from "./Enumerable"
import type {EnumerableWithParent}                           from "./EnumerableWithParent"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {Enum}                     from "./Enum"
import {KnownEnumConstructors}    from "./KnownEnumConstructors"
import {_getParentValue}         from "./method/_getParentValue"
import {_getParentValueFromName} from "./method/_getParentValueFromName"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithParent}.
 *
 * Compared to its sibling {@link EnumWithNullableParent}, it does not want `null`.
 *
 * It can throw a {@link NullReferenceException} in different scenarios:
 *  - A `null` is received during the construction
 *  - A `null` is interpreted on the {@link EnumWithParent.parent parent}
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithParentDeclaration.getValue getValue()}
 *
 * @see EnumWithNullableParent
 */
export abstract class EnumWithParent<const PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends Enum<ORDINAL, NAME>
    implements EnumerableWithParent<PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<PARENT>

    static {
        KnownEnumConstructors.add(EnumWithParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} reference
     * having the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} reference.
     *
     * @param parent The parent reference
     */
    protected constructor(parent: Nullable<PARENT>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} {@link Enumerable.name name} reference
     *
     * @param parentName The parent reference retrieved from the {@link Enumerable.name name} value
     */
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} reference
     * via a callback
     *
     * @param lateParent The late parent reference
     */
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} {@link Enumerable.name name} reference
     * via a callback
     *
     * @param lateParentName The late parent reference retrieved from its {@link Enumerable.name name} value
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
        if (arguments.length === 0) { // We default to the name of the instance
            this.#parent = lazy(() => _getParentValueFromName(this, this.name,),)
            return
        }

        if (parent instanceof Function)
            this.#parent = lazy(() => _getParentValue(this, parent(),),)
        else
            this.#parent = lazy(() => _getParentValue(this, parent,),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The parent of the current instance
     *
     * @lazy
     * @throws NullReferenceException An error happened while attempting to retrieve the parent value
     */
    public get parent(): PARENT {
        return this.#parent.value
    }

    //#endregion -------------------- Getter methods --------------------

}
