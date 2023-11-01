import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const collectivites = await prisma.collectivites.findMany({
    take: 30,
  });

  // const types = await prisma.collectivites.findMany({
  //   distinct: CollectivitesScalarFieldEnum.from(["type_service_local"]),
  //   select: {
  //     typeServiceLocal: true,
  //   },
  // });

  return { collectivites };
});
