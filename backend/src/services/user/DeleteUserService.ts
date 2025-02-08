import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(id: string) {
        const userExists = await prismaClient.usuario.findUnique({
            where: { id },
        });

        if (!userExists) {
            throw new Error("User not found");
        }

        const deletedUser = await prismaClient.usuario.delete({
            where: { id },
        }), select = {
            id: true,
            nome: true,
            email: true,
            tipo: true,
        };

        return deletedUser;
    }
}

export { DeleteUserService };