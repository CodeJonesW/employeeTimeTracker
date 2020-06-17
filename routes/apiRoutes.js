
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/users", function (req, res) {
        // res.json(users);
    });

    app.get("/api/user:id", function (req, res) {
        // res.json(user);
    });

    app.post("/api/tables", function (req, res) {
        // res.json(user);
    });

}
