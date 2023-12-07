
import express from "express";
import { listUsers, countUsers, loginUser, resetPassword, editUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/list-users", listUsers);

router.get("/count-users", countUsers);

router.post("/login", loginUser);

router.post("/reset-password", resetPassword);

router.post("/edit-username", editUser);

export default router;