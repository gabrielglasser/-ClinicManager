import prismaClient from "../../prisma";

class DetailConsultationService {
  async execute(id: string) {
    console.log(id);

    if (!id || typeof id !== "string" || id.trim() === "") {
      throw new Error("Invalid ID provided.");
    }

    const consultationExists = await prismaClient.consulta.findUnique({
      where: { id: id.trim() },
    });

    if (!consultationExists) {
      throw new Error("Consultation not found");
    }

    const consultation = await prismaClient.consulta.findUnique({
      where: { id: id.trim() },
      select: {
        id: true,
        pacienteId: true,
        medicoId: true,
        salaId: true,
        data: true,
      },
    });

    return consultation;
  }
}

export { DetailConsultationService };
