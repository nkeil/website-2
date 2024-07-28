---
name: 'Prisma Randomization Extension'
description: 'Add some randomness to your favorite Prisma queries'
startDate: 'Oct 04 2023'
image: '../../images/projects/prisma-extension-random.png'
link: 'https://github.com/nkeil/prisma-extension-random'
---

I'm a big fan of [Prisma](https://www.prisma.io/), a fully typesafe wrapper around MySQL (and others) that makes it incredibly easy to avoid common bugs when dealing with databases on your backend.

One of the features I wanted for the longest time was a way of retrieving random rows from the database. In SQL you would do it like this:

```sql
SELECT column FROM table
ORDER BY RAND()
LIMIT 1
```

But before now, this wasn't possible with Prisma. That's why I made `prisma-extension-random`, which is a Prisma Client Extension that adds a couple key methods to your tables which allow simple random querying.

## Features

- Random Row Retrieval: easily retrieve a random row from your database table using `table.findRandom()`.
- Random Row Subset retrieval: use `table.findManyRandom()` to query for a customized random row subset of an arbitrary `findMany()` query.

## Examples

```typescript
// Find a random post from an author whose firstname starts with "B"
const post = await prisma.post.findRandom({
  select: { id: true, title: true },
  where: { author: { firstName: { startsWith: 'B' } } },
});
```

```typescript
// Find 5 random movies with a rating greater than 0.8
const movies = await prisma.movie.findManyRandom(5, {
  select: { id: true, title: true },
  where: { rating: { gte: 0.8 } },
});
```

## More information

Check it out on GitHub!

https://github.com/nkeil/prisma-extension-random
