const sql = require("./db.js");

const User = function (data) {
    this.userid = data.userid
    this.email = data.email;
    this.password = data.password;
};

User.login = (logindata, result) => {

    sql.query("SELECT * FROM user WHERE email = ? and password = ? ",
        [logindata.email, logindata.password], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.length == 0) {
                result(null, { "message": "Login Gagal" })
                return;
            }

            result(null, { 'data': res, 'message': 'Login Berhasil' });
        });
}

User.createUser = (dataUser, result) => {
    sql.query("INSERT INTO user SET ?", dataUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created User: ", { id: res.insertId, ...dataUser });
        result(null, {
            message: 'user berhasil dibuat',
            data: [{ id: res.insertId, ...dataUser }]
        });
    });
}

User.deleteUser = (userId, result) => {
    console.log(userId)
    sql.query(`DELETE from user where userid = ${userId.userid}`, (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
            return;
        }

        console.log('Deleted user id : ', { id: userId.userid })
        result(null, {
            message: 'user berhasil dihapus'
        })
    })
}

User.updateUser = (dataUser, result) => {
    sql.query('UPDATE user set email = ? , password = ? where userid = ?',
        [dataUser.email, dataUser.password, dataUser.userid], (err, res) => {
            if (err) {
                console.log('error :', err);
                result(err, null);
                return;
            }

            console.log('Updated user : ', { id: dataUser.userid, ...dataUser })
            result(null, {
                message: 'Data berhasil di update'
            })
        })
}

User.getAllUser = (result) => {
    sql.query('Select * from user', (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
            return;
        }

        console.log("datauser : ", res)
        result(null, { data: res });

    })
}


module.exports = User;