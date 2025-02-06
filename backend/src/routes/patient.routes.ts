import { Router } from "express";

import { CreatePatientController } from "../controllers/patient/CreatePatientController";
import { UpdatePatientController } from "../controllers/patient/UpdatePatientController";
import { DeletePatientController } from "../controllers/patient/DeletePatientController";
import { DetailPatientController } from "../controllers/patient/DetailPatientController";


import { ensureRole } from "../middlewares/ensureRole";