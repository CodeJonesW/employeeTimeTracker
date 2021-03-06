const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    console.log("created", req.body)
    if (!req.body.firstName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an Employee
    const employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        timelyNess: req.body.timelyNess ? req.body.timelyNess : 10
    };

    // Save Employee in the database
    Employee.create(employee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    console.log(req.query)
    const { page, size, firstName } = req.query;

    var condition = firstName ? { firstName: { [Op.like]: `%${firstName}%` } } : null;

    const { limit, offset } = getPagination(page, size);

    Employee.findAndCountAll({ where: condition, limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Employee with id=" + id
            });
        });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Employee was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Employee was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Employee with id=" + id
            });
        });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
    Employee.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Employees were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Employees."
            });
        });
};



// Pagination

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, tutorials, totalPages, currentPage };
};

