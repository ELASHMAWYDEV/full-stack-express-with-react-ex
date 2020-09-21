const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/api/hello", (req, res) => {
  res.send(`Hello, I'm the post man. This is your request: ${req.body.post}`);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));