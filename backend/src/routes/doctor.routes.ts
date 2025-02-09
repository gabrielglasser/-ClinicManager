import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateDoctorController } from "../controllers/doctor/CreateDoctorController";
import { DetailDoctorController } from "../controllers/doctor/DetailDoctorController";
import { UpdateDoctorController } from "../controllers/doctor/UpdateDoctorController";

const doctorRoutes = Router();

const createDoctorController = new CreateDoctorController();
const detailDoctorController = new DetailDoctorController();
const updateDoctorController = new UpdateDoctorController();

// ROTAS PROTEGIDAS
doctorRoutes.post(
    "/",
    createDoctorController.handle
);

doctorRoutes.get(
    "/detail",
    detailDoctorController.handle
);

doctorRoutes.put(
    "/update",
    updateDoctorController.handle
);

export { doctorRoutes };