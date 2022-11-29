const User = require("../models/user.model.js");

exports.login = (req, res) => {
    const loginData = new User({
        email: req.query.email,
        password: req.query.password
    })

    User.login(loginData, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error Error"
            });

        else res.send(data)
    })
}

exports.createUser = (req, res) => {
    const userData = new User({
        email: req.query.email,
        password: req.query.password
    })

    User.createUser(userData, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error Error"
            });

        else res.send(data)
    })
}

exports.deleteUser = (req, res) => {
    const userId = new User({
        userid: req.query.userid
    })

    User.deleteUser(userId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error"
            })
        }

        else res.send(data)
    })
}

exports.updateUser = (req, res) => {
    const dataUser = new User({
        userid: req.query.userid,
        email: req.query.email,
        password: req.query.password
    })

    User.updateUser(dataUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error'
            })
        } else

            res.send(data)
    })
}

exports.getAllUser = (req, res) => {
    User.getAllUser((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error'
            })
        }
        else res.send(data)
    })
}
