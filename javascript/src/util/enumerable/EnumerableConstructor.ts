import type {Enumerable}                    from "enumerable/Enumerable"
import type {Singleton}                     from "enumerable/Singleton"
import type {BasicCompanionEnumDeclaration} from "enumerable/companion/BasicCompanionEnum.declaration"

/** The <i>static</i> {@link Enumerable} definition containing the {@link BasicCompanionEnumDeclaration companion enum} {@link Singleton singleton} field */
export interface EnumerableConstructor<ENUMERABLE extends Enumerable,
    COMPANION_ENUM extends BasicCompanionEnumDeclaration<ENUMERABLE, EnumerableConstructor<ENUMERABLE, COMPANION_ENUM>>, >
    extends Function {

    /**
     * The {@link BasicCompanionEnumDeclaration companion enum} {@link Singleton}
     * containing the utility methods for the {@link Enumerable}
     */
    readonly CompanionEnum: Singleton<COMPANION_ENUM>

}

// Function
// & { readonly CompanionEnum: Singleton<COMPANION_ENUM> }
// & Record<NameOf<ENUMERABLE>, ENUMERABLE>
