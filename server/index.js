import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import cors from "cors";
import UserRoutes from "./Routes/Users.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", UserRoutes);

// database setup
const CONN_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
	.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database Connected Successfully"))
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
	)
	.catch((error) => console.log(`An Error Occurred --> ${error}`));
