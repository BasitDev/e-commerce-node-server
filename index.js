const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//enviroment variable
dotenv.config();

//for data in json format
app.use(express.json());

//Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected successfully'))
    .catch(err => console.log(err));


//Server Connection
app.listen(process.env.PORT || 5000, () => {
    console.log('Server Connected Successfully on port ' + process.env.PORT);
});