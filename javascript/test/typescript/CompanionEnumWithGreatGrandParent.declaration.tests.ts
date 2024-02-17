/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {EnumDeclarationTestInstance, EnumWithGrandParentDeclarationTestInstance, EnumWithGreatGrandParentDeclarationTestInstance, EnumWithParentDeclarationTestInstance} from "./EnumTest.instances"

throw new EvalError("This file was not made to be read by Javascript. It should only be compilable by Typescript.")

const companionEnum = EnumWithGreatGrandParentDeclarationTestInstance.CompanionEnum.get

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


const aFromGetValue01 = companionEnum.getValue('A',) satisfies EnumValue
const aFromGetValue02 = companionEnum.getValue(0,) satisfies EnumValue
const aFromGetValue03 = companionEnum.getValue('0',) satisfies EnumValue
const aFromGetValue04 = companionEnum.getValue(`${0}`,) satisfies EnumValue
const aFromGetValue05 = companionEnum.getValue(EnumDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue06 = companionEnum.getValue(EnumDeclarationTestInstance['0'],) satisfies EnumValue
const aFromGetValue07 = companionEnum.getValue(EnumWithParentDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue08 = companionEnum.getValue(EnumWithParentDeclarationTestInstance['0'],) satisfies EnumValue
const aFromGetValue09 = companionEnum.getValue(EnumWithGrandParentDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue10 = companionEnum.getValue(EnumWithGrandParentDeclarationTestInstance['0'],) satisfies EnumValue
const aFromGetValue11 = companionEnum.getValue(EnumWithGreatGrandParentDeclarationTestInstance.A,) satisfies EnumValue
const aFromGetValue12 = companionEnum.getValue(EnumWithGreatGrandParentDeclarationTestInstance['0'],) satisfies EnumValue

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


const aFromGetName01 = companionEnum.getName('A',) satisfies SpecificName
const aFromGetName02 = companionEnum.getName(0,) satisfies SpecificName
const aFromGetName03 = companionEnum.getName('0',) satisfies SpecificName
const aFromGetName04 = companionEnum.getName(`${0}`,) satisfies SpecificName
const aFromGetName05 = companionEnum.getName(EnumDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName06 = companionEnum.getName(EnumDeclarationTestInstance['0'],) satisfies SpecificName
const aFromGetName07 = companionEnum.getName(EnumWithParentDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName08 = companionEnum.getName(EnumWithParentDeclarationTestInstance['0'],) satisfies SpecificName
const aFromGetName09 = companionEnum.getName(EnumWithGrandParentDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName10 = companionEnum.getName(EnumWithGrandParentDeclarationTestInstance['0'],) satisfies SpecificName
const aFromGetName11 = companionEnum.getName(EnumWithGreatGrandParentDeclarationTestInstance.A,) satisfies SpecificName
const aFromGetName12 = companionEnum.getName(EnumWithGreatGrandParentDeclarationTestInstance['0'],) satisfies SpecificName

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


const aFromGetOrdinal01 = companionEnum.getOrdinal('A',) satisfies SpecificOrdinal
const aFromGetOrdinal02 = companionEnum.getOrdinal(0,) satisfies SpecificOrdinal
const aFromGetOrdinal03 = companionEnum.getOrdinal('0',) satisfies SpecificOrdinal
const aFromGetOrdinal04 = companionEnum.getOrdinal(`${0}`,) satisfies SpecificOrdinal
const aFromGetOrdinal05 = companionEnum.getOrdinal(EnumDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal06 = companionEnum.getOrdinal(EnumDeclarationTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal07 = companionEnum.getOrdinal(EnumWithParentDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal08 = companionEnum.getOrdinal(EnumWithParentDeclarationTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal09 = companionEnum.getOrdinal(EnumWithGrandParentDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal10 = companionEnum.getOrdinal(EnumWithGrandParentDeclarationTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal11 = companionEnum.getOrdinal(EnumWithGreatGrandParentDeclarationTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal12 = companionEnum.getOrdinal(EnumWithGreatGrandParentDeclarationTestInstance['0'],) satisfies SpecificOrdinal

// @ts-expect-error
companionEnum.getOrdinal('C',).toString()
// @ts-expect-error
companionEnum.getOrdinal(2,).toString()

//#endregion -------------------- getName --------------------

/** The {@link EnumWithGreatGrandParentDeclarationTestInstance} reference */
type EnumValue = typeof EnumWithGreatGrandParentDeclarationTestInstance.A
/** The {@link EnumWithGreatGrandParentDeclarationTestInstance.A} reference ordinal */
type SpecificOrdinal = 0
/** The {@link EnumWithGreatGrandParentDeclarationTestInstance.A} name */
type SpecificName = 'A'

