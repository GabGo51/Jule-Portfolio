const fs = require("fs");
const path = require("path");

const lowResDir = path.join(__dirname, "public/img/lowres");
const highResDir = path.join(__dirname, "public/img/highres");
const mp4Dir = path.join(__dirname, "public/img/mp4");
const outputPath = path.join(__dirname, "src/data/data.json");

const data = {};

function getBaseName(filename) {
  return path.basename(filename, path.extname(filename));
}

// Read lowRes images
if (fs.existsSync(lowResDir)) {
  fs.readdirSync(lowResDir).forEach((file) => {
    const name = getBaseName(file);
    data[name] = data[name] || {};
    data[name].lowRes = `/img/lowres/${file}`;
  });
}

// Read highRes images
if (fs.existsSync(highResDir)) {
  fs.readdirSync(highResDir).forEach((file) => {
    const name = getBaseName(file);
    data[name] = data[name] || {};
    data[name].highRes = `/img/highres/${file}`;
  });
}

// Read mp4 videos
if (fs.existsSync(mp4Dir)) {
  fs.readdirSync(mp4Dir).forEach((file) => {
    const name = getBaseName(file);
    data[name] = data[name] || {};
    data[name].mp4 = `/img/mp4/${file}`;
  });
}

// Add empty fields
for (const key in data) {
  data[key].titleFr = data[key].titleFr || "";
  data[key].titleEn = data[key].titleEn || "";
  data[key].typeFr = data[key].typeFr || "";
  data[key].typeEn = data[key].typeEn || "";
  data[key].year = data[key].year || "";
}

// Write to src/data/data.json
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");

console.log("✅ src/data/data.json generated!");
