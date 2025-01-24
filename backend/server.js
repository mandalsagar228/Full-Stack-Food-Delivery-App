import express from "express"
import cors from "cors"
import Connection from "./config/connectDB.js"
import foodRouter from "./route/foodRoute.js"
// app config

const app= express()
const PORT=4000


// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{res.send("I am a Server.")})

// api endoints
app.use("/api/food",foodRouter)
app.use("/image",express.static("uploads"))



Connection();
app.listen(PORT,()=>{
    console.log(`Server is running at the port no ${PORT}`);
})