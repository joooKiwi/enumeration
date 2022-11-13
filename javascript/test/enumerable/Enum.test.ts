import {AnotherChildEnum, Child1Enum, EmptyEnum, Enum1, Enum2, EnumWithDefault, EnumWithLateDefault, EnumWithVariables}                                                                             from "./Enum.templateEnums"
import {forbiddenEnumFunctions, forbiddenInheritedMembers, forbiddenNumbers, invalidInstances, nullValues, outOfBoundNumbers, parentChildValues, simpleEnumVariables, unhandledValues, validValues} from "./Enum.constants"

import {Enum}                                        from "enumerable/Enum"
import {ForbiddenEnumFunctionException}              from "enumerable/exception/ForbiddenEnumFunctionException"
import {ForbiddenInheritedEnumerableMemberException} from "enumerable/exception/ForbiddenInheritedEnumerableMemberException"
import {ForbiddenNumericException}                   from "enumerable/exception/ForbiddenNumericException"
import {IndexOutOfBoundException}                    from "enumerable/exception/IndexOutOfBoundException"
import {InvalidEnumerableException}                  from "enumerable/exception/InvalidEnumerableException"
import {InvalidEnumerableReferenceException}         from "enumerable/exception/InvalidEnumerableReferenceException"
import {InvalidInstanceException}                    from "enumerable/exception/InvalidInstanceException"
import {NonExistantReferenceException}               from "enumerable/exception/NonExistantReferenceException"
import {NullEnumerableException}                     from "enumerable/exception/NullEnumerableException"
import {NullInstanceException}                       from "enumerable/exception/NullInstanceException"
import {UnhandledValueException}                     from "enumerable/exception/UnhandledValueException"

