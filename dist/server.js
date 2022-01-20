const express = require('express')
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const bannersData = require("./server/banners/index.get.json");
const categoriesData = require("./server/categories/index.get.json");
const productsData = require("./server/products/index.get.json");
const addToCartAPIResponseData = require("./server/addToCart/index.post.json");

const port = 3000;
const app = express();
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());


app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname})
})

app.get("/banners", (req, res) => {
  res.json(bannersData);
});

app.get("/categories", (req, res) => {
  res.json(categoriesData);
});

app.get("/products", (req, res) => {
  res.json(productsData);
});

app.post("/addToCart", (req, res) => {
  console.log("addToCart API request body: ", req.body);
  res.json(addToCartAPIResponseData);
});

app.listen(port);