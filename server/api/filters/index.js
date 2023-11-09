import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const types = await prisma.collectivites.groupBy({
    by: ["type_service_local"],
    _count: {
      _all: true,
    },
  });

  const departements = await prisma.departement.findMany({
    select: {
      departement_nom: true,
      departement_code: true,
    },
  });

  return { types, departements };
});
