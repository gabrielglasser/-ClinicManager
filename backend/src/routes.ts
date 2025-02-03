import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

//------- ROTAS USUÁRIOS -------//

router.post("/users", (req, res, next) => {
  new CreateUserController().handle(req, res);
});

router.post("/login", (req, res, next) => {
  new AuthUserController().handle(req, res);
});

export { router };
