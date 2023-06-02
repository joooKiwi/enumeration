# Enumerable

This project is made to have an implementation of `enum class` similar in each language.
_Or at least give a similar behaviour_

## Implementation by language

| Language                  |                                  Note                                  | Implementation                                                                                                                                                                                    |
|:--------------------------|:----------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Javascript<br/>Typescript | [Published to npm](https://www.npmjs.com/package/@joookiwi/enumerable) | Utility class<br/> + Custom implementation `class ChildEnum extends Enum`<br/>+ Companion field `class ChilCompanion extends "CompanionEnum"`                                                     |
| Java                      |                             _Not created_                              | Utility class<br/>+ Custom implementation `class ChildEnum extends Enum`<br/>+ Nested companion class `@CompanionOf(ChildEnum::class) class ChildCompanion extends CompanionEnum`                 |
| Kotlin                    |                             _Not created_                              | Simple extension with`object: CompanionEnum()`<br/>+ Simple extension with`class ChildEnum: Enum()`                                                                                               |
| PHP                       |                             _Not created_                              | Utility methods<br/>+ `trait` implementation with `class ChildEnum { use Enum; }`<br/>+ Companion field `class ChildCompanion extends "CompanionEnum"`                                            |
| C#                        |                             _Not created_                              | Utility class<br/>+ Extension methods<br/>+ Custom implementation with`class ChildEnum: Enum`<br/>+ Nested companion class `[CompanionOf(typeof(ChildEnum))] class ChildCompanion: CompanionEnum` |

_(This may change once the implementation is made)_

## Version history

| Git version | Implementation version |
|-------------|------------------------|
| 1.3.0       | `JS / TS`: 2.0.0       |
| 1.2.0       | `JS / TS`: 1.2.0       |
| 1.1.0       | `JS / TS`: 1.1.0       |
| 1.0.1       | `JS / TS`: 1.0.6       |
| 1.0.0       | `JS / TS`: 1.0.5       |
