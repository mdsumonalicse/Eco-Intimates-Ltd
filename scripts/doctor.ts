/**
 * System Doctor Script
 * Checks for common environment and dependency issues.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

function checkDependencies() {
  console.log('\x1b[36m%s\x1b[0m', '--- System Diagnosis Starting ---');
  
  const pkgPath = join(process.cwd(), 'package.json');
  const npmrcPath = join(process.cwd(), '.npmrc');
  
  if (!existsSync(pkgPath)) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: package.json missing!');
    process.exit(1);
  }

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const reactVersion = pkg.dependencies.react || '';
  const rsmVersion = pkg.dependencies['react-simple-maps'] || '';

  console.log(`- Project: ${pkg.name}`);
  console.log(`- React Version: ${reactVersion}`);
  console.log(`- RSM Version: ${rsmVersion}`);

  // Check for known conflict
  if (reactVersion.includes('19') && rsmVersion.includes('3')) {
    console.warn('\x1b[33m%s\x1b[0m', 'Warning: High-risk peer dependency conflict detected (React 19 + react-simple-maps 3).');
    
    if (existsSync(npmrcPath)) {
      const npmrc = readFileSync(npmrcPath, 'utf8');
      if (npmrc.includes('legacy-peer-deps=true')) {
        console.log('\x1b[32m%s\x1b[0m', 'Fix found: .npmrc is correctly bypassing peer conflicts.');
      } else {
        console.error('\x1b[31m%s\x1b[0m', 'Error: .npmrc is missing the legacy-peer-deps workaround. Build will likely fail on Netlify.');
      }
    } else {
      console.error('\x1b[31m%s\x1b[0m', 'Error: .npmrc file missing. Build will likely fail on Netlify.');
    }
  }

  console.log('\x1b[36m%s\x1b[0m', '--- Diagnosis Complete ---');
}

checkDependencies();
