const express = require("express")
const app = express();
const connectDB = require("./db/connect")
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");
const ejs = require("ejs");

dotenv.config();

app.use(express.json());
app.use("/api/v1/books",bookRoutes);

app.set("view engine","ejs");
app.use(express.static("public"));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(process.env.PORT || 8080,()=>{
            console.log("Server connected");
        })
    } catch (error) {
        console.log(error);
    }
}

start()