const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require('body-parser');
require("./config/db")
const cors = require('cors');
const path=require('path');
// const {fileURLToPath}=require('url');
// mongoose.connect('mongodb://localhost:27017/mern-ecommerce');

// const app = express();
// const __filename=fileUrlToPath(import.meta.url);
// const __dirname= path.dirname(__filename);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.statics(path.join(__dirname,'./client/build')))
app.get("*", function(req,res){
    res.sendFio le(path.join(__dirname,"./client/build/index.html"));
});


app.use("/customers", require("./routes/customerRoutes"))
app.use("/categories", require("./routes/categoryRoutes"))
app.use("/products", require("./routes/productRoutes"))
app.use("/carts", require("./routes/cartRoutes"))
app.use("/orders", require("./routes/orderRoutes"))


const PORT = process.env.PORT || 4000;
app.listen(PORT);

