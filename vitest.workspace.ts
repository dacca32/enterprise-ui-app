import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
    {
        test: {
            include: ['src/**/*.{js, jsx, ts, tsx'],
            environment: 'node',
        },
    },
    {
        test: {
            include: ['src/tests/**/*.{js, jsx, ts, tsx'],
            environment: 'jsdom',
        },
    }
])