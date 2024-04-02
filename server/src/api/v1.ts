import { Hono } from "hono";
import seller from "./routes/seller";
import product from "./routes/product";
import customer from "./routes/customer";

const v1 = new Hono();

v1.route('/seller', seller);

v1.route('/customer', customer);

v1.route('/product', product);

export default v1;