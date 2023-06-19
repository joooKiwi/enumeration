# Enumerable (javascript version)

## Table of content
* [Installation](#installation)
* [Motivation](#motivation)
* [Usage](#usage)
  * [The base](#the-base)
  * [Default usage](#default-usage)
  * [Excluded field](#excluded-field)
  * [Inheritance by 1 to 3 parents](#inheritance-by-1-to-3-parents)
    * [Inheritance by single parent](#inheritance-by-single-parent)
    * [Inheritance by more than one parent](#inheritance-by-more-than-one-parent)
* [Common mistakes](#common-mistakes)
  * [Reversing the inheritance](#reversing-the-inheritance)
  * [Forgetting the type declaration on the companion enum](#forgetting-the-type-declaration-on-the-companion-enum)
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

## Motivation

The [Typescript enums](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)
can only have basic types (`string` or `number`).<br/>
But, trying to have a `method` for **each instance** or some `static method` is impossible.

In `Java` or `Kotlin`, then the **enum instances** are the defined class.<br/>
In `C#` or `PHP`, it has at some extension functionality provided within the language.<br/>
But, in `Javascript` _(inherently `Typescipt`)_, there is no such implementation for `enum class`.

The goal is to have an implementation of an `enum class` usable for either `Javascript` or `Typescript`.<br/>

## Usage

Every method can be used independently of one and the other _(excluding the basic)_.
_And for some simplicity, the lines are formatted in 1 line when possible_

### The base

The base of each `enum class` has only 1 required field:
 - `public static readonly CompanionEnum`

Field definition (for `Typescript`) _for better support_:
 - `static O: EnumType.N` with `O` and `N` as their specific ordinal and name respectively

And optional override fields _(in the **companion enum**)_:
 - `protected readonly _EXCLUDED_NAMES`
 - `protected readonly _DEFAULT`

_Note: The companion field (in the class) should be in the static instance instead of declared after-end (like in a namespace or via reflection)_

<details>
<summary>Javascript</summary>

```javascript
import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"

export class Example extends Enum {

   static A = new Example()
   static B = new Example()
   static C = new Example()

   static CompanionEnum = class CompanionEnum_Example extends BasicCompanionEnum {
       static #instance
       constructor() { super(Example,) }
       static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
   }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
// Example.ts
import {BasicCompanionEnum, Enum} from "@joookiwi/enumerable"
import type {BasicCompanionEnumSingleton} from "@joookiwi/enumerable/dist/types"
import type {Names, Ordinals} from "./Example.types"

export class Example extends Enum<Ordinals, Names> {

    public static readonly A = new Example()
    public static readonly B = new Example()
    public static readonly C = new Example()

    // Optional number typing (start)
    public static readonly 0: typeof Example.A
    public static readonly 1: typeof Example.B
    public static readonly 2: typeof Example.C
    // Optional number typing (end)

    private constructor() { super() }

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<Example, typeof Example> =
        class CompanionEnum_Example extends BasicCompanionEnum<Example, typeof Example> {
        static #instance?: CompanionEnum_Example
        private constructor() { super(Example,) }
        public static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
   }

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

### Default usage

By default, the **companion enum** is always implemented.
But it will throw a `NullEnumerableException` if nothing has been set _(in the initialization)_.
Or it may be that it has been removed _(at compile time)_.
And it can also throw a `UnhandledValueException` if the value received is incompatible.

The possible values for the fields are:
 - `_DEFAULT` → `Enumerable` valid to the **companion enum**
 - `_DEFAULT_NAME` → a [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
      as either a primitive or an object
 - `_DEFAULT_ORDINAL` → a [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) or
      a [bigint](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
      as a primitive or an object

Keep in mind that the value will always be converted to the **companion enum** base instance in the end.

<details>
<summary>Javascript</summary>

```javascript
class CompanionEnum_Example extends BasicCompanionEnum {

    _DEFAULT = condition1 ? Example.B : null

    _DEFAULT_NAME = condition2 ? 'C' : null

    _DEFAULT_ORDINAL = condition3 ? 4 : null

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
class CompanionEnum_Example extends BasicCompanionEnum<Example, typeof Example> {

    protected override readonly _DEFAULT = condition1 ? Example.B : null

    protected override readonly _DEFAULT_NAME = condition2 ? 'C' : null

    protected override readonly _DEFAULT_ORDINAL = condition3 ? 4 : null

}
```
</details>

### Excluded field

Excluding a field may become part once some fields for whatever reason.
In this case, just override the **excluded names** in the **companion enum**.

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {
    static A = new Example()
    static B = new Example()
    static C = new Example()
    static D = someReason ? this.A : this.B
    static SOME_FIELD = this.D

    static CompanionEnum = class CompanionEnum_Example extends BasicCompanionEnum {
        _EXCLUDED_NAMES = ['D', "SOME_FIELD",]
        static #instance
        constructor() { super(Example,) }
        static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
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
    public static readonly D = someReason ? this.A : this.B
    public static readonly SOME_FIELD = this.D

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<Example, typeof Example> =
        class CompanionEnum_Example extends BasicCompanionEnum<Example, typeof Example> {
        protected readonly _EXCLUDED_NAMES = ['D', "SOME_FIELD",]
        static #instance?: CompanionEnum_Example
        private constructor() { super(Example,) }
        public get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
    }
}
```
</details>

### Inheritance by 1 to 3 parents

The inheritance can be used from 1 parent up to 3 of them.
But a custom implementation can be created if the need is present.

Keep in mind that the parent is not aware of inheritance.
It is only to the child to be aware and that is able to support the parent class.

#### Inheritance by single parent

The parent inheritance can only support a single parent.
Meaning that dual typing (in theory) can be supported,
it will not be possible (in practice).

<details>
<summary>Javascript</summary>

```javascript
// ParentEnum.js
export class ParentEnum extends Enum {
    static A = new ParentEnum()
    static B = new ParentEnum()
   
    static CompanionEnum = class CompanionEnum_ParentEnum extends BasicCompanionEnum {
        static #instance
        constructor() { super(ParentEnum,) }
        static get get() { return BasicCompanionEnum.#instance ??= new BasicCompanionEnum() }
    }
}
```

```javascript
// ChildEnum.ts
import {ParentEnum} from "./ParentEnum"

/** @implements {EnumerableWithParent} */
export class ChildEnum extends Enum {
    static A = new ChildEnum(ParentEnum.A,)
    static B = new ChildEnum(ParentEnum.B,)
    static C = new ChildEnum()
    static D = new ChildEnum()

    static CompanionEnum = class CompanionEnum_ChildEnum extends CompanionEnumWithParent {
        static #instance
        constructor() { super(ChildEnum, ParentEnum,) }
        static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    #parent
    constructor(parent = null) { super(); this.#parent = parent }
    get parent() { return this.#parent }
}
```

</details>
<details>
<summary>Typescript</summary>

```typescript
// ParentEnum.ts
import type {ParentOrdinals, ParentNames} from "./ParentEnum.types"

export class ParentEnum extends Enum<ParentOrdinals, ParentNames> {
   public static readonly A = new ParentEnum()
   public static readonly B = new ParentEnum()

   public static readonly 0: typeof ParentEnum.A
   public static readonly 1: typeof ParentEnum.B

   private constructor() { super() }

   static CompanionEnum: BasicCompanionEnumSingleton<ParentEnum, typeof ParentEnum> =
       class CompanionEnum_ParentEnum extends BasicCompanionEnum<ParentEnum, typeof ParentEnum> {
       static #instance?: CompanionEnum_ParentEnum
       private constructor() { super(ParentEnum,) }
       public static get get() { return BasicCompanionEnum.#instance ??= new BasicCompanionEnum() }
   }
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
// ChildEnum.ts
import type {ChildOrdinals, ChildNames} from "./ChildEnum.types"
import {ParentEnum} from "./ParentEnum"

class ChildEnum extends Enum<ChildOrdinals, ChildNames>
    implements EnumerableWithParent<ChildOrdinals, ChildNames, ParentEnum> {
    public static readonly A = new ChildEnum(ParentEnum.A,)
    public static readonly B = new ChildEnum(ParentEnum.B,)
    public static readonly C = new ChildEnum()
    public static readonly D = new ChildEnum()

    public static readonly 0: typeof ChildEnum.A
    public static readonly 1: typeof ChildEnum.B
    public static readonly 2: typeof ChildEnum.C
    public static readonly 3: typeof ChildEnum.D

    public static readonly CompanionEnum: CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> =
            class CompanionEnum_ChildEnum extends CompanionEnumWithParent<ChildEnum, typeof ChildEnum, ParentEnum, typeof ParentEnum> {
        static #instance?: CompanionEnum_ChildEnum
        private constructor() { super(ChildEnum, ParentEnum,) }
        public static get get() { return CompanionEnum_ChildEnum.#instance ??= new CompanionEnum_ChildEnum() }
    }

    readonly #parent
    private constructor(parent: ParentEnum | null = null,) { super(); this.#parent = parent }
    public get parent(): ParentEnum | null { return this.#parent }
}
```
```typescript
type ChildEnumType = {
    A: 0
    B: 1
    C: 2
    D: 3
}
export type ChildNames = keyof ChildEnumType
export type ChildOrdinals = ChildEnumType[ChildNames]
```

</details>

#### Inheritance by more than one parent

When retrieving 2 or 3 parents in the inheritance chain,
just use
 - `EnumerableWithGrandParent` on the **enum** with `CompanionWithGrandParent` on the **companion enum**
 - `EnumerableWithGreatGrandParent` on the **enum** with `CompanionWithGreatGrandParent` on the **companion enum**.

Otherwise, create your own implementation by extending the companion classes.

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

## Contribution
You can contribute to the project by the "GitHub sponsor".
But eventually, more ways to contribute should be present.
