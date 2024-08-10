import mongoose, { Document, Schema } from "mongoose";

export interface ITrip extends Document {
  name: string;
  location: number[];
  users: string[];
  start_date: Date;
  end_date: Date;
  poi: unknown[];
  packing_lists: string[];
  budgets: string[]
}

const tripSchema = new Schema<ITrip>({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: [Number],
    required: true,
    
  },
  users: {
    type: [String],
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  packing_lists: {
    type: [String],
  },
  budgets: {
    type: [String],
  }
});

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
