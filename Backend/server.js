const express = require('express');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post('/create-order', async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    if (!req.body || !req.body.amount) {
      return res.status(400).send("Bad Request");
    }

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1 
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Something went wrong");
    }
    
    res.json(order);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
