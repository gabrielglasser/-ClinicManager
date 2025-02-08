import { query, Request, Response } from "express";

import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;
    const deleteUserService = new DeleteUserService();
    const user = await deleteUserService.execute(id as string);
    return res.json(user);
  }
}

export { DeleteUserController };
