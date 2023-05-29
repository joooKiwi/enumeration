import type {BasicCompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import {BasicCompanionEnum, Enum}         from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export abstract class EnumWithComportement
    extends Enum<Ordinals, Names> {

    public static readonly A = new class extends EnumWithComportement {

        public override aComportement() { console.log("Doing stuff from the class \"A\"") }

        public override aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"A\"") }

    }()
    public static readonly B = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"B\"") }

    }()
    public static readonly C = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance() { console.log("Doing a comportement specific to the class \"C\"") }

    }()

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<EnumWithComportement, typeof EnumWithComportement> = class CompanionEnum_EnumWithComportement
        extends BasicCompanionEnum<EnumWithComportement, typeof EnumWithComportement> {

        static #instance?: CompanionEnum_EnumWithComportement

        private constructor() { super(EnumWithComportement,) }

        public static get get() { return this.#instance ??= new CompanionEnum_EnumWithComportement() }

    }

    private constructor() { super() }

    public aComportement() { console.log("Doing some generic stuff") }

    public abstract aComportmentDifferentInEachInstance(): void

}