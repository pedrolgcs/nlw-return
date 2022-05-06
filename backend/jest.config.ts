
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  bail: true,

  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/useCases/**/*.ts',
    '!<rootDir>/src/modules/**/useCases/**/*Error.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['lcov', 'text-summary'],

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),

  testEnvironment: 'node',

  testMatch: ['**/*.spec.ts'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // swc
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
