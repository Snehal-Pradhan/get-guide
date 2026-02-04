import { Router } from "express";
import { 
    healthCheck, 
    getAllRoadmaps, 
    getRoadmapById, 
    createRoadmap, 
    updateRoadmap, 
    deleteRoadmap, 
    getRoadmapStats, 
    getRoadmapCourses 
} from "../controllers/roadmaps.js";

const router:Router = Router();

/**
 * @swagger
 * /api/roadmaps/health-check:
 *   get:
 *     summary: Check if roadmaps controller is healthy
 *     tags: [Roadmaps]
 *     responses:
 *       200:
 *         description: Roadmaps controller is healthy
 */
router.get("/health-check", healthCheck)

/**
 * @swagger
 * /api/roadmaps:
 *   get:
 *     summary: Get all roadmaps
 *     tags: [Roadmaps]
 *     responses:
 *       200:
 *         description: All roadmaps fetched successfully
 */
router.get("/", getAllRoadmaps)

/**
 * @swagger
 * /api/roadmaps/{id}:
 *   get:
 *     summary: Get a roadmap by ID
 *     tags: [Roadmaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Roadmap ID
 *     responses:
 *       200:
 *         description: Roadmap fetched successfully
 */
router.get("/:id", getRoadmapById)

/**
 * @swagger
 * /api/roadmaps:
 *   post:
 *     summary: Create a new roadmap
 *     tags: [Roadmaps]
 *     responses:
 *       201:
 *         description: Roadmap created successfully
 */
router.post("/", createRoadmap)

/**
 * @swagger
 * /api/roadmaps/{id}:
 *   put:
 *     summary: Update a roadmap
 *     tags: [Roadmaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Roadmap ID
 *     responses:
 *       200:
 *         description: Roadmap updated successfully
 */
router.put("/:id", updateRoadmap)

/**
 * @swagger
 * /api/roadmaps/{id}:
 *   delete:
 *     summary: Delete a roadmap
 *     tags: [Roadmaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Roadmap ID
 *     responses:
 *       200:
 *         description: Roadmap deleted successfully
 */
router.delete("/:id", deleteRoadmap)

/**
 * @swagger
 * /api/roadmaps/stats/all:
 *   get:
 *     summary: Get all roadmap statistics
 *     tags: [Roadmaps]
 *     responses:
 *       200:
 *         description: Roadmap stats fetched successfully
 */
router.get("/stats/all", getRoadmapStats)

/**
 * @swagger
 * /api/roadmaps/{id}/courses:
 *   get:
 *     summary: Get all courses of a roadmap by ID
 *     tags: [Roadmaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Roadmap ID
 *     responses:
 *       200:
 *         description: Roadmap courses fetched successfully
 */
router.get("/:id/courses", getRoadmapCourses) 

export default router;