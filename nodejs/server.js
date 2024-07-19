const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = 3000;

const Clothes = require("./clothes.js"); // Ensure you have the Clothes model defined

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose
  .connect("mongodb://127.0.0.1:27017/commerce")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("/api/clothes", async (req, res) => {
    try {
      const { size, status, category } = req.query;
      let filter = {};

      if (size) filter.size = { $in: [size] };
      if (status) filter.status = status;
      if (category) filter.category = category;

      const clothes = await Clothes.find(filter);

      res.json(clothes);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send(err);
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening to port " + port);
  });
});
