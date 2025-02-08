import prismaClient from "../../prisma";

interface ConsultationRequest {
    patient_id: string;
    doctor_id: string;
    date: Date;
    sala_id: string;
}

class CreateConsultationService {
    async execute({ patient_id, doctor_id, date, sala_id }: ConsultationRequest) {

        const patientExists = await prismaClient.paciente.findUnique({
            where: { id: patient_id },
        });

        if (!patientExists) {
            throw new Error("Patient not found");
        }

        const doctorExists = await prismaClient.medico.findUnique({
            where: { id: doctor_id },
        });

        if (!doctorExists) {
            throw new Error("Doctor not found");
        }

        const salaExists = await prismaClient.sala.findUnique({
            where: { id: sala_id },
        });

        if (!salaExists) {
            throw new Error("Sala not found");
        }



        const consultation = await prismaClient.consulta.create({
            data: {
                pacienteId: patient_id,
                medicoId: doctor_id,
                data: new Date(),
                salaId: sala_id || null,
            },
        });
        return consultation;
    }
}

export { CreateConsultationService };