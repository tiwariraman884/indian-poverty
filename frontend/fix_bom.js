import fs from 'fs';
import path from 'path';

const files = [
    'package.json',
    'tsconfig.json',
    'tsconfig.node.json',
    'vite.config.ts'
];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.charCodeAt(0) === 0xFEFF) {
                console.log(`Removing BOM from ${file}`);
                content = content.slice(1);
                fs.writeFileSync(filePath, content, 'utf8');
            } else {
                console.log(`No BOM found in ${file}`);
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    } else {
        console.log(`File not found: ${file}`);
    }
});
