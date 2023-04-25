const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require('body-parser');
require("./config/db")
const cors = require('cors');
const path=require('path');

// mongoose.connect('mongodb://localhost:27017/mern-ecommerce');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.statics(path.join(__dirname,'./client/build')))



app.use("/customers", require("./routes/customerRoutes"))
app.use("/categories", require("./routes/categoryRoutes"))
app.use("/products", require("./routes/productRoutes"))
app.use("/carts", require("./routes/cartRoutes"))
app.use("/orders", require("./routes/orderRoutes"))
app.use("*", function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/indexedDB.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

