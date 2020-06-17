const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

let userController = {}

// Create and Save a new Tutorial
userController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bio: req.body.bio ? req.body.bio : false
    };

    // Save Tutorial in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Tutorials from the database.
userController.findAll = (req, res) => {

};

// Find a single Tutorial with an id
userController.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
userController.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
userController.delete = (req, res) => {

};

// Delete all Tutorials from the database.
userController.deleteAll = (req, res) => {

};

// Find all published Tutorials
userController.findAllPublished = (req, res) => {

};

export default userController