import { chromium } from '@playwright/test';

const pages = [
  'index.html',
  'Home.dc.html',
  'Services.dc.html',
  'About.dc.html',
  'Store.dc.html',
  'Contact.dc.html',
];

const base = 'http://127.0.0.1:4173/';
const viewports = [
  { name: 'desktop', width: 1366, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport });
  for (const pageName of pages) {
    const page = await context.newPage();
    const errors = [];
    const failed = [];

    page.on('console', (msg) => {
      if (['error', 'warning'].includes(msg.type())) {
        errors.push(`${msg.type()}: ${msg.text()}`);
      }
    });
    page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
    page.on('requestfailed', (req) => {
      failed.push(`${req.method()} ${req.url()} :: ${req.failure()?.errorText || 'failed'}`);
    });

    const response = await page.goto(base + pageName, { waitUntil: 'networkidle', timeout: 45000 });
    const title = await page.title();
    const bodyText = (await page.locator('body').innerText()).trim();
    const brokenImages = await page.locator('img').evaluateAll((imgs) =>
      imgs
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute('src'))
    );
    const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);

    await page.screenshot({ path: `screenshots/smoke-${viewport.name}-${pageName.replace('.dc.html', '')}.png`, fullPage: true });
    results.push({
      viewport: viewport.name,
      page: pageName,
      status: response?.status() || null,
      title,
      bodyChars: bodyText.length,
      brokenImages,
      horizontalOverflow,
      errors,
      failed,
    });
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
