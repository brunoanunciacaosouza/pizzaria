import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreteCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import isAuthenticated from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

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
router.get("/categories", isAuthenticated, new ListCategoryController().handle);

// routes product
router.post(
  "/products",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/categories/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

export default router;
