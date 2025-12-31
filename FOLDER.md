Ah! You want a clean **folder structure for a Next.js project using TypeScript and PostgreSQL** for backend requests. Let’s design a structure that’s maintainable and works well with **Next.js API routes** and **PostgreSQL via `pg`**.

---

## **Recommended Folder Structure**

```
my-next-app/
├─ public/                   # Static assets (images, icons)
├─ src/
│  ├─ pages/
│  │  ├─ api/                # Next.js API routes
│  │  │  ├─ users/           # Example resource
│  │  │  │  ├─ index.ts      # GET/POST /api/users
│  │  │  │  └─ [id].ts       # GET/PUT/DELETE /api/users/:id
│  │  │  └─ auth/            # Authentication routes
│  │  │     └─ login.ts
│  │  ├─ _app.tsx
│  │  ├─ index.tsx
│  │  └─ ...other pages
│  ├─ lib/
│  │  └─ db.ts               # PostgreSQL client setup
│  ├─ models/                # Optional: data model helpers / types
│  │  └─ user.ts
│  ├─ services/              # Business logic / DB queries
│  │  └─ userService.ts
│  ├─ types/                 # TypeScript types/interfaces
│  │  └─ index.d.ts
│  └─ utils/                 # Utility functions (formatters, validators)
│     └─ logger.ts
├─ .env                       # Environment variables (PG connection)
├─ package.json
├─ tsconfig.json
└─ next.config.js
```

---

## **Step 1: Setup PostgreSQL Client (`lib/db.ts`)**

```ts
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Add in .env
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
```

- Use `query` in services for all DB interactions.

---

## **Step 2: Create a Service (`services/userService.ts`)**

```ts
import { query } from '../lib/db';
import { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const res = await query('SELECT id, name, email FROM users');
  return res.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const res = await query('SELECT id, name, email FROM users WHERE id = $1', [id]);
  return res.rows[0] || null;
};
```

---

## **Step 3: Create an API Route (`pages/api/users/[id].ts`)**

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '../../../services/userService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await getUserById(Number(id));
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

---

## **Step 4: Environment Variables (`.env`)**

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```

Make sure to restart your dev server after editing `.env`.

---

## **Why this structure works well:**

- **`lib/`** → shared clients like PostgreSQL, Redis, etc.
- **`services/`** → isolate business logic from API routes (easy to test).
- **`models/`** → define types, interfaces, or ORM helpers.
- **`pages/api/`** → Next.js API routes remain clean and only orchestrate requests.
- **`utils/`** → helper functions, logging, validation, etc.

This setup scales nicely as your app grows: you can add more resources (`posts`, `comments`, etc.) without API routes or services getting messy.

---

If you want, I can make a **ready-to-copy minimal Next.js + TypeScript + PostgreSQL boilerplate** with this exact structure, including working API endpoints for users.

Do you want me to do that?

Perfect — you want **middlewares** for your Next.js backend with PostgreSQL. Next.js API routes don’t have built-in middleware like Express, but you can **create reusable middleware functions** that wrap your API handlers.

Here’s a complete guide:

---

## **1️⃣ Basic Middleware Pattern**

A middleware is just a **higher-order function** that takes a handler and returns a new handler.

```ts
// src/middleware/logger.ts
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const logger = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(`${req.method} ${req.url}`);
    return handler(req, res);
  };
};
```

Usage in an API route:

```ts
// pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../../services/userService';
import { logger } from '../../../middleware/logger';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await getUsers();
    res.status(200).json(users);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default logger(handler);
```

---

## **2️⃣ Async Error Handling Middleware**

Wrap handlers to catch errors without repeating `try/catch` in every route.

```ts
// src/middleware/asyncHandler.ts
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const asyncHandler = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};
```

Usage:

```ts
export default asyncHandler(handler);
```

---

## **3️⃣ Authentication Middleware**

Check headers or sessions before running the handler.

```ts
// src/middleware/auth.ts
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const auth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;

    if (!token || token !== `Bearer ${process.env.API_SECRET}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return handler(req, res);
  };
};
```

Usage:

```ts
import { auth } from '../../../middleware/auth';

export default auth(asyncHandler(handler));
```

> You can **chain middlewares** by wrapping them: `auth(logger(asyncHandler(handler)))`.

---

## **4️⃣ Middleware Folder Structure**

```
src/
├─ middleware/
│  ├─ logger.ts
│  ├─ asyncHandler.ts
│  └─ auth.ts
```

---

## **5️⃣ Example: Combined Middlewares for Users API**

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../../services/userService';
import { auth } from '../../../middleware/auth';
import { logger } from '../../../middleware/logger';
import { asyncHandler } from '../../../middleware/asyncHandler';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await getUsers();
    res.status(200).json(users);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default auth(logger(asyncHandler(handler)));
```

✅ This setup gives you:

- Logging
- Async error handling
- Authentication

All reusable and clean.

---

If you want, I can make a **full Next.js + TypeScript + PostgreSQL boilerplate** including **middlewares, services, and API routes** ready to copy-paste. This saves a lot of setup time.

Do you want me to do that?
