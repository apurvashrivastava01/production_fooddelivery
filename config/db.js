const mongoose =require('mongoose')
const DB =process.env.MONGO_URL;
mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message))
