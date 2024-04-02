/*
  Warnings:

  - A unique constraint covering the columns `[shopName]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shopName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "shopName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_shopName_key" ON "Product"("shopName");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopName_fkey" FOREIGN KEY ("shopName") REFERENCES "Seller"("shopName") ON DELETE RESTRICT ON UPDATE CASCADE;
