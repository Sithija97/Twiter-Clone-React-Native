import express, { Request, Response } from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from ESM + TypeScript 🚀");
});

app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () =>
      console.log(`Server is up and running on PORT:${ENV.PORT} 🚀`)
    );
  } catch (error: any) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
