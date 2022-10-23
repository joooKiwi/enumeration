enum TypeEnum {
    A, B, C,
}

export type Names = keyof typeof TypeEnum
export type Ordinals = typeof TypeEnum[Names]
