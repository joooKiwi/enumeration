/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "@joookiwi/lazy"
import {lazy}      from "@joookiwi/lazy"

import type {Enumerable}                                                                                from "./Enumerable"
import type {NameOf, PossibleEnumerableValueOrNameByValueOrCallback, PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithParent}                                                                      from "./EnumerableWithParent"
import type {Nullable}                                                                                  from "./general type"

import {Enum}                  from "./Enum"
import {Helper}                from "./helper/Helper"
import {KnownEnumConstructors} from "./helper/KnownEnumConstructors"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithParent}.
 *
 * Compared to its sibling {@link EnumWithNullableParent}, it does not want <b>null</b>.
 *
 * It can throw a {@link NullReferenceException} in different scenarios:
 *  - A <b>null</b> is received during the construction
 *  - A <b>null</b> is interpreted on the {@link EnumWithParent.parent parent}
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithParentDeclaration.getValue getValue()}
 *
 * @see EnumWithNullableParent
 */
export abstract class EnumWithParent<const out PARENT extends Enumerable,
    const out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends Enum<ORDINAL, NAME>
    implements EnumerableWithParent<PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<PARENT>

    static {
        KnownEnumConstructors.get.add(EnumWithParent,)
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
     *
     * @throws {NullReferenceException}
     */
    protected constructor(parent: Nullable<PARENT>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} {@link Enumerable.name name} reference
     *
     * @param parentName The parent reference retrieved from the {@link Enumerable.name name} value
     * @throws {NullReferenceException}
     */
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} reference
     * via a callback
     *
     * @param lateParent The late parent reference
     * @throws {NullReferenceException}
     */
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    /**
     * Create the instance with a {@link EnumerableWithParent.parent parent} {@link Enumerable.name name} reference
     * via a callback
     *
     * @param lateParentName The late parent reference retrieved from its {@link Enumerable.name name} value
     * @throws {NullReferenceException}
     */
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    /**
     * Create the instance with a parent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     * @throws {NullReferenceException}
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>,)
    protected constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?,]) {
        super()
        if (args.length === 0)
            this.#parent = lazy(() => Helper.getValueFromInstanceName(this, "parent",),)
        else
            this.#parent = lazy(() => Helper.getValue(this, args[0], "parent",),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The parent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get parent(): PARENT {
        return this.#parent.value
    }

    //#endregion -------------------- Getter methods --------------------

}
