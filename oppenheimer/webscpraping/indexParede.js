const puppeteer = require('puppeteer');
const fs = require('fs');


async function pegarLinks() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com/search?q=adesivo+parede+leroy+merlin&sca_esv=');
  await page.waitForSelector('a');

  const links = await page.evaluate(() => {
    const results = new Set();
    document.querySelectorAll('a').forEach(link => {
      if (link.href.startsWith('http') && !link.href.includes('google')) {
        results.add(link.href);
      }
    });
    return Array.from(results);
  });

  await browser.close();

  
  fs.writeFileSync('linksParede.json', JSON.stringify(links.slice(0, 5)));

  return links.slice(0, 5);
}


pegarLinks().then(links => {
  console.log(links);
});




