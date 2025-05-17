require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route')
const URI = process.env.MONGODB_URI
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/products", productRoute)



app.get('/',(req, res)=>{
    res.send("hellow server is liva")
});


mongoose.connect(URI)
.then(()=>{
    console.log('connected to database !!');
    app.listen(3000, ()=>{
    console.log("server is runnung on 3000")
});
})
.catch(()=>{console.error("Connection failed:", err.message)})