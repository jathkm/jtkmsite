const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages(inputDir, outputDir) {
  console.log(`Optimizing images from ${inputDir}...`);
  
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
      if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
      
      const inputPath = path.join(inputDir, file);
      const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '');
      
      console.log(`Processing ${file}...`);
      
      // Generate WebP - full size
      await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${outputName}.webp`));
      
      // Generate fallback JPG - full size
      await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `${outputName}.jpg`));
      
      // Generate WebP - medium
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${outputName}-medium.webp`));
      
      // Generate WebP - small
      await sharp(inputPath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${outputName}-small.webp`));
      
      console.log(`✓ ${file} optimized`);
    }
    
    console.log('All images optimized!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Usage
const inputDir = process.argv[2] || './assets/images/raw';
const outputDir = process.argv[3] || './assets/images/optimized';

optimizeImages(inputDir, outputDir);
