import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5010;

app.use(cors());

app.get("/", (req, res) => res.json({ sucess: true }));

app.listen(PORT, () => {
  console.log("Lisetning on: " + PORT);
});
