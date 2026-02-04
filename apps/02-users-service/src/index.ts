import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";
import "dotenv/config";
import { clerkMiddleware, getAuth } from '@clerk/express';
import profileRoute from "./routes/profile.js";
import fileHandlingRoute from "./routes/fileHandling.js";
import integrationsRoute from "./routes/integrations.js";
import roadmapsRoute from "./routes/roadmaps.js";
import { globalErrorHandler } from "./middlewares/error.js";
import { verifyWebhook } from "@clerk/express/webhooks";
import { db } from "./db/drizzle.js";
import { UserTable } from "./db/schema.js";
import { eq } from "drizzle-orm";


const app = express();

app.post('/api/webhooks', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const evt = await verifyWebhook(req)
    const { type, data } = evt

    console.log(`Received webhook: ${type}`, data.id);

    if (type === 'user.created') {
      const { id, first_name, last_name } = data as any;
      await db.insert(UserTable).values({
        clerkId: id,
        firstName: first_name || "User",
        lastName: last_name || "", 
      });
      console.log(`User created: ${id}`);
    } else if (type === 'user.updated') {
      const { id, first_name, last_name } = data as any;
      await db.update(UserTable).set({
        firstName: first_name || "User",
        lastName: last_name || "",
      }).where(eq(UserTable.clerkId, id));
      console.log(`User updated: ${id}`);
    } else if (type === 'user.deleted') {
      const { id } = data as any;
      await db.delete(UserTable).where(eq(UserTable.clerkId, id));
      console.log(`User deleted: ${id}`);
    }

    return res.status(200).send('Webhook received')
  } catch (err: any) {
    console.error('Error verifying webhook:', err.message || err)
    return res.status(400).send('Error verifying webhook')
  }
})

app.get("/api/health-check", (req, res) => {
  return res.json({ message: "healthy" })
});


app.use(clerkMiddleware());
app.use(cors());
app.use(express.json());

app.use("/api/profile", profileRoute);
app.use("/api/files", fileHandlingRoute);
app.use("/api/integrations", integrationsRoute);
app.use("/api/roadmaps", roadmapsRoute);

app.get('/api/', (req, res) => {
  const auth = getAuth(req);
  if (!auth.userId) {  
    return res.json({ message: "Hello World! not auth" });
  }
  res.json({ message: "Hello World!", userId: auth.userId });
});

app.use(globalErrorHandler);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.get("/swagger.json", (_req, res) => {
  res.json(swaggerSpec);
});

app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});