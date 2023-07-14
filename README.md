# Enumerable

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

| Language                  |                               Published                                | class<br/>extension | native<br/>enum<br/>functionality | trait<br/>usage | annotation / attribute | utility                                       |
|:--------------------------|:----------------------------------------------------------------------:|---------------------|:----------------------------------|-----------------|------------------------|-----------------------------------------------|
| Javascript<br/>Typescript | [Published to npm](https://www.npmjs.com/package/@joookiwi/enumerable) | yes                 |                                   |                 |                        | `EnumHelper`, `EnumConstant`                  |
| Java                      |                         Maven _(in progress)_                          | yes                 | yes                               |                 | yes                    | `EnumHelper`, `EnumConstant`, `EnumMethods`   |
| Kotlin                    |                         Maven _(in progress)_                          | yes                 | yes                               |                 | yes                    | `EnumHelper`, `EnumConstant`, `EnumExtension` |
| PHP                       |                                Composer                                | not necessary       | not necessary                     | yes             | yes                    | `EnumHelper`, `EnumConstant`  `EnumMethods`   |
| C#                        |                                 Nugget                                 | yes                 | yes                               |                 | yes                    | `EnumHelper`, `EnumConstant`, `EnumExtension` |

_(This may change once the implementation is made)_

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
```

```javascript
class ParentingEnumExample extends Enum {
    #parent
    /**
     * @param {EnumExample} parent
     * @private
     */
    constructor(parent = null) {
        super()
        this.#parent = parent
    }
    get parent() { return this.#parent }
}
```

```javascript
class GrandParentingEnumExample extends Enum {
    #parent
    #grandParent
    /**
     * @param {EnumExample} grandParent
     * @param {ParentingEnumExample} parent
     * @private
     */
    constructor(parent = null, grandParent = null) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
    }
    get parent() { return this.#parent }
    get grandParent() { return this.#grandParent }
}
```

</details>
<details>
<summary>Typescript</summary>

```typescript
class EnumExample extends Enum {}
```

```typescript
class ParentingEnumExample
    extends Enum
    implements EnumerableWithParent<EnumExample | null> {
    #parent
    private constructor(parent: EnumExample | null = null) {
        super()
        this.#parent = parent
    }
    get parent(): EnumExample | null { return this.#parent }
}
```

```typescript
class GrandParentingEnumExample
    extends Enum {
    #parent
    #grandParent
    private constructor(parent: EnumExample | null = null, grandParent: ParentingEnumExample | null = null) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
    }
    get parent(): EnumExample | null { return this.#parent }
    get grandParent(): ParentingEnumExample | null { return this.#grandParent }
}
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

It also utilizes utility classes like `EnumHelper` and `EnumConstants` in order to be accessible
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

You can utilize the interface directly when implementing the `enum` directly

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

You can utilize the interface directly when implementing the `enum` directly

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

## Contribution

You can contribute to the project by the [GitHub sponsor](https://github.com/sponsors/joooKiwi)
_(and eventually other methods)_.
This is still an early project.
But it can become so much more by the contributions.

## Version history

| JS / TS version                                                            | Date                | Quick note                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [2.5.0](https://github.com/joooKiwi/enumeration/releases/tag/v2.5.0-js)    | July 14th, 2023     | New Enum inheritor were added ([parent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithParent.ts), [grandparent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithGrandParent.ts) and [great-grandparent](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/EnumWithGreatGrandParent.ts) with their nullable counterpart),<br/>Relocation & separation of the `helper` methods in its own folder |
| 2.4.2                                                                      | July 4th, 2023      | The file [EnumHelper](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/helper/EnumHelper.ts) was exported as a type instead of directly                                                                                                                                                                                                                                                                                                           |
| 2.4.1                                                                      | July 4th, 2023      | The files were not exported in the [index file](https://github.com/joooKiwi/enumeration/blob/main/javascript/src/index.ts)                                                                                                                                                                                                                                                                                                                                        |
| [2.4.0](https://github.com/joooKiwi/enumeration/releases/tag/v2.4.0-js-ts) | July 3rd, 2023      | The dependency of `collection` is now a standalone package                                                                                                                                                                                                                                                                                                                                                                                                        |
| [2.3.0](https://github.com/joooKiwi/enumeration/releases/tag/v1.3.7)       | April 18th, 2023    | New and renaming of some methods in `collection` (see [the release note](https://github.com/joooKiwi/enumeration/releases/tag/v1.3.7))                                                                                                                                                                                                                                                                                                                            |
| 2.2.3                                                                      | April 13th, 2023    | Fix on the `collection` when receiving receiving a `Set` or `Array` of 1                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2.2                                                                      | April 12th, 2023    | Fix on the reverse order of the enum fields initialization                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.2.1                                                                      | April 12th, 2023    | Fix of `this[0]` not set when receiving an array of 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| [2.2.0](https://github.com/joooKiwi/enumeration/releases/tag/v1.3.3)       | April 12th, 2023    | New `join` implementation in `collection`,<br/>New `toWeakSet`, `reverse` & `hasNull` in `collection`                                                                                                                                                                                                                                                                                                                                                             |
| 2.1.1                                                                      | April 8th, 2023     | Fix on the [package.json](https://github.com/joooKiwi/enumeration/blob/main/javascript/package.json) file                                                                                                                                                                                                                                                                                                                                                         |
| 2.1.0                                                                      | April 6th, 2023     | Change from absolute imports to relative one _(for better dependant utilisation)_                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0.0                                                                      | February 2nd, 2023  | Change from `static` methods implementation to a `companion enum` implementation                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2.0                                                                      | Novembre 20th, 2022 | New `filterByIndex` & `find` in `collection`                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1.0                                                                      | November 19th, 2022 | New `has`, `join`, `filter` in the `collection`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0.6                                                                      | November 12nd, 2022 | Addition of some forgotten types to be exported                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0.5                                                                      | November 11st, 2022 | The first version _(after few tentative of publishing it)_                                                                                                                                                                                                                                                                                                                                                                                                        |
