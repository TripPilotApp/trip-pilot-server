import UserProfile from "../models/UserProfile";
import { userProfilesData } from "../data/userProfilesData";
import { hashPassword } from "../utils/hashPassword";

export const seedUserProfiles = async () => {
    await UserProfile.deleteMany({});
    await UserProfile.insertMany(userProfilesData);
    console.log("User profiles seeded");
};
