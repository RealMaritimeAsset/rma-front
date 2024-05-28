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
export const findOrCreateUserByAddress = async (address: string) => {
  // address가 존재하는지 확인
  let user = await getUserByAddress(address);
  // user가 없으면 새로 생성
  if (!user) {
    user = await prisma.user.create({
      data: {
        address: address
      }
    });
  }
  return user;
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
