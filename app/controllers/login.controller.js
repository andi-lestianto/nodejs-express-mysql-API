const Login = require("../models/login.model.js");

exports.login = (req, res) => {
    const loginData = new Login({
        email: req.query.email,
        password: req.query.password
    })

    Login.login(loginData, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error Error"
            });

        else res.send(data)
    })
}