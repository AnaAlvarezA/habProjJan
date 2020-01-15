"use strict";

const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
const db = require("../config/db.config.js");
const User = db.user;

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            auth: false,
            message: "No token provided."
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Fail to Authentication. Error -> " + err
            });
        }
        req.userId = decoded.id;
        next();
    });
};


const isProveedorOrAdmin = (req, res, next) => {
    User.findById(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name.toUpperCase() === "PROVEEDOR") {
                    next();
                    return;
                }


            }

            res.status(403).send("Require Proveedor or Admin Roles!");
        });
    });
};

const authJwt = {};
authJwt.verifyToken = verifyToken;

authJwt.isProveedorOrAdmin = isProveedorOrAdmin;

module.exports = authJwt;