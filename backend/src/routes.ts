import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// routes user
router.post("/users", new CreateUserController().handle);

export default router;
