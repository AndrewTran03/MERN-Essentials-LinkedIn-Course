import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/SoccerRoutes";
import cors from "cors";

/*
Notes:
-Express: Web Server
-MongoDB: NoSQL Database (contains Objects -> Collections -> Documents -> Data)

C (Create): Make something (HTTP POST)
R (Read): Get something (HTTP GET)
U (Update): Change Something (HTTP PUT)
D (Delete): Remove Something (HTTP DELETE)
*/

const app = express();
const PORT_NUM = 4000;

//MongooseDB Connection
mongoose.Promise = global.Promise;
/*
mongoose.connect("mongodb://localhost/soccerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/

mongoose.connect("mongodb://localhost:4000", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//To avoid depreciation warnings... *suggested by complier*)
mongoose.set("strictQuery", false);

//Body-Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS Setup
app.use(cors());

//Routes/POST ENDPOINT
routes(app);

app.get("/", (req, res) => {
    res.send(`Our Soccer Application is running on PORT ${PORT_NUM}`);
});

app.listen(PORT_NUM, (err) => {
    if(err) {
        console.error("Error in server setup");
    }
    else {
        console.log(`Your Soccer Server is running on PORT ${PORT_NUM}`);
    }
});