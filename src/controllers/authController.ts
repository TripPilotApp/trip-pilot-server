import { Request, Response } from "express";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";
import { loginSchema, userSchema } from "../validation/validator";
import { z } from "zod";

const registerUser = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const parsedBody = userSchema.parse(req.body);

    const { name, email, password } = parsedBody;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "The user email already exists" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      const token = generateToken(res, user._id);
      return res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      return res.status(400).json({ message: "An error occurred in creating the user" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error in registerUser:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const authenticateUser = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const parsedBody = loginSchema.parse(req.body);

    const { email, password, rememberMe } = parsedBody;
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      const tokenDuration = rememberMe ? "7d" : "1h"; // 7 days if "Remember me" is checked, otherwise 1 hour
      const token = generateToken(res, user._id, tokenDuration);
      return res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      return res.status(401).json({ message: "User not found/password incorrect" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error in authenticateUser:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const logoutUser = (_req: Request, res: Response) => {
  try {
    clearToken(res);
    return res.status(200).json({ message: "User logged out" });
  } catch (error) {
    console.error("Error in logoutUser:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { registerUser, authenticateUser, logoutUser };
