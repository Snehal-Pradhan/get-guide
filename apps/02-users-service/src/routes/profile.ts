import { Router } from "express";
import { healthCheck, getProfile, createProfile, updateProfile, deleteProfile, getStats } from "../controllers/profile.js";

const router:Router = Router();

/**
 * @swagger
 * /api/profile/health-check:
 *   get:
 *     summary: Check if the profile controller is healthy
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profile controller is healthy
 */
router.get("/health-check", healthCheck)

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profile fetched successfully
 */
router.get("/", getProfile)

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Create user profile
 *     tags: [Profile]
 *     responses:
 *       201:
 *         description: Profile created successfully
 */
router.post("/", createProfile)

/**
 * @swagger
 * /api/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profile updated successfully
 */
router.put("/", updateProfile)

/**
 * @swagger
 * /api/profile:
 *   delete:
 *     summary: Delete user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profile deleted successfully
 */
router.delete("/", deleteProfile)

/**
 * @swagger
 * /api/profile/stats:
 *   get:
 *     summary: Get profile statistics
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Stats fetched successfully
 */
router.get("/stats", getStats)


export default router;