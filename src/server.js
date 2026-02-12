const express = require("express");
const productRoutes = require("./routes/product.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/produtos", productRoutes);

app.get("/", (req, res) => {
  res.send("API de produtos está rodando");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
