const express = require("express");
const app = express();

app.use(express.json());

let orders = [
  { id: 1, item: "Laptop" },
  { id: 2, item: "Phone" }
];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ message: "Order created", order });
});

app.listen(3001, () => {
  console.log("Order service running on port 3001");
});
