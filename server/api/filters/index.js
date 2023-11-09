import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const types = await prisma.collectivites.groupBy({
    by: ["type_service_local"],
    _count: {
      _all: true,
    },
  });

  const departements = await prisma.departement.groupBy({
    by: ["departement_nom"],
    _count: {
      _all: true,
    },
  });

  return { types, departements };
});
