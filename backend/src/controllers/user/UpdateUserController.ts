import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id, name, email, password, type } = req.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
            id,
            name,    
            email,
            password,
            type
        });

        return res.json(user);
    }
}

export { UpdateUserController };