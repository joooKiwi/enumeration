/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Lazy} from "@joookiwi/lazy"
import {lazy}      from "@joookiwi/lazy"

import type {Enumerable}                                                                                from "./Enumerable"
import type {NameOf, PossibleEnumerableValueOrNameByValueOrCallback, PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}                                                              from "./EnumerableWithNullableParent"
import type {Nullable, NullOr}                                                                          from "./general type"

import {Enum}                  from "./Enum"
import {Helper}                from "./helper/Helper"
import {KnownEnumConstructors} from "./helper/KnownEnumConstructors"

/**
 * A simple {@link Enum} class in conjuncture with the {@link EnumerableWithNullableParent}.
 *
 * Compared to its sibling {@link EnumWithParent}, it can receive <b>null</b>.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithParentDeclaration.getValue getValue()}
 *
 * @see EnumWithParent
 */
export abstract class EnumWithNullableParent<const out PARENT extends Enumerable,
    const out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends Enum<ORDINAL, NAME>
    implements EnumerableWithNullableParent<PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<NullOr<PARENT>>

    static {
        KnownEnumConstructors.get.add(EnumWithNullableParent,)
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
    protected constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?]) {
        super()
        if (args.length === 0)
            this.#parent = lazy(() => Helper.getValueFromInstanceName<PARENT>(this, "parent",),)
        else
            this.#parent = lazy(() => Helper.getNullableValue(this, args[0], "parent",),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} parent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get parent(): NullOr<PARENT> {
        return this.#parent.value
    }

    //#endregion -------------------- Getter methods --------------------

}
