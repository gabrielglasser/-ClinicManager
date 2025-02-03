import prismaClient from "../../prisma";

interface SpecialtyRequest {
    name: string;
}

class CreateSpecialtyService {
    async execute({ name }: SpecialtyRequest) {
        const specialty = await prismaClient.especialidade.create({
            data: {
                nome: name,
            },
            select: {
                id: true,
                nome: true,
            },
        });

        return specialty;
    }
}

export { CreateSpecialtyService };