'use server';

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id
    }
  });
};

export const getUserByAddress = (address: string) => {
  return prisma.user.findUnique({
    where: {
      address
    }
  });
};

export const CreateUserByAddress = async (address: string) => {
  return await prisma.user.create({
    data: {
      address: address
    }
  });
};

// async function main() {
//   const users = []

//   for (let i = 0; i < 10; i++) {
//     users.push({
//       name: faker.name.fullName(),
//       email: faker.internet.email(),
//     })
//   }

//   await prisma.user.createMany({
//     data: users,
//   })

//   console.log('Inserted 10 users')
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
