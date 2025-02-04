import { Request, Response } from "express";
import { UpdateDoctorService } from "../../services/doctor/UpdateDoctorService";

class UpdateDoctorController {
  async handle(req: Request, res: Response) {
    const { id: idParam = "" } = req.query as { id: string };
    const id = idParam;
    const { name, crm, especialidadeId, telefone } = req.body;

    const updateDoctorService = new UpdateDoctorService();

    try {
      const updatedDoctor = await updateDoctorService.execute({
        id,
        name,
        crm,
        especialidadeId,
        telefone,
      });

      return res.json(updatedDoctor);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateDoctorController };
