const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Tommaso Bellini\\.gemini\\antigravity\\brain\\99211bbf-3cb0-4897-a54a-a40cedb97f43';
const destDir = 'c:\\Users\\Tommaso Bellini\\Documents\\OTHER PROJECTS\\com-arredo\\public';

const mapping = {
    'hero_furniture_1773173046179.png': 'hero.png',
    'craftsmanship_hands_1773173063455.png': 'about.png',
    'wood_detail_1773173080159.png': 'detail.png'
};

Object.entries(mapping).forEach(([src, dest]) => {
    const srcPath = path.join(srcDir, src);
    const destPath = path.join(destDir, dest);
    
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${src} to ${dest}`);
        } else {
            console.error(`Source not found: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error copying ${src}: ${err.message}`);
    }
});

console.log('Public dir contents:', fs.readdirSync(destDir));
