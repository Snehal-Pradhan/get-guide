import { Router } from "express";
import { analysis } from "../controllers/aiAnalysis.js"
import { asyncHandler } from "../utils/asyncHandler.js";

const router:Router = Router();

router.post("/analyze", asyncHandler(analysis));

export default router;