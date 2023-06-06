import type {EnumConstants} from "./EnumConstants"

/** The forbidden names or {@link String strings} to use when trying to find a value from the {@link EnumHelper} */
export type ForbiddenNames = | typeof EnumConstants["EDGE_CASE_NUMERIC_NAME"][number]
                             | typeof EnumConstants["INHERITED_ENUMERABLE_MEMBERS"][number]
