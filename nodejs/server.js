const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./AuthSystem/auth");
const Clothes = require("./clothes");

dotenv.config();

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose
  .connect("mongodb://127.0.0.1:27017/commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use("/api/auth", authRoutes);

  server.get("/api/clothes", async (req, res) => {
    try {
      const { size, category, search, sale, new: isNew } = req.query;
      let filter = {};

      if (size) filter.size = { $in: [size] };
      if (category) filter.category = category;

      if (search) {
        filter.$or = [
          { brand: new RegExp(`\\b${search}\\b`, "i") },
          { model: new RegExp(`\\b${search}\\b`, "i") },
        ];
      }

      if (sale) {
        filter.saleAmount = { $gt: 0 };
      }

      if (isNew) {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        filter.createdAt = { $gte: oneWeekAgo };
      }

      const clothes = await Clothes.find(filter);
      res.json(clothes);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
    }
  });

  server.post("/api/clothes", async (req, res) => {
    try {
      const newClothingItem = new Clothes({
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        currency: req.body.currency,
        size: req.body.size,
        category: req.body.category,
        status: req.body.status,
        saleAmount: req.body.saleAmount,
      });

      const savedItem = await newClothingItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      console.error("Error creating document:", error);
      res.status(500).send("Error creating document");
    }
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) {
      console.error("Server error:", err);
      throw err;
    }
    console.log(`Listening on port ${port}`);
  });
});
