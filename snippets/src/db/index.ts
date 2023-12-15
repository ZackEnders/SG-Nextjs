import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

export const db: PrismaClient = prismaGlobal.prisma || new PrismaClient();
