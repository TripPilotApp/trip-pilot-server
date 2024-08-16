import mongoose, { Document, Schema } from "mongoose";

export interface IUserProfile extends Document {
  userId: mongoose.Types.ObjectId;
  localCurrencyCode: string;
  tripIds: mongoose.Types.ObjectId[];
}

const userProfileSchema = new Schema<IUserProfile>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  localCurrencyCode: {
    type: String,
    required: true,
  },
  tripIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip',
  }],
});

const UserProfile = mongoose.model<IUserProfile>("UserProfile", userProfileSchema);

export default UserProfile;