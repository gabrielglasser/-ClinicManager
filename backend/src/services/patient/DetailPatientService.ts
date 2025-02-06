import prismaClient from "../../prisma";

class DetailPatientService {
    async execute() {
        const patients = await prismaClient.paciente.findMany();
        return patients;
    }
}

export { DetailPatientService };