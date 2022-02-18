// DEPENDENCIES
const cors = require("cors");
const express = require("express")
const middleware = require("./middleware")
const usersController = require("./controllers/usersController")

//CONFIGURATION
// const res = require("express/lib/response")
const app = express()

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(middleware.decodeToken)

//ROUTES
app.get("/", (req, res) => {
    res.send("Testing Testing 123")
})

app.use("/users", usersController)

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");


/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

//EXPORT
module.exports = app