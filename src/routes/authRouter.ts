import express from "express";
import {
  registerUser,
  authenticateUser,
  logoutUser,
} from "../controllers/authController";
import { createTrip, getTrip } from "../controllers/tripController";

const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/login", authenticateUser);
router.post("/api/logout", logoutUser);
router.post("/api/trip", createTrip);
router.get("/api/trip", getTrip);

export default router;
