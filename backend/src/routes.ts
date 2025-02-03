import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

import { CreateDoctorController } from "./controllers/doctor/CreateDoctorController";

const router = Router();

//------- ROTAS USUÁRIOS -------//

router.post("/users", (req, res, next) => {
  new CreateUserController().handle(req, res);
});

router.post("/login", (req, res, next) => {
  new AuthUserController().handle(req, res);
});

//------- ROTAS MEDICO -------//

router.post("/doctors", (req, res, next) => {
  new CreateDoctorController().handle(req, res);
});


export { router };
