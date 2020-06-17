module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("Employee", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        happy: {
            type: Sequelize.BOOLEAN
        }
    });

    return Employee;
};