import prismaClient from "../../prisma";

interface PatientRequest {
    id: string;
}

class DeletePatientService {
    async execute({ id }: PatientRequest) {
        const patientExists = await prismaClient.paciente.findUnique({
            where: { id },
        });

        if (!patientExists) {
            throw new Error("Patient not found");
        }

        const deletedPatient = await prismaClient.paciente.delete({
            where: { id },
        });

        return deletedPatient;
    }
}

export { DeletePatientService };