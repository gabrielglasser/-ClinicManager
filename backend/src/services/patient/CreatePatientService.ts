import prismaClient from "../../prisma";

interface PatientRequest {
    name: string;
    idade: number;
    telefone: string;
    endereco: string;
}

class CreatePatientService {
    async execute({ name, idade, telefone, endereco }: PatientRequest) {
        const patient = await prismaClient.paciente.create({
            data: {
                nome: name,
                idade,
                telefone,
                endereco,
            },
            select: {
                id: true,
                nome: true,
                idade: true,
                telefone: true,
                endereco: true,
            },
        });

        return patient;
    }
}

export { CreatePatientService };