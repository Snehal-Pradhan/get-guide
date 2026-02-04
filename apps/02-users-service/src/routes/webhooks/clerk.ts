import { Router,raw } from "express";
import { clerkWebhookController } from "../../controllers/webhooks/clerk.js";

const router:Router = Router();

router.post("/",raw({ type: 'application/json' }),clerkWebhookController )
export default router;