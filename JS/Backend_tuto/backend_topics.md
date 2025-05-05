//NEED TO KNOw ALL OF THIS IN BACKEND

- basic server setup using express
-  routes&routes types
-  mvc architecture
-  mongoose : schema : types : model
-  controllers
-  services
-  template engine | views
-  express.static() to manage sttatic files
-  middle wares
-  custom middlewares
-  error handling
    

//backend


//       index.js
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

//app.js
const express = require('express');
const morgan = require('morgan');

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
//routes
app.use('/users' , usersRouter);

//ejs -> embedded java script


//routes creation

const express = require('express')
;
const usersRouter = express.Router();

//handlers
usersRouter.get('/all',(req,res)=>{
    res.status(401).json();
})






