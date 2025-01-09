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

import {EnumTestInstance, EnumWithGrandParentTestInstance, EnumWithGreatGrandParentTestInstance, EnumWithParentTestInstance} from "./EnumTest.instances"

throw new EvalError("This file was not made to be read by Javascript. It should only be compilable by Typescript.")

const companionEnum = EnumWithGreatGrandParentTestInstance.CompanionEnum.get

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
const aFromGetValue05 = companionEnum.getValue(EnumTestInstance.A,) satisfies EnumValue
const aFromGetValue06 = companionEnum.getValue(EnumTestInstance['0'],) satisfies EnumValue
const aFromGetValue07 = companionEnum.getValue(EnumWithParentTestInstance.A,) satisfies EnumValue
const aFromGetValue08 = companionEnum.getValue(EnumWithParentTestInstance['0'],) satisfies EnumValue
const aFromGetValue09 = companionEnum.getValue(EnumWithGrandParentTestInstance.A,) satisfies EnumValue
const aFromGetValue10 = companionEnum.getValue(EnumWithGrandParentTestInstance['0'],) satisfies EnumValue
const aFromGetValue11 = companionEnum.getValue(EnumWithGreatGrandParentTestInstance.A,) satisfies EnumValue
const aFromGetValue12 = companionEnum.getValue(EnumWithGreatGrandParentTestInstance['0'],) satisfies EnumValue

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
const aFromGetName05 = companionEnum.getName(EnumTestInstance.A,) satisfies SpecificName
const aFromGetName06 = companionEnum.getName(EnumTestInstance['0'],) satisfies SpecificName
const aFromGetName07 = companionEnum.getName(EnumWithParentTestInstance.A,) satisfies SpecificName
const aFromGetName08 = companionEnum.getName(EnumWithParentTestInstance['0'],) satisfies SpecificName
const aFromGetName09 = companionEnum.getName(EnumWithGrandParentTestInstance.A,) satisfies SpecificName
const aFromGetName10 = companionEnum.getName(EnumWithGrandParentTestInstance['0'],) satisfies SpecificName
const aFromGetName11 = companionEnum.getName(EnumWithGreatGrandParentTestInstance.A,) satisfies SpecificName
const aFromGetName12 = companionEnum.getName(EnumWithGreatGrandParentTestInstance['0'],) satisfies SpecificName

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
const aFromGetOrdinal05 = companionEnum.getOrdinal(EnumTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal06 = companionEnum.getOrdinal(EnumTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal07 = companionEnum.getOrdinal(EnumWithParentTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal08 = companionEnum.getOrdinal(EnumWithParentTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal09 = companionEnum.getOrdinal(EnumWithGrandParentTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal10 = companionEnum.getOrdinal(EnumWithGrandParentTestInstance['0'],) satisfies SpecificOrdinal
const aFromGetOrdinal11 = companionEnum.getOrdinal(EnumWithGreatGrandParentTestInstance.A,) satisfies SpecificOrdinal
const aFromGetOrdinal12 = companionEnum.getOrdinal(EnumWithGreatGrandParentTestInstance['0'],) satisfies SpecificOrdinal

// @ts-expect-error
companionEnum.getOrdinal('C',).toString()
// @ts-expect-error
companionEnum.getOrdinal(2,).toString()

//#endregion -------------------- getName --------------------

/** The {@link EnumWithGreatGrandParentTestInstance} reference */
type EnumValue = typeof EnumWithGreatGrandParentTestInstance.A
/** The {@link EnumWithGreatGrandParentTestInstance.A} reference ordinal */
type SpecificOrdinal = 0
/** The {@link EnumWithGreatGrandParentTestInstance.A} name */
type SpecificName = 'A'
