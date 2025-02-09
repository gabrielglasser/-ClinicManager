import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRole } from "../middlewares/ensureRole";

import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailuserController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", authUserController.handle);
userRoutes.get("/detail",  detailUserController.handle);
userRoutes.put("/update",  updateUserController.handle);
userRoutes.delete("/delete", deleteUserController.handle);

export { userRoutes };