import  PrismaClient  from '@prisma/client';
import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
    type: string;
}

export default class CreateUserService {
    async execute({ name, email, password, type }: UserRequest) {
        if (!name || !email || !password || !type) {
            throw new Error("Preencha todos os campos");
        }

        //verificar se o email ja existe
        const userAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.usuario.create({
            data: {
                nome: name,
                email: email,
                senha: passwordHash,
                tipo: type
            },
            select: {
                id: true,
                nome: true,
                email: true,
                tipo: true
            }
        })

        return user
    }
}

export { CreateUserService }