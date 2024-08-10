import { Request, Response } from "express";
import Trip from "../models/Trip";
import { tripSchema } from "../validation/validator";

import { z } from "zod";

const createTrip = async (req: Request, res: Response) => {
  try {
    const parsedBody = tripSchema.parse(req.body);

    const {
      name,
      location,
      users,
      start_date,
      end_date,

      packing_lists,
      budgets,
    } = parsedBody;

    const trip = await Trip.create({
      name: name,
      location,
      users,
      start_date,
      end_date,

      packing_lists,
      budgets,
    });
    if (trip) {
      return res.status(201).json({
        id: trip._id,
        name: trip.name,
      });
    } else {
      return res
        .status(400)
        .json({ message: "An error occurred in creating the trip" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error in registerUser:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTrip =  async (req: Request, res: Response) => {
  try {
    const tripList = await Trip.find({});
    return res.status(200).json(tripList)
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
  }
};

export { createTrip, getTrip };
