const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;


app.use(express.json());


const Routes = require("./routes/routes");


app.use("/api/v1", Routes);



app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})


const dbConnect = require("./config/database");
dbConnect();


app.get("/", (req,res) => {
    res.send(`<h1>Library</h1>`);
})