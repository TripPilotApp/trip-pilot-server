import { tripsData } from "./tripsData";
import { usersData } from "./usersData";

export const userProfilesData = [
  {
    userId: usersData[0]._id,
    localCurrencyCode: "USD",
    tripIds: [tripsData[0]._id, tripsData[1]._id], // References to the trips
  },
  {
    userId: usersData[1]._id,
    localCurrencyCode: "GBP",
    tripIds: [tripsData[0]._id], // References to the London trip
  },
  {
    userId: usersData[2]._id,
    localCurrencyCode: "EUR",
    tripIds: [tripsData[1]._id], // References to the Paris trip
  },
];
