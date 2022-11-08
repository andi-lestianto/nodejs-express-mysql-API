const sql = require("./db.js");

const Login = function (logindata) {
    this.email = logindata.email;
    this.password = logindata.password;
};


Login.login = (logindata, result) => {

    const ab = 'a'

    if (logindata.email != 'emailku@email.com' || logindata.password != 'urpassword') {
        result(null, { 'message': 'login gagal' })
        return;
    }

    // if (ab == 'a') {
    //     result(null, 'Login gagal')
    //     return;
    // }

    // const email = logindata.email != 'emailku@email.com'
    // result(null, { email })
    result(null, { 'message': 'login berhasil' })
}

module.exports = Login;