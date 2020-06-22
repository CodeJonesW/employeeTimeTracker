const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index")
const app = express();

// remove the force true if you want to keep data in DB. force true causes a full DB drop
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple intro route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Sequelize Node application for storing Users." });
});

//Require Routes
require("./routes/employee.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//
// todo
// create new model
// add to sequelize db 
// create controller
// create routes