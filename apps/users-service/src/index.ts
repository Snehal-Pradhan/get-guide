import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware,getAuth } from '@clerk/express'

const app = express();

app.use(clerkMiddleware());
app.use(cors());
app.use(express.json());

app.get("/api/health-check",(req,res)=>{
    return res.json({message :"healthy"})
})

app.get('/api/', (req, res) => {
  const auth = getAuth(req);
  

  if (!auth.userId) {  
    return res.json({ message: "Hello World! not auth" });
  }

  res.json({ message: "Hello World!", userId: auth.userId });
});

app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});