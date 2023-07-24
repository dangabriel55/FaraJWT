const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');





const authRoute = require('./routes/auth');

dotenv.config();
//Connect DB 
/*   Fara Callback function
mongoose.connect('mongodb+srv://dutu:gP9CFlKvGqOT5O7C@cluster0.3esdceq.mongodb.net/' ,
() => { console.log('Connected to MongoDB') }   );  */

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log('MONGODb Atlas conect without callback on deved21072023 Mongo Server  Organizatie Formula11,dec,2021 loggin cu gmail SvintiuDAn'))
.catch((err) => {console.log(err)});


// Body Parser?? pentru POST request
app.use(express.json());




app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Server deved21 07 2023 is up"))