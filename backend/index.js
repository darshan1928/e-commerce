const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const router = require("./routes/index.js");
dotenv.config();
const PORT = 8080 || process.env.PORT;

const app = express();
app.use(cors());
  
app.use(express.json());

app.use("/api", router);

connectDb();
app.listen(PORT, () => console.log("server running @", PORT));

