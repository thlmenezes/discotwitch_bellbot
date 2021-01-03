import { pathsToModuleNameMapper } from "ts-jest/utils"

import { compilerOptions } from "./tsconfig.json"

export default {
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts"
  ],
  coverageDirectory: "<rootDir>/tests_coverage",
  coverageReporters: [
    "json",
    "lcov"
  ],
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/*.spec.ts"
  ]
}