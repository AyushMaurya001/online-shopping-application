/*
  Warnings:

  - A unique constraint covering the columns `[shopName]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shopName` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "shopName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_shopName_key" ON "Seller"("shopName");
