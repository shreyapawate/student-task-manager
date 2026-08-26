const fs = require("fs");

const requiredFiles = [
    "public/index.html",
    "script.js",
    "style.css",
    "package.json"
];

let buildSuccessful = true;

for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        console.error(`Build Failed: ${file} not found`);
        buildSuccessful = false;
    }
}

if (!buildSuccessful) {
    process.exit(1);
}

console.log("Application files validated successfully.");
console.log("Build completed successfully.");
