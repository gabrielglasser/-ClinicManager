import { Request, Response } from "express";

import { CreatePatientService } from "../../services/patient/CreatePatientService";

class CreatePatientController {
    async handle(req: Request, res: Response) {
        const { name, idade, telefone, endereco } = req.body;

        const createPatientService = new CreatePatientService();

        const patient = await createPatientService.execute({
            name,
            idade,
            telefone,
            endereco,
        });

        return res.json(patient);
    }
}

export { CreatePatientController };