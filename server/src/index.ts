import { Hono } from 'hono'
import { env } from 'hono/adapter';
import v1 from './api/v1';
import { cors } from 'hono/cors';

const app = new Hono()

app.use(cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1', v1);

export default app
