import prismaClient from "../../prisma";

class DeleteDoctorService {
  async execute(id: string) {
    const doctorExists = await prismaClient.medico.findUnique({
      where: { id },
    });

    if (!doctorExists) {
      throw new Error("Doctor not found");
    }

    const deletedDoctor = await prismaClient.medico.delete({
      where: { id },
    }), select = {
      id: true,
      nome: true,
      crm: true,
      especialidadeId: true,
      telefone: true,
    };

    return deletedDoctor;
  }
}

export { DeleteDoctorService };
