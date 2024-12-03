const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const dotenv =  require("dotenv");
const userRoutes = require('./routes/user.routes');
const jobRoutes = require('./routes/job.routes');


const app = express();



app.use(express.json());
app.use(cors());



dotenv.config(); 



PORT = process.env.PORT || 8000;


app.use(express.urlencoded({extended: true}));

app.use("/api/user", userRoutes);
app.use('/', jobRoutes);




connectDB().then(() => {
    app.listen(PORT, (err) => {
        if (err){
            console.error(err);
        }
        console.log(`Server is running successfully on port: ${PORT}`);
    });
}).catch ((err) => {
    console.error(err);
})