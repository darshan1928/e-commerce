const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db.js");
const router = require("./routes/index.js");
const PORT = 8080 || process.env.PORT;
dotenv.config();

const app = express();

app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api", router);

connectDb();
app.listen(PORT, () => console.log("server running @", PORT));
