import { Request, Response } from "express";

import { DeleteConsultationService } from "../../services/consultation/DeleteConsultationService";

class DeleteConsultationController {
    async handle(req: Request, res: Response) {
        const { id } = req.query;
        const deleteConsultationService = new DeleteConsultationService();
        const consultation = await deleteConsultationService.execute(id as string);
        return res.json(consultation);
    }
}

export { DeleteConsultationController };