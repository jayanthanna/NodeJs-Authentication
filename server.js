require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/auth-routes.js");
const homeRoute = require("./routes/home-route.js");
const adminRoute = require("./routes/admin-route.js");
const uploadImageRoutes = require("./routes/image-routes.js");
const connectToDB = require("./database/db.js");

connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoute);
app.use("/api/admin", adminRoute);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
