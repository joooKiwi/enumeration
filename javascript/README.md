# Enumeration (javascript version)
[![downloads](https://img.shields.io/npm/dt/@joookiwi/enumerable.svg)](https://npm-stat.com/charts.html?package=@joookiwi/enumerable)

## Table of content
* [Installation](#installation)
* [Similar projects (by others)](#similar-projects-by-others)
* [Motivation](#motivation)
* [Future features](#future-features)
* [1. How to use it (the base)](#1-how-to-use-it-the-base)
* [2. Utilizing the default value](#2-utilizing-the-default-value)
* [3. Excluding some values](#3-excluding-some-values)
* [4. Inheritance by a single parent](#4-inheritance-by-a-single-parent)
* [Inheritance by a composed parent](#inheritance-by-a-composed-parent)
* [5. Inheritance by more than one parent (2 or 3)](#5-inheritance-by-more-than-one-parent-2-or-3)
* [6. Inheritance by more than three parents](#6-inheritance-by-more-than-three-parents)
* [7. Companion enum](#7-companion-enum)
* [Common mistakes](#common-mistakes)
  * [Reversing the inheritance](#reversing-the-inheritance)
  * [Forgetting the type declaration on the companion enum](#forgetting-the-type-declaration-on-the-companion-enum)
  * [Having an `Enumerable` to not have a value from `getLastPrototype`](#having-an-enumerable-to-not-have-a-value-from-getlastprototype)
* [Known error](#known-error)
* [Contribution](#contribution)

## Installation

```
npm install @joookiwi/enumerable
npm i @joookiwi/enumerable

npm install --save @joookiwi/enumerable
npm i -S @joookiwi/enumerable

npm install --save-dev @joookiwi/enumerable
npm i -D @joookiwi/enumerable
```

---

## Similar projects (by others)

Here are some related projects.
They don't contain any unfinished version (like **0.0.1** or **0.1.0**).
Some features may be different.
They could also have a different approach,
but eventually, some features could be added to give simplicity.
 - [Discope enumeration](https://www.npmjs.com/package/@dipscope/enumeration) by [dpimonov](https://www.npmjs.com/~dpimonov) <small>_(**1.0** on December 2022)_</small>
 - [Enum](https://www.npmjs.com/package/@voidvolker/enum) by [voidVolker](https://www.npmjs.com/~voidvolker) <small>_(**1.0** on October 2023)_</small>
 - [Enum expansion](https://www.npmjs.com/package/enum-expansion) by [iShawnWang](https://www.npmjs.com/~ishawnwang) <small>_(**1.0** on April 2022)_</small>
 - [Enum support](https://www.npmjs.com/package/@northscaler/enum-support) by [northScaler](https://www.npmjs.com/~npm_northscaler) <small>_(**4.3** on September 2023)_</small>
 - [Enumify](https://www.npmjs.com/package/enumify) by [rauschma](https://www.npmjs.com/~rauschma) <small>_(**2.0** on January 2020)_</small>
 - [Js enum](https://www.npmjs.com/package/@stein197/enum) by [stein197](https://www.npmjs.com/~stein197) <small>_(**2.1** on July 2022)_</small>
 - [Simple enum](https://www.npmjs.com/package/simpleenum) by [byteJoey](https://www.npmjs.com/~bytejoey) <small>_(**1.1** on May 2017)_</small>
 - [Simple js enum](https://www.npmjs.com/package/simple-js-enum) by [yevhendiachenko](https://www.npmjs.com/~yevhendiachenko) <small>_(**1.0** on January 2018)_</small>

## Motivation

The [Typescript enums](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)
are overly simple.
They don't have a great support for other values that are not a `string` or a `number`).
And that is not even including a behaviour **enum** or a classed-based **enum**.

The usage of almost no static values is with the mindset of `Kotlin`.

The goal is to have an implementation of an `enum class` usable for either `Javascript` or `Typescript`.<br/>

## Future features

Some features are still missing from this project.
Notably the way to verify if a value exists within the `enum class`.
No release date or order is made to the features,
but they should be added eventually.

 - `hasValue(value: PossibleEnumerableValue)`
 - `hasName(value: PossibleEnumerableValue)`
 - `hasOrdinal(value: PossibleEnumerableValue)`
<br/><br/>
 - `newEnum(values: Iterable<string>)`
 - `newEnum(values: Iterable<string>, parent: Enumerable)`
 - `newEnum(values: Iterable<string>, parent: EnumerableWithParent, grandParent: Enumerable)`
 - `newEnum(values: Iterable<string>, parent: EnumerableWithGrandParent, grandParent: EnumerableWithParent, greatGrandParent: Enumerable)`
<br/><br/>
 - `newCompanionEnum(instance: Enumerable)`
 - `newCompanionEnum(instance: EnumerableWithParent, parentInstance: Enumerable)`
 - `newCompanionEnum(instance: EnumerableWithGrandParent, parentInstance: EnumerableWithParent, grandParentInstance: Enumerable)`
 - `newCompanionEnum(instance: EnumerableWithGreatGrandParent, parentInstance: EnumerableWithGrandParent, grandParentInstance: EnumerableWithParent, greatGrandParentInstance: Enumerable)`
<br/><br/>
 - `EnumWithDoubleParent`
 - `EnumWithTripleParent`
 - `EnumWithDoubleGrandParent`
 - `EnumWithTripleGrandParent`
 - `EnumWithDoubleGreatGrandParent`
 - `EnumWithTripleGreatGrandParent`
 - `CompanionEnumWithDoubleParent`
 - `CompanionEnumWithTripleParent`
 - `CompanionEnumWithDoubleGrandParent`
 - `CompanionEnumWithTripleGrandParent`
 - `CompanionEnumWithDoubleGreatGrandParent`
 - `CompanionEnumWithTripleGreatGrandParent`

## 1. How to use it (the base)

To properly use the `enum class`, there is really one required field.<br/>
```public static readonly CompanionEnum```.

The rest is only there to give flexibility toward the initialization
(in `Javascript` and in `Typescript`).

The flexibility is separated in three parts.
The excluded values in the **companion enum**<br/>
`protected readonly _EXCLUDED_NAMES`.<br/>
The default value for the `getValue`, `getName` and `getOrdinal` methods.
This has an order of precedence depending on the return value (_if it is null_).
It starts by<br/>
`protected readonly _DEFAULT`<br/>
or `protected readonly _DEFAULT_NAME`<br/>
or `protected readonly _DEFAULT_ORDINAL`<br/>
or `NullEnumerableException` thrown.<br/>
The third part (optional) is in `Typescript` to add the ordinal to the `enum class` type definition.<br/>
`static O: EnumType.N` with `O` and `N` as their specific ordinal and name respectively

<details>
<summary>Javascript</summary>

```javascript
import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class Example extends Enum {

   static A = new Example()
   static B = new Example()
   static C = new Example()

   static CompanionEnum = class CompanionEnum_Example extends CompanionEnum {
       static #instance
       constructor() { super(Example,) }
       static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
   }

   // The class content starts here

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
// Example.ts
import {CompanionEnum, Enum} from "@joookiwi/enumerable"
import type {CompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import type {Names, Ordinals} from "./Example.types"

export class Example extends Enum<Ordinals, Names> {

    public static readonly A = new Example()
    public static readonly B = new Example()
    public static readonly C = new Example()

    // Optional ordinal typing (start)
    public static readonly 0: typeof Example.A
    public static readonly 1: typeof Example.B
    public static readonly 2: typeof Example.C
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumSingleton<Example, typeof Example> =
        class CompanionEnum_Example extends CompanionEnum<Example, typeof Example> {
            static #instance?: CompanionEnum_Example
            private constructor() { super(Example,) }
            public static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
        }

    private constructor() { super() }

    // The class content starts here

}
```

```typescript
// Example.types.ts
type Enum = {
   A: 0
   B: 1
   C: 2
}

export type Names = keyof Enum
export type Ordinals = Enum[Names]
```

</details>

## 2. Utilizing the default value

To have a default value,
it can be triggered in two different ways.
The first is via its initialization and the second,
via its setter methods.

It may be possible to change the default value after its initialization by calling the `CompanionEnum.defaultValue` setter.

```javascript
Example.CompanionEnum.defaultValue = 'A'             // By name
Example.CompanionEnum.defaultValue = 1               // By ordinal
Example.CompanionEnum.defaultValue = Example.C       // By enumerable (current)
Example.CompanionEnum.defaultValue = ParentExample.C // By enumerable (parent)
```

The other way to have a default value (for the `getValue`, `getName` or `getOrdinal`) is during its initialization
The method `CompanionEnum.defaultValue` will only be called if no value has been set.
Note that **null** or **undefined** are a valid value to unset,
but nothing can uninitialized the value once it has been set.
It looks in order `_DEFAULT` (for a valid `Enumerable`),
`_DEFAULT_NAME` (for a [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))
and `_DEFAULT_ORDINAL`
(for a [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) or
a [bigint](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)).
And sending a **primitive** or an **object** doesn't matter at the end of the process.

<details>
<summary>Javascript</summary>

```javascript
class CompanionEnum_Example extends CompanionEnum {
    _DEFAULT = condition1 ? Example.B : null
    _DEFAULT_NAME = condition2 ? 'C' : null
    get _DEFAULT_ORDINAL() {
        // Some code to get something for an ordinal
        return defaultValueByOrdinal
    }
}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
class CompanionEnum_Example extends CompanionEnum<Example, typeof Example> {
    protected override readonly _DEFAULT = condition1 ? Example.B : null
    protected override readonly _DEFAULT_NAME = condition2 ? 'C' as const satisfies Names : null
    protected override get _DEFAULT_ORDINAL() {
        // Some code to get something for an ordinal
        return defaultValueByOrdinal satisfies PossibleNumeric<Ordinals>
    }
}
```
</details>

## 3. Excluding some values

It can happen to have interpreted values in the instance.
Or it is also possible to have values that should not be counted as a `enum` instance.
In cases like these, override the **excluded names** in the **companion enum**.
Note that a method (getter, setter or function) will never be counted as a possible instance of `enum`.

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {

    static A = new Example()
    static B = new Example()
    static C = new Example()
    static D = someReason ? Example.A : Example.B
    static SOME_FIELD = Example.D
    static get ALREADY_EXSLUDED_GETTER() { return Example.A }

    static CompanionEnum = class CompanionEnum_Example extends CompanionEnum {
        _EXCLUDED_NAMES = ['D', "SOME_FIELD",]
    }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
class Example extends Enum<Ordinals, Names> {

    public static readonly A = new Example()
    public static readonly B = new Example()
    public static readonly C = new Example()
    public static readonly D = someReason ? Example.A : Example.B
    public static readonly SOME_FIELD = Example.D
    public static get ALREADY_EXSLUDED_GETTER() { return Example.A }

    public static readonly CompanionEnum: CompanionEnumSingleton<Example, typeof Example> =
        class CompanionEnum_Example extends CompanionEnum<Example, typeof Example> {
        protected readonly _EXCLUDED_NAMES = ['D', "SOME_FIELD",]
    }

}
```
</details>

## 4. Inheritance by a single parent

In practice, it is possible to have a desire to inherit another `enum`,
but in practice, `enum class` are `final` and cannot be extended.

But it can be done indirectly via `EnumWithParent`, `EnumWithNullableParent`,
`EnumerableWithNullableParent` and `EnumerableWithParent`
in juncture with `CompanionEnumWithParent` or `CompanionEnumWithParentDeclaration`.

There are some possibilities on how it can be implemented,
but the result is always the same.

Note that there are some things
to handle correctly when using the `EnumWithParent`
or `EnumWithNullableParent` instances:
 - The symbols `ENUM_REFERENCE_BY_ITS_NAME_SYMBOL` is there as an alternative to no arguments
 - The symbols `NULL_ENUM_REFERENCE_SYMBOL` is there as an alternative to `null`/`undefined`
 - Giving **no arguments** or `null`/`undefined` is different
 - Giving a name (`string`) is permitted
 - Giving an ordinal (`number` or `bigint`) is prohibited <small>(the order cannot be assured from the child compared to the parent)</small>

<details>
<summary>Javascript</summary>

```javascript
// ParentEnum.js
import {CompanionEnum, Enum} from "@joookiwi/enumerable"

export class ParentEnum extends Enum {

    static A = new ParentEnum()
    static B = new ParentEnum()

    static CompanionEnum = class CompanionEnum_ParentEnum extends CompanionEnum {
        static #instance
        constructor() { super(ParentEnum,) }
        static get get() { return CompanionEnum.#instance ??= new CompanionEnum() }
    }

}
```

<details>
<summary>EnumWithParent (from a value)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumWithNullableParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithNullableParent {

    /** @readonly */ static A = new ChildEnum(ParentEnum.A,)
    /** @readonly */ static B = new ChildEnum(ParentEnum.B,)

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor(parent = null) { super(parent,) }

}
```

</details>
<details>
<summary>EnumWithParent (inferred, but slowest)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumWithParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithParent {

    /** @readonly */ static A = new ChildEnum()
    /** @readonly */ static B = new ChildEnum()

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor() { super() }

}
```

</details>
<details>
<summary>EnumWithParent (by name, but slower)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumWithParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithParent {

    /** @readonly */ static A = new ChildEnum('A',)
    /** @readonly */ static B = new ChildEnum('B',)

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor(parent) { super(parent,) }

}
```

</details>
<details>
<summary>EnumWithNullableParent (value upfront)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumWithNullableParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithNullableParent {

    /** @readonly */ static A = new ChildEnum(ParentEnum.A,)
    /** @readonly */ static B = new ChildEnum(ParentEnum.B,)
    /** @readonly */ static C = new ChildEnum()
    /** @readonly */ static D = new ChildEnum()

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor(parent = null) { super(parent,) }

}
```

</details>
<details>
<summary>EnumWithNullableParent (name upfront, but slower)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumWithNullableParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithNullableParent {

    /** @readonly */ static A = new ChildEnum('A',)
    /** @readonly */ static B = new ChildEnum('B',)
    /** @readonly */ static C = new ChildEnum()
    /** @readonly */ static D = new ChildEnum()

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor(parent = null) { super(parent,) }

}
```

</details>
<details>
<summary>EnumWithNullableParent (null upfront, but slowest)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent, EnumConstants, EnumWithNullableParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

export class ChildEnum extends EnumWithNullableParent {

    /** @readonly */ static A = new ChildEnum()
    /** @readonly */ static B = new ChildEnum()
    /** @readonly */ static C = new ChildEnum(null,)
    /** @readonly */ static D = new ChildEnum(null,)

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */ constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    /** @private */constructor(parent = EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL) { super(parent,) }

}
```

</details>
<details>
<summary>EnumerableWithParent (manually declared)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

/** @implements {EnumerableWithParent} */
export class ChildEnum extends Enum {

    /** @readonly */ static A = new ChildEnum(ParentEnum.A,)
    /** @readonly */ static B = new ChildEnum(ParentEnum.B,)

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    #parent
    /** @private */constructor(parent) { super(); this.#parent = parent }
    get parent() { return this.#parent }

}
```
</details>
<details>
<summary>EnumerableWithNullableParent (manually declared)</summary>

```javascript
// ChildEnum.ts
import {CompanionEnumWithParent} from "@joookiwi/enumerable"

import {ParentEnum} from "./ParentEnum"

/** @implements {EnumerableWithNullableParent} */
export class ChildEnum extends Enum {

    /** @readonly */ static A = new ChildEnum(ParentEnum.A,)
    /** @readonly */ static B = new ChildEnum(ParentEnum.B,)
    /** @readonly */ static C = new ChildEnum()
    /** @readonly */ static D = new ChildEnum()

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        /** @private */constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    #parent
    /** @private */constructor(parent = null) { super(); this.#parent = parent }
    get parent() { return this.#parent }

}
```
</details>

</details>
<details>
<summary>Typescript</summary>

```typescript
// ParentEnum.ts
import {CompanionEnum, Enum} from "@joookiwi/enumerable"

import type {ParentOrdinals, ParentNames} from "./ParentEnum.types"

export class ParentEnum extends Enum<ParentOrdinals, ParentNames> {

   public static readonly A = new ParentEnum()
   public static readonly B = new ParentEnum()

    // Optional ordinal typing (start)
   public static readonly 0: typeof ParentEnum.A
   public static readonly 1: typeof ParentEnum.B
    // Optional ordinal typing (end)

   public static readonly CompanionEnum: CompanionEnumSingleton<ParentEnum, typeof ParentEnum> =
        class CompanionEnum_ParentEnum extends CompanionEnum<ParentEnum, typeof ParentEnum> {
            static #instance?: CompanionEnum_ParentEnum
            private constructor() { super(ParentEnum,) }
            public static get get() { return CompanionEnum.#instance ??= new CompanionEnum() }
        }

   private constructor() { super() }

}
```
```typescript
// ParentEnum.types.ts
type ParentEnumType = {
    A: 0
    B: 1
}
export type ParentNames = keyof ParentEnumType
export type ParentOrdinals = ParentEnumType[ParentNames]
```

```typescript
// ChildEnum.types.ts

type ChildEnumType = {
    A: 0
    B: 1
    C: 2
    D: 3
}
export type ChildNames = keyof ChildEnumType
export type ChildOrdinals = ChildEnumType[ChildNames]
```
<details>
<summary>EnumWithParent (from a value)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithNullableParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithNullableParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum(ParentEnum.A,)
    public static readonly B = new ChildEnum(ParentEnum.B,)
    public static readonly C = new ChildEnum()
    public static readonly D = new ChildEnum()

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor(parent: NullOr<ParentEnum> = null, ) { super(parent,) }

}
```
</details>
<details>
<summary>EnumWithParent (inferred, but slowest)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum()
    public static readonly B = new ChildEnum()

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor() { super() }

}
```
</details>
<details>
<summary>EnumWithParent (by name, but slower)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum('A',)
    public static readonly B = new ChildEnum('B',)

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor(parent: ParentNames,) { super(parent,) }

}
```
</details>
<details>
<summary>EnumWithNullableParent (value upfront)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum(ParentEnum.A,)
    public static readonly B = new ChildEnum(ParentEnum.B,)

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor(parent: ParentEnum, ) { super(parent,) }

}
```
</details>
<details>
<summary>EnumWithNullableParent (name upfront, but slower)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithNullableParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithNullableParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum('A',)
    public static readonly B = new ChildEnum('B',)
    public static readonly C = new ChildEnum()
    public static readonly D = new ChildEnum()

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    public static readonly 2: typeof ChildEnum.C
    public static readonly 3: typeof ChildEnum.D
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor(parent: NullOr<ParentNames> = null,) { super(parent,) }

}
```
</details>
<details>
<summary>EnumWithNullableParent (null upfront, but slowest)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, NullOr, PossibleEnumSymbol} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, EnumConstants, EnumWithNullableParent} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

export class ChildEnum
        extends EnumWithNullableParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum()
    public static readonly B = new ChildEnum()
    public static readonly C = new ChildEnum(null,)
    public static readonly D = new ChildEnum(null,)

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    public static readonly 2: typeof ChildEnum.C
    public static readonly 3: typeof ChildEnum.D
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    private constructor(parent: NullOr<PossibleEnumSymbol> = EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL,) { super(parent,) }

}
```
</details>
<details>
<summary>EnumerableWithParent (manually declared)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, EnumerableWithParent, NullOr} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, Enum} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

class ChildEnum extends Enum<ChildOrdinals, ChildNames>
    implements EnumerableWithParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum(ParentEnum.A,)
    public static readonly B = new ChildEnum(ParentEnum.B,)

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance?: CompanionEnum_ChildEnum
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    readonly #parent
    private constructor(parent: ParentEnum,) { super(); this.#parent = parent }
    public get parent(): ParentEnum { return this.#parent }

}
```

</details>
<details>
<summary>EnumerableWithNullableParent (manually declared)</summary>

```typescript
// ChildEnum.ts
import type {CompanionEnumWithParentSingleton, EnumerableWithNullableParent, NullOr} from "@joookiwi/enumerable"
import {CompanionEnumWithParent, Enum} from "@joookiwi/enumerable"

import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

class ChildEnum extends Enum<ChildOrdinals, ChildNames>
    implements EnumerableWithNullableParent<ChildOrdinals, ChildNames, ParentEnum> {

    public static readonly A = new ChildEnum(ParentEnum.A,)
    public static readonly B = new ChildEnum(ParentEnum.B,)
    public static readonly C = new ChildEnum()
    public static readonly D = new ChildEnum()

    // Optional ordinal typing (start)
    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    public static readonly 2: typeof ChildEnum.C
    public static readonly 3: typeof ChildEnum.D
    // Optional ordinal typing (end)

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance?: CompanionEnum_ChildEnum
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    readonly #parent
    private constructor(parent: NullOr<ParentEnum> = null,) { super(); this.#parent = parent }
    public get parent(): NullOr<ParentEnum> { return this.#parent }

}
```
</details>

</details>

## Inheritance by a composed parent

This part hasn't been done in the project yet,
but it will be added eventually.

## 5. Inheritance by more than one parent (2 or 3)

The inheritance can continue from up to three instances in the chain.

The logic is always the same toward the nullable and non-nullable instances.

There is also a logic where an instance with nullable value
can inherit both instances (nullable and non-null).
But the opposite is not true.

<details>
<summary>non-null parent + non-null grand-parent (valid)</summary>

```typescript
class Enum1 extends Enum { /*class content*/ }
class Enum2 extends EnumWithParent<Enum1> { /*class content*/ }
class Enum3 extends EnumWithGrandParent<Enum1, Enum2> { /*class content*/ }
```
</details>
<details>
<summary>nullable parent + non-null grand-parent (invalid)</summary>

```typescript
class Enum1 extends Enum { /*class content*/ }
class Enum2 extends EnumWithNullableParent<Enum1> { /*class content*/ }     // Is valid
class Enum3 extends EnumWithGrandParent<Enum1, Enum2> { /*class content*/ } // Is not possible
```
</details>
<details>
<summary>non-null parent + nullable grand-parent (valid)</summary>

```typescript
class Enum1 extends Enum { /*class content*/ }
class Enum2 extends EnumWithParent<Enum1> { /*class content*/ }
class Enum3 extends EnumWithNullableGrandParent<Enum1, Enum2> { /*class content*/ }
```
</details>
<details>
<summary>nullable parent + nullable grand-parent (valid)</summary>

```typescript
class Enum1 extends Enum { /*class content*/ }
class Enum2 extends EnumWithNullableParent<Enum1> { /*class content*/ }
class Enum3 extends EnumWithNullableGrandParent<Enum1, Enum2> { /*class content*/ }
```
</details>

The same logic is applicable for the great-grandparent instances.

## 6. Inheritance by more than three parents

If the inheritance is needed, it is still possible to extend
the currently defined predefined `EnumWith***` or `EnumerableWith***`.

## 7. Companion enum

The `companion enum` instances are deeply linked to the `enum class` instances.
But they don't really need to be directly used.

_(All the empty bracket `{}` are a custom implementation)_

<details>
<summary>Javascript</summary>

<details>
<summary>CompanionEnum (simplest)</summary>

```javascript
import {CompanionEnum} from "@joookiwi/enumerable"
class CustomCompanionEnum extends CompanionEnum {
    /** @protected */ constructor() { super(Enum1,) }
}
```

</details>
<details>
<summary>CompanionEnumDeclaration (hardest, but fully customizable)</summary>

```javascript
/** @implements CompanionEnumDeclaration */
class CustomCompanionEnum {

    /** @readonly */ #instance
    /** @protected */constructor() { this.#instance = Enum1 }
    get instance() { return this.#instance }

    get defaultValue() {}
    set defaultValue(value) {}
    setDefaultValue(value) { this.defaultValue = value; return this }

    get values() {}
    get names() {}
    get ordinals() {}
    get iterator() { return this.values[Symbol.iterator]() }

    getValue(value) {}
    getName(value) {}
    getOrdinal(value) {}

    [Symbol.iterator]() { return this.values[Symbol.iterator]() }
    get [Symbol.toStringTag] () { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>
<details>
<summary>CompanionEnumWithParent (simplest)</summary>

```javascript
import {CompanionEnumWithParent} from "@joookiwi/enumerable"
class CustomCompanionEnum extends CompanionEnumWithParent {
    /** @protected */ constructor() { super(Enum1, Enum2,) }
}
```

</details>
<details>
<summary>CompanionEnumWithParentDeclaration (hardest, but fully customizable)</summary>

```javascript
/** @implements CompanionEnumWithParentDeclaration */
class CustomCompanionEnum {

    /** @readonly */ #instance
    /** @readonly */ #parentInstance
    /** @protected */constructor() {
        this.#instance = Enum1
        this.#parentInstance = Enum2
    }
    get instance() { return this.#instance }
    get parentInstance() { return this.#parentInstance }

    get defaultValue() {}
    set defaultValue(value) {}
    setDefaultValue(value) { this.defaultValue = value; return this }

    get values() {}
    get names() {}
    get ordinals() {}
    get iterator() { return this.values[Symbol.iterator]() }

    getValue(value) {}
    getName(value) {}
    getOrdinal(value) {}

    [Symbol.iterator]() { return this.values[Symbol.iterator]() }
    get [Symbol.toStringTag] () { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>
<details>
<summary>CompanionEnumWithGrandParent (simplest)</summary>

```javascript
import {CompanionEnumWithGrandParent} from "@joookiwi/enumerable"
class CustomCompanionEnum extends CompanionEnumWithGrandParent {
    /** @protected */ constructor() { super(Enum1, Enum2, Enum3,) }
}
```

</details>
<details>
<summary>CompanionEnumWithGrandParentDeclaration (hardest, but fully customizable)</summary>

```javascript
/** @implements CompanionEnumWithGrandParentDeclaration */
class CustomCompanionEnum {

    /** @readonly */ #instance
    /** @readonly */ #parentInstance
    /** @readonly */ #grandParentInstance
    /** @protected */constructor() {
        this.#instance = Enum1
        this.#parentInstance = Enum2
        this.#grandParentInstance = Enum3
    }
    get instance() { return this.#instance }
    get parentInstance() { return this.#parentInstance }
    get grandParentInstance() { return this.#grandParentInstance }

    get defaultValue() {}
    set defaultValue(value) {}
    setDefaultValue(value) { this.defaultValue = value; return this }

    get values() {}
    get names() {}
    get ordinals() {}
    get iterator() { return this.values[Symbol.iterator]() }

    getValue(value) {}
    getName(value) {}
    getOrdinal(value) {}

    [Symbol.iterator]() { return this.values[Symbol.iterator]() }
    get [Symbol.toStringTag] () { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>
<details>
<summary>CompanionEnumWithGreatGrandParent (simplest)</summary>

```javascript
import {CompanionEnumWithGreatGrandParent} from "@joookiwi/enumerable"
class CustomCompanionEnum extends CompanionEnumWithGreatGrandParent {
    /** @protected */ constructor() { super(Enum1, Enum2, Enum3, Enum4,) }
}
```

</details>
<details>
<summary>CompanionEnumWithGreatGrandParentDeclaration (hardest, but fully customizable)</summary>

```javascript
/** @implements CompanionEnumWithGreatGrandParentDeclaration */
class CustomCompanionEnum {

    /** @readonly */ #instance
    /** @readonly */ #parentInstance
    /** @readonly */ #grandParentInstance
    /** @readonly */ #greatGrandParentInstance
    /** @protected */constructor() {
        this.#instance = Enum1
        this.#parentInstance = Enum2
        this.#grandParentInstance = Enum3
        this.#greatGrandParentInstance = Enum4
    }
    get instance() { return this.#instance }
    get parentInstance() { return this.#parentInstance }
    get grandParentInstance() { return this.#grandParentInstance }
    get greatGrandParentInstance() { return this.#greatGrandParentInstance }

    get defaultValue() {}
    set defaultValue(value) {}
    setDefaultValue(value) { this.defaultValue = value; return this }

    get values() {}
    get names() {}
    get ordinals() {}
    get iterator() { return this.values[Symbol.iterator]() }

    getValue(value) {}
    getName(value) {}
    getOrdinal(value) {}

    [Symbol.iterator]() { return this.values[Symbol.iterator]() }
    get [Symbol.toStringTag] () { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>

</details>
<details>
<summary>Typescript</summary>

<details>
<summary>CompanionEnum (simplest)</summary>

```typescript
import {CompanionEnum} from "@joookiwi/enumerable"
class CustomCompanionEnum
        extends CompanionEnum<Enum1, typeof Enum1> {
    protected constructor() { super(Enum1,) }
}
```

</details>
<details>
<summary>CompanionEnumDeclaration (hardest, but fully customizable)</summary>

```typescript
import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"
import type {CompanionEnumDeclaration, CompanionEnumName,
  NameOf, Nullable, OrdinalOf, PossibleEnumerableValue} from "@joookiwi/enumerable"

class CustomCompanionEnum
        implements CompanionEnumDeclaration<Enum1, typeof Enum1> {

  readonly #instance
  protected constructor() { this.#instance = Enum1 }
  public get instance(): typeof Enum1 { return this.#instance }

  public get defaultValue(): Enum1 {}
  public set defaultValue(value: Nullable<PossibleEnumerableValue<Enum1>>,) {}
  public setDefaultValue(value: Nullable<PossibleEnumerableValue<Enum1>>,): this { this.defaultValue = value; return this }

  public get values(): CollectionHolder<Enum1> {}
  public get names(): CollectionHolder<NameOf<Enum1>> {}
  public get ordinals(): CollectionHolder<OrdinalOf<Enum1>> {}
  public get iterator(): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }

  public getValue(value: Nullable<PossibleEnumerableValue<Enum1>>,): Enum1 {}
  public getName(value: Nullable<PossibleEnumerableValue<Enum1>>,): NameOf<Enum1> {}
  public getOrdinal(value: Nullable<PossibleEnumerableValue<Enum1>>,): OrdinalOf<Enum1> {}

  public [Symbol.iterator](): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }
  public get [Symbol.toStringTag](): CompanionEnumName { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }

}
```

</details>
<details>
<summary>CompanionEnumWithParent (simplest)</summary>

```typescript
import {CompanionEnumWithParent} from "@joookiwi/enumerable"

class CustomCompanionEnum
        extends CompanionEnumWithParent<
                Enum1, typeof Enum1,   // enum
                Enum2, typeof Enum2> { // parent
    protected constructor() {
      super(Enum1, Enum2,)
    }
}
```

</details>
<details>
<summary>CompanionEnumWithParentDeclaration (hardest, but fully customizable)</summary>

```typescript
import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"
import type {CompanionEnumWithParentDeclaration, CompanionEnumName,
  NameOf, Nullable, OrdinalOf, PossibleEnumerableValue} from "@joookiwi/enumerable"

class CustomCompanionEnum
        implements CompanionEnumWithParentDeclaration<
                     Enum1, typeof Enum1,   // enum
                     Enum2, typeof Enum2> { // parent

    readonly #instance
    readonly #parentInstance
    protected constructor() {
        this.#instance = Enum1
        this.#parentInstance = Emum2
    }
    public get instance(): typeof Enum1 { return this.#instance }
    public get parentInstance(): typeof Enum2{ return this.#parentInstance }

    public get defaultValue(): Enum1 {}
    public set defaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2>,) {}
    public setDefaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2>,): this { this.defaultValue = value; return this }

    public get values(): CollectionHolder<Enum1> {}
    public get names(): CollectionHolder<NameOf<Enum1>> {}
    public get ordinals(): CollectionHolder<OrdinalOf<Enum1>> {}
    public get iterator(): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }

    public getValue(value: PossibleEnumerableValue<| Enum1 | Enum2>,): Enum1 {}
    public getName(value: PossibleEnumerableValue<| Enum1 | Enum2>,): NameOf<Enum1> {}
    public getOrdinal(value: PossibleEnumerableValue<| Enum1 | Enum2>,): OrdinalOr<Enum1> {}

    public [Symbol.iterator](): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }
    public get [Symbol.toStringTag](): CompanionEnumName { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>
<details>
<summary>CompanionEnumWithGrandParent (simplest)</summary>

```typescript
import {CompanionEnumWithGrandParent} from "@joookiwi/enumerable"
class CustomCompanionEnum
        extends CompanionEnumWithGrandParent<
                  Enum1, typeof Enum1,   // enum
                  Enum2, typeof Enum2,   // parent
                  Enum3, typeof Enum3> { // grand-parent
    constructor() { super(Enum1, Enum2, Enum3,) }
}
```

</details>
<details>
<summary>CompanionEnumWithGrandParentDeclaration (hardest, but fully customizable)</summary>

```typescript
import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"
import type {CompanionEnumWithGrandParentDeclaration, CompanionEnumName,
  NameOf, Nullable, OrdinalOf, PossibleEnumerableValue} from "@joookiwi/enumerable"

class CustomCompanionEnum
        implements CompanionEnumWithGrandParentDeclaration<
                     Enum1, typeof Enum1,   // enum
                     Enum2, typeof Enum2,   // parent
                     Enum3, typeof Enum3> { // grand-parent

    readonly #instance
    readonly #parentInstance
    readonly #grandParentInstance
    protected constructor() {
        this.#instance = Enum1
        this.#parentInstance = Enum2
        this.#grandParentInstance = Enum3
    }
    public get instance(): typeof Enum1 { return this.#instance }
    public get parentInstance(): typeof Enum2 { return this.#parentInstance }
    public get grandParentInstance(): typeof Enum3 { return this.#grandParentInstance }

    public get defaultValue(): Enum1 {}
    public set defaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3>,) {}
    public setDefaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3>,): this { this.defaultValue = value; return this }

    public get values(): CollectionHolder<Enum1> {}
    public get names(): CollectionHolder<NameOf<Enum1>> {}
    public get ordinals(): CollectionHolder<OrdinalOf<Enum1>> {}
    public get iterator(): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }

    public getValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3>,): Enum1 {}
    public getName(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3>,): NameOf<Enum1> {}
    public getOrdinal(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3>,): OrdinalOf<Enum1> {}

    public [Symbol.iterator](): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }
    public get [Symbol.toStringTag](): CompanionEnumName { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>
<details>
<summary>CompanionEnumWithGreatGrandParent (simplest)</summary>

```typescript
import {CompanionEnumWithGreatGrandParent} from "@joookiwi/enumerable"
class CustomCompanionEnum
        extends CompanionEnumWithGreatGrandParent<
                  Enum1, typeof Enum1,   // enum
                  Enum2, typeof Enum2,   // parent
                  Enum3, typeof Enum3,   // grand-parent
                  Enum4, typeof Enum4> { // great-grandparent
    protected constructor() { super (Enum1, Enum2, Enum3, Enum4,)}
}
```

</details>
<details>
<summary>CompanionEnumWithGreatGrandParentDeclaration (hardest, but fully customizable)</summary>

```typescript
import type {CollectionHolder, CollectionIterator} from "@joookiwi/collection"
import type {CompanionEnumWithGreatGrandParentDeclaration, CompanionEnumName, NameOf, Nullable, OrdinalOf, PossibleEnumerableValue} from "@joookiwi/enumerable"

class CustomCompanionEnum
        implements CompanionEnumWithGreatGrandParent<
                     Enum1, typeof Enum1,   // enum
                     Enum2, typeof Enum2,   // parent
                     Enum3, typeof Enum3,   // grand-parent
                     Enum4, typeof Enum4> { // great-grandparent

    readonly #instance
    readonly #parentInstance
    readonly #grandParentInstance
    readonly #greatGrandParentInstance
    protected constructor() {
        this.#instance = Enum1
        this.#parentInstance = Enum2
        this.#grandParentInstance = Enum3
        this.#greatGrandParentInstance = Enum4
    }
    public get instance(): typeof Enum1 { return this.#instance }
    public get parentInstance(): typeof Enum2 { return this.#parentInstance }
    public get grandParentInstance(): typeof Enum3 { return this.#grandParentInstance }
    public get greatGrandParentInstance(): typeof Enum4 { return this.#greatGrandParentInstance }

    public get defaultValue(): Enum1 {}
    public set defaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3 | Enum4>,) {}
    public setDefaultValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3 | Enum4>,): this { this.defaultValue = value; return this }

    public get values(): CollectionHolder<Enum1> {}
    public get names(): CollectionHolder<NameOf<Enum1>> {}
    public get ordinals(): CollectionHolder<OrdinalOf<Enum1>> {}
    public get iterator(): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }

    public getValue(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3 | Enum4>,): Enum1 {}
    public getName(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3 | Enum4>,): NameOf<Enum1> {}
    public getOrdinal(value: PossibleEnumerableValue<| Enum1 | Enum2 | Enum3 | Enum4>,): OrdinalOf<Enum1> {}

    public [Symbol.iterator](): CollectionIterator<Enum1> { return this.values[Symbol.iterator]() }
    public get [Symbol.toStringTag](): CompanionEnumName { return "CompanionEnum" /* or EnumConstants.COMPANION_ENUM_TO_STRING_TAG */ }
  
}
```

</details>

</details>

## Common mistakes

### Reversing the inheritance

The "inheritance" is only dependent on the ordering of the constructors received in the companion enum class.

So, by reversing the ordering, then the implementation is correctly used.

Use `super(ChildEnum, ParentEnum,)` instead of `super(ParentEnum, ChildEnum,)`

<details>
<summary>Javascript</summary>

Change the implementation from:
```javascript
class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
     static #instance
     constructor() { super(ParentEnum, ChildEnum,) }
     static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
 }
```

to

```javascript
class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
     static #instance
     constructor() { super(ChildEnum, ParentEnum,) }
     static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
 }
```
</details>
<details>
<summary>Typescript</summary>

Change the implementation from:
```typescript
class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ParentEnum, typeof ParentEnum, ChildEnum, typeof ChildEnum> {
   static #instance?: CompanionEnum_ChildEnum
   private constructor() { super(ParentEnum, ChildEnum,) }
   public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
}
```

to

```typescript
class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
   static #instance?: CompanionEnum_ChildEnum
   private constructor() { super(ChildEnum, ParentEnum,) }
   public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
}
```
</details>

### Forgetting the type declaration on the companion enum

In `Typescript`, it can be possible to have an error even though, it cannot be one in `Javascript`.

By declaring a class onto a field, then, the type inference would not work properly if it has a reference of itself.

That is why every **companion enum** has a `singleton` type declaration.

```typescript
// Bad example
class Example extends Enum {
    // ts-error: Field cannot infer the type
    public static readonly Field = class NestedExample {
        field = Example
    }
}
```

```typescript
// Correct example
class Example extends Enum {
    public static readonly Field: NestedExampleDeclaration<typeof Example> = class NestedExample {
        readonly field = Example
    }
}
interface NestedExampleDeclaration<T> {
    readonly field: T
}
```

### Having an `Enumerable` to not have a value from `getLastPrototype`

Maybe this method did throw you something like

`NullReferenceException: No Enumerable-like could be found from the prototype chain "EnumLike → EnumLike → Object".`

This is likely due to having one requirement (`ordinal`, `name`, `Symbol.toPrimitive` or `Symbol.toStringTag`)
set as a field instead of a method (or getter method).

The values are not expected to change,
but it is expected to have at least one class with everything the `Enumerable` have.

A simple change can be done from:
<details>
<summary>Javascript (by fields)</summary>

```javascript
class EnumLike {
    constructor() {
        this.ordinal = someOrdinalCode
        this.name = someNameCode
        this[Symbol.toPrimitive] = () => someToPrimitiveCode
        this[Symbol.toStringTag] = "Enum"
    }
}
```

to be transformed to

```javascript
class EnumLike {
    #ordinal
    #name
    constructor() {
        this.#ordinal = someOrdinalCode
        this.#name = someNameCode
    }
    get ordinal() { return this.#ordinal }
    get name() { return this.#name }
    [Symbol.toPrimitive]() { return somePrimitiveCode }
    get [Symbol.toStringTag]() { return "Enum" }
}
```
</details>
<details>
<summary>Javascript (by constructor default value)</summary>

```javascript
class EnumLike {
    constructor(ordinal = someOrdinalCode, name = someNameCode){
        this.ordinal = ordinal
        this.name = ordinal
        this[Symbol.toPrimitive] = () => someToPrimitiveCode
        this[Symbol.toStringTag] = "Enum"
    }
}
```

to be transformed to

```javascript
class EnumLike {
    #ordinal
    #name
    constructor(ordinal = someOrdinalCode, name = someNameCode) {
        this.#ordinal = ordinal
        this.#name = name
    }
    get ordinal() { return this.#ordinal }
    get name() { return this.#name }
    [Symbol.toPrimitive]() { return somePrimitiveCode }
    get [Symbol.toStringTag]() { return "Enum" }
}
```

</details>
<details>
<summary>Typescript (by simple fields)</summary>

```typescript
class EnumLike {
    public readonly ordinal = someOrdinalCode
    public readonly name = someNameCode
    public readonly [Symbol.toPrimitive] = () => someToPrimitiveCode
    public readonly [Symbol.toStringTag] = "Enum"
}
```

to be transformed to

```typescript
class EnumLike {
    readonly #ordinal
    readonly #name
    constructor() {
        this.#ordinal = someOrdinalCode
        this.#name = someNameCode
    }
    public get ordinal() { return this.#ordinal }
    public get name() { return this.#name }
    public [Symbol.toPrimitive]() { return somePrimitiveCode }
    public get [Symbol.toStringTag]() { return "Enum" as const }
}
```

</details>
<details>
<summary>Typescript (by constructor initialization fields)</summary>

```typescript
class EnumLike {
    public readonly [Symbol.toPrimitive] = () => someToPrimitiveCode
    public readonly [Symbol.toStringTag] = "Enum"
    constructor(public readonly ordinal = someOrdinalCode, 
                public readonly name = someNameCode,){}
}
```

to be transformed to

```typescript
class EnumLike {
    readonly #ordinal
    readonly #name
    constructor(ordinal = someOrdinalCode,
                name = someNameCode,) {
        this.#ordinal = ordinal
        this.#name = name
    }
    public get ordinal() { return this.#ordinal }
    public get name() { return this.#name }
    public [Symbol.toPrimitive]() { return somePrimitiveCode }
    public get [Symbol.toStringTag]() { return "Enum" as const }
}
```

</details>

## Known error

There is a known error for the optional index type being set on an Enum on **Typescript** exclusively.
Currently, it is unknown where it is located,
but just commenting the type resolve the thing.
An alternative to it is to put the optional types over the declared constants.

```typescript
// Known error
class ChildEnum {
    public static readonly A = new ChildEnum()
    public static readonly 0: typeof ChildEnum.A
}
// ChildEnum.A is fine
// ChildEnum[0] is always being set to undefined
```

```typescript
// Solution 1
class ChildEnum {
    public static readonly A = new ChildEnum()
    // public static readonly 0: typeof ChildEnum.A
}
// ChildEnum.A is fine
// ChildEnum[0] is fine
```

```typescript
// Solution 2
class ChildEnum {
    public static readonly 0: typeof ChildEnum.A
    public static readonly A = new ChildEnum()
}
// ChildEnum.A is fine
// ChildEnum[0] is fine
```

## Contribution
You can contribute to the project in 2 different ways:
- [GitHub sponsor](https://github.com/sponsors/joooKiwi) or
- [!["Buy me a Coffee"](https://img.buymeacoffee.com/button-api/?&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/joookiwi)
