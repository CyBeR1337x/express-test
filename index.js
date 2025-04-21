import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => res.json({ sucess: true }));

app.listen(PORT, () => {
  console.log("Lisetning on: " + PORT);
});
