import { Router } from "express";
import { 
    healthCheck, 
    getAllIntegrations, 
    enableEmail, 
    disableEmail, 
    enableGoogleCalendar, 
    disableGoogleCalendar, 
    enableWhatsapp, 
    disableWhatsapp, 
    setEmailSettings, 
    setGoogleCalendarSettings, 
    setWhatsappSettings, 
    getEmailSettings, 
    getGoogleCalendarSettings, 
    getWhatsappSettings 
} from "../controllers/integrations.js";

const router:Router = Router();

/**
 * @swagger
 * /api/integrations/health-check:
 *   get:
 *     summary: Check if integrations controller is healthy
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Integrations controller is healthy
 */
router.get("/health-check", healthCheck)

/**
 * @swagger
 * /api/integrations:
 *   get:
 *     summary: Get all integrations
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: All integrations fetched successfully
 */
router.get("/", getAllIntegrations)

// Email Routes

/**
 * @swagger
 * /api/integrations/email/enable:
 *   post:
 *     summary: Enable email integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Email integration enabled successfully
 */
router.post("/email/enable", enableEmail)

/**
 * @swagger
 * /api/integrations/email/disable:
 *   post:
 *     summary: Disable email integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Email integration disabled successfully
 */
router.post("/email/disable", disableEmail)

/**
 * @swagger
 * /api/integrations/email/settings:
 *   put:
 *     summary: Set email integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Email settings updated successfully
 */
router.put("/email/settings", setEmailSettings)

/**
 * @swagger
 * /api/integrations/email/settings:
 *   get:
 *     summary: Get email integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Email settings fetched successfully
 */
router.get("/email/settings", getEmailSettings)

// Google Calendar Routes

/**
 * @swagger
 * /api/integrations/google-calendar/enable:
 *   post:
 *     summary: Enable Google Calendar integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Google Calendar integration enabled successfully
 */
router.post("/google-calendar/enable", enableGoogleCalendar)

/**
 * @swagger
 * /api/integrations/google-calendar/disable:
 *   post:
 *     summary: Disable Google Calendar integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Google Calendar integration disabled successfully
 */
router.post("/google-calendar/disable", disableGoogleCalendar)

/**
 * @swagger
 * /api/integrations/google-calendar/settings:
 *   put:
 *     summary: Set Google Calendar integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Google Calendar settings updated successfully
 */
router.put("/google-calendar/settings", setGoogleCalendarSettings)

/**
 * @swagger
 * /api/integrations/google-calendar/settings:
 *   get:
 *     summary: Get Google Calendar integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Google Calendar settings fetched successfully
 */
router.get("/google-calendar/settings", getGoogleCalendarSettings)

// Whatsapp Routes

/**
 * @swagger
 * /api/integrations/whatsapp/enable:
 *   post:
 *     summary: Enable Whatsapp integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Whatsapp integration enabled successfully
 */
router.post("/whatsapp/enable", enableWhatsapp)

/**
 * @swagger
 * /api/integrations/whatsapp/disable:
 *   post:
 *     summary: Disable Whatsapp integration
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Whatsapp integration disabled successfully
 */
router.post("/whatsapp/disable", disableWhatsapp)

/**
 * @swagger
 * /api/integrations/whatsapp/settings:
 *   put:
 *     summary: Set Whatsapp integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Whatsapp settings updated successfully
 */
router.put("/whatsapp/settings", setWhatsappSettings)

/**
 * @swagger
 * /api/integrations/whatsapp/settings:
 *   get:
 *     summary: Get Whatsapp integration settings
 *     tags: [Integrations]
 *     responses:
 *       200:
 *         description: Whatsapp settings fetched successfully
 */
router.get("/whatsapp/settings", getWhatsappSettings)


export default router;
