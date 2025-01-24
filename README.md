## Project Overview

This project scrapes GitHub trending repositories for selected languages and stores the data in a local database.

## Installation & Setup

1. Clone this repository.
2. Install dependencies with:
   ```bash
   bun install
   ```
3. Ensure a local database is configured (default table: github_trending).
4. Create table with:
   ```bash
   bun run ./src/db/create-table-github_trending.ts
   ```

## Usage

1. Start the server:
   ```bash
   bun run dev
   ```
2. Confirm the scraper runs automatically via cron each day at midnight.
3. Check logs for scraping results.

## License

This project is licensed under the MIT License.