describe("EnumTest", () => {

    describe("throws exceptions", () => {

        describe("NullInstanceException", () => describe.each(nullValues,)("%s", it => {
            test("getDefaultOn", () => expect(() => Enum.getDefaultOn(it,)).toThrow(NullInstanceException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(it, "",)).toThrow(NullInstanceException,),)
            test("getValueOn", () => expect(() => Enum.getValueOn(it, "",)).toThrow(NullInstanceException,),)
            test("getValuesOn", () => expect(() => Enum.getValuesOn(it,)).toThrow(NullInstanceException,),)
            test("getNamesOn", () => expect(() => Enum.getNamesOn(it,)).toThrow(NullInstanceException,),)
            test("getOrdinalsOn", () => expect(() => Enum.getOrdinalsOn(it,)).toThrow(NullInstanceException,),)
        },),)
        describe("InvalidInstanceException", () => describe.each(invalidInstances,)("%s", ({value: it,},) => {
            test("getDefaultOn", () => expect(() => Enum.getDefaultOn(it,)).toThrow(InvalidInstanceException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(it, "",)).toThrow(InvalidInstanceException,),)
            test("getValueOn", () => expect(() => Enum.getValueOn(it, "",)).toThrow(InvalidInstanceException,),)
            test("getValuesOn", () => expect(() => Enum.getValuesOn(it,)).toThrow(InvalidInstanceException,),)
            test("getNamesOn", () => expect(() => Enum.getNamesOn(it,)).toThrow(InvalidInstanceException,),)
            test("getOrdinalsOn", () => expect(() => Enum.getOrdinalsOn(it,)).toThrow(InvalidInstanceException,),)
        },),)

        describe("UnhandledValueException", () => describe.each(unhandledValues,)("%s", ({value: it,},) => {
            test("getValueOn", () => expect(() => Enum.getValueOn(EmptyEnum, it,),).toThrow(UnhandledValueException,),)
            test("getValueOn", () => expect(() => Enum.setDefaultOn(EmptyEnum, it,),).toThrow(UnhandledValueException,),)
        },),)
        describe("NullEnumerableException", () => describe.each(nullValues,)("%s", it => {
            test("getValueOn", () => expect(() => Enum.getValueOn(EmptyEnum, it,),).toThrow(NullEnumerableException,),)
            test("getDefaultOn", () => expect(() => Enum.getDefaultOn(EmptyEnum,),).toThrow(NullEnumerableException,),)
        },),)
        describe("InvalidEnumerableException", () => {
            test("getValueOn", () => expect(() => Enum.getValueOn(Enum1, Enum2.A,),).toThrow(InvalidEnumerableException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(Enum1, Enum2.A,),).toThrow(InvalidEnumerableException,),)
            describe("existant value as another enum", () => {
                test("getValueOn", () => expect(() => Enum.getValueOn(EnumWithVariables, EnumWithVariables.VARIABLE_SIMPLE_ENUM_1_A,),).toThrow(InvalidEnumerableException,),)
                test("setDefaultOn", () => expect(() => Enum.getValueOn(EnumWithVariables, EnumWithVariables.VARIABLE_SIMPLE_ENUM_1_A,),).toThrow(InvalidEnumerableException,),)
            },)
            describe("invalid sub enum", () => {
                test("getValueOn", () => expect(() => Enum.getValueOn(Child1Enum, AnotherChildEnum.A,),).toThrow(InvalidEnumerableException),)
                test("getValueOn", () => expect(() => Enum.setDefaultOn(Child1Enum, AnotherChildEnum.A,),).toThrow(InvalidEnumerableException),)
            },)
        },)
        describe("InvalidEnumerableReferenceException", () => describe.each(simpleEnumVariables,)("%s", it => {
            test("getValueOn", () => expect(() => Enum.getValueOn(EnumWithVariables, it,),).toThrow(InvalidEnumerableReferenceException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(EnumWithVariables, it,),).toThrow(InvalidEnumerableReferenceException,),)
        },),)

        describe("IndexOutOfBoundException", () => describe.each(outOfBoundNumbers,)("%s", ({value: it,},) => {
            test("getValueOn", () => expect(() => Enum.getValueOn(Enum1, it,),).toThrow(IndexOutOfBoundException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(Enum1, it,),).toThrow(IndexOutOfBoundException,),)
        },),)
        describe("NonExistantReferenceException", () => {
            test("getValueOn", () => expect(() => Enum.getValueOn(EmptyEnum, "somethingInvalid",),).toThrow(NonExistantReferenceException),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(EmptyEnum, "somethingInvalid",),).toThrow(NonExistantReferenceException),)
        },)

        describe("ForbiddenNumericException", () => describe.each(forbiddenNumbers,)("%s", ({value: it,},) => {
            test("getValueOn", () => expect(() => Enum.getValueOn(Enum1, it,),).toThrow(ForbiddenNumericException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(Enum1, it,),).toThrow(ForbiddenNumericException,),)
        }),)
        describe("ForbiddenEnumFunctionException", () => describe.each(forbiddenEnumFunctions,)("%s", ({value: it,},) => {
            test("getValueOn", () => expect(() => Enum.getValueOn(Enum1, it,),).toThrow(ForbiddenEnumFunctionException,),)
            test("setDefaultOn", () => expect(() => Enum.getValueOn(Enum1, it,),).toThrow(ForbiddenEnumFunctionException,),)
        }),)
        describe("ForbiddenInheritedEnumerableMemberException", () => describe.each(forbiddenInheritedMembers,)("%s", ({value: it,},) => {
            test("getValueOn", () => expect(() => Enum.getValueOn(Enum1, it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
            test("setDefaultOn", () => expect(() => Enum.setDefaultOn(Enum1, it,),).toThrow(ForbiddenInheritedEnumerableMemberException,),)
        }),)

    },)

    describe("array validation", () => {
        test("size of 2 on simple", () => expect(Enum.getValuesOn(Enum1,),).toHaveLength(2,),)
        test("size of 2 on with default", () => expect(Enum.getValuesOn(EnumWithDefault,),).toHaveLength(2,),)
        test("size of 2 on with late default", () => expect(Enum.getValuesOn(EnumWithLateDefault,),).toHaveLength(2,),)
    },)
    describe("valid value", () => describe.each(validValues,)("%s", ({value: it,},) => {
        test("getValueOn", () => expect(Enum.getValueOn(Enum1, it,),).toBe(Enum1.A,),)
        test("setDefaultOn", () => {
            if (it.name == 'B')
                fail("The test could not be done since the value has 'B' as its name",)
            Enum.setDefaultOn(Enum1, Enum1.B,)
            expect(Enum.getDefaultOn(Enum.setDefaultOn(Enum1, it,),),).toBe(Enum1.A,)
            Enum.setDefaultOn(Enum1, Enum1.B,)
        },)
    },),)
    describe("default validation", () => {
        describe("Construction init", () => {
            test("first get", () => expect(Enum.getDefaultOn(EnumWithDefault,),).toBe(EnumWithDefault.A,),)
            test("get after set", () => expect(Enum.getDefaultOn(Enum.setDefaultOn(EnumWithDefault, 'B',),),).toBe(EnumWithDefault.B,),)
        },)
        describe("Late init", () => {
            test("exception on first get", () => expect(() => Enum.getDefaultOn(EnumWithLateDefault,),).toThrow(NullEnumerableException,),)
            test("get after set", () => expect(Enum.getDefaultOn(Enum.setDefaultOn(EnumWithLateDefault, 'B',),),).toBe(EnumWithLateDefault.B,),)
        },)
    },)
    describe("sub enum", () => describe("valid sub enum", () => describe.each(parentChildValues,)("%s", ({value,},) => describe.each(parentChildValues,)("%s", ({value: it,},) => {
        test("getValueOn", () => expect(Enum.getValueOn(value._static, it,),).toBe(value,),)
        test("setDefaultOn", () => {
            if (it.name == 'B')
                fail("The test could not be done since the value has 'B' as its name",)
            Enum.setDefaultOn(value._static, 'B',)
            expect(Enum.getDefaultOn(Enum.setDefaultOn(value._static, it,),),).toBe(value,)
            Enum.setDefaultOn(value._static, 'B',)
        },)
    },),),),)

},)
