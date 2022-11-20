# Enumerable

This project is made to have an implementation of `enum class` similar in each language.
_(or at least give a similar behaviour)_

## Implementation by language

| Language                  |                                  Note                                  | Implementation                                                                                                |
|:--------------------------|:----------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| Javascript<br/>Typescript | [Published to npm](https://www.npmjs.com/package/@joookiwi/enumerable) | Custom implementation with`class ChildEnum extends Enum`                                                      |
| Java                      |                             _Not created_                              | Utility class<br/>+ Custom implementation with `class ChildEnum extends Enum`                                 |
| Kotlin                    |                             _Not created_                              | Simple extension with`companion object: CompanionEnum()`<br/>+ Simple extension with`class ChildEnum: Enum()` |
| PHP                       |                             _Not created_                              | Utility methods<br/>+ `trait` implementation with `class ChildEnum { use Enum; }`                             |
| C#                        |                             _Not created_                              | Utility class<br/>+ Extension methods<br/>+ Custom implementation with`class ChildEnum: Enum`                 |

_(This may change once the implementation is made)_

## Version history

| Git version | Implementation version |
|-------------|------------------------|
| 1.1.0       | `JS / TS`: 1.1.0       |
| 1.0.1       | `JS / TS`: 1.0.6       |
| 1.0.0       | `JS / TS`: 1.0.5       |
