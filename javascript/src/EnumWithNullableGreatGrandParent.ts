/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "@joookiwi/lazy"
import {lazy}      from "@joookiwi/lazy"

import type {EnumerableWithNullableGrandParent}                                                         from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}                                                    from "./EnumerableWithNullableGreatGrandParent"
import type {NameOf, PossibleEnumerableValueOrNameByValueOrCallback, PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}                                                              from "./EnumerableWithNullableParent"
import type {Enumerable}                                                                                from "./Enumerable"
import type {Nullable, NullOr}                                                                          from "./general type"

import {EnumWithNullableGrandParent}  from "./EnumWithNullableGrandParent"
import {ImpossibleIntegrityException} from "./exception/ImpossibleIntegrityException"
import {Helper}                       from "./helper/Helper"
import {KnownEnumConstructors}        from "./helper/KnownEnumConstructors"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithNullableGreatGrandParent}.
 *
 * Compared to its sibling {@link EnumWithGreatGrandParent}, it can receive <b>null</b>.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGreatGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGreatGrandParentDeclaration.getValue getValue()}
 *
 * Also, it can throw a {@link ImpossibleIntegrityException} when receiving a <b>null</b>
 * on a value that was not expected to be null on the {@link EnumWithNullableGreatGrandParent.parent parent} &
 * {@link EnumWithNullableGreatGrandParent.grandParent grandparent} methods.
 *
 * @see EnumWithGreatGrandParent
 */
export class EnumWithNullableGreatGrandParent<const out PARENT extends EnumerableWithNullableGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>,
    const out GRAND_PARENT extends EnumerableWithNullableParent<GREAT_GRAND_PARENT>,
    const out GREAT_GRAND_PARENT extends Enumerable,
    const out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME>
    implements EnumerableWithNullableGreatGrandParent<PARENT, GRAND_PARENT, GREAT_GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #grandParent: Lazy<NullOr<GRAND_PARENT>>
    readonly #greatGrandParent: Lazy<NullOr<GREAT_GRAND_PARENT>>

    static {
        KnownEnumConstructors.get.add(EnumWithNullableGreatGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with {@link EnumerableWithNullableGreatGrandParent.parent parent},
     * {@link EnumerableWithNullableGreatGrandParent.grandParent grandparent}
     * & {@link EnumerableWithNullableGreatGrandParent.greatGrandParent great-grandparent} references
     * with the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    protected constructor(parent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    /**
     * Create the instance with a parent & a grandparent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     * @param grandParent The grandparent value (from any possibilities in Javascript)
     * @param greatGrandParent The great-grandparent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     * @throws {NullReferenceException}
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GREAT_GRAND_PARENT>,)
    protected constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?, PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>?, PossibleEnumerableValueOrNameByValueOrCallback<GREAT_GRAND_PARENT>?]) {
        let argumentsToSuper: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?, PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>?,]
        if (args.length === 0)
            argumentsToSuper = []
        else if (args.length === 1)
            argumentsToSuper = [args[0],]
        else
            argumentsToSuper = [args[0], args[1],]
        super(...argumentsToSuper,)

        if (args.length <= 1) {
            this.#grandParent = lazy(() => super.grandParent,)
            this.#greatGrandParent = lazy(() => Helper.getValueFromInstanceName<GREAT_GRAND_PARENT>(this, "great-grandparent",),)
            return
        }
        this.#grandParent = lazy(() => {
            const grandParent = super.grandParent,
                greatGrandParent = this.greatGrandParent

            if (grandParent == null && greatGrandParent != null)
                throw new ImpossibleIntegrityException(`The grandparent reference in "${this.constructor.name}" was not expected to be null when its great-grandparent is not-null.`, this,)
            return grandParent
        },)
        if (args.length <= 2)
            this.#greatGrandParent = lazy(() => Helper.getValueFromInstanceName<GREAT_GRAND_PARENT>(this, "great-grandparent",),)
        else
            this.#greatGrandParent = lazy(() => Helper.getNullableValue(this, args[2], "great-grandparent",),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} grandparent of the current instance
     *
     * @lazy
     * @throws {ImpossibleIntegrityException}
     * @throws {NullReferenceException}
     */
    public override get grandParent(): NullOr<GRAND_PARENT> {
        return this.#grandParent.value
    }

    /**
     * The {@link NullOr nullable} great-grandparent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get greatGrandParent(): NullOr<GREAT_GRAND_PARENT> {
        return this.#greatGrandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}