import prismaClient from "../../prisma";

class DeleteConsultationService {
    async execute(consultation_id: string) {
        const consultation = await prismaClient.consulta.delete({
            where: {
                id: consultation_id,
            },
        });

        return consultation;
    }
}

export { DeleteConsultationService };