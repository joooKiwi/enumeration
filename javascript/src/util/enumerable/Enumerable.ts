import type {EnumerableName} from "enumerable/Enumerable.types"

export interface Enumerable<ORDINAL extends number = number, NAME extends string = string, > {

    /**
     * Get the name on the current enum instance (not to be confused with the class name).
     *
     * @note This will fail if called during the construction
     */
    get name(): NAME

    /**
     * Get the ordinal on the current enum instance.
     *
     * @note This will work in the constructors.
     */
    get ordinal(): ORDINAL

    [Symbol.toStringTag]: EnumerableName

}
