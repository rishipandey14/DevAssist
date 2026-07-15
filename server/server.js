import dotenv from "dotenv"
dotenv.config();
import { app } from "./app.js";
import { connectDb } from "./src/config/db.js"
import { env } from "./src/config/env.js";

await connectDb();


app.listen(env.PORT, () => {
    console.log(`Server started listening at PORT: ${env.PORT}`);
});