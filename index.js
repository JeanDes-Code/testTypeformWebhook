const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook Data:", req.body);
  console.log("Answers :", req.body.answers);
  console.log("form_response :", req.body.form_response);
  console.log("hidden field :", req.body.form_response.hidden);
  res.status(200).send("Data received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
