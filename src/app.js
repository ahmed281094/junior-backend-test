import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
// Routes
import authRouter from "./routes/auth.js";
import productsRouter from "./routes/products.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ success: true, uptime: process.uptime() });
});



app.use("/auth", authRouter);
app.use("/products", productsRouter);

// Error handler
app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});
export default app;