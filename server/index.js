import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// database setup
const CONN_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;

// connecting to database
// mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
// 	console.log("Database Connected Successfully")
// );

mongoose
	.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
	)
	.catch((err) => console.log(err));
