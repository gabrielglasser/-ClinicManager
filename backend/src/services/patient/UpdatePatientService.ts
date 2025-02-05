import prismaClient from "../../prisma";

interface PatientRequest {
  id: string;
  name: string;
  idade: number;
  telefone: string;
  endereco: string;
}

class UpdatePatientService {
  async execute({ id, name, idade, telefone, endereco }: PatientRequest) {
    const patientExists = await prismaClient.paciente.findUnique({
      where: { id },
    });

    if (!patientExists) {
      throw new Error("Patient not found");
    }

    const updatedPatient = await prismaClient.paciente.update({
      where: { id },
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

    return updatedPatient;
  }
}

export { UpdatePatientService };