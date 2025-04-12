require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');

// import routes
const authRoute = require("./Routes/AuthRoute");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ MIDDLEWARES - these must come before routes
app.use(cors({
  origin: "http://localhost:3000", // adjust as needed for your frontend
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoute); // <--- mount auth routes here

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching positions");
  }
});

app.post("/newOrder", async (req, res) => {
  console.log("📩 Received new order:", req.body);

  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).send("Missing required order fields");
  }

  try {
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.send("✅ Order saved");
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).send("Error saving order");
  }
});

// ✅ DB & SERVER START
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
