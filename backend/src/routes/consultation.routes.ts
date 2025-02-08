import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateConsultationController } from "../controllers/consultation/CreateConsultationController";
import { DetailConsultationController } from "../controllers/consultation/DetailConsultationController";
import { UpdateConsultationController } from "../controllers/consultation/UpdateConsultationController";

const consultationsRoutes = Router();

const createConsultationController = new CreateConsultationController();
const detailConsultationController = new DetailConsultationController();
const updateConsultationController = new UpdateConsultationController();


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



export { consultationsRoutes };