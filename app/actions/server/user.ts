"use server";

import { Prisma, PrismaClient } from "@prisma/client";
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
    },
  });
};

async function main() {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
    });
  }

  await prisma.user.createMany({
    data: users,
  });

  console.log("Inserted 10 users");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
