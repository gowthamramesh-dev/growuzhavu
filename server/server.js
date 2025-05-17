const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const {
  errorHandler,
  notFound,
} = require("../server/src/middleware/errorMiddleware");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./src/routes/auth.routes");
dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api/farmers", authRoutes);
// app.use("/api/users", require("./src/routes/userRoute"));

app.use(errorHandler);
app.use(notFound);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
