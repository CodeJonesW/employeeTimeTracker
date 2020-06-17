// // Requiring our models and passport as we've configured it
// var User = require("./models/User");

// module.exports = function (app) {

//     app.post("/api/users", function (req, res) {
//         User.create({
//             email: req.body.email,
//             password: req.body.password
//         })
//             .then(function () {
//                 res.redirect(307, "/api/login");
//             })
//             .catch(function (err) {
//                 res.status(401).json(err);
//             });
//     });


//     app.get("/api/user/:id", function (req, res) {
//         const requestedUser = await Project.findOne({ where: { title: 'My Title' } });
//         if (requestedUser === null) {
//             console.log('Not found!');
//         } else {
//             console.log(requestedUser instanceof User); // true
//             console.log(requestedUser.email); // 'My Title'
//         }

//     });
// };