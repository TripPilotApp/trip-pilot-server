import mongoose, { Document, Schema } from 'mongoose';

export interface ITrip extends Document {
  name: string;
  location: [number, number]; // [longitude, latitude]
  userIds: mongoose.Types.ObjectId[]; // references user
  startDate: Date;
  endDate: Date;
  pointsOfInterest?: IPointOfInterest[];
  packingLists?: IPackingList[];
  budgets?: IBudget[];
}

interface IPointOfInterest {
  id: mongoose.Types.ObjectId;
  name: string;
  date?: Date;
  startTime?: Date;
  endTime?: Date;
  address: string;
  location: [number, number]; // [longitude, latitude]
  duration?: number;
  price?: number;
  visited: boolean;
  stars?: number;
  review?: string;
}

interface IPackingList {
  userId: mongoose.Types.ObjectId;
  packingListName: string;
  items?: IPackingItem[];
}

interface IPackingItem {
  name: string;
  quantity: number;
  packed: boolean;
}

interface IBudget {
  userIds: mongoose.Types.ObjectId[];
  currency: string;
  totalBudget: number;
  totalSpent: number;
  items?: IBudgetItem[];
}

interface IBudgetItem {
  name: string;
  amount: number;
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
  userIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  pointsOfInterest: [{
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: Date,
    startTime: Date,
    endTime: Date,
    address: {
      type: String,
      required: true,
    },
    location: {
      type: [Number],
      required: true,
    },
    duration: Number,
    price: Number,
    visited: {
      type: Boolean,
      required: true,
    },
    stars: Number,
    review: String,
  }],
  packingLists: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    packingListName: {
      type: String,
      required: true, // Required field
    },
    items: [{
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      packed: {
        type: Boolean,
        required: true,
      },
    }],
  }],
  budgets: [{
    userIds: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }],
    currency: {
      type: String,
      required: true,
    },
    totalBudget: {
      type: Number,
      required: true,
    },
    totalSpent: {
      type: Number,
      required: true,
    },
    items: [{
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    }],
  }],
});

const Trip = mongoose.model<ITrip>('Trip', tripSchema);

export default Trip;
