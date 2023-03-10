import type {Config} from "jest"

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config = {
    clearMocks:               true,
    collectCoverage:          true,
    collectCoverageFrom:      ["./src/util/enumerable/**",],
    coverageDirectory:        "../coverage",
    coverageProvider:         "v8",
    errorOnDeprecated:        true,
    extensionsToTreatAsEsm:   [".ts",],
    moduleDirectories:        ["node_modules", "src/util",],
    modulePathIgnorePatterns: ["./dist/", "./example/"],
    preset:                   "ts-jest",
    rootDir:                  "./test",
    setupFilesAfterEnv:       ["jest-extended/all",],
    testEnvironment:          "jsdom",
    verbose:                  true,
}

export default config