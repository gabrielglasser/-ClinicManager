import { Request, Response } from "express";

import { DetailPatientService } from "../../services/patient/DetailPatientService";

class DetailPatientController {
    async handle(req: Request, res: Response) {
        const detailPatientService = new DetailPatientService();
        const patients = await detailPatientService.execute();
        return res.json(patients);
    }
}

export { DetailPatientController };