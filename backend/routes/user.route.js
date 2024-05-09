import express from "express";
import { deleteUser, getUser, getUserListing, updateUser, user } from "../controllers/user.Controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", user)
router.post("/update/:id", verifyToken ,updateUser)
router.delete("/delete/:id", verifyToken ,deleteUser)
router.get("/listings/:id", verifyToken, getUserListing)
router.get("/:id", verifyToken, getUser)

export default router