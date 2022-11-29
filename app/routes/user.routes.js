module.exports = app => {
    const User = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/login", User.login);

    router.post("/createuser", User.createUser);

    router.delete("/delete", User.deleteUser);

    router.put("/edit", User.updateUser)

    router.get("/getall", User.getAllUser)

    app.use('/api/user', router);

}