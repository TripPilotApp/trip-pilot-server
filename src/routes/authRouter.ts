import express from "express";
import {
  registerUser,
  authenticateUser,
  logoutUser,
} from "../controllers/authController";

const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/login", authenticateUser);
router.post("/api/logout", logoutUser);

export default router;
