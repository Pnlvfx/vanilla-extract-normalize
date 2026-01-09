import { download } from '@goatjs/download';
import path from 'node:path';
import { checkGitStatus } from '@goatjs/dbz/git';

await checkGitStatus();

const modernNormalizerUrl = 'https://raw.githubusercontent.com/sindresorhus/modern-normalize/refs/heads/main/modern-normalize.css';
const tailwindPreflightUrl = 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/packages/tailwindcss/preflight.css';
const referencePath = path.join(process.cwd(), '.reference');

await download(modernNormalizerUrl, { directory: referencePath });
await download(tailwindPreflightUrl, { directory: referencePath });
