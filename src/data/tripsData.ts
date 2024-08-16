import mongoose from "mongoose";

export const tripsData = [
  {
    _id: new mongoose.Types.ObjectId(), // Capture _id for referencing
    name: "London Adventure",
    location: [-0.1276, 51.5074], // [longitude, latitude]
    userIds: [], // To be filled later with user _ids
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-10"),
    pointsOfInterest: [
      {
        id: new mongoose.Types.ObjectId(),
        name: "Big Ben",
        address: "London SW1A 0AA, United Kingdom",
        location: [-0.1246, 51.5007],
        visited: false,
      },
    ],
    packingLists: [],
    budgets: [],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Paris Getaway",
    location: [2.3522, 48.8566], // [longitude, latitude]
    userIds: [],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-05"),
    pointsOfInterest: [
      {
        id: new mongoose.Types.ObjectId(),
        name: "Eiffel Tower",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        location: [2.2945, 48.8584],
        visited: false,
      },
    ],
    packingLists: [],
    budgets: [],
  },
];
