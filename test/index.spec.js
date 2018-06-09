const puppeteer = require('puppeteer');

describe('Ponya portfolio', () => {
  let page, browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'example.png' });
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  it('has a title', async () => {
    const title = await page.title();
    expect(title).toBe('Ponya.space | Eli Ponyatovski');
  });
});
