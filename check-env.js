import { writeFileSync } from 'fs';
const out = `node=${process.versions.node}\n`;
writeFileSync('env-check.txt', out);
