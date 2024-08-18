import Trip from "../models/Trip";
import { tripsData } from "../data/tripsData";
import { userProfilesData } from "../data/userProfilesData";

export const seedTrips = async () => {
  // Update userIds in tripsData with the correct references
  tripsData[0].userIds = [
    userProfilesData[0].userId,
    userProfilesData[1].userId,
  ]; // London Adventure
  tripsData[1].userIds = [
    userProfilesData[0].userId,
    userProfilesData[2].userId,
  ]; // Paris Getaway

  await Trip.deleteMany({});
  await Trip.insertMany(tripsData);
  console.log("Trips seeded");
};
