import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const collectivites = await prisma.collectivites.findMany({
    take: 30,
  });
  console.log(collectivites);
  return collectivites;
});
