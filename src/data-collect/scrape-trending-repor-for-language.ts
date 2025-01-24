import { fetch, sql } from 'bun';
import { parse } from 'node-html-parser';

export const scrapeTrendingReporForLanguage = async (language: string, date: string) => {
  const response = await fetch(`https://github.com/trending?l=${language}`);
  const html = await response.text();
  const root = parse(html);

  const articles = root.querySelectorAll('article.Box-row');

  for (const article of articles) {
    const urlPath = article.querySelector('h2 a')?.getAttribute('href');
    if (!urlPath) continue;

    const url = `https://github.com${urlPath}`;
    const title = urlPath.substring(1);
    const description = article.querySelector('p')?.textContent?.trim().split('\n')[0] || '';

    await sql`
      INSERT INTO github_trending (language, title, url, description, date)
      VALUES (${language}, ${title}, ${url}, ${description}, ${date})
      ON CONFLICT (url) DO NOTHING;
    `;
  }

  console.log(`Scraped trending repositories for ${language}`);
};
