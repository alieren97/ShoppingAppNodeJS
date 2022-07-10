
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/category", categoryRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("DB connected succesfully!!"))
    .catch((err)=>{console.log(err)})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Backend server running")
})