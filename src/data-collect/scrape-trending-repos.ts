import { scrapeTrendingReporForLanguage } from './scrape-trending-repor-for-language';

export const scrapeTrendingRepos = async () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const languages = ['python', 'go', 'rust', 'cpp', 'javascript', 'typescript'];

  for (const language of languages) {
    await scrapeTrendingReporForLanguage(language, date);
  }

  console.log('All data scraped and saved to the database!');
};
