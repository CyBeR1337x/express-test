import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("dev"))

app.use((err, req, res, next) => {
  console.error("💥 Error occurred:", err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => res.send("✅ It works!"));
app.get("/t", (req, res) => {
  console.log("JERE");
  return res.json({"test": 4})
})

app.listen(PORT, '0.0.0.0', () => {
  console.log("Lisetning on: " + PORT);
  console.log("dasdasdasdasdsadasdsadasd")
});
