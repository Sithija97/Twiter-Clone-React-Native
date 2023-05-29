import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "TEST endpoint",
  });
});

app.post("/testPost", async (req, res) => {
  console.log("hitting endpoint");
  console.log(req.body.data);
});

app.listen(process.env.PORT, () =>
  console.log(`server is running on port: ${process.env.PORT}`)
);
