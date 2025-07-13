import express from "express";
import { getAllContacts, handleContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", handleContact);
router.get('/contact', getAllContacts);

export default router;
