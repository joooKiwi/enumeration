# Enumerable (javascript version)

## Table of content
 * [Installation](#installation)
 * [Motivation](#motivation)
 * [Usage](#usage)
   * [The base](#the-base)
   * [Default method](#default-method)
   * [Default field](#default-field)
   * [Name & ordinal](#name--ordinal)
   * [protected get _static](#protected-get-_static)

## Installation

```
npm install @joookiwi/enumerable
npm i @joookiwi/enumerable

npm install --save @joookiwi/enumerable
npm i -S @joookiwi/enumerable

npm install --save-dev @joookiwi/enumerable
npm i -D @joookiwi/enumerable
```

## Motivation

The [Typescript emums](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)
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

<details>
<summary>Javascript</summary>

```javascript
import {Enum} from "@joookiwi/enumerable"

class Example extends Enum {

    get _static() { return Example }

    static getValue(value,) { return Enum.getValueOn(this, value,) }
    static get values() { return Enum.getValuesOn(this,) }
    static [Symbol.iterator]() { return this.values[Symbol.iterator]() }

}
```
</details>
<details>
<summary>Typescript</summary>

```typescript
// Example.ts
import {Enum} from "@joookiwi/enumerable"
import type {EnumerableConstructor} from "@joookiwi/enumerable/dist/types/util/enumerable"
import type {CollectionHolder} from "@joookiwi/enumerable/dist/types/util/collection"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    public static A = new Example()
    public static B = new Example()
    public static C = new Example()

    static [index: number]: Example

    private constructor() { super() }

    protected override get _static(): EnumerableConstructor<Ordinals, Names> { return Example }

    public static getValue(value: | string | String | number | Number | bigint | BigInt | Example | null | undefined,): Example {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Example> {
        return Enum.getValuesOn(this,)
    }

    public static [Symbol.iterator](): Iterator<Example> {
        return this.values[Symbol.iterator]()
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
import type {EnumerableConstructorWithDefault} from "@joookiwi/enumerable/dist/types/util/enumerable"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return Example
    }

    public static get default(): Example {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: | string | String | number | Number | bigint | BigInt | Example | null | undefined,) {
        Enum.setDefaultOn(this, value,)
    }

    public static setDefault(value: | string | String | number | Number | bigint | BigInt | Example | null | undefined,): typeof Example {
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
import type {EnumerableConstructorWithNamesAndOrdinals} from "@joookiwi/enumerable/dist/types/util/enumerable"
import type {CollectionHolder} from "@joookiwi/enumerable/dist/types/util/collection"
import type {Names, Ordinals} from "./Example.types"

class Example extends Enum<Ordinals, Names> {

    protected override get _static(): EnumerableConstructorWithNamesAndOrdinals<Ordinals, Names> {
        return Example
    }

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

|        when to use         | import value<br/>_from `@joookiwi/enumerable/dist/types/util/collection`_ |
|:--------------------------:|:--------------------------------------------------------------------------|
|           basic            | `EnumerableConstructor`                                                   |
|          default           | `EnumerableConstructorWithDefault`                                        |
|      names & ordinals      | `EnumerableConstructorWithNamesAndOrdinals`                               |
| default + names & ordinals | `EnumerableConstructorWithEverything`                                     |

