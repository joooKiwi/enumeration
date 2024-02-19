/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {AnotherChildEnum, Child1Enum, Child2Enum, EmptyEnum, EmptyEnumWithVariables, Enum1, Enum2, EnumWithInheritance, EnumWithDefault, EnumWithDifferentComportment, EnumWithExcludedFields, EnumWithLateDefault, ParentEnum, Child3Enum} from "../TemplateEnums"
import {everyStringEnumerableMember, forbiddenNumbers, impossibleOrdinals, nullValues, simpleEnumVariables, unhandledValues, validValues}                                                                                                   from "./Enum.constants"

import {ForbiddenInheritedEnumerableMemberException} from "../../src/exception/ForbiddenInheritedEnumerableMemberException"
import {ForbiddenNumericException}                   from "../../src/exception/ForbiddenNumericException"
import {ImpossibleOrdinalException}                  from "../../src/exception/ImpossibleOrdinalException"
import {InvalidEnumerableException}                  from "../../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}                    from "../../src/exception/InvalidInstanceException"
import {NullReferenceException}                      from "../../src/exception/NullReferenceException"
import {NullEnumerableException}                     from "../../src/exception/NullEnumerableException"
import {UnhandledValueException}                     from "../../src/exception/UnhandledValueException"

describe("GeneralEnumTest", () => {

    describe("throws exceptions", () => {

        describe("UnhandledValueException", () => {
        describe.each(unhandledValues,)("%s", ({value: it,},) => {
            const companion = EmptyEnum.CompanionEnum.get
            test("set defaultValue", () => expect(() => companion.defaultValue = it,).toThrow(UnhandledValueException,),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(it,),).toThrow(UnhandledValueException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(UnhandledValueException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(UnhandledValueException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(UnhandledValueException,),)
        },) },)
        describe("NullEnumerableException", () => {
        describe.each(nullValues,)("%s", it => {
            const companion = EmptyEnum.CompanionEnum.get
            test("get defaultValue", () => expect(() => companion.defaultValue,).toThrow(NullEnumerableException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(NullEnumerableException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(NullEnumerableException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(NullEnumerableException,),)
        },) },)
        describe("InvalidEnumerableException", () => {
            const companion = Enum1.CompanionEnum.get
            // @ts-expect-error
            test("set defaultValue", () => expect(() => companion.defaultValue = Enum2.A,).toThrow(InvalidEnumerableException,),)
            // @ts-expect-error
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(Enum2.A,),).toThrow(InvalidEnumerableException,),)
            // @ts-expect-error
            test("getValue", () => expect(() => companion.getValue(Enum2.A,),).toThrow(InvalidEnumerableException,),)
            // @ts-expect-error
            test("getName", () => expect(() => companion.getName(Enum2.A,),).toThrow(InvalidEnumerableException,),)
            // @ts-expect-error
            test("getOrdinal", () => expect(() => companion.getOrdinal(Enum2.A,),).toThrow(InvalidEnumerableException,),)
        },)
        describe("InvalidInstanceException", () => {
        describe.each(simpleEnumVariables,)("%s", it => {
            const companion = EmptyEnumWithVariables.CompanionEnum.get
            test("set defaultValue", () => expect(() => companion.defaultValue = it,).toThrow(InvalidInstanceException,),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(it,),).toThrow(InvalidInstanceException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(InvalidInstanceException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(InvalidInstanceException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(InvalidInstanceException,),)
        },) },)

        describe("ImpossibleOrdinalException", () => {
        describe.each(impossibleOrdinals,)("%s", ({value: it,},) => {
            const companion = Enum1.CompanionEnum.get
            test("set defaultValue", () => expect(() => companion.defaultValue = it,).toThrow(ImpossibleOrdinalException,),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(it,),).toThrow(ImpossibleOrdinalException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(ImpossibleOrdinalException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(ImpossibleOrdinalException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(ImpossibleOrdinalException,),)
        },) },)
        describe("NonExistantReferenceException", () => {
            const companion = EmptyEnum.CompanionEnum.get
            const somethingInvalid = "somethingInvalid"

            test("set defaultValue", () => expect(() => companion.defaultValue = somethingInvalid,).toThrow(NullReferenceException),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(somethingInvalid,),).toThrow(NullReferenceException),)
            test("getValue", () => expect(() => companion.getValue(somethingInvalid,),).toThrow(NullReferenceException),)
            test("getName", () => expect(() => companion.getName(somethingInvalid,),).toThrow(NullReferenceException),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(somethingInvalid,),).toThrow(NullReferenceException),)
        },)

        describe("ForbiddenNumericException", () => {
        describe.each(forbiddenNumbers,)("%s", ({value: it,},) => {
            const companion = Enum1.CompanionEnum.get
            test("set defaultValue", () => expect(() => companion.defaultValue = it,).toThrow(ForbiddenNumericException,),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(it,),).toThrow(ForbiddenNumericException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(ForbiddenNumericException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(ForbiddenNumericException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(ForbiddenNumericException,),)
        },) },)
        describe("ForbiddenInheritedEnumerableMemberException", () => {
        describe.each(everyStringEnumerableMember,)("%s", ({value: it,},) => {
            const companion = Enum1.CompanionEnum.get
            test("set defaultValue", () => expect(() => companion.defaultValue = it,).toThrow(ForbiddenInheritedEnumerableMemberException,),)
            test("setDefaultValue", () => expect(() => companion.setDefaultValue(it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
            test("getValue", () => expect(() => companion.getValue(it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
            test("getName", () => expect(() => companion.getName(it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
            test("getOrdinal", () => expect(() => companion.getOrdinal(it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
        })},)

    },)

    describe("array size validation", () => {
        test("size of 0 on \"empty\"", () => expect(EmptyEnum.CompanionEnum.get.values,).toHaveLength(0,),)
        test("size of 2 on \"simple #1\"", () => expect(Enum1.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 2 on \"simple #2\"", () => expect(Enum2.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 0 on \"empty with variable\"", () => expect(EmptyEnumWithVariables.CompanionEnum.get.values,).toHaveLength(0,),)
        test("size of 3 on \"with different comportment\"", () => expect(EnumWithDifferentComportment.CompanionEnum.get.values,).toHaveLength(3,),)
        test("size of 6 on \"with inheritance\"", () => expect(EnumWithInheritance.CompanionEnum.get.values,).toHaveLength(6,),)
        test("size of 2 on \"with excluded field\"", () => expect(EnumWithExcludedFields.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 2 on \"with default\"", () => expect(EnumWithDefault.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 2 on \"with late default\"", () => expect(EnumWithLateDefault.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 2 on \"parent\"", () => expect(ParentEnum.CompanionEnum.get.values,).toHaveLength(2,),)
        test("size of 3 on \"child #1\"", () => expect(Child1Enum.CompanionEnum.get.values,).toHaveLength(3,),)
        test("size of 4 on \"child #2\"", () => expect(Child2Enum.CompanionEnum.get.values,).toHaveLength(4,),)
        test("size of 3 on \"another child\"", () => expect(AnotherChildEnum.CompanionEnum.get.values,).toHaveLength(3,),)
    },)

    describe("valid value (0 and 'A')", () => {
    describe.each(validValues,)("%s", ({value: it,},) => {
        const companion = Enum1.CompanionEnum.get
        const equivalentValue = Enum1.A
        const defaultValue = Enum1.B
        test("set defaultValue", () => {
            if (it.name == 'B')
                fail("The test could not be done since the value has 'B' as its name",)
            companion.defaultValue = defaultValue
            companion.defaultValue = it
            expect(companion.defaultValue,).toBe(equivalentValue,)
            companion.defaultValue = defaultValue
        },)
        test("setDefaultValue", () => {
            if (it.name == 'B')
                fail("The test could not be done since the value has 'B' as its name",)
            expect(companion.setDefaultValue(defaultValue,).setDefaultValue(it,).defaultValue,).toBe(equivalentValue,)
            companion.setDefaultValue(defaultValue,)
        },)
        test("getValue", () => expect(companion.getValue(it,),).toBe(equivalentValue,),)
        test("getName", () => expect(companion.getName(it,),).toBe(equivalentValue.name,),)
        test("getOrdinal", () => expect(companion.getOrdinal(it,),).toBe(equivalentValue.ordinal,),)
    },) },)
    describe("defaultValue validation", () => {
        describe("Construction init", () => {
            const companion = EnumWithDefault.CompanionEnum.get
            test("first get", () => expect(companion.defaultValue,).toBe(EnumWithDefault.A,),)
            test("get after set to 'B'", () => expect(companion.setDefaultValue('B',).defaultValue,).toBe(EnumWithDefault.B,),)
            test("get after set to null", () => expect(() => companion.setDefaultValue(null,).defaultValue,).toThrow(NullEnumerableException,),)
        },)
        describe("Late init", () => {
            const companion = EnumWithLateDefault.CompanionEnum.get
            test("first get", () => expect(() => companion.defaultValue,).toThrow(NullEnumerableException,),)
            test("get after set to 'B'", () => expect(companion.setDefaultValue('B',).defaultValue,).toBe(EnumWithLateDefault.B,),)
            test("get after set to null", () => expect(() => companion.setDefaultValue(null,).defaultValue,).toThrow(NullEnumerableException,),)
        },)
    },)

    describe("sub enum", () => {
        describe("Parent", () => {
            const companion = ParentEnum.CompanionEnum.get
            describe("Child #1", () => {
                const value = Child1Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Child #2", () => {
                const value = Child2Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Child #3", () => {
                const value = Child3Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Another child", () => {
                const value = AnotherChildEnum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
        describe("Child #1", () => {
            const companion = Child1Enum.CompanionEnum.get
            const otherValue = Child1Enum.A
            const equivalentValue = Child1Enum.B
            describe("Parent", () => {
                const value = ParentEnum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #2", () => {
                const value = Child2Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Child #3", () => {
                const value = Child3Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Another child", () => {
                const value = AnotherChildEnum.B
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
        describe("Child #2", () => {
            const companion = Child2Enum.CompanionEnum.get
            const otherValue = Child2Enum.A
            const equivalentValue = Child2Enum.B
            describe("Parent", () => {
                const value = ParentEnum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #1", () => {
                const value = Child1Enum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #3", () => {
                const value = Child3Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Another child", () => {
                const value = AnotherChildEnum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
        describe("Child #3", () => {
            const companion = Child3Enum.CompanionEnum.get
            const otherValue = Child3Enum.A
            const equivalentValue = Child3Enum.B
            describe("Parent", () => {
                const value = ParentEnum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue,)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #1", () => {
                const value = Child1Enum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #2", () => {
                const value = Child2Enum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Another child", () => {
                const value = AnotherChildEnum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
        describe("Another child", () => {
            const companion = AnotherChildEnum.CompanionEnum.get
            const otherValue = AnotherChildEnum.A
            const equivalentValue = AnotherChildEnum.B
            describe("Parent", () => {
                const value = ParentEnum.B
                test("set defaultValue", () => {
                    companion.defaultValue = otherValue
                    companion.defaultValue = value
                    expect(companion.defaultValue,).toBe(equivalentValue,)
                    companion.defaultValue = otherValue
                },)
                test("setDefaultValue", () => {
                    expect(companion.setDefaultValue(otherValue,).setDefaultValue(value,).defaultValue,).toBe(equivalentValue,)
                    companion.setDefaultValue(otherValue)
                },)
                test("getValue", () => expect(companion.getValue(value,),).toBe(equivalentValue,),)
                test("getName", () => expect(companion.getName(value,),).toBe(equivalentValue.name,),)
                test("getOrdinal", () => expect(companion.getOrdinal(value,),).toBe(equivalentValue.ordinal,),)
            },)
            describe("Child #1", () => {
                const value = Child1Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Child #2", () => {
                const value = Child2Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("Child #3", () => {
                const value = Child3Enum.B
                // @ts-expect-error
                test("set defaultValue", () => expect(() => companion.defaultValue = value,).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("setDefaultValue", () => expect(() => companion.setDefaultValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getValue", () => expect(() => companion.getValue(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getName", () => expect(() => companion.getName(value,),).toThrow(InvalidEnumerableException,),)
                // @ts-expect-error
                test("getOrdinal", () => expect(() => companion.getOrdinal(value,),).toThrow(InvalidEnumerableException,),)
            },)
        },)
    },)

},)
