import { Router } from "express";
import { analysis } from "../controllers/analysis.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { working } from "../controllers/analysis.js";

const router:Router = Router();

router.post("/analyze",asyncHandler(analysis));
router.get("/working",asyncHandler(working));

export default router;
