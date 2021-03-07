const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./api/config/db");

const speedRoute = require("./api/routes/speed");

dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("api working");
});

app.use("/api/speed", speedRoute);

const PORT = process.env.PORT || 3000;
// const MODE = process.env.NODE_ENV;
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
