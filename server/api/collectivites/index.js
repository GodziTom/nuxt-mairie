import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { filters } = getQuery(event);
  console.log("server", filters);

  const where = {};

  if (filters) {
    where.type_service_local = {
      in: JSON.parse(filters),
    };
  }

  const collectivites = await prisma.collectivites.findMany({
    include: {
      departement_id: true,
    },
    where,
    take: 30,
  });

  return { collectivites };
});
