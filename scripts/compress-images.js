const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "../public");
const clientsDir = path.join(publicDir, "clients");

async function compressImage(filePath, outputExt = "webp") {
  const parsedPath = path.parse(filePath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.${outputExt}`);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipping: ${filePath} not found`);
    return;
  }

  const statsMode = fs.statSync(filePath);
  const originalSize = (statsMode.size / 1024).toFixed(2);

  try {
    let pipeline = sharp(filePath);

    if (outputExt === "webp") {
      pipeline = pipeline.webp({ quality: 80 });
    } else if (outputExt === "jpg") {
      pipeline = pipeline.jpeg({ quality: 80, progressive: true });
    }

    await pipeline.toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024).toFixed(2);

    console.log(
      `✅ Compressed ${parsedPath.base} -> ${parsedPath.name}.${outputExt} (${originalSize}KB -> ${newSize}KB)`
    );

    // If it's the exact same name or we don't need the original, maybe delete original
    // But since extension change, we'll keep original for now and let the developer delete it
  } catch (err) {
    console.error(`❌ Failed to compress ${filePath}:`, err);
  }
}

async function run() {
  console.log("Starting image compression...");

  await compressImage(path.join(publicDir, "logo.png"), "webp");
  await compressImage(path.join(publicDir, "icon.png"), "webp");
  
  await compressImage(path.join(clientsDir, "sanjay.png"), "webp");
  await compressImage(path.join(clientsDir, "umesh.png"), "webp");
  await compressImage(path.join(clientsDir, "tejedutech.png"), "webp");

  // For og image, maybe just compress JPEG heavily
  await compressImage(path.join(publicDir, "og-image.jpg"), "jpg");

  console.log("Done compressing images!");
}

run();
