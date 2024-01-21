const { Router } = require("express");
const { UserController } = require("../controllers/users.js");

const router = new Router();

router.get("/api/v1/users", UserController.getUsers);
router.get("/api/v1/users/:userId", UserController.getUser);
router.post("/api/v1/users", UserController.createUser);
router.put("/api/v1/users/:userId", UserController.updateUser);
router.delete("/api/v1/users/:userId", UserController.deleteUser);

module.exports = { router };
