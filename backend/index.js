const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 4000;

// create a function display mongodb data
// const getProducts = async () => {

// }

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Available routes
app.use("/api/product", require("./routes/product"));
app.use("/api/manufacturers", require("./routes/Manufacturer"));
// app.use("/api/user", require("./routes/User"));
app.use("/api/usercart", require("./routes/UserCart"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
