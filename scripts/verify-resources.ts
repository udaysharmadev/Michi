import puppeteer from 'puppeteer';
import fs from 'fs';

export async function searchYouTube(query: string): Promise<{ title: string, url: string } | null> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('ytd-video-renderer a#video-title', { timeout: 5000 });
    
    const result = await page.evaluate(() => {
      const el = document.querySelector('ytd-video-renderer a#video-title') as HTMLAnchorElement;
      if (el) {
        return {
          title: el.getAttribute('title') || el.innerText || 'YouTube Video',
          url: 'https://www.youtube.com' + el.getAttribute('href')
        };
      }
      return null;
    });
    
    await browser.close();
    return result;
  } catch (e) {
    console.error("YT Search Error for", query, e);
    await browser.close();
    return null;
  }
}

export async function searchGoogle(query: string): Promise<{ title: string, url: string } | null> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    // using duckduckgo html version as it doesn't block scrapers easily
    await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.result__a', { timeout: 5000 });
    
    const result = await page.evaluate(() => {
      const el = document.querySelector('.result__a') as HTMLAnchorElement;
      if (el) {
        return {
          title: el.innerText,
          url: el.href
        };
      }
      return null;
    });
    
    await browser.close();
    return result;
  } catch (e) {
    console.error("Web Search Error for", query, e);
    await browser.close();
    return null;
  }
}

async function runTest() {
  console.log("Testing YouTube Search: 'Traversy Media HTTP Crash Course'");
  const yt = await searchYouTube('Traversy Media HTTP Crash Course');
  console.log(yt);

  console.log("Testing Web Search: 'MDN How does the internet work'");
  const web = await searchGoogle('MDN How does the internet work');
  console.log(web);
}

// runTest();
