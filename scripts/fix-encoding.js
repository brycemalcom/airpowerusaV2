#!/usr/bin/env node

/**
 * Post-build script to fix HTML entity encoding issues
 * This script runs after the build to ensure apostrophes display correctly
 */

const fs = require('fs');
const path = require('path');

function fixEncodingInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Fix common HTML entities that cause display issues
    const fixes = [
      { search: /&apos;/g, replace: "'" },
      { search: /&#x27;/g, replace: "'" },
      { search: /&#39;/g, replace: "'" },
      { search: /&quot;/g, replace: '"' },
      { search: /&#x22;/g, replace: '"' },
      { search: /&#34;/g, replace: '"' }
    ];
    
    fixes.forEach(fix => {
      if (fix.search.test(content)) {
        content = content.replace(fix.search, fix.replace);
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed encoding in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function scanDirectory(dir, extensions = ['.html', '.js']) {
  let fixedFiles = 0;
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.git', '.next/cache'].includes(item.name)) {
          fixedFiles += scanDirectory(fullPath, extensions);
        }
      } else if (item.isFile()) {
        const ext = path.extname(item.name);
        if (extensions.includes(ext)) {
          if (fixEncodingInFile(fullPath)) {
            fixedFiles++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error scanning directory ${dir}:`, error.message);
  }
  
  return fixedFiles;
}

function main() {
  console.log('🔍 Scanning for HTML entity encoding issues...');
  
  const buildDir = path.join(process.cwd(), '.next');
  
  if (!fs.existsSync(buildDir)) {
    console.log('⚠️  Build directory not found, skipping encoding fix');
    return;
  }
  
  const fixedFiles = scanDirectory(buildDir, ['.html', '.js']);
  
  if (fixedFiles > 0) {
    console.log(`✅ Fixed encoding issues in ${fixedFiles} files`);
  } else {
    console.log('✅ No encoding issues found');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { fixEncodingInFile, scanDirectory };
