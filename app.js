const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
const Model = require("./Model")

dotenv.config({path:'./config/config.env'})

app.use(express.static(path.join(__dirname,"public")))

app.use(express.json())


app.use("/index",(req,res,next)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get("/data",async (req,res,next)=>{
    try {
        const data = await Model.find();
        res.status(200).json(data)
    } catch (error) {
        next(err)
    }
    
    
})



app.use((err,req,res,next)=>{
    console.log(err)
    res.send("<h1>404 page not found</h1>")
})

const PORT = process.env.PORT || 5000 


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGOOSE_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then((conn)=>{
    app.listen(PORT,console.log(`Server running in  ${PORT} `))
    console.log(`MongoDB Connected ${conn.connection.host}`);
})