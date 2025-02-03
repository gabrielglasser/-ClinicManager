import prismaClient from "../../prisma";

interface DoctorRequest {
    name: string;
    crm: string;
    especialidadeId: string;
    telefone: string;
}

class CreateDoctorService {
    async execute({ name, crm, especialidadeId, telefone }: DoctorRequest) {
        const doctor = await prismaClient.medico.create({
            data: {
                nome: name,
                crm: crm,
                especialidadeId: especialidadeId,
                telefone: telefone
            },
            select: {
                id: true,
                nome: true,
                crm: true,
                especialidadeId: true,
                telefone: true
            }
        });

        return doctor;
    }
}

export { CreateDoctorService }