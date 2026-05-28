import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (request, response) => {
  return response.json({ status: "ok" });
});

export { app };
