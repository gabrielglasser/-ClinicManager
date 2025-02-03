import { Request, Response } from "express";
import { CreateDoctorService } from "../../services/doctor/CreateDoctorService";

class CreateDoctorController {
  async handle(req: Request, res: Response) {
    const { name, crm, especialidadeId, telefone } = req.body;

    const createDoctorService = new CreateDoctorService();

    const doctor = await createDoctorService.execute({
      name,
      crm,
      especialidadeId,
      telefone,
    });

    return res.json(doctor);
  }
}

export { CreateDoctorController };
