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
import clerkWebhookRoute from "./routes/webhooks/clerk.js";


const app = express();

app.use("/api/webhooks", clerkWebhookRoute);
app.use(clerkMiddleware());
app.use(cors());
app.use(express.json());

app.get("/api/health-check", (req, res) => {
  return res.json({ message: "healthy" })
});
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