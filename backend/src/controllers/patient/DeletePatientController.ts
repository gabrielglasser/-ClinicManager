import { Request, Response } from "express";
import { DeletePatientService } from "../../services/patient/DeletePatientService";

class DeletePatientController {
    async handle(req: Request, res: Response) {
        const { id } = req.query;
        const deletePatientService = new DeletePatientService();
        const patient = await deletePatientService.execute({ id: id as string });
        return res.json(patient);
    }
}

export { DeletePatientController };