import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateConsultationController } from "../controllers/consultation/CreateConsultationController";

const consultationsRoutes = Router();

const createConsultationController = new CreateConsultationController();


// ROTAS PROTEGIDAS
consultationsRoutes.post(
    "/",
    createConsultationController.handle
);

export { consultationsRoutes };