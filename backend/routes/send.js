import express from "express";
import { getDigest } from "../controller/digest.js";

const router = express.Router();

router.post('/sending-digest', getDigest)

export default router