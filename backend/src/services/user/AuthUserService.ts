import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest){

        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("User/Password not found");
        }

        //verificar se a senha esta correta
        const passwordMatch = await compare(password, user.senha);

        if (!passwordMatch) {
            throw new Error("User/Password not found");
        }



    }
}

export { AuthUserService }