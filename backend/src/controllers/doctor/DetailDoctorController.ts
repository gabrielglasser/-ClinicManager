import { Request, Response } from "express";
import { DetailDoctorService } from "../../services/doctor/DetailDoctorService";

class DetailDoctorController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const detailDoctorService = new DetailDoctorService();
        const doctor = await detailDoctorService.execute(id);
        return res.json(doctor);
    }
}

export { DetailDoctorController };