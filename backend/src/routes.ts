import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailuserController";

import { CreateDoctorController } from "./controllers/doctor/CreateDoctorController";
import { DetailDoctorController } from "./controllers/doctor/DetailDoctorController";
import { UpdateDoctorController } from "./controllers/doctor/UpdateDoctorController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";

import { CreateSpecialtyController } from "./controllers/specialty/CreateSpecialtyController";

import { patientsRoutes } from "./routes/patient.routes";

import { consultationsRoutes } from "./routes/consultation.routes";


const router = Router();

//------- ROTAS USUÁRIOS -------//

router.post("/users", (req, res, next) => {
  new CreateUserController().handle(req, res);
});

router.post("/users/login", (req, res, next) => {
  new AuthUserController().handle(req, res);
});

router.get("/users/detail", (req, res, next) => {
  new DetailUserController().handle(req, res);
});

router.delete("/users/delete", (req, res, next) => {
  new DeleteUserController().handle(req, res);
});

//------- ROTAS MEDICO -------//

router.post("/doctors", (req, res, next) => {
  new CreateDoctorController().handle(req, res);
});
router.get("/doctors/detail", (req, res, next) => {
  new DetailDoctorController().handle(req, res);
})
router.put("/doctors/update", (req, res, next) => {
  new UpdateDoctorController().handle(req, res);
});


//------- ROTAS ESPECIALIDADE -------//
router.post("/specialty", (req, res, next) => {
  new CreateSpecialtyController().handle(req, res);
});


//------- ROTAS PACIENTES -------//

router.use("/patient", patientsRoutes);

//------- ROTAS CONSULTAS -------//
router.use("/consultation", consultationsRoutes);


export { router };
