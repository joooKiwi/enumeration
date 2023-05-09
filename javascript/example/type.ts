type TypeEnum = {
    A: 0
    B: 1
    C: 2
}

export type Ordinals = TypeEnum[Names]
export type Names = keyof TypeEnum


type TypeEnum2 = {
    A: 0
    B: 1
    C: 2
    D: 3
    E: 4
    F: 5
}

export type Ordinals2 = TypeEnum2[Names2]
export type Names2 = keyof TypeEnum2

type TypeEnum3 = {
    A: 0
    B: 1
    C: 2
    D: 3
    E: 4
    F: 5
    G: 6
    H: 7
    I: 8
}

export type Ordinals3 = TypeEnum3[Names3]
export type Names3 = keyof TypeEnum3
