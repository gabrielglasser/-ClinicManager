import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateDoctorController } from "../controllers/doctor/CreateDoctorController";
import { DetailDoctorController } from "../controllers/doctor/DetailDoctorController";
import { UpdateDoctorController } from "../controllers/doctor/UpdateDoctorController";
import { DeleteDoctorController } from "../controllers/doctor/DeleteDoctorController";

const doctorRoutes = Router();

const createDoctorController = new CreateDoctorController();
const detailDoctorController = new DetailDoctorController();
const updateDoctorController = new UpdateDoctorController();
const deleteDoctorController = new DeleteDoctorController();

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

doctorRoutes.delete(
    "/delete",
    deleteDoctorController.handle
);

export { doctorRoutes };