// check-imports.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Helpers to handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "src");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

// Helper: check if a file exists with exact casing
function fileExistsCaseSensitive(filePath) {
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  return fs.readdirSync(dir).includes(fileName);
}

// Scan all JS/JSX files
walkDir(SRC_DIR, (filePath) => {
  if (!filePath.endsWith(".js") && !filePath.endsWith(".jsx")) return;

  const content = fs.readFileSync(filePath, "utf-8");
  const importRegex = /import\s+.*\s+from\s+['"](.+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    let importPath = match[1];

    // Only check relative imports
    if (!importPath.startsWith(".")) continue;

    const resolvedPathJS = path.join(path.dirname(filePath), importPath + ".js");
    const resolvedPathJSX = path.join(path.dirname(filePath), importPath + ".jsx");
    const resolvedPathIndexJS = path.join(path.dirname(filePath), importPath, "index.js");
    const resolvedPathIndexJSX = path.join(path.dirname(filePath), importPath, "index.jsx");

    const pathsToCheck = [resolvedPathJS, resolvedPathJSX, resolvedPathIndexJS, resolvedPathIndexJSX];

    const exists = pathsToCheck.some((p) => fs.existsSync(p) && fileExistsCaseSensitive(p));

    if (!exists) {
      console.log(`⚠️  Import mismatch: "${importPath}" in file ${filePath}`);
    }
  }
});
