import prismaClient from "../../prisma";

class DetailDoctorService {
  async execute(id: string) {
    const doctor = await prismaClient.medico.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        crm: true,
        especialidadeId: true,
        telefone: true,
      }
    });
    if (!doctor) {
      throw new Error("Doctor not found");
    }
    return doctor;
  }
}

export { DetailDoctorService };
