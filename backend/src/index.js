import { app } from "./app.js"
import dotenv from "dotenv"
import connectDB from "./databse/index.js"

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5001, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    }).catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
