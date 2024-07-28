---
name: 'Zod Redis'
description: 'Typesafe Redis storage made easy'
startDate: 'Oct 07 2023'
image: '../../images/projects/zod-redis.png'
link: 'https://github.com/nkeil/zod-redis'
---

I work with Redis quite often. So much so that I ended up building a simpler version of this project within the startup I work at in order to enhance [ioredis](https://github.com/redis/ioredis) with more typesafe features.

After a point of sufficient complexity, I decided that other people might be interested in a tool like this, so I rounded it out and published it open source on GitHub. The tool lets you specify your Redis schema like so:

```typescript
const zredis = new ZRedis(6379, '127.0.0.1', {
  schema: {
    birthday: {
      zod: z.date(),
      getKey: <T extends string>(userId: T) => {
        return `birthday:${userId}` as const;
      },
      expirationSeconds: 30,
    },
  },
});
```

Once you've created the instance, you can query your models with typesafe verification to ensure valid property access. It also handles stringifying / destringifying the value stored (allowing simple storage of Dates and more).

```typescript
const birthdayKey = zredis.model('birthday').getKey('12345');
//     ^? const birthdayKey: "birthday:12345"

// Error: Argument of type '"birthday;12345"' is not assignable to parameter of type '`birthday:${string}`.
await zredis.model('birthday').set('birthday;12345', new Date(2015, 0, 5));

// Error: Argument of type 'string' is not assignable to parameter of type 'Date'.
await zredis.model('birthday').set(birthdayKey, '2023-10-08T00:36:30.104Z');

// Valid
await zredis.model('birthday').set(birthdayKey, new Date(2015, 0, 5));

const result = await zredis.model('birthday').get(birthdayKey);
//     ^? const result: Date | null
```

Zod-Redis is built to be a drop-in replacement for ioredis, so it lets you get around the typesafe interface whenever desired. You can find it at https://github.com/nkeil/zod-redis.
