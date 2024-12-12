# Enumeration

This project is made to have an implementation of `enum class` similar in each language.
_Or at least give a similar behaviour_.

<br/>
Also, the implementations use class inheritance in the `Enum` as well as their `CompanionEnum` counterpart.

The only location where it doesn't follow this is in the utility classes / files
like `EnumHelper`, `EnumConstants` and `EnumExtension`.

## Implementation by language

_Note:_
The usage of `COMPANION_ENUM` in the extension can be changed to
`CompanionEnum`, `CompanionEnumWithParent`,
`CompanionEnumWithGrandParent` or `CompanionEnumWithGreatGrandParent`.
And in `C#`, it uses the type system to its advantage (like for the [ValueTuple](https://learn.microsoft.com/dotnet/api/system.valuetuple)).

| Language                  |                                               Published                                               | class<br/>extension | native<br/>enum<br/>functionality | trait<br/>usage | annotation / attribute | utility                                       |
|:--------------------------|:-----------------------------------------------------------------------------------------------------:|---------------------|:----------------------------------|-----------------|------------------------|-----------------------------------------------|
| Javascript<br/>Typescript | [![version][npm-image-link]][npm-link]<br/>[![downloads][npm-download-image-link]][npm-download-link] | yes                 |                                   |                 |                        | `EnumConstant`                                |
| Java                      |                                         Maven _(in progress)_                                         | yes                 | yes                               |                 | yes                    | `EnumHelper`, `EnumConstant`, `EnumMethods`   |
| Kotlin                    |                                         Maven _(in progress)_                                         | yes                 | yes                               |                 | yes                    | `EnumConstant`, `EnumExtension`               |
| PHP                       |                                               Composer                                                | not necessary       | not necessary                     | yes             | yes                    | `EnumHelper`, `EnumConstant`  `EnumMethods`   |
| C#                        |                                                 Nuget                                                 | yes                 | yes                               |                 | yes                    | `EnumHelper`, `EnumConstant`, `EnumExtension` |

_(This may change once the implementation is made)_

[npm-image-link]:          https://img.shields.io/npm/v/@joookiwi/enumerable.svg?logo=npm&label=
[npm-link]:                https://npmjs.org/package/@joookiwi/enumerable
[npm-download-image-link]: https://img.shields.io/npm/dt/@joookiwi/enumerable.svg
[npm-download-link]:       https://npm-stat.com/charts.html?package=@joookiwi/enmumerable

## Related projects

Here is a list of the related projects made by me
 - type ([GitHub](https://github.com/joooKiwi/type) | [NPM](https://www.npmjs.com/package/@joookiwi/type))
 - lazy ([GitHub](https://github.com/joooKiwi/lazy) | [NPM](https://www.npmjs.com/package/@joookiwi/lazy))
 - collection ([GitHub](https://github.com/joooKiwi/collection) | [NPM](https://www.npmjs.com/package/@joookiwi/collection))

## Contribution

You can contribute to my projects in 2 different ways
- [GitHub sponsor](https://github.com/sponsors/joooKiwi) or
- [!["Buy me a Coffee"](https://img.buymeacoffee.com/button-api/?&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/joookiwi)

## Implementation by language

The implementations are different across the different languages,
but they should not change in their implementation
_(it's only the syntax that is different for the most part)_.

### Javascript and Typescript implementation

This project (currently published on [NPM](https://www.npmjs.com/package/@joookiwi/enumerable))
is the one with the most manual labour to implement.

The basic usage can be:
<details>
<summary>Enum extension</summary>

Keep in mind that the `Enumerable` interface can also be used if the direct inheritance cannot be used.
But a custom implementation is required for them.

```javascript
// Javascript
class Example extends Enum {}
```
```typescript
// Typescript (generic usage)
class Example extends Enum {}
```
```typescript
// Typescript (strict types)
class Example extends Enum<Ordinals, Names> {}
```
```typescript
// Typescript (strict specific types)
class Example<ORDINAL extends Ordinals = Ordinals, NAMES extends Names = Names,> extends Enum<ORDINAL, NAME> {}
```

</details>
<details>
<summary>Companion enum</summary>

The `companion enum` implementation is a static field on the `enum class` named `CompanionEnum`
due to the fact there is no `Annotation`/`Attribute` usable in the language natively.

And in the case a custom implementation is needed, the classes are extensible.
Also, there is interfaces like `CompanionEnumDeclaration` should be declared.

```javascript
// Javascript
class CompanionEnum_Example extends CompanionEnum {
    static #instance
    /** @private */constructor() { super(Example,) }
    static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
}
```
```typescript
// Typescript (generic usage)
class CompanionEnum_Example extends CompanionEnum {
    static #instance?: CompanionEnum_Example
    private constructor() { super(Example,) }
    public static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
}
```
```typescript
// Typescript (strict type usage)
class CompanionEnum_Example extends CompanionEnum<Example, typeof Example> {
    static #instance?: CompanionEnum_Example
    constructor() { super(Example,) }
    static get get() { return CompanionEnum_Example.#instance ??= new CompanionEnum_Example() }
}
```

</details>
<details>
<summary>Parenting enum enum</summary>

Implementing the enum with a "kind-of" inheritance can be used through the usage of
`get parent`, `get grandParent` and `get greatGrandParent`.

<details>
<summary>Javascript</summary>

```javascript
class EnumExample extends Enum {}

class NullableParentingEnumExample extends EnumWithNullableParent {}
class ParentingEnumExample extends EnumWithParent {}

class NullableGrandParentingEnumExample extends EnumWithNullableGrandParent {}
class GrandParentingEnumExample extends EnumWithGrandParent {}

class NullableGreatGrandParentingEnumExample extends EnumWithNullableGreatGrandParent {}
class GreatGrandParentingEnumExample extends EnumWithGreatGrandParent {}
```

</details>
<details>
<summary>Typescript</summary>

```typescript
class EnumExample extends Enum {}

class NullableParentingEnumExample extends EnumWithNullableParent<EnumExample> {}
class ParentingEnumExample extends EnumWithParent<EnumExample> {}

class NullableGrandParentingEnumExample extends EnumWithNullableGrandParent<EnumExample, NullableParentingEnumExample> {}
class GrandParentingEnumExample extends EnumWithGrandParent<EnumExample, ParentingEnumExample> {}

class NullableGreatGrandParentingEnumExample extends EnumWithNullableGreatGrandParent<NullableGrandParentingEnumExample, NullableParentingEnumExample, EnumExample> {}
class GreatGrandParentingEnumExample extends EnumWithGreatGrandParent<GrandParentingEnumExample, ParentingEnumExample, EnumExample> {}
```

</details>

</details>
<details>
<summary>Parenting companion extension</summary>

The parent `companion enum` do use inheritance, but not the direct inheritance.

Meaning that if `Enum1` has a parent field `Enum2`. `Enum2` cannot receive a `Enum1` through its `companion enum`,
but the opposite is possible.
`Enum1` can receive a `Enum2` through its `companion enum`.

<details>
<summary>Javascript</summary>

```javascript
class CompanionEnum_EnumExample extends CompanionEnum {
    static #instance
    constructor() { super(EnumExample,) }
    static get get() { CompanionEnum_EnumExample.#instance ??= new CompanionEnum_EnumExample() }
}
```

```javascript
class CompanionEnum_ParentingEnumExample extends CompanionEnumWithParent {
    static #instance
    constructor() { super(EnumExample, ParentingEnumExample,) }
    static get get() { CompanionEnum_ParentingEnumExample.#instance ??= new CompanionEnum_ParentingEnumExample() }
}
```

```javascript
class CompanionEnum_GrandParentingEnumExample extends CompanionEnumWithGrandParent {
    static #instance
    constructor() { super(EnumExample, ParentingEnumExample, GrandParentingEnumExample,) }
    static get get() { CompanionEnum_GrandParentingEnumExample.#instance ??= new CompanionEnum_GrandParentingEnumExample() }
}
```

</details>
<details>
<summary>Typescript</summary>

```typescript
class CompanionEnum_EnumExample extends CompanionEnum<EnumExample, typeof EnumExample> {
    static #instance?: CompanionEnum_EnumExample
    private constructor() { super(EnumExample,) }
    public static get get() { CompanionEnum_EnumExample.#instance ??= new CompanionEnum_EnumExample() }
}
```

```typescript
class CompanionEnum_ParentingEnumExample extends CompanionEnumWithParent<EnumExample, typeof EnumExample, ParentingEnumExample, typeof ParentingEnumExample> {
    static #instance?: CompanionEnum_ParentingEnumExample
    private constructor() { super(EnumExample, ParentingEnumExample,) }
    public static get get() { CompanionEnum_ParentingEnumExample.#instance ??= new CompanionEnum_ParentingEnumExample() }
}
```

```typescript
class CompanionEnum_GrandParentingEnumExample extends CompanionEnumWithGrandParent<EnumExample, typeof EnumExample, ParentingEnumExample, typeof ParentingEnumExample, GrandParentingEnumExample, typeof GrandParentingEnumExample> {
    static #instance?: CompanionEnum_GrandParentingEnumExample
    private constructor() { super(EnumExample, ParentingEnumExample, GrandParentingEnumExample,) }
    public static get get() { CompanionEnum_GrandParentingEnumExample.#instance ??= new CompanionEnum_GrandParentingEnumExample() }
}
```

</details>

</details>

It also uses utility classes like the internal `Helper`
and the public `EnumConstants` in order to be accessible
outside the scope of the enums.

### Java implementation

This implementation does work independently of the `Kotlin` implementation.
Meaning that a `enum class` in `Kotlin` would not work with a `enum` in `Java`.
But an adaptor could be used in these cases.
Also, if you intend to use this implementation with `Kotlin` directly,
then use the `Kotlin` implementation since it is more optimized for it.

<details>
<summary>Simple example</summary>

```java
import github.io.joookiwi.java.enumerable.Enumerable;
enum Example implements Enumerable<Example> {}
```
```java
import github.io.joookiwi.java.enumerable.Enum;
class Example extends Enum<Example> {}
```

</details>
<details>
<summary>Parenting enum</summary>

You can use the interface directly when implementing the `enum` directly

```java
import github.io.joookiwi.java.enumerable.Enumerable;
enum EnumExample implements Enumerable<EnumExample> {}
```
```java
import github.io.joookiwi.java.enumerable.EnumerableWithParent;
import org.jetbrains.annotations.Nullable;
enum ParentingEnumExample
    implements EnumerableWithParent<EnumExample> {

    private final EnumExample parent;
    ParentingEnumExample() { this(null); }
    ParentingEnumExample(@Nullable EnumExample parent) { this.parent = parent; }
    @Override public final @Nullable EnumExample getParent() { return parent; }

}
```
```java
import github.io.joookiwi.java.enumerable.EnumerableWithGrandParent;
import org.jetbrains.annotations.Nullable;
enum GrandParentingEnumExample
    implements EnumerableWithGrandParent<EnumExample, ParentingEnumExample> {

    private final ParentingEnumExample parent;
    private final EnumExample grandParent;
    GrandParentingEnumExample() { this(null, null); }
    GrandParentingEnumExample(@Nullable ParentingEnumExample parent) { this(parent, null); }
    GrandParentingEnumExample(@Nullable ParentingEnumExample parent, @Nullable EnumExample grandParent) {
        this.parent = parent;
        this.grandParent = grandParent;
    }
    @Override public final @Nullable ParentingEnumExample getParent() { return parent; }
    @Override public final @Nullable EnumExample getGrandParent() { return grandParent; }

}
```

Or you can use the `"indirect"` inheritance when using a `class`.

_Of course, the interface is still possible, but less recommended._

```java
import github.io.joookiwi.java.enumerable.Enum;
class EnumExample extends Enum<EnumExample> {

    private EnumExample() { super(); }

}
```
```java
import github.io.joookiwi.java.enumerable.EnumeWithParent;
import org.jetbrains.annotations.Nullable;
class ParentingEnumExample
    extends EnumWithParent<ParentingEnumExample, EnumExample> {

    private ParentingExample() { super(); }
    private ParentingExample(EnumExample parent) { super(parent); }

}
```
```java
import github.io.joookiwi.java.enumerable.EnumWithGrandParent;
import org.jetbrains.annotations.Nullable;
class GrandParentingEnumExample
    extends EnumeWithGrandParent<GrandParentingEnumExample, ParentingEnumExample, EnumExample> {

    private ParentingExample() { super(); }
    private ParentingExample(@Nullable ParentingEnumExample parent) { super(parent); }
    private ParentingExample(@Nullable ParentingEnumExample parent, @Nullable EnumExample grandParent) { super(parent, grandParent); }

}
```

</details>

### Kotlin implementation

This implementation does work independently of the `Java` implementation.
Meaning that a `enum` in `Java` would not work with a `enum class` in `Kotlin`.
But an adaptor could be used in these cases.
Also, if you intend to use this implementation with `Java` directly,
then use the `Java` implementation since it is more optimized for it.

<details>
<summary>Simple example</summary>

```kotlin
enum Example {}
```
```kotlin
import org.github.joookiwi.kotlin.enumerable.Enum
class Example: Enum()
```

</details>
<details>
<summary>Parenting enum</summary>

You can use the interface directly when implementing the `enum` directly

```kotlin
import org.github.joookiwi.kotlin.enumerable.Enumerable
enum EnumExample: Enumerable<EnumExample>
```
```kotlin
import org.github.joookiwi.kotlin.enumerable.EnumerableWithParent
enum ParentingEnumExample(
    override val parent: EnumExample? = null,
): EnumerableWithParent<ParentingEnumExample, EnumExample>
```
```kotlin
import org.github.joookiwi.kotlin.enumerable.EnumerableWithGrandParent
enum GrandParentingEnumExample(
    override val parent: ParentingEnumExample? = null,
    override val grandParent: EnumExample? = null,
): EnumerableWithGrandParent<GrandParentingEnumExample, ParentingEnumExample, EnumExample>
```

Or you can use the `"indirect"` inheritance when using a `class`.

_Of course, the interface is still possible, but less recommended._

```kotlin
import org.github.joookiwi.kotlin.enumerable.Enum
class EnumExample: Enum<EnumExample>()
```
```kotlin
import org.github.joookiwi.kotlin.enumerable.EnumWithParent
class ParentingEnumExample(
    override val parent: EnumExample? = null,
): EnumWithParent<ParentingEnumExample, EnumExample>(parent)
```
```kotlin
import org.github.joookiwi.kotlin.enumerable.EnumWithGrandParent
class GrandParentingEnumExample(
    override val parent: ParentingEnumExample? = null,
    override val grandParent: EnumExample? = null,
): EnumWithGrandParent<GrandParentingEnumExample, ParentingEnumExample, EnumExample>(parent, grandParent)
```

</details>

### PHP implementation

This implementation is only in a concept phase.
It may change at any time depending on how it can really be used in `PHP`.

<details>
<summary>Simple example</summary>

```php
use joookiwi\enumerable\EnumerableTrait;
enum Example {
    use EnumerableTrait<Example>;
}
```
```php
use joookiwi\enumerable\Enum;
class Example extends Enum<Example> {}
```

</details>
<details>
<summary>Parenting enum</summary>

Since the `PHP` implementation is only in concept phase, this part may be incomplete
or not compilable.

But you can use the _"indirect"_ inheritance when using a `class`.

```php
use joookiwi\enumerable\Enum;
class EnumExample extends Enum<EnumExample> {

    private function __construct() { parent::__construct(); }

}
```
```php
use joookiwi\enumerable\EnumeWithParent;
class ParentingEnumExample
    extends EnumWithParent<ParentingEnumExample, EnumExample> {

    private function __construct(parent: EnumExample|null = null) { parent::__construct(parent); }

}
```
```php
use joookiwi\enumerable\EnumWithGrandParent;
class GrandParentingEnumExample
    extends EnumeWithGrandParent<GrandParentingEnumExample, ParentingEnumExample, EnumExample> {

    private ParentingExample(ParentingEnumExample|null parent = null, EnumExample|null grandParent = null) { parent::__construct(parent, grandParent); }

}
```

</details>

### C# implementation

This implementation is only in a concept phase, but it has great features to use.
Keep in mind that extension function can be used for the already existing `enum`s.
It may change at any time depending on how it can really be used in `C#`.

<details>
<summary>Simple example</summary>

```csharp
enum Example {}
```
```csharp
using joookiwi.enumerable;
class Example: Enum<Example> {}
```

</details>
<details>
<summary>Parenting enum</summary>

Or you can use the `"indirect"` inheritance when using a `class`.

_Of course, the interface is still possible, but less recommended._

```csharp
using joookiwi.enumerable;
class EnumExample: Enum<EnumExample> {

    private EnumExample(): base() {}

}
```
```csharp
using joookiwi.enumerable;
class ParentingEnumExample:
    Enum<ParentingEnumExample, EnumExample?> {

    private ParentingExample(): base() {}
    private ParentingExample(EnumExample? parent): base(parent) {}

}
```
```csharp
using joookiwi.enumerable;
class GrandParentingEnumExample:
    Enum<GrandParentingEnumExample, ParentingEnumExample?, EnumExample?> {

    private ParentingExample(): base() {}
    private ParentingExample(ParentingEnumExample? parent): base(parent) {}
    private ParentingExample(ParentingEnumExample? parent, EnumExample? grandParent): base(parent, grandParent) {}

}
```

And the non-nullable can be used instead

```csharp
using joookiwi.enumerable;
class ParentingEnumExample:
    Enum<ParentingEnumExample, EnumExample> {

    private ParentingExample(): base() {} // This will throw an exception
    private ParentingExample(EnumExample parent): base(parent) {}

}
```
```csharp
using joookiwi.enumerable;
class GrandParentingEnumExample:
    Enum<GrandParentingEnumExample, ParentingEnumExample, EnumExample> {

    private ParentingExample(t): base() {} // This will throw an exception
    private ParentingExample(ParentingEnumExample parent): base(parent) {} // This will throw an exception
    private ParentingExample(ParentingEnumExample parent, EnumExample grandParent): base(parent, grandParent) {}

}
```

</details>

## Version history

| JS / TS version  | Date                 | Quick note                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.8.2            | December 12th, 2024  | [collection][collection] (~~1.11.2~~ → [1.11.3][js-collection-v1.11])                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.8.1            | November 19th, 2024  | [collection][collection] (~~1.11.1~~ → [1.11.2][js-collection-v1.11])                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.8.0            | November 7th, 2024   | [collection][collection] (~~1.10.0~~ → [1.11.1][js-collection-v1.11])                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.7.0            | October 8th, 2024    | [collection][collection] (~~1.9.3~~ → [1.10.0][js-collection-v1.10])                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.6.3            | August 15th, 2024    | [collection][collection] (~~1.9.2~~ → [1.9.3][js-collection-v1.9])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.6.2            | July 23rd, 2024      | [collection][collection] (~~1.9.1~~ → [1.9.2][js-collection-v1.9])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.6.1            | July 21st, 2024      | [collection][collection] (~~1.9.0~~ → [1.9.1][js-collection-v1.9])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.6.0            | July 21st, 2024      | [collection][collection] (~~1.8.0~~ → [1.9.0][js-collection-v1.9])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.5.0            | March 31st, 2024     | Addition of [type][type] to the dependency,<br/>Update to the documentation across the project,<br/>Addition of some future plan                                                                                                                                                                                                                                                                                                                                  |
| 3.4.0            | February 19th, 2024  | Formatting across the whole project,<br/>[collection][collection] (~~1.6.1~~ → [1.7.0][js-collection-v1.7])                                                                                                                                                                                                                                                                                                                                                       |
| 3.3.1            | December 23rd, 2023  | [collection][collection] (~~1.6.0~~ → [1.6.1][js-collection-v1.6])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.3.0            | December 4th, 2023   | [collection][collection] (~~1.5.0~~ → [1.6.0][js-collection-v1.6])                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.2.0            | September 28th, 2023 | [collection][collection] (~~1.4.0~~ → [1.5.0][js-collection-v1.5]),<br/>Change of the exception hierarchy to be only toward the Javascript instead of Java-like                                                                                                                                                                                                                                                                                                   |
| 3.1.0            | September 8th, 2023  | [collection][collection] (~~1.3.0~~ → [1.4.0][js-collection-v1.4])                                                                                                                                                                                                                                                                                                                                                                                                |
| [3.0.0][js-v3.0] | August 14th, 2023    | Big changes to make the [CompanionEnum](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/companion/CompanionEnum.ts) more extensible via its protected methods                                                                                                                                                                                                                                                                                    |
| [2.7.0][js-v2.7] | July 27th, 2023      | [collection][collection] (~~1.1.0~~ → [1.2.0][js-collection-v1.2])                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.6.1            | July 26th, 2023      | Fix on the **\[Symbol.iterator]()** that gave an error since it uses the **yield***                                                                                                                                                                                                                                                                                                                                                                               |
| 2.6.0            | July 23rd, 2023      | [collection][collection] (~~1.0.4~~ → [1.1.0][js-collection-v1.1])                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.5.1            | July 14th, 2023      | The file `EnumHelper` was not exported                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [2.5.0][js-v2.5] | July 14th, 2023      | New Enum inheritor were added ([parent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithParent.ts), [grandparent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithGrandParent.ts) and [great-grandparent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithGreatGrandParent.ts) with their nullable counterpart),<br/>Relocation & separation of the `helper` methods in its own folder |
| 2.4.2            | July 4th, 2023       | The file `EnumHelper` was exported as a type instead of directly                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.4.1            | July 4th, 2023       | The files were not exported in the [index file](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/index.ts)                                                                                                                                                                                                                                                                                                                                        |
| [2.4.0][js-v2.4] | July 3rd, 2023       | The dependency of `collection` is now a standalone package                                                                                                                                                                                                                                                                                                                                                                                                        |
| [2.3.0][js-v2.3] | June 18th, 2023      | New and renaming of some methods in `collection` (see [the release note](https://github.com/joooKiwi/enumeration/releases/tag/v2.3.0-js))                                                                                                                                                                                                                                                                                                                         |
| 2.2.3            | June 13th, 2023      | Fix on the `collection` when receiving receiving a `Set` or `Array` of 1                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2.2            | June 12th, 2023      | Fix on the reverse order of the enum fields initialization                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.2.1            | June 12th, 2023      | Fix of `this[0]` not set when receiving an array of 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| [2.2.0][js-v2.2] | June 12th, 2023      | New `join`, `toWeakSet`, `reverse` & `hasNull` in `collection`                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.1.1            | June 8th, 2023       | Fix on the [package.json](https://github.com/joooKiwi/enumeration/blob/main/javascript/package.json) file                                                                                                                                                                                                                                                                                                                                                         |
| 2.1.0            | June 6th, 2023       | Change from absolute imports to relative one _(for better dependant utilisation)_                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0.0            | February 2nd, 2023   | Change from `static` methods implementation to a `companion enum` implementation                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2.0            | Novembre 20th, 2022  | New `filterByIndex` & `find` in `collection`                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1.0            | November 19th, 2022  | New `has`, `join`, `filter` in the `collection`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0.6            | November 12nd, 2022  | Addition of some forgotten types to be exported                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0.5            | November 11st, 2022  | The first version _(after few tentative of publishing it)_                                                                                                                                                                                                                                                                                                                                                                                                        |

<!-- Version references -->

[js-v2.2]: https://github.com/joooKiwi/enumeration/releases/tag/v2.2.0-js
[js-v2.3]: https://github.com/joooKiwi/enumeration/releases/tag/v2.3.0-js
[js-v2.4]: https://github.com/joooKiwi/enumeration/releases/tag/v2.4.0-js
[js-v2.5]: https://github.com/joooKiwi/enumeration/releases/tag/v2.5.0-js
[js-v2.7]: https://github.com/joooKiwi/enumeration/releases/tag/v2.7.0-js
[js-v3.0]: https://github.com/joooKiwi/enumeration/releases/tag/v3.0.0-js

[collection]: https://github.com/joooKiwi/collection

[js-collection-v1.1]:  https://github.com/joooKiwi/collection/releases/tag/v1.1.0-js
[js-collection-v1.2]:  https://github.com/joooKiwi/collection/releases/tag/v1.2.0-js
[js-collection-v1.4]:  https://github.com/joooKiwi/collection/releases/tag/v1.4.0-js
[js-collection-v1.5]:  https://github.com/joooKiwi/collection/releases/tag/v1.5.0-js
[js-collection-v1.6]:  https://github.com/joooKiwi/collection/releases/tag/v1.6.1-js
[js-collection-v1.7]:  https://github.com/joooKiwi/collection/releases/tag/v1.7.1-js
[js-collection-v1.9]:  https://github.com/joooKiwi/collection/releases/tag/v1.9.3-js
[js-collection-v1.10]: https://github.com/joooKiwi/collection/releases/tag/v1.10.0-js
[js-collection-v1.11]: https://github.com/joooKiwi/collection/releases/tag/v1.11.3-js

[type]: https://github.com/joooKiwi/type

<!-- Version references -->
