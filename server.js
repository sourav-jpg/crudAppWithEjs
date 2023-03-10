//creating http server

const express = require('express');
const dotenv = require('dotenv');
const morgan =  require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080
const connectDb = require("./server/database/connection");

//log requests
app.use(morgan('tiny'));

//connect mongoDb
connectDb();


app.use(
    express.urlencoded({ extended: true })
); 
app.use(express.json());

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine'
app.set("view engine","ejs");
// app.use('views',path.resolve(__dirname,'views/ejs'));

//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`Server is listining on http://localhost:${PORT}`);});

