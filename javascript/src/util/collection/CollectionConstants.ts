/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

/** A simple class containing every field used by any {@link CollectionHolder} instances */
export namespace CollectionConstants {

    /** A simple empty {@link ReadonlyArray array} */
    export const EMPTY_ARRAY = Object.freeze([],)
    /** A simple empty {@link String} */
    export const EMPTY_STRING = Object.freeze('',) as ''

    /** The default value for the separator {@link String string} in the {@link CollectionHolder}{@link CollectionHolder.join join} method */
    export const DEFAULT_JOIN_SEPARATOR = ", "
    /** The default value for the prefix {@link String character} in the {@link CollectionHolder}{@link CollectionHolder.join join} method */
    export const DEFAULT_JOIN_PREFIX = '['
    /** The default value for the truncated {@link String character} in the {@link CollectionHolder}{@link CollectionHolder.join join} method */
    export const DEFAULT_JOIN_TRUNCATED = '…'
    /** The default value for the postfix {@link String character} in the {@link CollectionHolder}{@link CollectionHolder.join join} method */
    export const DEFAULT_JOIN_POSTFIX = ']'

    /**
     * The simple {@link Symbol.toStringTag} of an {@link CollectionHolder}
     *
     * @uniqueJavascriptVariable
     */
    export const COLLECTION_HOLDER_TO_STRING_TAG = "CollectionHolder"

}
