import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/postAttendence", async (req, res) => {
  console.log(req.body.data);
});

app.listen(process.env.PORT, () =>
  console.log(`server is running on port: ${process.env.PORT}`)
);
