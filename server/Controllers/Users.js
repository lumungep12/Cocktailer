import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import dotenv from "dotenv/config";

export const signup = async (req, res) => {
	const { firstName, lastName, email, password, confirmPassword } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return res.status(400).json({ message: "User already exists" });

		if (password !== confirmPassword)
			return res.status(400).json({ message: "Passwords dont match" });

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({
			name: `${firstName} ${lastName}`,
			email,
			password: hashedPassword,
		});

		// create token
		const token = jwt.sign(
			{ email: result.email, id: result._id },
			process.env.SECRET,
			{ expiresIn: "1hr" }
		);

		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await User.findOne({ email });

		if (!existingUser)
			return res.status(404).json({ message: "No Such User Exists" });

		const isCorrectPassword = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isCorrectPassword)
			return res.status(400).json({ message: "Invalid Credentials" });

		// create token
		const token = jwt.sign(
			{
				email: existingUser.email,
				id: existingUser._id,
			},
			process.env.SECRET,
			{ expiresIn: "1hr" }
		);
		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};
