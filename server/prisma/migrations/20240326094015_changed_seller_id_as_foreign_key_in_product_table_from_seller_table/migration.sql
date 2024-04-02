/*
  Warnings:

  - You are about to drop the column `shopName` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sellerId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sellerId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_shopName_fkey";

-- DropIndex
DROP INDEX "Product_shopName_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "shopName",
ADD COLUMN     "sellerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_sellerId_key" ON "Product"("sellerId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
