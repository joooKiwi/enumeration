//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import {EnumDeclarationTestInstance, EnumWithGrandParentDeclarationTestInstance, EnumWithGreatGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance} from "./EnumTest.instances"

throw new EvalError("This file was not made to be read by Javascript. It should only be compilable by Typescript.")

const companionEnum = EnumWithParentDeclarationTestInstance.CompanionEnum.get

//#region -------------------- setDefaultValue --------------------

// @ts-expect-error
companionEnum.setDefaultValue("NaN",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("Infinity",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("-Infinity",).toString()

// @ts-expect-error
companionEnum.setDefaultValue("name",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("ordinal",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("parent",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("grandParent",).toString()
// @ts-expect-error
companionEnum.setDefaultValue("greatGrandParent",).toString()

//#endregion -------------------- setDefaultValue --------------------
//#region -------------------- getValue --------------------

// @ts-expect-error
companionEnum.getValue(null,).toString()
// @ts-expect-error
companionEnum.getValue(undefined,).toString()

// @ts-expect-error
companionEnum.getValue("NaN",).toString()
// @ts-expect-error
companionEnum.getValue("Infinity",).toString()
// @ts-expect-error
companionEnum.getValue("-Infinity",).toString()

// @ts-expect-error
companionEnum.getValue("name",).toString()
// @ts-expect-error
companionEnum.getValue("ordinal",).toString()
// @ts-expect-error
companionEnum.getValue("parent",).toString()
// @ts-expect-error
companionEnum.getValue("grandParent",).toString()
// @ts-expect-error
companionEnum.getValue("greatGrandParent",).toString()


const aFromGetValue1 = companionEnum.getValue('A',) satisfies EnumValue
const aFromGetValue2 = companionEnum.getValue(0,) satisfies EnumValue
const aFromGetValue3 = companionEnum.getValue('0',) satisfies EnumValue
const aFromGetValue4 = companionEnum.getValue(`${0}`,) satisfies EnumValue
const aFromGetValue5 = companionEnum.getValue(EnumDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue6 = companionEnum.getValue(EnumDeclarationTestInstance['0'],) satisfies EnumValue
const aFromGetValue7 = companionEnum.getValue(EnumWithParentDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue8 = companionEnum.getValue(EnumWithParentDeclarationTestInstance['0'],) satisfies EnumValue
// @ts-expect-error
companionEnum.getValue(EnumWithGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getValue(EnumWithGrandParentDeclarationTestInstance['0'],)
// @ts-expect-error
companionEnum.getValue(EnumWithGreatGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getValue(EnumWithGreatGrandParentDeclarationTestInstance['0'],)

// @ts-expect-error
companionEnum.getValue('C',).toString()
// @ts-expect-error
companionEnum.getValue(2,).toString()

//#endregion -------------------- getValue --------------------
//#region -------------------- getName --------------------

// @ts-expect-error
companionEnum.getName(null,).toString()
// @ts-expect-error
companionEnum.getName(undefined,).toString()

// @ts-expect-error
companionEnum.getName("NaN",).toString()
// @ts-expect-error
companionEnum.getName("Infinity",).toString()
// @ts-expect-error
companionEnum.getName("-Infinity",).toString()

// @ts-expect-error
companionEnum.getName("name",).toString()
// @ts-expect-error
companionEnum.getName("ordinal",).toString()
// @ts-expect-error
companionEnum.getName("parent",).toString()
// @ts-expect-error
companionEnum.getName("grandParent",).toString()
// @ts-expect-error
companionEnum.getName("greatGrandParent",).toString()


const aFromGetName1 = companionEnum.getName('A',) satisfies SpecificName
const aFromGetName2 = companionEnum.getName(0,) satisfies SpecificName
const aFromGetName3 = companionEnum.getName('0',) satisfies SpecificName
const aFromGetName4 = companionEnum.getName(`${0}`,) satisfies SpecificName
const aFromGetName5 = companionEnum.getName(EnumDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName6 = companionEnum.getName(EnumDeclarationTestInstance['0'],) satisfies SpecificName
const aFromGetName7 = companionEnum.getName(EnumWithParentDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName8 = companionEnum.getName(EnumWithParentDeclarationTestInstance['0'],) satisfies SpecificName
// @ts-expect-error
companionEnum.getName(EnumWithGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getName(EnumWithGrandParentDeclarationTestInstance['0'],)
// @ts-expect-error
companionEnum.getName(EnumWithGreatGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getName(EnumWithGreatGrandParentDeclarationTestInstance['0'],)

let a: number|Number = 1
companionEnum.getValue(a)

// @ts-expect-error
companionEnum.getName('C',).toString()
// @ts-expect-error
companionEnum.getName(2,).toString()

//#endregion -------------------- getName --------------------
//#region -------------------- getOrdinal --------------------

// @ts-expect-error
companionEnum.getOrdinal(null,).toString()
// @ts-expect-error
companionEnum.getOrdinal(undefined,).toString()

// @ts-expect-error
companionEnum.getOrdinal("NaN",).toString()
// @ts-expect-error
companionEnum.getOrdinal("Infinity",).toString()
// @ts-expect-error
companionEnum.getOrdinal("-Infinity",).toString()

// @ts-expect-error
companionEnum.getOrdinal("name",).toString()
// @ts-expect-error
companionEnum.getOrdinal("ordinal",).toString()
// @ts-expect-error
companionEnum.getOrdinal("parent",).toString()
// @ts-expect-error
companionEnum.getOrdinal("grandParent",).toString()
// @ts-expect-error
companionEnum.getOrdinal("greatGrandParent",).toString()


const aFromGetOrdinal1 = companionEnum.getOrdinal('A',) satisfies SpecificOrdinal
const aFromGetOrdinal2 = companionEnum.getOrdinal(0,) satisfies SpecificOrdinal
const aFromGetOrdinal3 = companionEnum.getOrdinal('0',) satisfies SpecificOrdinal
const aFromGetOrdinal4 = companionEnum.getOrdinal(`${0}`,) satisfies SpecificOrdinal
const aFromGetOrdinal5 = companionEnum.getOrdinal(EnumDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal6 = companionEnum.getOrdinal(EnumDeclarationTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal7 = companionEnum.getOrdinal(EnumWithParentDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal8 = companionEnum.getOrdinal(EnumWithParentDeclarationTestInstance['0'],) satisfies SpecificOrdinal
// @ts-expect-error
companionEnum.getOrdinal(EnumWithGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getOrdinal(EnumWithGrandParentDeclarationTestInstance['0'],)
// @ts-expect-error
companionEnum.getOrdinal(EnumWithGreatGrandParentDeclarationTestInstance.A,)
// @ts-expect-error
companionEnum.getOrdinal(EnumWithGreatGrandParentDeclarationTestInstance['0'],)

// @ts-expect-error
companionEnum.getOrdinal('C',).toString()
// @ts-expect-error
companionEnum.getOrdinal(2,).toString()

//#endregion -------------------- getName --------------------

/** The {@link EnumWithParentDeclarationTestInstance} reference */
type EnumValue = typeof EnumWithParentDeclarationTestInstance.A
/** The {@link EnumWithParentDeclarationTestInstance.A} reference ordinal */
type SpecificOrdinal = 0
/** The {@link EnumWithParentDeclarationTestInstance.A} name */
type SpecificName = 'A'

