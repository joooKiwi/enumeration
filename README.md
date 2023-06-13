# Enumerable

This project is made to have an implementation of `enum class` similar in each language.
_Or at least give a similar behaviour_

## Implementation by language

_Note:_
The usage of `COMPANION_ENUM` in the extension can be changed to
`BasicCompanionEnum`, `CompanionEnumWithParent`,
`CompanionEnumWithGrandParent` or `CompanionEnumWithGreatGrandParent`.
And in `C#`, it uses the type system to its advantage (like for the [ValueTuple](https://learn.microsoft.com/dotnet/api/system.valuetuple)).

| Language                  |                                  Note                                  | Implementation                                                                                                                                                    |
|:--------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Javascript<br/>Typescript | [Published to npm](https://www.npmjs.com/package/@joookiwi/enumerable) | Utility class<br/> + Custom implementation `class ChildEnum extends Enum`<br/>+ Companion field `class ChildCompanion extends COMPANION_ENUM`                     |
| Java                      |                             _Not created_                              | Utility class<br/>+ Custom implementation `class ChildEnum extends Enum`<br/>+ Nested companion class `class ChildCompanion extends COMPANION_ENUM`               |
| Kotlin                    |                             _Not created_                              | Simple extension with`companion object: COMPANION_ENUM()`<br/>+ Simple extension with`class ChildEnum: Enum()`                                                    |
| PHP                       |                             _Not created_                              | Utility methods<br/>+ `trait` implementation with `class ChildEnum { use Enum; }`<br/>+ Companion field `class ChildCompanion extends COMPANION_ENUM`             |
| C#                        |                             _Not created_                              | Utility class<br/>+ Extension methods<br/>+ Custom implementation with`class ChildEnum: Enum`<br/>+ Nested companion class `class ChildCompanion: COMPANION_ENUM` |

_(This may change once the implementation is made)_

## Version history

| Git version | Implementation version |
|-------------|------------------------|
| 1.3.6       | `JS / TS`: 2.2.3       |
| 1.3.5       | `JS / TS`: 2.2.2       |
| 1.3.4       | `JS / TS`: 2.2.1       |
| 1.3.3       | `JS / TS`: 2.2.0       |
| 1.3.2       | `JS / TS`: 2.1.1       |
| 1.3.1       | `JS / TS`: 2.1.0       |
| 1.3.0       | `JS / TS`: 2.0.0       |
| 1.2.0       | `JS / TS`: 1.2.0       |
| 1.1.0       | `JS / TS`: 1.1.0       |
| 1.0.1       | `JS / TS`: 1.0.6       |
| 1.0.0       | `JS / TS`: 1.0.5       |
