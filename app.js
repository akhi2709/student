const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// MongoDB Connection
const MONGO_URI = "mongodb://localhost:27017/yourDatabaseName"; 

mongoose.connect(MONGO_URI, {
  
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use("/api/users", routes);

app.listen(8000, () => console.log("Server running on port 7000"));
