import { Request, Response } from "express";
import { CreateConsultationService } from "../../services/consultation/CreateConsultationService";

class CreateConsultationController {
    async handle(req: Request, res: Response) {
        const { patient_id, doctor_id, date, sala_id } = req.body;
        const createConsultationService = new CreateConsultationService();
        const consultation = await createConsultationService.execute({ patient_id, doctor_id, date, sala_id });
        return res.json(consultation);
    }
}

export { CreateConsultationController };