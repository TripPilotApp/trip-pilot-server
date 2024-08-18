import mongoose from "mongoose";

export const usersData = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
];
