module.exports = app => {
    const UsersController = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", UsersController.create);

    // Retrieve all UsersController
    router.get("/", UsersController.findAll);

    // Retrieve all published UsersController
    router.get("/published", UsersController.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", UsersController.findOne);

    // Update a Tutorial with id
    router.put("/:id", UsersController.update);

    // Delete a Tutorial with id
    router.delete("/:id", UsersController.delete);

    // Create a new Tutorial
    router.delete("/", UsersController.deleteAll);

    app.use('/api/users', router);
};