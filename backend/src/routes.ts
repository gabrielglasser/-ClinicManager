import { Router } from "express";

import { userRoutes } from "./routes/user.routes";

import { CreateDoctorController } from "./controllers/doctor/CreateDoctorController";
import { DetailDoctorController } from "./controllers/doctor/DetailDoctorController";
import { UpdateDoctorController } from "./controllers/doctor/UpdateDoctorController";

import { CreateSpecialtyController } from "./controllers/specialty/CreateSpecialtyController";

import { patientsRoutes } from "./routes/patient.routes";

import { consultationsRoutes } from "./routes/consultation.routes";

import { CreateRoomController } from "./controllers/room/CreateRoomController";


const router = Router();

//------- ROTAS USUÁRIOS -------//

router.use("/users", userRoutes);

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

//------- ROTAS CONSULTAS -------//
router.post("/room", (req, res, next) => {
  new CreateRoomController().handle(req, res);
});


export { router };
