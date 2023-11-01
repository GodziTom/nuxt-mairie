import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const collectivites = await prisma.collectivites.findMany({
    take: 30,
  });

  const types = await prisma.collectivites.groupBy({
    by: ["type_service_local"],
    _count: {
      _all: true,
    },
  });
  const ntm = "ntm";

  return { collectivites, types, ntm };
});
