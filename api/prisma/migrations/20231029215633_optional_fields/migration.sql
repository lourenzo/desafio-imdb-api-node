/*
  Warnings:

  - You are about to drop the column `name` on the `Casting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Actor` MODIFY `pictureUrl` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `Casting` DROP COLUMN `name`;

-- AlterTable
ALTER TABLE `Title` MODIFY `trailerUrl` VARCHAR(500) NULL;
