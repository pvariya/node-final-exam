const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/last-exam");
        console.log("connect to the database");
    } catch (error) {
        console.log(error);
    }
};



app.use('/user', userRouter)
app.use("/task", taskRoute)

app.listen(8090, () => {
    console.log("Server is running on port 8090");
    connectDb();
})