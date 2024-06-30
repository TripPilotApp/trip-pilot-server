import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: any, duration?: string | number): string => {
  const jwtSecret = process.env.JWT_SECRET || "";
  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: duration,
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: typeof duration === "number" ? duration * 1000 : 60 * 60 * 1000, // default to 1 hour if string
  });

  return token;
};

const clearToken = (res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};

export { generateToken, clearToken };
