const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./database");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/api/users", routes);

app.listen(5000, () => console.log("Server running on port 5000"));
