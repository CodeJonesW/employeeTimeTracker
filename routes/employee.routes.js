module.exports = app => {
    const EmployeesController = require("../controllers/employee.controller.js");

    var router = require("express").Router();

    // Create a new Employee
    router.post("/", EmployeesController.create);

    // Retrieve all Employees
    // question mark allows for query key values to be entered like "page=1" seperate multiples by &
    router.get("/?", EmployeesController.findAll);

    // Retrieve a single Employee with id
    router.get("/:id", EmployeesController.findOne);

    // Update a Employee with id
    router.put("/:id", EmployeesController.update);

    // Delete an Employee with id
    router.delete("/:id", EmployeesController.delete);

    // Delete all Employees
    router.delete("/", EmployeesController.deleteAll);

    app.use('/api/employees', router);
};