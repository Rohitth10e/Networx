import express from "express";
import { authMiddleware } from "../../middlewares/auth.js";
import { register, login } from "../../controllers/user/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;