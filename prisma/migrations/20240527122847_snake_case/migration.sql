/*
  Warnings:

  - The primary key for the `Ipfs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Ipfs` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Ipfs` table. All the data in the column will be lost.
  - You are about to drop the column `expectedDate` on the `Ipfs` table. All the data in the column will be lost.
  - You are about to drop the column `imoNumber` on the `Ipfs` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `country` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `company` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `name` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `uri` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `builder` on the `Ipfs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `rwaId` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `tokenAmount` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `rwaId` on the `Reward` table. All the data in the column will be lost.
  - You are about to alter the column `address` on the `Reward` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `reward` on the `Reward` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - The primary key for the `Rwa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `ipfsId` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `maindId` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `soldAmount` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `subId` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `tokenUri` on the `Rwa` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Rwa` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Rwa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `company` on the `Rwa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `network` on the `Rwa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `businessCa` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isBusiness` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `address` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - Added the required column `due_date` to the `Ipfs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expected_date` to the `Ipfs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imo_number` to the `Ipfs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rwa_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_amount` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_name` to the `Reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rwa_id` to the `Reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_id` to the `Rwa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sold_amount` to the `Rwa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_id` to the `Rwa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_uri` to the `Rwa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Rwa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_rwaId_fkey`;

-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Reward` DROP FOREIGN KEY `Reward_rwaId_fkey`;

-- DropForeignKey
ALTER TABLE `Rwa` DROP FOREIGN KEY `Rwa_ipfsId_fkey`;

-- DropForeignKey
ALTER TABLE `Rwa` DROP FOREIGN KEY `Rwa_userId_fkey`;

-- AlterTable
ALTER TABLE `Ipfs` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `dueDate`,
    DROP COLUMN `expectedDate`,
    DROP COLUMN `imoNumber`,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `due_date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `expected_date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `imo_number` INTEGER NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `country` VARCHAR(191) NOT NULL,
    MODIFY `company` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `uri` VARCHAR(191) NOT NULL,
    MODIFY `builder` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Purchase` DROP COLUMN `rwaId`,
    DROP COLUMN `tokenAmount`,
    DROP COLUMN `userId`,
    ADD COLUMN `rwa_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `token_amount` INTEGER NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Reward` DROP COLUMN `businessName`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `rwaId`,
    ADD COLUMN `business_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `rwa_id` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `reward` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Rwa` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `ipfsId`,
    DROP COLUMN `maindId`,
    DROP COLUMN `soldAmount`,
    DROP COLUMN `subId`,
    DROP COLUMN `tokenUri`,
    DROP COLUMN `userId`,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `ipfs_id` VARCHAR(191) NULL,
    ADD COLUMN `main_id` INTEGER NOT NULL,
    ADD COLUMN `sold_amount` INTEGER NOT NULL,
    ADD COLUMN `sub_id` INTEGER NOT NULL,
    ADD COLUMN `token_uri` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `company` VARCHAR(191) NOT NULL,
    MODIFY `network` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `businessCa`,
    DROP COLUMN `businessName`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `isBusiness`,
    ADD COLUMN `business_ca` VARCHAR(191) NULL,
    ADD COLUMN `business_name` VARCHAR(191) NULL,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `is_business` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Rwa` ADD CONSTRAINT `Rwa_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rwa` ADD CONSTRAINT `Rwa_ipfs_id_fkey` FOREIGN KEY (`ipfs_id`) REFERENCES `Ipfs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_rwa_id_fkey` FOREIGN KEY (`rwa_id`) REFERENCES `Rwa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_rwa_id_fkey` FOREIGN KEY (`rwa_id`) REFERENCES `Rwa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
