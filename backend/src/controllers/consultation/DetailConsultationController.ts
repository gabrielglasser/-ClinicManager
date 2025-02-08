import { Request, Response } from "express";

import { DetailConsultationService } from "../../services/consultation/DetailConsultationService";

class DetailConsultationController {
    async handle(req: Request, res: Response) {
        const { id } = req.query;
        const detailConsultationService = new DetailConsultationService();
        const consultation = await detailConsultationService.execute(id as string);
        return res.json(consultation);
    }
}

export { DetailConsultationController }