import express from "express";

const app = express();

const port = 3000;
import mongoose from "mongoose";
import { SetglobalMiddleware } from "./api/middleware/global-middleware.js";

mongoose.connect("mongodb://localhost:27017/testing12", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Register global middleware
SetglobalMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
