import express from "express";
import cors from "cors";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.get("/health", (request, response) => {
  return response.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
