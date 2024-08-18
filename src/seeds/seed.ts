import mongoose from "mongoose";
import { seedUsers } from "./seedUsers";
import { seedUserProfiles } from "./seedUserProfiles";
import { seedTrips } from "./seedTrips";
import { config } from "dotenv";
config();

const runSeeds = async () => {
  // Connect to the MongoDB database
  const MONGO_DB_URI = process.env.MONGO_DB_URI;
  await mongoose.connect(MONGO_DB_URI);

  try {
    await seedUsers();
    await seedTrips(); // Seed trips before profiles to ensure tripIds exist
    await seedUserProfiles();
    console.log("All data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await mongoose.connection.close();
  }
};

runSeeds();