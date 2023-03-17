# Enumerable (javascript version)

## Table of content
 * [Installation](#installation)
 * [Motivation](#motivation)
 * [Usage](#usage)
   * [The base](#the-base)
   * [Default method](#default-method)
   * [Default field](#default-field)
   * [Name & ordinal](#name--ordinal)
   * [protected get _static](#protected-get--static)
   * [Excluded fields](#excluded-field)
 * [Common mistakes](#common-mistakes)
   * [ChildEnum extends ParentEnum](#childenum-extends-parentenum)

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
In `C#` or `PHP`, it has at some extends some functionality provided within the language.<br/>
But, in `Javascript` _(inherently `Typescipt`)_, there is no such implementation for `enum`.

The goal is to have an implementation of an `enum class` usable for either `Javascript` or `Typescript`.<br/>

## Usage

Every method can be used independently of one and the other _(excluding the basic)_.
_And for some simplicity, the lines are formatted in 1 line when possible_

### The base

The base of each `enum class` will have 4 methods:
 - `protected get _static`
 - `public static getValue(value,)`
 - `public static get values()`
 - `public static [`[Symbol.iterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)`]()`

And 1 field definition (for `Typescript`) _for better support_
 - `static [index: number]`

_Note: The `protected get _static` should be a getter method instead of a field to avoid compile time errors._

<details>
<summary>Javascript</summary>

```javascript
import {Enum} from "@joookiwi/enumerable"

class Example extends Enum {

    get _static() { return Example }

    static getValue(value,) { return Enum.getValueOn(this, value,) }
    static get values() { return Enum.getValuesOn(this,) }
    static* [Symbol.iterator]() { yield* this.values }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
// Example.ts
import {Enum} from "@joookiwi/enumerable"
import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from "@joookiwi/enumerable/dist/types"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    public static A = new Example()
    public static B = new Example()
    public static C = new Example()

    static [index: number]: Example

    private constructor() { super() }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> { return Example }

    public static getValue(value: PossibleValueByEnumerable<Example>,): Example {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Example> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<Example> {
        yield* this.values
    }

}
```

```typescript
// Example.types.ts
enum Enum {
    A, B, C,
}

export type Names = keyof typeof Enum
export type Ordinals = typeof Enum[Names]

```

</details>

### Default method

Having a default value must have 3 different methods associated to them:
 - `public static get default()`
 - `public static set default(value,)`
 - `public static setDefault(value,)`

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {

    static get default() { return Enum.getDefaultOn(this,) }
    static set default(value,) { Enum.setDefaultOn(this, value,) }
    static setDefault(value,) { return Enum.setDefaultOn(this, value,) }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
import type {PossibleValueByEnumerable} from "@joookiwi/enumerable/dist/types"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    public static get default(): Example {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: PossibleValueByEnumerable<Example>,) {
        Enum.setDefaultOn(this, value,)
    }

    public static setDefault(value: PossibleValueByEnumerable<Example>,): typeof Example {
        return Enum.setDefaultOn(this, value,)
    }

}
```
</details>

### Default field

Having a `default` field may be used if the methods are present,
but it is not mandatory:
 - `protected static readonly _DEFAULT`

It can also be changed from `protected _DEFAULT` to another one using this field:
- `protected static readonly _DEFAULT_NAME`

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {

    static _DEFAULT = Example.A

}

class AnotherExample extends Enum {

    static _DEFAULT_NAME = "_ANOTHER_NAME"
    static _ANOTHER_NAME = AnotherExample.A

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
class Example extends Enum<Ordinals, Names> {

   protected static override readonly _DEFAULT = Example.A

}

class AnotherExample extends Enum<Ordinals, Names> {

   protected static override readonly _DEFAULT_NAME = "_ANOTHER_NAME"
   protected static override readonly _ANOTHER_NAME = AnotherExample.A

}
```
</details>

### Name & ordinal

The methods for the `names` & `ordinals` are optionals,
but give a utility method:
 - `public static get names()`
 - `public static get ordinals()`

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {

    public static get names() { return Enum.getNamesOn(this,) }
    public static get ordinals() { return Enum.getNamesOn(this,) }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
import type {CollectionHolder} from "@joookiwi/enumerable/dist/types"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    public static get names(): CollectionHolder<Names> {
        return Enum.getNamesOn(this,)
    }

    public static get ordinals(): CollectionHolder<Ordinals> {
        return Enum.getNamesOn(this,)
    }

}
```
</details>

### protected get _static

The getter method **_static** will always be the same in `Javascript`,
but in `Typescript`, in order to ensure a better type signature,
the usage of specific type is used:

|        when to use         | import value<br/>_from `@joookiwi/enumerable/dist/types`_                |
|:--------------------------:|:-------------------------------------------------------------------------|
|           basic            | `EnumerableConstructor`                                                  |
|          default           | `EnumerableConstructorWithDefault`                                       |
|      names & ordinals      | `EnumerableConstructorWithNamesAndOrdinals`                              |
| default + names & ordinals | `EnumerableConstructorWithEverything`                                    |

### Excluded field

Excluding a field may become part once some fields for whatever reason.
In this case, just use:
 - `protected static readonly _EXCLUDED_NAMES`

<details>
<summary>Javascript</summary>

```javascript
class Example extends Enum {

    static A = new Example()
    static B = new Example()
    static C = new Example()
    static D = someReason ? this.A : this.B
    static SOME_FIELD = this.D

   _EXCLUDED_NAMES = ['D', "SOME_FIELD",]

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

    protected static override readonly _EXCLUDED_NAMES = ['D', "SOME_FIELD",]

}
```
</details>

## Common mistakes

### ChildEnum extends ParentEnum

The enum extension is possible since it utilise the `Enum._static` reference to imply the parent & the child.

So in result of this, the `ParentEnum` can receive the `ChildEnum` and still return the proper type.
The same apply for the `ChildEnum` while receiving a `ParentEnum`.

<details>
<summary>Javascript</summary>

The ChildEnum has nothing to change to its implementation
since it is a Typescript possible problem only.
</details>
<details>
<summary>Typescript</summary>

If this error happen:
```text
TS2375: Type 'ChildEnum | ParentEnum' is not assignable to type 'ChildEnum' with 'exactOptionalPropertyTypes: true'.
Consider adding 'undefined' to the types of the target's properties.
   Type 'ParentEnum' is not assignable to type 'ChildEnum' with 'exactOptionalPropertyTypes: true'.
   Consider adding 'undefined' to the types of the target's properties.
       Property '_static' is protected but type 'ParentEnum' is not a class derived from 'ChildEnum'.
```

Change the implementation from:
```typescript
class ChildEnum extends ParentEnum {

   public static getValue(value: PossibleValueByEnumerable<| ChildEnum | ParentEnum>,) {
      return Enum.getValueOn(this, value,)
   }

}
```

to

```typescript
class ChildEnum extends ParentEnum {

   public static getValue(value: PossibleValueByEnumerable<| ChildEnum | ParentEnum>,) {
       return Enum.getValueOn<ChildEnum>(this, value,)
   }

}
```
</details>
