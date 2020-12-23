import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

export default {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/services/**/*.ts',
  ],
  coverageDirectory: '<rootDir>/src/tests/coverage',
  coverageReporters: [
    'json',
    'lcov',
  ],
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/tests/**/*.spec.ts',
  ],
};