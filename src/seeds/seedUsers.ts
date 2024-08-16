import User from "../models/User";
import { usersData } from "../data/usersData";
import { hashPassword } from "../utils/hashPassword";

export const seedUsers = async () => {
    try {
        await User.deleteMany({});
        
        const samplePassword = process.env.SAMPLE_DATA_PASSWORD || "defaultPassword";
        console.log(samplePassword)

        const hashedUsers = await Promise.all(
            usersData.map(async (user) => {
                const hashedPassword = await hashPassword(samplePassword);
                return { ...user, password: hashedPassword };
            })
        );

        await User.insertMany(hashedUsers);
        console.log("Users seeded");   
    } catch (error) {
        console.error("Error seeding users: ", error);
    }
};
