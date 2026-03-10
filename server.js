const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

app.get("/config.js", (_req, res) => {
  res.type("application/javascript");
  res.send(`window.APP_CONFIG = { API_URL: "${apiUrl}" };`);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Frontend running on port ${port}`);
});
