const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Cargar datos desde data.json
app.get("/load", (req, res) => {
  try {
    const raw = fs.readFileSync(path.join(__dirname, "data.json"), "utf8");
    const data = JSON.parse(raw || "{}");
    res.json(data);
  } catch (err) {
    console.error("Error leyendo data.json:", err.message);
    res.json({});
  }
});

// Guardar datos en data.json
app.post("/save", (req, res) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "data.json"),
      JSON.stringify(req.body, null, 2),
      "utf8"
    );
    res.json({ status: "ok" });
  } catch (err) {
    console.error("Error escribiendo data.json:", err.message);
    res.status(500).json({ status: "error" });
  }
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`GT3 backend escuchando en http://localhost:${PORT}`);
});

