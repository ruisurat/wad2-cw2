const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Staff = require("../models/StaffModel");

exports.login = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    
    try {
        Staff.lookup(username, function(err, user) {
            if (err) {
                console.log("Error finding user", err);
                return res.status(401).send();
            }

            if (!user) {
                console.log("User ", username, " doesn't exist");
                return res.redirect('/login');
            }

            bcrypt.compare(password, user.password, (err, result) => {
                if (result == false) return res.redirect('/login');

                const payload = { username: user.username};
                const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 1500});
                console.log(accessToken + " : logged in as " + payload)
                res.cookie("jwt", accessToken).redirect('/staffDashboard');
            });
        });
    } catch (err) {
        console.log(err);
    }
}

exports.verify = function (req, res, next) {
    let accessToken = req.cookies.jwt;
    if (!accessToken) {
        return res.redirect("/");
    }
    let payload;
    try {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (e) {
        //if an error occured return request unauthorized error
        res.status(401).send();
    }
};

exports.logout = function(req, res) {
    res
        .clearCookie("jwt")
        .status(200)
        .redirect("/");
}