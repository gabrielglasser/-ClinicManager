import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    id: string;
    name: string;
    email: string;
    password: string;
    type: string;
}

class UpdateUserService {
    async execute({ id, name, email, password, type }: UserRequest) {
        const userExists = await prismaClient.usuario.findUnique({
            where: { id },
        });

        if (!userExists) {
            throw new Error("User not found");
        }
        const passwordHash = await hash(password, 8);

        const updatedUser = await prismaClient.usuario.update({
            where: { id },
            data: {
                nome : name,
                email : email,
                senha : passwordHash,
                tipo : type,
            },
        }), select = {
            id: true,
            nome: true,
            email: true,
            tipo: true,
        };    
        return updatedUser;
    }
}

export { UpdateUserService };