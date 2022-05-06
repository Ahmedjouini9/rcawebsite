const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const passportSetup = require("./passport");
const authRoute = require("./routes/api/auth");
const clientRoute = require("./routes/api/clients");
const companyRoute = require("./routes/api/companys");
const postRoute = require("./routes/api/posts");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require('cors');
const path = require('path'); 


const app = express()

const db = "mongodb://localhost:27017/test"

mongoose.connect(db)
        .then(()=>console.log('dataBase Connected'))
        .catch(()=>console.log('dataBase Connection Failed !'))

app.use(
        cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
              );
app.use(express.static(path.join(__dirname, '../public')));        
app.use(passport.initialize());
app.use(passport.session());  
 app.use(
         cors({
                   origin: "http://localhost:3000",
                   methods: "GET,POST,PUT,DELETE",
                   credentials: true,
                 })
               );


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/api/auth", authRoute);
app.use("/api/clients", clientRoute);
app.use("/api/companys", companyRoute);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server is running at port ${port}`))