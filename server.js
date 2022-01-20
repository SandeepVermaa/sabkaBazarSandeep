const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const bannersData = require("./server/banners/index.get.json");
const categoriesData = require("./server/categories/index.get.json");
const productsData = require("./server/products/index.get.json");
const addToCartAPIResponseData = require("./server/addToCart/index.post.json");
let users = require("./users/users.js");

const port = 3000;
const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

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
  res.json(addToCartAPIResponseData);
});

app.post("/register", (req, res) => {
  const isUserExist = users.find((user) => user.email === req.body.email);
  if (isUserExist) {
    res.json({
      status: "failure",
      message: "User already exist with same email",
    });
  } else {
    users = [...users, { ...req.body, id: new Date().getTime() }];
    res.json({ status: "success", message: "User registered successfully" });
  }
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", (req, res) => {
  res.sendFile("pageNotFound.html", { root: __dirname });
});

app.listen(port);
