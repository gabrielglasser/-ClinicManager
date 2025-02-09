import { Request, Response } from "express";

import { DeleteDoctorService } from "../../services/doctor/DeleteDoctorService";

class DeleteDoctorController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;
    const deleteDoctorService = new DeleteDoctorService();
    const doctor = await deleteDoctorService.execute(id as string);
    return res.json(doctor);
  }
}

export { DeleteDoctorController };
