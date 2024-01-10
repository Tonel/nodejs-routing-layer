const { Router } = require("express");
const { GameController } = require("../controllers/games.js");

const router = new Router();

router.get("/api/v1/games/:gameId/users", GameController.getUsersFromGame);

module.exports = { router };
