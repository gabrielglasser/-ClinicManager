import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreatePatientController } from "../controllers/patient/CreatePatientController";
import { UpdatePatientController } from "../controllers/patient/UpdatePatientController";
import { DeletePatientController } from "../controllers/patient/DeletePatientController";
import { DetailPatientController } from "../controllers/patient/DetailPatientController";

const patientsRoutes = Router();

const createPatientController = new CreatePatientController();
const updatePatientController = new UpdatePatientController();
const deletePatientController = new DeletePatientController();
const detailPatientController = new DetailPatientController();



// ROTAS PROTEGIDAS
patientsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureRole(["recepcionista", "admin"]),
    createPatientController.handle
);

patientsRoutes.put(
    "/update",
    ensureAuthenticated,
    ensureRole(["recepcionista", "admin"]),
    updatePatientController.handle
);

patientsRoutes.get(
    "/detail",
    ensureAuthenticated,
    ensureRole(["recepcionista", "admin"]),
    detailPatientController.handle
);

patientsRoutes.delete(
    "/delete",
    ensureAuthenticated,
    ensureRole(["recepcionista", "admin"]),
    deletePatientController.handle
);

export { patientsRoutes };