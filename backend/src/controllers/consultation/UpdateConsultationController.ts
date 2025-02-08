import { Request, Response } from "express";
import { UpdateConsultationService } from "../../services/consultation/UpdateConsultationService";

class UpdateConsultationController {
    async handle(req: Request, res: Response) {
        const { id, date, patient_id, doctor_id, room_id } = req.body;
        const updateConsultationService = new UpdateConsultationService();
        const consultation = await updateConsultationService.execute({ id, date, patient_id, doctor_id, room_id });
        return res.json(consultation);
    }
}

export { UpdateConsultationController }