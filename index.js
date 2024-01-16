const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook Data:", req.body);
  console.log("response fields email:", req.body.response_fields.email);
  res.status(200).send("Data received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
