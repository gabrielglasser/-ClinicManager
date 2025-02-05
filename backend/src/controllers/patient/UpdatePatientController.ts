import { Request, Response } from "express";
import { UpdatePatientService } from "../../services/patient/UpdatePatientService";

class UpdatePatientController {
    async handle(req: Request, res: Response) {
        const { id: idParam = "" } = req.query as { id: string };
        const id = idParam;
        const { name, idade, telefone, endereco } = req.body;

        const updatePatientService = new UpdatePatientService();

        try {
            const updatedPatient = await updatePatientService.execute({
                id,
                name,
                idade,
                telefone,
                endereco,
            });

            return res.json(updatedPatient);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });            
        }
    }
}

export { UpdatePatientController };