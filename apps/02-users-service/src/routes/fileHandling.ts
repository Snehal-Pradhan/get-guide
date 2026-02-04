import { Router } from "express";
import { healthCheck, uploadFile, getFile, getFiles, renameFile, deleteAllFiles, deleteFile, getFilesCount } from "../controllers/fileHandling.js";

const router:Router = Router();

/**
 * @swagger
 * /api/files/health-check:
 *   get:
 *     summary: Check if the file controller is healthy
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: File controller is healthy
 */
router.get("/health-check", healthCheck)

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: Upload a new file
 *     tags: [Files]
 *     responses:
 *       201:
 *         description: File uploaded successfully
 */
router.post("/upload", uploadFile)

/**
 * @swagger
 * /api/files/file/{id}:
 *   get:
 *     summary: Get a file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The file ID
 *     responses:
 *       200:
 *         description: File fetched successfully
 */
router.get("/file/:id", getFile)

/**
 * @swagger
 * /api/files/files:
 *   get:
 *     summary: Get all files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Files fetched successfully
 */
router.get("/files", getFiles)

/**
 * @swagger
 * /api/files/file/{id}:
 *   put:
 *     summary: Rename a file
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The file ID
 *     responses:
 *       200:
 *         description: File renamed successfully
 */
router.put("/file/:id", renameFile)

/**
 * @swagger
 * /api/files/files:
 *   delete:
 *     summary: Delete all files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: All files deleted successfully
 */
router.delete("/files", deleteAllFiles)

/**
 * @swagger
 * /api/files/file/{id}:
 *   delete:
 *     summary: Delete a file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The file ID
 *     responses:
 *       200:
 *         description: File deleted successfully
 */
router.delete("/file/:id", deleteFile)

/**
 * @swagger
 * /api/files/count:
 *   get:
 *     summary: Get total count of files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: File count fetched successfully
 */
router.get("/count", getFilesCount)

export default router;