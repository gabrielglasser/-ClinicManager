import { Request, Response } from "express";
import { CreateSpecialtyService } from "../../services/epecialty/CreateSpecialtyService";

class CreateSpecialtyController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createSpecialtyService = new CreateSpecialtyService();

        const specialty = await createSpecialtyService.execute({ name });

        return res.json(specialty);
    }
}

export { CreateSpecialtyController };