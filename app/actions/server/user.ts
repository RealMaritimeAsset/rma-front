'use server'

import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
    },
  })
}
