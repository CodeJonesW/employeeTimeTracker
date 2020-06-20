module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("Employee", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        timelyNess: {
            type: Sequelize.INTEGER
        }

    });

    return Employee;
};