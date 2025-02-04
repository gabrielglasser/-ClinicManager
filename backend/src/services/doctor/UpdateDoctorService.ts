import prismaClient from "../../prisma"; 

interface UpdateDoctorRequest {
  id: string;
  name?: string;
  crm?: string;
  especialidadeId?: string;
  telefone?: string;
}

class UpdateDoctorService {
  async execute({ id, name, crm, especialidadeId, telefone }: UpdateDoctorRequest) {
    const doctorExists = await prismaClient.medico.findUnique({
      where: { id },
    });

    if (!doctorExists) {
      throw new Error("Doctor not found");
    }

    const updatedDoctor = await prismaClient.medico.update({
      where: { id },
      data: {
        nome: name,
        crm,
        especialidadeId,
        telefone,
      },
      select: {
        id: true,
        nome: true,
        crm: true,
        especialidadeId: true,
        telefone: true,
      },
    });

    return updatedDoctor;
  }
}

export { UpdateDoctorService };
