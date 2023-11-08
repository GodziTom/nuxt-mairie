import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { filters } = getQuery(event);

  const where = {};

  if (filters) {
    where.type_service_local = {
      in: JSON.parse(filters),
    };
  }

  const collectivites = await prisma.collectivites_test_dept.findMany({
    where,
    take: 30,
    include: {
      departement: true,
    },
  });

  return { collectivites };
});
