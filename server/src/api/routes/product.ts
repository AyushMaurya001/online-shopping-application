import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";

const product = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        
    }
}>();

product.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    });
    const products = await prisma.product.findMany();
    return c.json(products);
})

// product.get('/search', async (c) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL
//     });
//     const title = c.req.query('tags');
//     const searchedProducts = await prisma.
// })

export default product;