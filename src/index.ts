import { Elysia } from 'elysia';
import { cron } from '@elysiajs/cron';
import { scrapeTrendingRepos } from './data-collect/scrape-trending-repos';

const app = new Elysia()
  .use(
    cron({
      name: 'scraping',
      pattern: '0 0 * * *',
      run() {
        console.log('Running cron job to scrape GitHub trending repositories');
        return scrapeTrendingRepos();
      }
    })
  )
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
