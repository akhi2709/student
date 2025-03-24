const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// MongoDB Connection
const MONGO_URI = "your_mongodb_connection_string_here";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use("/api/users", routes);

app.listen(5000, () => console.log("Server running on port 5000"));
