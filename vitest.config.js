// Vitest configuration for the Multilingual Volunteer Platform.
//
// The project uses ES modules ("type": "module" in package.json), so all
// .js files — including test files and the framework-free Vanilla JS pure
// logic modules — are loaded as ESM. Vitest handles this natively without
// extra configuration.
//
// happy-dom is the default environment so that DOM-dependent client tests
// have access to `document`, `window`, `sessionStorage`, etc. Pure-logic
// property tests run unaffected in this environment.
//
// Tests run in --run mode (single execution, not watch) via the npm scripts
// defined in package.json.

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // DOM environment for client-side tests; harmless for pure-logic tests.
    environment: 'happy-dom',

    // Collect every *.test.js file under the tests/ directory tree.
    include: ['tests/**/*.test.js'],

    // ESM support is automatic when package.json declares "type": "module".
    // No additional transform or alias configuration is required for
    // importing Vanilla JS ES modules in tests.
  },
});
