/* eslint-disable no-console */
import { download } from '@goatjs/download';
import path from 'node:path';
import { dbz } from '@goatjs/dbz';
import { createGitClient } from '@goatjs/node/git';

const git = createGitClient();
await dbz.checkGitStatus(git);

const modernNormalizerUrl = 'https://raw.githubusercontent.com/sindresorhus/modern-normalize/refs/heads/main/modern-normalize.css';
const tailwindPreflightUrl = 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/packages/tailwindcss/preflight.css';
const referencePath = path.join(process.cwd(), '.reference');

await Promise.all([download(modernNormalizerUrl, { directory: referencePath }), download(tailwindPreflightUrl, { directory: referencePath })]);
console.log('References updated');
