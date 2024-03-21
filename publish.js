const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function saveRenderedHTML(inputPath, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const fileUrl = `file://${path.resolve(inputPath)}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Wait for 3 seconds using pure JavaScript
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });
    const htmlContent = await page.content();

    fs.writeFileSync(outputPath, htmlContent);

    await browser.close();
}

// Usage example
const inputPath = 'index_source.html'; // Assuming index.html is in the same directory as the script
const outputPath = 'index.html'; // Output file path

saveRenderedHTML(inputPath, outputPath)
    .then(() => console.log('Rendered HTML saved successfully!'))
    .catch(err => console.error('Error saving rendered HTML:', err));
