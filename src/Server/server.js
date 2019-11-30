const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser'); //to use post request
const cors = require('cors');
const mongoose = require ('mongoose'); // add for mongoDB (lab8) allows to connect to database       (10)

//add the following bellow for (lab8) (10)
const mongoDB = 'mongodb+srv://admin:admin@cluster0-t58dy.mongodb.net/carsDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true}); //connect to the database using this parser

//----------------------------------------------------------------------------------------------
//need to input code below to allow cross talk : CORS
//must run command (npm install cors)
//----------------------------------------------------------------------------------------------

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
//-------------------------------------------------------------------------------------------------

// to start install (npm install express) 
// node ServiceWorkerRegistration.js in terminal below to run code*

//NEEDED FOR POST REQUEST BELOW:(parses the body of the html to pass to another page)

// parse application/x-www-forum-urlencoded
app.use(bodyParser.urlencoded({ extended:false }))
//parse application/json
app.use(bodyParser.json())
//---------------------------------------------------------------------------------------------------
//(10) creating a FOLDER for your DATABASE to store into mongoDB!!
    //AKA WRITING DATA

const Schema = mongoose.Schema;

const carSchema = new Schema({
    name:String,
    released:String,
    information:String,
    picture:String
})

const CarModel = mongoose.model('car',carSchema) //creates a folder called car that links carschema/documents to it



//---------------------------------------------------------------------------------------------------
//(1)SENDS BACK A BASIC HELLO WORLD RESPONSE
app.get('/', (req, res) => res.send('Hello World!'))
//---------------------------------------------------------------------------------------------------
//(2)SENDS BACK A BASIC HELLO RESPONSE WHEN ACCESS PAGE 2
app.get('/differenturl', (req, res) => res.send('Hello from page 2!'))

//---------------------------------------------------------------------------------------------------
//(3)RETURNING THE URL IN THE PAGE AND IN CONSOLE WHEN RUN
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})
//---------------------------------------------------------------------------------------------------
//(4)TO RETURN A HTML PAGE USING PAGE NAME 
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})
//---------------------------------------------------------------------------------------------------
/////SERVER SIDE DELETE///////
//---------------------------------------------------------------------------------------------------

app.delete('/api/cars/:id',(req,res)=>{
    console.log(req.params.id); //log id to screen

    CarModel.deleteOne({_id:req.params.id},(error,data) =>{ //u pick here which one you want to delete! aka "_id"
        if(error)
        res.json(error);
           res.json(data);

     })
})//listen for an id



//---------------------------------------------------------------------------------------------------
//(10)
// http://localhost:4000/api/cars/5db96045f733220998a9b621  <-- the long code got from the mongoDB site which is from  the created car from client in collections

//when passes up an ID . it pulls out id and finds record with same ID.once found returns on json(data)
app.get('/api/cars/:id', (req,res) => {

console.log(req.params.id);

CarModel.findById(req.params.id,(error,data)=>{
    res.json(data);

    })
})

//----------------------------------------------------------------------------------------------------
//needed for edit(server side)

app.put('/api/cars/:id', (req,res)=>{

    console.log("edit: " + req.params.id);

    //call back function
    CarModel.findByIdAndUpdate(req.params.id,
         req.body,
        { new: true},
        (error,data)=>{
            res.json(data);
        })
})


//---------------------------------------------------------------------------------------------------
//(10)
///////READING FROM MONGODB///////

app.get('/api/cars', (req, res) => {

    CarModel.find((error,data)=>{

        res.json({cars:data}) //now calling the data to have an array called cars in json 
    })



})
    
        
//---------------------------------------------------------------------------------------------------
//(9) sending data up from the add.js page to the server.
//(10) need this for code below to create up to mongoDB
//AKA WRITING DATA

app.post('/api/cars',(req,res) => {
    console.log('Car Recieved');
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.released);
    console.log(req.body.information);
    console.log(req.body.picture);


//(10) allows the data to be created which gets passed up to mongoDB
CarModel.create({
    name: req.body.name,
    released: req.body.released,
    information: req.body.information,
    picture: req.body.picture,
});
})
//---------------------------------------------------------------------------------------------------
//(6)RETURNING THE URL IN THE PAGE AND THE NAME INPUTTED TO FORUM USING (GET REQUEST!)
    app.get('/name', (req, res) => {
        console.log(req.query.fname) //outputs to console terminal below (fname)
        console.log(req.query.lname) //outputs to console terminal below (lname)
    res.send('working GET REQUEST ' + req.query.fname + ' ' + req.query.lname ); //displays to website screen 
    })
    
//---------------------------------------------------------------------------------------------------
//(7)RETURNING THE URL IN THE PAGE USING A (POST REQUEST!) - to use post (npm install body-parser)
app.post('/name', (req, res) => {
    console.log(req.body.fname) //outputs to console terminal below (fname)
    console.log(req.body.lname) //outputs to console terminal below (lname)
res.send('working POST REQUEST  ' + req.body.fname + ' ' + req.body.lname ); //displays to website screen 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
