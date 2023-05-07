/** A simple {@link Error exception} declaration with a nullable {@link Error.cause cause} */
export interface ExceptionWithNullableCause<ERROR extends Error = never, >
    extends Error {

    /** The cause of the {@link Error exception} */
    get cause(): NullOr<ERROR>

}
