const { users } = require("./users");

// sample data to simulate a database
let games = [
  {
    id: 1,
    title: "Game of Swords",
    description: "An epic fantasy series",
    users: [2, 4, 9, 10],
  },
  {
    id: 2,
    title: "Cardcraft",
    description: "A sandbox video game",
    users: [1, 4, 5, 7, 8, 10],
  },
  {
    id: 3,
    title: "The Legend of Zoey",
    description: "An action-adventure game",
    users: [9],
  },
];

const GameController = {
  getUsersFromGame: (req, res) => {
    const game = games.find((game) => game.id === parseInt(req.params.gameId));

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    const gameUsers = users.filter((user) => game.users.includes(user.id));

    res.json({
      users: gameUsers,
    });
  },
};

module.exports = { GameController };
