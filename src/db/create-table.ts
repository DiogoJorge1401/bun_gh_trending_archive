import { sql } from 'bun';

try {
  await sql`
        CREATE TABLE IF NOT EXISTS github_trending (
            id SERIAL PRIMARY KEY,
            language TEXT NOT NULL,
            title TEXT NOT NULL,
            url TEXT NOT NULL UNIQUE,
            description TEXT NOT NULL,
            date DATE NOT NULL
        );
    `;

  console.log('Created table github_trending');
} catch (error) {
  console.error('Error creating table github_trending:', error);
}
