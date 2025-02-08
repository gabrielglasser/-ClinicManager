import prismaClient from "../../prisma";

interface ConsultationRequest {
    id: string;
    date: Date;
    patient_id: string;
    doctor_id: string;
    room_id: string;
}

class UpdateConsultationService {
    async execute({ id, date, patient_id, doctor_id, room_id }: ConsultationRequest) {
        const consultationExists = await prismaClient.consulta.findUnique({
            where: { id: id.trim() },
        });

        if (!consultationExists) {
            throw new Error("Consultation not found");
        }

        const updatedConsultation = await prismaClient.consulta.update({
            where: { id: id.trim() },
            data: {
                data: new Date(),
                pacienteId: patient_id,
                medicoId: doctor_id,
                salaId: room_id,
            },
        });

        return updatedConsultation;
    }
}

export { UpdateConsultationService }
