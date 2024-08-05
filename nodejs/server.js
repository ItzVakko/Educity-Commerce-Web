const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = 3000;

const Clothes = require("./clothes.js");

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
      const { size, status, category, search } = req.query;
      let filter = {};

      // Filtering by size status and category
      if (size) filter.size = { $in: [size] };
      if (status) filter.status = status;
      if (category) filter.category = category;

      // Adding search filter
      if (search) {
        filter.$or = [
          { brand: new RegExp(`\\b${search}\\b`, "i") },
          { model: new RegExp(`\\b${search}\\b`, "i") },
          { name: new RegExp(`\\b${search}\\b`, "i") },
          { description: new RegExp(`\\b${search}\\b`, "i") },
          { size: new RegExp(`\\b${search}\\b`, "i") },
          { category: new RegExp(`\\b${search}\\b`, "i") },
          { status: new RegExp(`\\b${search}\\b`, "i") },
        ];
      }

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
    console.log("Listening on port " + port);
  });
});
