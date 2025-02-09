import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateConsultationController } from "../controllers/consultation/CreateConsultationController";
import { DetailConsultationController } from "../controllers/consultation/DetailConsultationController";
import { UpdateConsultationController } from "../controllers/consultation/UpdateConsultationController";
import { DeleteConsultationController } from "../controllers/consultation/DeleteConsultationController";

const consultationsRoutes = Router();

const createConsultationController = new CreateConsultationController();
const detailConsultationController = new DetailConsultationController();
const updateConsultationController = new UpdateConsultationController();
const deletePatientController = new DeleteConsultationController();


// ROTAS PROTEGIDAS
consultationsRoutes.post(
    "/",
    createConsultationController.handle
);

consultationsRoutes.get(
    "/detail",
    detailConsultationController.handle
);

consultationsRoutes.put(
    "/update",
    updateConsultationController.handle
);

consultationsRoutes.delete(
    "/delete",
    deletePatientController.handle
);



export { consultationsRoutes };