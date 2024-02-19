/*******************************************************************************
 Copyright (c) 2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Config} from "jest"

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config = {
    clearMocks:               true,
    collectCoverage:          true,
    collectCoverageFrom:      ["./src/**/*.ts", "!./src/exception/**/*", "!**/index.ts", "!**/*.types.ts", "!**/*.declaration.ts", "!**/Enumerable*.ts",],
    coverageDirectory:        "./coverage",
    coverageProvider:         "v8",
    coverageReporters:        ["lcov" , ["text", {skipFull: true,},],],
    errorOnDeprecated:        true,
    extensionsToTreatAsEsm:   [".ts",],
    moduleDirectories:        ["node_modules", "src/util",],
    modulePathIgnorePatterns: ["./dist/", "./example/",],
    preset:                   "ts-jest",
    roots:                    ["./test", "./src",],
    setupFilesAfterEnv:       ["jest-extended/all",],
    testEnvironment:          "jsdom",
    verbose:                  true,
}

export default config
