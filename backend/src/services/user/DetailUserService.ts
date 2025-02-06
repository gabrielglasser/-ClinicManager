import prismaClient from "../../prisma";

class DetailUserService {
  async execute(id: string) {
    const user = await prismaClient.usuario.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        tipo: true,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}

export { DetailUserService };
