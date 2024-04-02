import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

const seller = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        sellerId: string;
        shopName: string;
    }
}>();

seller.get('/delete-data', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        // const deletedSeller = await prisma.seller.deleteMany();
        // const deletedProduct = await prisma.product.deleteMany();
        // const deletedProductStock = await prisma.productStock.deleteMany();
        return c.text('Data deleted');
    } catch (err){
        console.log(err);
        return c.text('Error in deleting data');
    }
})

seller.post('/signup', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const seller = await prisma.seller.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
                shopName: body.shopName,
            }
        })
        if (!seller){
            return c.json({
                error: "signup failed"
            })
        } else {
            const token = await sign({ id: seller.id }, c.env.JWT_SECRET)
            return c.json({
                token: token
            })
        }
    } catch(e){
        console.log(e);
        return c.json({
            error: "unable to create account"
        })
    }
})

seller.post('/login', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const seller = await prisma.seller.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })
        if (!seller){
            const sellerAccountWithEmail = await prisma.seller.findUnique({
                where: {
                    email: body.email
                }
            })
            if (!sellerAccountWithEmail){
                return c.json({
                    error: "user not present"
                })
            } else {
                return c.json({
                    error: "wrong password"
                })
            }
        } else {
            const token = await sign({ id: seller.id }, c.env.JWT_SECRET);
            return c.json({
                token: token
            })
        }
    } catch(e){
        console.log(e);
        return c.json({
            error: "unable to login into account"
        })
    }
})

seller.use('/auth/*', async (c, next) => {
    // auth middleware
    try {
        const authHeader = c.req.header('authorization');
        console.log(authHeader);
        const authValid = await verify(authHeader || "", c.env.JWT_SECRET);
        console.log(authValid);
        if (!authValid){
            return c.json({
                error: "authorization failed"
            })
        } else {
            c.set('sellerId', authValid.id);
            await next();
        }
    } catch(e){
        console.log(e);
        return c.json({
            error: "authorization failed"
        })
    }
})

seller.get('/auth/data', async (c, next) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const sellerId = c.get('sellerId');
        const sellerDetail = await prisma.seller.findUnique({
            where: {
                id: Number(sellerId)
            }
        });
        if (sellerDetail){
            return c.json({
                shopName: sellerDetail.shopName
            })
        } else {
            return c.json({
                error: 'seller not found'
            })
        }
    } catch (err){
        console.log(err);
        return c.json({
            error: 'unexpected error from our side'
        });
    }
})

seller.post('/auth/add-product', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const body = await c.req.json();
        // console.log(body);
        const product = await prisma.product.create({
            data: {
                title: body.title,
                description: body.description,
                instruction: body.instruction,
                productType: body.productType,
                price: Number(body.price),
                sellerId: Number(c.get('sellerId')),
            }
        });
        // console.log(product);
        const productStockArray = body.productStock;
        // console.log(productStockArray);
        for (let i=0; i<productStockArray.length; i++){
            const productStock = await prisma.productStock.create({
                data: {
                    size: String(productStockArray[i].size),
                    stock: Number(productStockArray[i].stock),
                    productId: product.id
                }
            })
            // console.log(productStock);
        }
        return c.json({
            message: "product added"
        })
    } catch(e){
        console.log(e);
        return c.json({
            error: "unable to store data"
        })
    }
})

seller.get('/auth/products', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        console.log('products came');
        const products = await prisma.product.findMany({
            where: {
                sellerId: Number(c.get('sellerId'))
            }
        })
        if (!products){
            return c.json({
                error: 'failed to get products'
            })
        } else {
            return c.json({
                products: products
            })
        }
    } catch(e){
        console.log(e);
        return c.json({
            error: 'unable to get products'
        })
    }
})

export default seller;