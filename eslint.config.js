import { nodeConfigs } from '@goatjs/node-eslint';
import { defineConfig, globalIgnores } from '@eslint/config-helpers';

export default defineConfig([globalIgnores(['dist']), ...nodeConfigs({ tsconfigRootDir: import.meta.dirname })]);
