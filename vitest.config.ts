import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    workspace: path.resolve(__dirname, './vitest.workspace.ts'),
    setupFiles: path.resolve(__dirname, 'src/test/setup.ts'),
    exclude: [...defaultExclude, '**/*.svelte**'],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
    coverage: {
        provider:'v8',
      include: ['src/**/*'],
      exclude: [
        'test/**',
        'vite.*.ts',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.config.*',
        '**/snapshot-tests/**',
        '**/*.solution.tsx',
        '**/coverage/**',
      ],
      all: true,
    },
  },
});