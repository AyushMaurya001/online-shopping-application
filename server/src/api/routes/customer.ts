import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const customer = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
        
    }
}>();

customer.post('/signup', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const user = await prisma.customer.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      }
    })
    if (!user){
      return c.json({
        error: "signup failed"
      })
    } else {
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({
        token: token
      })
    }
  } catch (e){
    console.log(e);
    return c.json({
      error: 'unable to create account'
    })
  }
})

customer.post('/login', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.customer.findUnique({
      where: {
        email: body.email
      }
    })
    if (!user){
      return c.json({
        error: 'user not found (make sure to create an account)'
      });
    } else {
      if (user.password===body.password){
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
          token: token
        });
      } else {
        return c.json({
          error: 'wrong password'
        });
      }
    }
  } catch (e){
    console.log(e);
    return c.json({
      error: 'unable to signin'
    })
  }
})

export default customer;