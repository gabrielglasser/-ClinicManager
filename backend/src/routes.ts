import { Router } from "express";

import { userRoutes } from "./routes/user.routes";

import { doctorRoutes } from "./routes/doctor.routes";

import { CreateSpecialtyController } from "./controllers/specialty/CreateSpecialtyController";

import { patientsRoutes } from "./routes/patient.routes";

import { consultationsRoutes } from "./routes/consultation.routes";

import { CreateRoomController } from "./controllers/room/CreateRoomController";


const router = Router();

//------- ROTAS USUÁRIOS -------//

router.use("/users", userRoutes);

//------- ROTAS MEDICO -------//

router.use("/doctors", doctorRoutes);


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
