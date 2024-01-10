const { Router } = require("express");
const { GreetingController } = require("../controllers/greetings.js");

const router = new Router();

router.get("/api/v1/greetings/hello-world", GreetingController.helloWorld);
router.get("/api/v1/greetings/users/:userId", GreetingController.helloUser);

module.exports = { router };
