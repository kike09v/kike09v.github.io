import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputRoot = join(process.cwd(), 'dist', 'kike09v.github.io');
const entries = await readdir(outputRoot, { withFileTypes: true });
const browserDirectory = entries.some(
  (entry) => entry.isDirectory() && entry.name === 'browser',
)
  ? join(outputRoot, 'browser')
  : outputRoot;

await copyFile(
  join(browserDirectory, 'index.html'),
  join(browserDirectory, '404.html'),
);

const englishDirectory = join(browserDirectory, 'en');
await mkdir(englishDirectory, { recursive: true });
await copyFile(
  join(browserDirectory, 'index.html'),
  join(englishDirectory, 'index.html'),
);

console.log('Created GitHub Pages routes: 404.html and en/index.html');
