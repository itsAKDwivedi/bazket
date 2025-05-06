import { cwd } from "process";
import { loadEnvConfig } from "@next/env";
import data from "../data";
import Product from "./models/product.models";
import { connectToDatabase } from ".";

loadEnvConfig(cwd());

const main = async () => {
    try {
        const { products } = data

        await connectToDatabase(process.env.MONGO_URI);

        await Product.deleteMany({});
        const createdProducts = await Product.insertMany(products);

        console.log("Products seeded:", createdProducts.length);
        console.log("Database seeding completed successfully.");

        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        throw new Error("Database seeding failed.");
    }
}

main()