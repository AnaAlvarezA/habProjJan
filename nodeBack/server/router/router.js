"use strict";

const verifySignUp = require("./verifySignUp");
const authJwt = require("./verifyJwtToken");

module.exports = function(app) {
    const controller = require("../controller/controller.js");

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup", [
            verifySignUp.checkDuplicateUserNameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);

    app.get("/api/test/client", [authJwt.verifyToken], controller.userContent);

    app.get("/api/test/provider", [authJwt.verifyToken, authJwt.isProveedorOrAdmin],
        controller.userContent);



    app.post("/api/createservice", controller.createService);
    app.get("/api/allservices", controller.serviceAllContent);
    app.get("/api/findservice/:id", controller.findService);
    app.delete("/api/deleteservice/:id", controller.deleteService);
};