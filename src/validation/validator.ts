import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  rememberMe: z.boolean().optional(),
});

const tripSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  location: z.number().array(),
  users:z.string().array(),
  start_date:z.string().transform(x => new Date(x)),
  end_date:z.string().transform(x => new Date(x)), 
  // poi:z.number().array(),
  packing_lists:z.string().array(),
  budgets: z.string().array(),
});git c


export { userSchema, loginSchema, tripSchema };