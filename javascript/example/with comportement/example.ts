import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

import type {Names, Ordinals} from "../type"

export abstract class EnumWithComportement
    extends Enum<Ordinals, Names> {

    public static readonly A = new class extends EnumWithComportement {

        public override aComportement(): void {
            console.log("Doing stuff from the class \"A\"")
        }

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"A\"")
        }

    }()
    public static readonly B = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"B\"")
        }

    }()
    public static readonly C = new class extends EnumWithComportement {

        public override aComportmentDifferentInEachInstance(): void {
            console.log("Doing a comportement specific to the class \"C\"")
        }

    }()

    private constructor() {
        super()
    }

    public aComportement(): void {
        console.log("Doing some generic stuff")
    }

    public abstract aComportmentDifferentInEachInstance(): void

}
export namespace EnumWithComportement {
    class CompanionEnum_EnumWithComportement
        extends BasicCompanionEnum {

        static #instance?: CompanionEnum_EnumWithComportement

        constructor() {
            super(EnumWithComportement,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }
    export const CompanionEnum = CompanionEnum_EnumWithComportement
}