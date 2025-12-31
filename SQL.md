Perfect ✅ — here’s a **TypeScript version** of the MySQL2 instance class with strong typing, async/await support, generics for query results, and transaction helpers.

This is a **production-grade MySQL2 wrapper** you can drop into any Node.js + TypeScript project.

---

### 📁 `db.ts`

```ts
import mysql, { Pool, PoolConnection, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port?: number;
  connectionLimit?: number;
}

export class MySQLDatabase {
  private pool: Pool;

  constructor(config: DBConfig) {
    this.pool = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port || 3306,
      waitForConnections: true,
      connectionLimit: config.connectionLimit || 10,
      queueLimit: 0,
      namedPlaceholders: true,
    });
  }

  /**
   * Execute a query safely with typed results.
   * @param sql - SQL query string
   * @param params - Query parameters (array or named object)
   * @returns Array of rows, typed as T
   */
  async query<T extends RowDataPacket[] | ResultSetHeader>(sql: string, params?: any): Promise<T> {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.query<T>(sql, params);
      return rows;
    } catch (error) {
      console.error('[MySQL] Query Error:', (error as Error).message);
      throw error;
    } finally {
      connection.release();
    }
  }

  /**
   * Run multiple queries in a single transaction.
   * Rolls back on error.
   */
  async transaction<T>(callback: (conn: PoolConnection) => Promise<T>): Promise<T> {
    const connection = await this.pool.getConnection();
    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      console.error('[MySQL] Transaction Error:', (error as Error).message);
      throw error;
    } finally {
      connection.release();
    }
  }

  /**
   * Retrieve a raw connection from the pool.
   */
  async getConnection(): Promise<PoolConnection> {
    return this.pool.getConnection();
  }

  /**
   * Gracefully close the connection pool.
   */
  async close(): Promise<void> {
    try {
      await this.pool.end();
      console.log('[MySQL] Pool closed.');
    } catch (error) {
      console.error('[MySQL] Error closing pool:', (error as Error).message);
    }
  }
}
```

---

### 🧠 Example Usage

```ts
import { MySQLDatabase } from './db';

const db = new MySQLDatabase({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'my_app',
});

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

// ✅ Typed query
const users = await db.query<User[]>(`SELECT * FROM users WHERE status = ?`, ['active']);
console.log(users);

// ✅ Transaction example
await db.transaction(async (conn) => {
  await conn.query('INSERT INTO orders (user_id, total) VALUES (?, ?)', [1, 200]);
  await conn.query('UPDATE users SET balance = balance - ? WHERE id = ?', [200, 1]);
});

// ✅ Close pool when done
await db.close();
```

---

### 🧩 Key Features

✅ **Type safety** — Generic `<T>` query results
✅ **Transaction helper** — Atomic commits/rollbacks
✅ **Connection pooling** — Efficient resource management
✅ **Named placeholders** — `:param` syntax supported
✅ **Graceful shutdown** — For proper cleanup on exit

---

Would you like me to extend this class to include **automatic query logging**, **retry logic**, or **connection health checks (ping)** for production stability?
