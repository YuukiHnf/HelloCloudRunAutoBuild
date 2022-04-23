const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello GCP Cloud Run with auto build!!!");
});

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log("Listening on port", port);
});
