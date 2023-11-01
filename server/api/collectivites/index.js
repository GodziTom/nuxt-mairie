import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const collectivites = await prisma.collectivites.findMany({
    take: 30,
  });

  // const pd = await prisma.collectivites.findMany({
  //   distinct: CollectivitesScalarFieldEnum.from(["type_service_local"]),
  //   select: {
  //     typeServiceLocal: true,
  //   },

  // });
  const types = await prisma.collectivites.findMany({
    distinct: ["type_service_local"],
    select: {
      type_service_local: true,
    },
  });

  const ntm = "ntm";

  return { collectivites, types, ntm };
});
