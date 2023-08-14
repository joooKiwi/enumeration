/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CompanionEnumDeclarationSingleton, CompanionEnumSingleton, CompanionEnumWithGrandParentDeclarationSingleton, CompanionEnumWithGrandParentSingleton, CompanionEnumWithGreatGrandParentDeclarationSingleton, CompanionEnumWithGreatGrandParentSingleton, CompanionEnumWithParentDeclarationSingleton, CompanionEnumWithParentSingleton} from "../../src/Singleton.types"

import {Enum}                              from "../../src/Enum"
import {EnumWithGrandParent}               from "../../src/EnumWithGrandParent"
import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {EnumWithParent}                    from "../../src/EnumWithParent"
import {CompanionEnum}                     from "../../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../../src/companion/CompanionEnumWithParent"

/** The simple enums ordinals */
type Ordinals = | 0 | 1
/** The simple enums names */
type Names = | 'A' | 'B'

export class EnumTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends Enum<ORDINAL, NAME> {
    public static A = new class EnumTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumSingleton<EnumTestInstance, typeof this> = class CompanionEnum_EnumTestInstance
        extends CompanionEnum<EnumTestInstance, typeof this> {
        public static get get(): CompanionEnum_EnumTestInstance {
            return new CompanionEnum_EnumTestInstance(EnumTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnum() {}
}
export class EnumDeclarationTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends Enum<ORDINAL, NAME> {
    public static A = new class EnumTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumDeclarationSingleton<EnumDeclarationTestInstance, typeof this> = class CompanionEnum_EnumDeclarationTestInstance
        extends CompanionEnum<EnumDeclarationTestInstance, typeof this> {
        public static get get(): CompanionEnum_EnumDeclarationTestInstance {
            return new CompanionEnum_EnumDeclarationTestInstance(EnumDeclarationTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumDeclaration() {}
}


export class EnumWithParentTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithParent<EnumTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithParentTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithParentTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumWithParentSingleton<EnumWithParentTestInstance, typeof this, EnumTestInstance, typeof EnumTestInstance> = class CompanionEnum_EnumWithParentTestInstance
        extends CompanionEnumWithParent<EnumWithParentTestInstance, typeof this, EnumTestInstance, typeof EnumTestInstance> {
        public static get get(): CompanionEnum_EnumWithParentTestInstance {
            return new CompanionEnum_EnumWithParentTestInstance(EnumWithParentTestInstance, EnumTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumWithParent() {}
}
export class EnumWithParentDeclarationTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithParent<EnumDeclarationTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithParentDeclarationTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithParentDeclarationTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumWithParentDeclarationSingleton<EnumWithParentDeclarationTestInstance, typeof this, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> = class CompanionEnum_EnumWithParentDeclarationTestInstance
        extends CompanionEnumWithParent<EnumWithParentDeclarationTestInstance, typeof this, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> {
        public static get get(): CompanionEnum_EnumWithParentDeclarationTestInstance {
            return new CompanionEnum_EnumWithParentDeclarationTestInstance(EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumWithParentDeclaration() {}
}


export class EnumWithGrandParentTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithGrandParent<EnumWithParentTestInstance<ORDINAL, NAME>, EnumTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithGrandParentTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithGrandParentTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    private constructor() { super() }
    public static CompanionEnum: CompanionEnumWithGrandParentSingleton<EnumWithGrandParentTestInstance, typeof this, EnumWithParentTestInstance, typeof EnumWithParentTestInstance, EnumTestInstance, typeof EnumTestInstance> = class CompanionEnum_EnumWithGrandParentTestInstance
        extends CompanionEnumWithGrandParent<EnumWithGrandParentTestInstance, typeof this, EnumWithParentTestInstance, typeof EnumWithParentTestInstance, EnumTestInstance, typeof EnumTestInstance> {
        public static get get(): CompanionEnum_EnumWithGrandParentTestInstance {
            return new CompanionEnum_EnumWithGrandParentTestInstance(EnumWithGrandParentTestInstance, EnumWithParentTestInstance, EnumTestInstance,)
        }
    }
    methodFromEnumWithGrandParent() {}
}
export class EnumWithGrandParentDeclarationTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithGrandParent<EnumWithParentDeclarationTestInstance<ORDINAL, NAME>, EnumDeclarationTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithGrandParentDeclarationTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithGrandParentDeclarationTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumWithGrandParentDeclarationSingleton<EnumWithGrandParentDeclarationTestInstance, typeof this, EnumWithParentDeclarationTestInstance, typeof EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> = class CompanionEnum_EnumWithGrandParentDeclarationTestInstance
        extends CompanionEnumWithGrandParent<EnumWithGrandParentDeclarationTestInstance, typeof this, EnumWithParentDeclarationTestInstance, typeof EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> {
        public static get get(): CompanionEnum_EnumWithGrandParentDeclarationTestInstance {
            return new CompanionEnum_EnumWithGrandParentDeclarationTestInstance(EnumWithGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumWithGrandParentDeclaration() {}
}


export class EnumWithGreatGrandParentTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithGreatGrandParent<EnumWithGrandParentTestInstance<ORDINAL, NAME>, EnumWithParentTestInstance<ORDINAL, NAME>, EnumTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithGreatGrandParentTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithGreatGrandParentTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EnumWithGreatGrandParentTestInstance, typeof this, EnumWithGrandParentTestInstance, typeof EnumWithGrandParentTestInstance, EnumWithParentTestInstance, typeof EnumWithParentTestInstance, EnumTestInstance, typeof EnumTestInstance> = class CompanionEnum_EnumWithGrandParentTestInstance
        extends CompanionEnumWithGreatGrandParent<EnumWithGreatGrandParentTestInstance, typeof this, EnumWithGrandParentTestInstance, typeof EnumWithGrandParentTestInstance, EnumWithParentTestInstance, typeof EnumWithParentTestInstance, EnumTestInstance, typeof EnumTestInstance> {
        public static get get(): CompanionEnum_EnumWithGrandParentTestInstance {
            return new CompanionEnum_EnumWithGrandParentTestInstance(EnumWithGreatGrandParentTestInstance, EnumWithGrandParentTestInstance, EnumWithParentTestInstance, EnumTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumWithGreatGrandParent() {}
}
export class EnumWithGreatGrandParentDeclarationTestInstance<out ORDINAL extends Ordinals = Ordinals, out NAME extends Names = Names, >
    extends EnumWithGreatGrandParent<EnumWithGrandParentDeclarationTestInstance<ORDINAL, NAME>, EnumWithParentDeclarationTestInstance<ORDINAL, NAME>, EnumDeclarationTestInstance<ORDINAL, NAME>, ORDINAL, NAME> {
    public static A = new class EnumWithGreatGrandParentDeclarationTestInstance_A extends this<0, 'A'> {}()
    public static B = new class EnumWithGreatGrandParentDeclarationTestInstance_B extends this<1, 'B'> {}()
    public static 0: typeof this.A
    public static 1: typeof this.B
    public static CompanionEnum: CompanionEnumWithGreatGrandParentDeclarationSingleton<EnumWithGreatGrandParentDeclarationTestInstance, typeof this, EnumWithGrandParentDeclarationTestInstance, typeof EnumWithGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance, typeof EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> = class CompanionEnum_EnumWithGrandParentTestInstance
        extends CompanionEnumWithGreatGrandParent<EnumWithGreatGrandParentDeclarationTestInstance, typeof this, EnumWithGrandParentDeclarationTestInstance, typeof EnumWithGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance, typeof EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance, typeof EnumDeclarationTestInstance> {
        public static get get(): CompanionEnum_EnumWithGrandParentTestInstance {
            return new CompanionEnum_EnumWithGrandParentTestInstance(EnumWithGreatGrandParentDeclarationTestInstance, EnumWithGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance, EnumDeclarationTestInstance,)
        }
    }
    private constructor() { super() }
    methodFromEnumWithGreatGrandParentDeclaration() {}
}
