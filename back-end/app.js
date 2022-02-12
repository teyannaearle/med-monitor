// DEPENDENCIES
const cors = require("cors");
const express = require("express")
const usersController = require("./controllers/usersController")


//CONFIGURATION
// const res = require("express/lib/response")
const app = express()

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

//ROUTES
app.get("/", (req, res) => {
    res.send("Testing Testing 123")
})

app.use("/users", usersController)

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

//EXPORT
module.exports = app