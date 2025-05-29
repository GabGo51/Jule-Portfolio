const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public/img');
const lowResDir = path.join(baseDir, 'lowres');
const highResDir = path.join(baseDir, 'highres');
const outputPath = path.join(__dirname, 'src/data/data.json');

function getImageFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Folder not found: ${folderPath}`);
    return [];
  }
  return fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
}

const lowResFiles = getImageFiles(lowResDir);
const highResFiles = getImageFiles(highResDir);

const highResMap = new Map();
highResFiles.forEach(file => {
  const name = path.parse(file).name;
  highResMap.set(name, `/img/highres/${file}`);
});

const combinedImages = {};

lowResFiles.forEach(file => {
  const name = path.parse(file).name;
  const lowResPath = `/img/lowres/${file}`;
  const highResPath = highResMap.get(name) || null;

  if (highResPath) {
    combinedImages[name] = {
      name,
      lowRes: lowResPath,
      highRes: highResPath,
      titleFr: "",
      titleEn: "",
      typeFr: "",
      typeEn: "",
      year: ""
    };
  }
});

const dataFolder = path.dirname(outputPath);
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(combinedImages, null, 2));
console.log('✅ data.json generated with metadata fields!');
