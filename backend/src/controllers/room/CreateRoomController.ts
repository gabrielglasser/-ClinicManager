import { Request, Response } from "express";
import { CreateRoomService } from "../../services/room/CreateRoomService";

class CreateRoomController {
    async handle(req: Request, res: Response) {
        const { number } = req.body;
        const createRoomService = new CreateRoomService();
        const room = await createRoomService.execute({ number });
        return res.json(room);
    }
}

export { CreateRoomController };