import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputPath = path.join(__dirname, 'Input.txt');

readFile(inputPath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }

    let strt = 50;
    let count = 0;
    const lines = data.trim().split(/\r?\n/).filter(Boolean);
    
    lines.forEach((item)=>{
       const match = item.toString().trim().match(/^([LR])\s*(\d+)$/i);
        if (!match) return; 
        const dir = match[1].toUpperCase();
        const val = Number(match[2]);

        const delta = dir === 'R' ? val : -val;
        strt = ((strt + delta) % 100 + 100) % 100;
       

        if (strt === 0) count++;
    })
    console.log(count);
    
});
