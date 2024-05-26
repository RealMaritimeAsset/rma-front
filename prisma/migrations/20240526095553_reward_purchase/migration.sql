-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(36) NOT NULL,
    `isBusiness` BOOLEAN NOT NULL DEFAULT false,
    `businessName` TEXT NULL,
    `businessCa` TEXT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `address` VARCHAR(255) NOT NULL,
    `ownedRwaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rwa` (
    `id` VARCHAR(36) NOT NULL,
    `maindId` INTEGER NOT NULL,
    `subId` INTEGER NOT NULL,
    `tokenUri` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `amount` INTEGER NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `network` VARCHAR(255) NOT NULL,
    `uId` VARCHAR(36) NOT NULL,
    `ipfsId` VARCHAR(36) NULL,
    `soldAmount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ipfs` (
    `id` VARCHAR(36) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `amount` INTEGER NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `uri` VARCHAR(255) NOT NULL,
    `builder` VARCHAR(255) NOT NULL,
    `weight` INTEGER NOT NULL,
    `expectedDate` TIMESTAMP(0) NOT NULL,
    `imoNumber` INTEGER NOT NULL,
    `expiration` TIMESTAMP(0) NOT NULL,
    `dueDate` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reward` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rwaId` VARCHAR(36) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `businessName` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `reward` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Purchase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rwaId` VARCHAR(36) NOT NULL,
    `userId` VARCHAR(36) NOT NULL,
    `tokenAmount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Rwa` ADD CONSTRAINT `Rwa_ipfsId_fkey` FOREIGN KEY (`ipfsId`) REFERENCES `Ipfs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_rwaId_fkey` FOREIGN KEY (`rwaId`) REFERENCES `Rwa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_rwaId_fkey` FOREIGN KEY (`rwaId`) REFERENCES `Rwa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
