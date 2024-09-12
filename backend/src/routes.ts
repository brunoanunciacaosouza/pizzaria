import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreteCategoryController } from "./controllers/category/CreateCategoryController";

import isAuthenticated from "./middlewares/isAuthenticated";

const router = Router();

// routes user
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// routes category
router.post(
  "/categories",
  isAuthenticated,
  new CreteCategoryController().handle
);

export default router;
